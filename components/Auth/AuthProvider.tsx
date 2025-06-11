'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { type Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

interface AuthContextType {
  session: Session | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ session: null, loading: true })

interface AuthProviderProps {
  children: React.ReactNode
  initialSession?: Session | null
}

export const AuthProvider = ({ children, initialSession }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(initialSession ?? null)
  const [loading, setLoading] = useState(!initialSession)

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setLoading(false)
    })
    if (!initialSession) {
      supabase.auth.getSession().then(({ data }) => {
        setSession(data.session)
        setLoading(false)
      })
    }
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [initialSession])

  return <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
