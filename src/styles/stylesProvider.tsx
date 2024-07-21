'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';

export default function StylesProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
