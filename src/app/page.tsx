import {
  Home,
  About,
  FindMe,
  FindMeCopy,
  Resume,
  Education,
  Portfolio,
  Skills,
  Testimonials,
  Slogan,
  Posts,
  PostCard,
} from '@/components'
import Link from 'next/link'
import TechImage from '@/assets/technology/javascript-736400_640.png'

export default function Page() {
  return (
    <main>
      <Home>
        <About />
        <FindMe>
          <FindMeCopy />
        </FindMe>
        <Portfolio title="Noteworthy Works" isFeatured>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Explore some of my most notable works. Read more in my
            <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/portfolio">
              {` Portfolio`}
            </Link>
            <br /> <br />
            Explore my portfolio—a blend of 17 years of software development expertise. With 14 years spent mastering
            full-stack development and the last 3 dedicated solely to frontend, each project tells a story of innovation
            and design. Experience the evolution from backend intricacies to captivating frontend interfaces, where
            technical expertise meets visionary design.
          </p>
        </Portfolio>
        <Resume />
        <Education />
        <Posts
          title="My latest Posts"
          isFeatured
          description={
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
              Explore my latest articles on programming, web development, and technology. Find quality technical
              articles, tips, tutorials, and reflections here to help you keep your mind sharp and your skills up to
              date in the world of software development. Read more in my
              <Link className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="/blog">
                {` Blog`}
              </Link>
            </p>
          }>
          <PostCard
            title="Meet AutoManage, the best AI management tools"
            slug="meet-automanage-the-best-ai-management-tools"
            imgSrc={TechImage.src}
            publishDate={new Date()}>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
        </Posts>
        <Skills />
        <Slogan />
        <Testimonials />
      </Home>
    </main>
  )
}
