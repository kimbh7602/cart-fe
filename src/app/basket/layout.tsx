import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '까담 - 까먹지 말고 담자',
  description: '까담 - 까먹지 말고 담자',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return <>{children}</>
}
