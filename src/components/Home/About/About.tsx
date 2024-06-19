import React from 'react'
import Image from 'next/image'

import ProfileImg from '@/assets/profile.webp'

export default function About() {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div className="relative flex items-center gap-x-4">
        <Image
          alt="my profile"
          className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
          src={ProfileImg.src}
          width={40}
          height={40}
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-primary dark:text-white">
            <a href="#">
              <span className="absolute inset-0" />
              Alejandro Arribillaga
            </a>
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">Frontend Engineer</p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
        Hey, welcome to my site!
      </p>
      <p className="mt-4 text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl">
        {`I'm`} a passionate Front End Developer with a wealth of experience in crafting intuitive user interfaces and
        architecting scalable applications. Proficient in ReactJS, Angular, and familiar with other state management
        libraries like Jotai, Redux, and Recoil, I excel in building dynamic and interactive web applications.
        <br /> <br />
        My background includes past experience with .NET and a good understanding of Node.js. I prioritize web
        optimization techniques to ensure optimal performance and user experience. With a strong foundation in modular
        and domain-driven design approaches, I specialize in crafting reusable components and features. Committed to
        continuous learning, I thrive in nurturing collaborative environments and driving impactful results.
      </p>
    </div>
  )
}
