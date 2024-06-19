import React from 'react'
import { NavbarItemProps } from './Navbar.types'

export default function NavbarItem({ children, to, pathName }: NavbarItemProps) {
  return (
    <li>
      <a
        className={`text-sm ${pathName === to ? 'text-indigo-400' : 'text-white'} transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80`}
        href={to}>
        {children}
      </a>
    </li>
  )
}
