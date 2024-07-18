import React from 'react'

import Image from 'next/image'

import { Tooltip } from '@nextui-org/tooltip'

import styles from './Portfolio.module.css'
import { PortfolioCardProps } from './Portfolio.types'
import { FadeUp } from '@/components'

export default function PorfolioCard({ isFeatured, title, src, category, children, skills }: PortfolioCardProps) {
  const cardWidth = isFeatured ? 'xl:w-1/2 md:w-1/1' : 'xl:w-1/4 lg:w-1/3 md:w-1/2'
  return (
    <div className={`${cardWidth} p-4`}>
      <FadeUp y={150}>
        <div className="bg-tertiary p-6 rounded-lg">
          <div className={styles.imgZoom}>
            <Image
              className={`h-40 rounded w-full object-cover opacity-80 object-center mb-6 ${styles.img}`}
              src={src}
              alt="content"
              width={300}
              height={160}
            />
          </div>
          <h3 className="mt-4 tracking-widest text-indigo-400 text-xs font-medium title-font">{category}</h3>
          <h2 className="text-lg text-white font-semibold title-font mb-4">{title}</h2>
          {children}
          {skills && !isFeatured && (
            <div className="flex gap-4 flex-wrap mt-4">
              {skills.map(({ name, icon: Icon }, index) => (
                <Tooltip key={index} content={name} color="primary">
                  <div
                    aria-label={name}
                    className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
                    {<Icon color="white" strokeWidth={0.8} />}
                  </div>
                </Tooltip>
              ))}
            </div>
          )}
        </div>
      </FadeUp>
    </div>
  )
}
