'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { FadeXProps } from './FadeX.types'

export default function FadeX({ x, children }: FadeXProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 30 }}
      viewport={{ once: true }}>
      <div className="position-relative contentRightContent">{children}</div>
    </motion.div>
  )
}
