'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { BounceYProps } from './BounceY.types'

export default function BounceY({ children, customClass }: BounceYProps) {
  return (
    <>
      <motion.div
        className={customClass}
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          stiffness: 200,
          damping: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1,
        }}>
        {children}
      </motion.div>
    </>
  )
}
