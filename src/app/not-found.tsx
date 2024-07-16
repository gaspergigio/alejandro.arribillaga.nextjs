import { FullMessage } from '@/components'
import React from 'react'
import CommingSoon from '@/assets/comming-soon.png'

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-121px)]">
      <section>
        <div className="px-4 xl:px-20 py-4 flex items-center justify-center">
          <FullMessage
            imgSrc={CommingSoon.src}
            title="404 - Not Found"
            description="Sorry, the page you are looking for does not exist. The link may be broken or the page may have been removed. Go back to the top to continue exploring my site and find out more about my work and projects as a FrontEnd Engineer."
          />
        </div>
      </section>
    </main>
  )
}
