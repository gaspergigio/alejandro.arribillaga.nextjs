import React from 'react'

import Image from 'next/image'
import { FadeIn, HoverZoom } from '@/components/Animations'

export default function FullMessage({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string
  title: string
  description: string
}) {
  return (
    <FadeIn>
      <div className="flex flex-col md:flex-row justify-center items-center mt-40 gap-6">
        <HoverZoom scale={1.1}>
          <Image
            className="rounded object-cover opacity-80 object-center mb-6"
            src={imgSrc}
            alt="comming soon"
            width={400}
            height={400}
          />
        </HoverZoom>

        <div className="container md:w-1/3 mb-10">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
            {title}
          </h2>
          <blockquote className="mt-6">
            <p className="text-lg leading-relaxed text-white">{description}</p>
          </blockquote>
        </div>
      </div>
    </FadeIn>
  )
}
