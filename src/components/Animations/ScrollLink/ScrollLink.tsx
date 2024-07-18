'use client'
import React from 'react'

import { Link as ScrollLinkComp } from 'react-scroll'

import { ScrollLinkProps } from './ScrollLink.types'

export default function ScrollLink({ children, customClass, to }: ScrollLinkProps) {
  return (
    <>
      <ScrollLinkComp href={to} className={customClass} to={to} smooth={true} duration={900}>
        {children}
      </ScrollLinkComp>
    </>
  )
}
