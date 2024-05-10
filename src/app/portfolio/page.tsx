import { Portfolio } from '@/components'

export default function Page() {
  return (
    <main>
      <section>
        <div className="px-4 xl:px-20 py-4">
          <div className="mt-20">
            <Portfolio title="Explore My Portfolio">
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                Discover my Portfolio showcasing a blend of frontend and fullstack projects. From dynamic web
                applications to elegant user interfaces, each project represents my dedication to crafting impactful
                digital experiences. Explore how I leverage my expertise in frontend development and fullstack knowledge
                to deliver innovative solutions that resonate with users and drive business success
              </p>
            </Portfolio>
          </div>
        </div>
      </section>
    </main>
  )
}
