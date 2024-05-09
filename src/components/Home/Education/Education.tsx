export default function Education() {
  return (
    <div className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">Education</p>
      <ul>
        <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-8">
          I am a <span className="font-bold  text-white">Software engineer</span> graduated from{' '}
          <span className="font-bold  text-white">Universidad Tecnologica Nacional.</span>
        </li>
        <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
          I have completed an <span className="font-bold  text-white">MBA</span> with a focus on technology from{' '}
          <span className="font-bold  text-white">Universidad Siglo 21</span>. I have not defended the thesis yet
        </li>
        <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
          In addition, I have completed numerous technical and project management courses over the last 10 years.
        </li>
        <li className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
          Overall, <span className="font-bold  text-white">I am passionate about continuous learning and growth</span> ,
          valuing the acquisition of knowledge regardless of its source. Whether through formal education, online
          courses or hands-on experience, I believe in the importance of remaining curious and taking advantage of new
          learning opportunities.
        </li>
      </ul>
    </div>
  )
}
