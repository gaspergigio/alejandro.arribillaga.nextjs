import React, { ReactNode } from 'react'

export type PortfolioProps = {
  isFeatured?: boolean
  children: ReactNode
  title: string
}

export type PortfolioCardProps = {
  isFeatured?: boolean
  src: string
  category: String
  title: string
  skills?: Skills[]
  children: ReactNode
}

export type Skills = {
  name: string
  url: string
  icon: any
}
