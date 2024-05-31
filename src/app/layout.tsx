import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Footer, Navbar } from '@/components'
import { SessionProvider } from '@/components'

const inter = Inter({ subsets: ['latin'] })

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Frontend Developer in React | Alejandro Arribillaga',
  description:
    "Welcome to Alejandro Arribillaga's website! As a frontend developer specialized in React, I'm here to provide innovative digital solutions and exceptional user experiences. Explore my portfolio and discover how I can help take your project to the next level.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
