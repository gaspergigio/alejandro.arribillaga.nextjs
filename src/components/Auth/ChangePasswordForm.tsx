'use client'
import React from 'react'
import { useState } from 'react'
import { updateUserPassword } from '@/server'
import { Button, Input, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

export default function ChangePasswordForm({ onClose }: { onClose?: () => void }) {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess(false)

    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      setIsLoading(false)
      return
    }

    // Validate password length
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters')
      setIsLoading(false)
      return
    }

    try {
      const { error } = await updateUserPassword(newPassword)

      if (error) {
        setError(error.message)
        setIsLoading(false)
        return
      }

      setSuccess(true)
      setIsLoading(false)
      // Auto close after successful password change
      setTimeout(() => {
        if (onClose) onClose()
      }, 2000)
    } catch (err: unknown) {
      const error = err as { message?: string }
      setError(error.message || 'An error occurred while changing password')
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full bg-white dark:bg-secondary">
      <CardHeader className="justify-center">
        <h2 className="text-xl font-semibold text-zinc-500 dark:text-white">Change Password</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        {error && <div className="text-danger mb-4">{error}</div>}
        {success && <div className="text-success mb-4">Password changed successfully!</div>}
        <form onSubmit={handleChangePassword}>
          <div className="flex flex-col gap-4">
            <Input
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <Input
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            color="primary"
            className="w-full mt-4 hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20"
            isLoading={isLoading}
            disabled={isLoading}>
            Change Password
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
