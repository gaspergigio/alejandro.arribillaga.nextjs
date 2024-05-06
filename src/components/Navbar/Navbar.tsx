'use client'
import React, { useEffect, useState } from 'react'
import Logo from '@/assets/logo.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <nav className="flex justify-between bg-secondary text-white w-screen fixed z-50">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <img className="h-9 rounded-full" src={Logo.src} alt="logo" />
        </a>
        {/* Nav Links */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <a className="hover:text-gray-200" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Apps
            </a>
          </li>
        </ul>
        {/* Header Icons */}
        <div className="hidden md:flex items-center space-x-5 items-center">
          {/* Sign In / Register      */}
          <a className="flex items-center hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
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
            <a className="hover:text-gray-200" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Apps
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
