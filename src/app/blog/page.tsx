import React from 'react'
import { BlogListClient, FullMessage } from '@/components'
import { getServerPostList } from '../actions'
import CommingSoon from '@/assets/comming-soon.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Lee los últimos artículos y tutoriales sobre FrontEnd Engineering. Aprende sobre las tendencias más recientes, mejores prácticas y mis experiencias personales en el desarrollo web.',
}

export default async function Page() {
  const blogList = await getServerPostList()

  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-24">
            <BlogListClient data={blogList.data} total={blogList.total}>
              {blogList?.data?.length === 0 && (
                <FullMessage
                  imgSrc={CommingSoon.src}
                  title="Comming Soon"
                  description="In this page I will add some sample applications developed in my spare time for personal use. You can
                  use them if you wish."
                />
              )}
            </BlogListClient>
          </div>
        </div>
      </section>
    </main>
  )
}
