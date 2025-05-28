'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { FadeUpProps } from './FadeUp.types'

export default function FadeUp({ children, y, customClass }: FadeUpProps) {
  const customClassName = customClass ? `${customClass} FadeUp` : 'FadeUp'
  return (
    <>
      <motion.div
        className={customClassName}
        initial={{ opacity: 0, y: y ?? 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0, // Start immediately
          duration: 1.0,
          ease: [0.25, 0.8, 0.25, 1], // Smoother cubic-bezier easing
        }}
        viewport={{ once: true }}>
        {children}
      </motion.div>
    </>
  )
}
