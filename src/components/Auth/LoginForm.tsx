'use client'
import React from 'react'
import { useState } from 'react'
import { signInWithEmail } from '@/server'
import { useSessionContext } from '@/components'
import { Button, Input, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

export default function LoginForm({ onClose }: { onClose?: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { setSessionUser } = useSessionContext()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const { user, error } = await signInWithEmail(email, password)

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    setSessionUser(user)
    setIsLoading(false)
    if (onClose) onClose()
  }

  return (
    <Card className="w-full bg-white dark:bg-secondary">
      <CardHeader className="justify-center">
        <h2 className="text-xl font-semibold text-zinc-500 dark:text-white">Login</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        {error && <div className="text-danger mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4">
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            color="primary"
            className="w-full mt-4 hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20"
            isLoading={isLoading}
            disabled={isLoading}>
            Sign In
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
