import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import StylesProvider from '@/styles/stylesProvider'
import SessionProviderClientComponent from '@/components/common/Session/SessionProviderClientComponent'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: '까담 - 까먹지 말고 담자',
  description: '까담 - 까먹지 말고 담자',
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await getServerSession()

  return (
    <html lang='ko'>
      <body>
        <SessionProviderClientComponent session={session}>
          <StylesProvider>
            {children}
            <ToastContainer
              position='top-center'
              autoClose={1000}
              hideProgressBar
              closeOnClick
              draggable
              theme='light'
              closeButton={false}
              limit={1}
            />
          </StylesProvider>
        </SessionProviderClientComponent>
      </body>
    </html>
  )
}

export default RootLayout
