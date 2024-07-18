import { FadeUp } from '@/components'
import React from 'react'

export default function Slogan({ text }: { text: string }) {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
      <FadeUp y={50}>
        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">{text}</p>
      </FadeUp>
      <FadeUp y={100}>
        <p className="text-primary dark:text-white mt-4">Alejandro Arribillaga</p>
      </FadeUp>
    </div>
  )
}
