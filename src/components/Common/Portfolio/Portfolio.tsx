import React from 'react'

import PorfolioCard from './PorfolioCard'
import { portfolioData } from './PorfolioData'
import styles from './Portfolio.module.css'
import { PortfolioProps, Skills } from './Portfolio.types'
import { FadeUp } from '@/components'

export default function Portfolio({ isFeatured, title, t, children }: PortfolioProps) {
  const portfolioItems = isFeatured ? portfolioData.slice(0, 4) : portfolioData
  return (
    <div className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2  lg:grid lg:gap-0 lg:items-center lg:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div>
        <FadeUp y={50}>
          <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">{title}</p>
        </FadeUp>
        {children}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap -m-4">
          {portfolioItems.map(({ title, src, category, id, skills }) => (
            <PorfolioCard
              isFeatured={isFeatured}
              key={id}
              title={title}
              src={src}
              category={category}
              skills={skills as Skills[]}>
              <p
                className={`text-sm text-zinc-500 dark:text-zinc-400 ${isFeatured ? '' : 'h-48'} ${styles.description}`}>
                {t(`Portfolio.Proj${id}`)}
              </p>
            </PorfolioCard>
          ))}
        </div>
      </div>
    </div>
  )
}
