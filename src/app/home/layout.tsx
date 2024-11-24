import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StylesProvider from '@/styles/stylesProvider'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '까담 - 까먹지 말고 담자',
  description: '까담 - 까먹지 말고 담자',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default RootLayout
