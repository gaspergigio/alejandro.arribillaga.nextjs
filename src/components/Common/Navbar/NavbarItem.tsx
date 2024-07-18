import React from 'react'

import { NavbarItemProps } from './Navbar.types'
import { HoverZoom } from '@/components'

export default function NavbarItem({ children, to, pathName }: NavbarItemProps) {
  return (
    <li>
      <HoverZoom scale={1.1}>
        <a
          className={`text-sm ${pathName === to ? 'text-indigo-400' : 'text-white'} transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80`}
          href={to}>
          {children}
        </a>
      </HoverZoom>
    </li>
  )
}
