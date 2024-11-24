'use client'

import { ThemeProvider } from 'styled-components'
import { Provider, createStore } from 'jotai'
import StyledComponentsRegistry from '@/lib/registry'
import * as S from '@/styles/globalStyles'
import theme from '@/styles/theme'

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  const store = createStore()

  return (
    <StyledComponentsRegistry>
      <S.GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <S.Container>{children}</S.Container>
        </ThemeProvider>
      </Provider>
    </StyledComponentsRegistry>
  )
}

export default StylesProvider
