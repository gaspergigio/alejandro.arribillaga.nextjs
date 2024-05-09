import {
  About,
  FindMe,
  FindMeCopy,
  Resume,
  Education,
  Portfolio,
  Skills,
  Testimonials,
  Slogan,
  LastestPosts,
} from '@/components'
import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 mt-20">
          <About />
          <FindMe>
            <FindMeCopy />
          </FindMe>
          <Portfolio />
          <Resume />
          <Education />
          <LastestPosts />
          <Skills />
          <Slogan />
          <Testimonials />
        </div>
      </div>
    </section>
  )
}
