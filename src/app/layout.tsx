import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { getServerUser, isServerUserAdmin } from '@/app/actions'
import { Footer, Navbar } from '@/components'
import { SessionProvider } from '@/components'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Developer in React | Alejandro Arribillaga',
  description:
    "Welcome to Alejandro Arribillaga's website! As a frontend developer specialized in React, I'm here to provide innovative digital solutions and exceptional user experiences. Explore my portfolio and discover how I can help take your project to the next level.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getServerUser()
  const isAdmin = await isServerUserAdmin()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider serverSessionUser={user} isServerUserAdmin={isAdmin}>
          <Navbar />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
