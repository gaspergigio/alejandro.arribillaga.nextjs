import { PostCard, Posts } from '@/components'
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-20">
            <Posts
              title="My Blog"
              description={
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Explore my latest articles on programming, web development, and technology. Find quality technical
                  articles, tips, tutorials, and reflections here to help you keep your mind sharp and your skills up to
                  date in the world of software development.
                </p>
              }>
              <PostCard
                title="Meet AutoManage, the best AI management tools"
                slug="meet-automanage-the-best-ai-management-tools"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                publishDate={new Date()}>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
            </Posts>
          </div>
        </div>
      </section>
    </main>
  )
}
