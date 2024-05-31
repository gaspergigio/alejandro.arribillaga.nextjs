import Image from 'next/image'

import TechImage from '@/assets/technology/JavascriptLogo.png'
import { Chip } from '@nextui-org/chip'

export default function DetailHero() {
  return (
    <section className="text-gray-600 body-font pt-4">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          alt="javascript"
          className="lg:w-1/6 md:w-2/6 w-3/6 mb-10 object-cover object-center rounded"
          src={TechImage.src}
          width={320}
          height={320}
        />
        <div className="text-center lg:w-2/3 w-full">
          <div className="flex justify-center gap-4 mb-4">
            <Chip color="success">Principiante</Chip>
            <Chip color="warning">Intermedio</Chip>
            <Chip color="danger">Experto</Chip>
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-dark dark:text-white">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-4 leading-relaxed text-zinc-500 dark:text-zinc-400">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust
            fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
            meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button className="flex items-center justify-center aspect-square text-white shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
              EN
            </button>
            <button className="flex items-center justify-center aspect-square text-white shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-10 w-10">
              ES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
