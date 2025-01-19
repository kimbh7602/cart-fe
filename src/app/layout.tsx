import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import StylesProvider from '@/styles/stylesProvider'
import Script from 'next/script'
import { SHARED_IMAGE_URL } from '@/constants'

export const metadata: Metadata = {
  title: '까담 - 까먹지 말고 담자',
  description: '까담 - 까먹지 말고 담자',
  twitter: {
    card: 'summary_large_image',
    title: '까담 - 까먹지 말고 담자',
    description: '공유된 장바구니를 확인해보세요!',
    // creator: '@kka',
    images: [SHARED_IMAGE_URL],
  },
}

declare global {
  interface Window {
    Kakao: any
  }
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='ko'>
      <body>
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
      </body>
      <Script src='https://developers.kakao.com/sdk/js/kakao.js' strategy='afterInteractive' />
    </html>
  )
}

export default RootLayout
