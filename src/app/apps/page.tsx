import React from 'react'
import Image from 'next/image'

import CommingSoon from '@/assets/comming-soon.png'

export default function Page() {
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4 extend-height">
          <div className="grid md:grid-cols-2 gap-6"></div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-40 gap-6">
            <Image
              className="rounded object-cover opacity-80 object-center mb-6"
              src={CommingSoon}
              alt="comming soon"
              width={400}
              height={400}
            />
            <div className="container md:w-1/3 mb-10">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                Comming Soon
              </h2>
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-white">
                  In this page I will add some sample applications developed in my spare time for personal use. You can
                  use them if you wish.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
