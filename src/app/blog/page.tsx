import { isUserAdmin } from '@/app/actions'
import TechImage from '@/assets/technology/JavascriptLogo.png'
import { PostCard, Posts } from '@/components'

export default async function Page() {
  const isAdmin = await isUserAdmin()

  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-20">
            <Posts
              title="My Blog"
              isAdmin={isAdmin}
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
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach"
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </PostCard>
              <PostCard
                title=" How to earn more money as a wellness coach"
                slug="how-to-earn-more-money-as-a-wellness-coach-2"
                imgSrc={TechImage.src}
                publishDate={new Date()}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
