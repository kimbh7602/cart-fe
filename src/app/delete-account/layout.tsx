import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WriteHeader from '@/components/layout/WriteHeader'

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
      <WriteHeader />
      {children}
    </>
  )
}

export default RootLayout
