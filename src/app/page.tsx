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
        <Portfolio />
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
