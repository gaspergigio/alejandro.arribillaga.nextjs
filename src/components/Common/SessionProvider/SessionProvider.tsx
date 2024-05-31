'use client'
import { createContext, useState } from 'react'

import { Session } from '@supabase/supabase-js'

type SessionContextType = {
  session: Session | null
  setSession: (session: Session | null) => void
}

export const SessionContext = createContext<SessionContextType | null>(null)

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
}
