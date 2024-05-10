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
  LastestPosts,
} from '@/components'

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
            <a className="hover:text-opacity-80 focus:text-opacity-80 text-white font-semibold" href="#">
              {` Portfolio`}
            </a>
            <br /> <br />
            Explore my portfolio—a blend of 17 years of software development expertise. With 14 years spent mastering
            full-stack development and the last 3 dedicated solely to frontend, each project tells a story of innovation
            and design. Experience the evolution from backend intricacies to captivating frontend interfaces, where
            technical expertise meets visionary design.
          </p>
        </Portfolio>
        <Resume />
        <Education />
        <LastestPosts />
        <Skills />
        <Slogan />
        <Testimonials />
      </Home>
    </main>
  )
}
