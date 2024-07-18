'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { FadeInProps } from './FadeIn.types'

export default function FadeIn({ children, customClass }: FadeInProps) {
  return (
    <>
      <motion.div className={customClass} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </>
  )
}
