'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/assets/logo.webp'
import { useSessionContext } from '@/components'
import { signOut, signInOAuth, getSession } from '@/server'

import NavbarAuthButton from './NavbarAuthButton'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { session, setSession, setIsAdmin } = useSessionContext()
  const pathname = usePathname()

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
      const session = await getSession()
      setSession(session)
      setDisabled(false)
    }

    fetchSession()
  }, [])

  const handleGitHubClick = () => {
    if (session === null) {
      setDisabled(true)
      signInOAuth()
    } else {
      signOut()
      setSession(null)
      setIsAdmin(false)
    }
  }

  return (
    <nav className="flex justify-between bg-secondary text-white w-screen fixed z-50">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <Image alt="logo" className="h-9 rounded-full" src={Logo.src} width={36} height={36} />
        </a>
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
        <div className="hidden md:flex items-center space-x-5 items-center">
          <NavbarAuthButton session={session} handleClick={handleGitHubClick} disabled={disabled} />
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
            <a className="hover:text-gray-200" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
