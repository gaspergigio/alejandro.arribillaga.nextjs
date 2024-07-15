import React, { ReactNode } from 'react'

export default function DetailHero({
  imgSrc,
  title,
  children,
}: {
  imgSrc: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="text-gray-600 body-font pt-4">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          alt="javascript"
          className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded"
          src={imgSrc}
          width={320}
          height={320}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-dark dark:text-white">{title}</h1>
          <p className="mb-4 leading-relaxed text-zinc-500 dark:text-zinc-400">{children}</p>
        </div>
      </div>
    </section>
  )
}
