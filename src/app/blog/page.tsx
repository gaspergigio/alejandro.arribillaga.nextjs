import React from 'react'

import { Metadata } from 'next'

import CommingSoon from '@/assets/comming-soon.png'
import { BlogListClient, FullMessage } from '@/components'
import { useTranslation } from '@/hooks'

import { getServerPostList } from '../actions'

export const metadata: Metadata = {
  title: 'Blog | Alejandro Arribillaga | FrontEnd Engineer',
  description:
    'Lee los últimos artículos y tutoriales sobre FrontEnd Engineering. Aprende sobre las tendencias más recientes, mejores prácticas y mis experiencias personales en el desarrollo web.',
}

export default async function Page() {
  const blogList = await getServerPostList()
  const { t } = useTranslation()
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-24">
            <BlogListClient
              data={blogList.data}
              total={blogList.total}
              title={t('Blog.Title')}
              description={t('Blog.Paragraph')}
              loadMoreText={t('Blog.LoadMore')}>
              {blogList?.data?.length === 0 && (
                <FullMessage
                  imgSrc={CommingSoon.src}
                  title={t('Blog.NoPosts')}
                  description={t('Blog.NoPostDescription')}
                />
              )}
            </BlogListClient>
          </div>
        </div>
      </section>
    </main>
  )
}
