export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 mt-24">
          {children}
        </div>
      </div>
    </section>
  )
}
