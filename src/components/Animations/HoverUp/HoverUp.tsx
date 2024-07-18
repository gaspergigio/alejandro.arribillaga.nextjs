'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { HoverUpProps } from './HoverUp.types'

export default function HoverUp({ children, y }: HoverUpProps) {
  return (
    <>
      <motion.div
        className="h-100"
        whileHover={{ translateY: y ?? -20 }}
        animate={{ translateY: 0 }}
        transition={{ type: 'spring', stiffness: 100, duration: 1 }}>
        {children}
      </motion.div>
    </>
  )
}
