/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export type PortfolioProps = {
  isFeatured?: boolean
  children: ReactNode
  title: string
}

export type PortfolioCardProps = {
  isFeatured?: boolean
  src: string
  category: string
  title: string
  skills?: Skills[]
  children: ReactNode
}

export type Skills = {
  name: string
  url: string
  icon: any
}
