'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { HoverZoomProps } from './HoverZoom.types'

export default function HoverZoom({ children, scale }: HoverZoomProps) {
  return (
    <>
      <motion.div
        className="h-100"
        whileHover={{ scale: scale ?? 1.02 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 50, duration: 1 }}>
        {children}
      </motion.div>
    </>
  )
}
