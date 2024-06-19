'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

import { isUserAdmin } from '@/server'
import { User } from '@supabase/supabase-js'

type SessionContextType = {
  sessionUser: User | null
  setSessionUser: (session: User | null) => void
  isAdmin: boolean
  setIsAdmin: (session: boolean) => void
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined)

export const useSessionContext = () => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider')
  }
  return context
}

export default function SessionProvider({
  serverSessionUser,
  isServerUserAdmin,
  children,
}: {
  serverSessionUser: User | null
  isServerUserAdmin: boolean
  children: React.ReactNode
}) {
  const [sessionUser, setSessionUser] = useState<User | null>(serverSessionUser)
  const [isAdmin, setIsAdmin] = useState(isServerUserAdmin)

  useEffect(() => {
    async function fetchData() {
      const admin = await isUserAdmin()
      setIsAdmin(admin)
    }

    if (sessionUser) {
      fetchData()
    } else {
      setIsAdmin(false)
    }
  }, [sessionUser])

  return (
    <SessionContext.Provider value={{ sessionUser, setSessionUser, isAdmin, setIsAdmin }}>
      {children}
    </SessionContext.Provider>
  )
}
