'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

import Cookies from 'js-cookie'

type UseCookieReturnType = [string, (newValue: string) => void]

const useCookie = (key: string, initialValue: string, shouldRefresh?: boolean): UseCookieReturnType => {
  // Initialize the state with the value from the cookie
  const [value, setValue] = useState(() => {
    const cookieValue = Cookies.get(key)
    return cookieValue !== undefined ? cookieValue : initialValue
  })

  useEffect(() => {
    // Update the cookie whenever the state changes
    Cookies.set(key, value, { expires: 365 })
  }, [key, value])

  const updateValue = (newValue: any) => {
    setValue(newValue)
    if (value !== newValue && shouldRefresh) window.location.reload()
  }

  return [value, updateValue]
}

export default useCookie
