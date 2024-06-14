'use client'
import { createContext, useContext, useEffect, useState } from 'react'

import { isUserAdmin } from '@/server'
import { Session } from '@supabase/supabase-js'

type SessionContextType = {
  session: Session | null
  setSession: (session: Session | null) => void
  isAdmin: boolean
  setIsAdmin: (session: boolean) => void
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useSessionContext = () => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider')
  }
  return context
}

export default function SessionProvider({
  serverSession,
  isServerUserAdmin,
  children,
}: {
  serverSession: Session | null
  isServerUserAdmin: boolean
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session | null>(serverSession)
  const [isAdmin, setIsAdmin] = useState(isServerUserAdmin)

  useEffect(() => {
    async function fetchData() {
      const admin = await isUserAdmin()
      setIsAdmin(admin)
    }

    if (session) {
      fetchData()
    } else {
      setIsAdmin(false)
    }
  }, [session])

  return (
    <SessionContext.Provider value={{ session, setSession, isAdmin, setIsAdmin }}>{children}</SessionContext.Provider>
  )
}
