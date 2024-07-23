import React from 'react'
import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { getServerUser, isServerUserAdmin } from '@/app/actions'
import { Footer, Navbar } from '@/components'
import { SessionProvider } from '@/components'
import { useTranslation } from '@/hooks'

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
  const { t } = useTranslation()
  const user = await getServerUser()
  const isAdmin = await isServerUserAdmin()
  return (
    <html lang="en">
      <body className={inter.className} style={{ width: '-webkit-fill-available' }}>
        <SessionProvider serverSessionUser={user} isServerUserAdmin={isAdmin}>
          <Navbar loginTxt={t('Navbar.SignIn')} logoutTxt={t('Navbar.SignOut')} />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
