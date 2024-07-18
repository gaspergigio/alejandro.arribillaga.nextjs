'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/assets/logo.webp'
import { FadeX, useSessionContext } from '@/components'
import useCookie from '@/hooks/useCookie'
import { signOut, signInOAuth, getUser } from '@/server'
import { Kbd } from '@nextui-org/react'

import NavbarAuthButton from './NavbarAuthButton'
import NavbarItem from './NavbarItem'

export default function Navbar({ loginTxt, logoutTxt }: { loginTxt: string; logoutTxt: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [authDisabled, setAuthDisabled] = useState(false)
  const [langDisabled, setLangDisabled] = useState(false)
  const { sessionUser, setSessionUser, setIsAdmin } = useSessionContext()
  const pathname = usePathname()
  const [locale, setLocale] = useCookie('x-locale', 'en', true)
  const [isMounted, setIsMounted] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  useEffect(() => {
    const fetchSession = async () => {
      const user = await getUser()
      setSessionUser(user)
      setAuthDisabled(false)
    }

    fetchSession()
    setIsMounted(true)
  }, [setSessionUser])

  const handleGitHubClick = () => {
    if (sessionUser === null) {
      setAuthDisabled(true)
      signInOAuth()
    } else {
      signOut()
      setSessionUser(null)
      setIsAdmin(false)
    }
  }

  const handleLanguageChange = () => {
    setLangDisabled(true)
    const newLocale: string = locale === 'es' ? 'en' : 'es'
    setLocale(newLocale)
  }

  return (
    <nav className="flex justify-between bg-secondary text-white w-screen fixed z-50">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <FadeX x={-50}>
          <div className="flex gap-4">
            <a className="text-3xl font-bold font-heading" href="#">
              <Image alt="logo" className="h-9 rounded-full" src={Logo.src} width={36} height={36} />
            </a>

            <div className="flex gap-5">
              {isMounted && !langDisabled ? (
                <Kbd className={langDisabled ? 'cursor-default' : 'cursor-pointer'} onClick={handleLanguageChange}>
                  {locale === 'es' ? 'ES' : 'EN'}
                </Kbd>
              ) : (
                <Kbd>
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </Kbd>
              )}
            </div>
          </div>
        </FadeX>

        {/* Nav Links */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <NavbarItem to="/" pathName={pathname}>
            Home
          </NavbarItem>
          <NavbarItem to="/portfolio" pathName={pathname}>
            Portfolio
          </NavbarItem>
          <NavbarItem to="/blog" pathName={pathname}>
            Blog
          </NavbarItem>
          <NavbarItem to="/apps" pathName={pathname}>
            Apps
          </NavbarItem>
        </ul>
        {/* Header Icons */}
        <div className="hidden md:flex space-x-5 items-center">
          <FadeX x={50}>
            <NavbarAuthButton
              user={sessionUser}
              handleClick={handleGitHubClick}
              disabled={authDisabled}
              loginTxt={loginTxt}
              logoutTxt={logoutTxt}
            />
          </FadeX>
        </div>
      </div>
      {/* Responsive navbar */}
      <button className="navbar-burger self-center mr-12 md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Responsive Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed left-0 w-full bg-secondary text-white top-16 z-50 bottom-0`}>
        <ul className="px-4 py-2 text-center font-semibold font-heading space-y-4">
          <li>
            <a className="hover:text-gray-200" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="/apps">
              Apps
            </a>
          </li>
          <li>
            <NavbarAuthButton
              user={sessionUser}
              handleClick={handleGitHubClick}
              disabled={authDisabled}
              loginTxt={loginTxt}
              logoutTxt={logoutTxt}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
