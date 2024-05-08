import { About, FindMe, FindMeCopy, Resume, Portfolio, Skills, Testimonials, Slogan } from '@/components'
import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 mt-20">
          <About />
          <FindMe>
            <FindMeCopy />
          </FindMe>
          <Portfolio />
          <Resume />
          <a
            href="https://www.figma.com/@mikeandreuzza"
            className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
            <svg
              className="w-24 h-24 lg:w-48 xl:h-64 xl:w-64 lg:h-48"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_136)">
                <path
                  d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
                  fill="#1ABCFE"
                />
                <path
                  d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
                  fill="#0ACF83"
                />
                <path
                  d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
                  fill="#FF7262"
                />
                <path
                  d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
                  fill="#F24E1E"
                />
                <path
                  d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
                  fill="#A259FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_136">
                  <rect width={38} height={57} fill="white" transform="translate(26 17)" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xl  text-primary dark:text-white lg:text-2xl mt-6">Figma Community</p>
          </a>
          <a
            href="https://lexingtonthemes.com/"
            className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
            <div className="-mr-24">
              <img
                src="/images/lexington.png"
                className="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary"
                alt=""
              />
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap">
                <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                  <svg
                    className="flex-none w-4 h-4 stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.3694 5.33018C64.129 6.27325 64.5164 7.54562 65.291 10.0906L82.215 65.6862C75.8581 62.3873 69.0351 60.0773 61.9815 58.836L50.9623 21.5986C50.8744 21.3015 50.6928 21.0408 50.4445 20.8556C50.1962 20.6704 49.8945 20.5705 49.5848 20.571C49.275 20.5715 48.9737 20.6723 48.7259 20.8583C48.4782 21.0443 48.2974 21.3055 48.2105 21.6029L37.3247 58.8172C30.2392 60.0528 23.3848 62.3665 17 65.6778L34.0071 10.0776C34.7842 7.53708 35.1728 6.26679 35.9324 5.32559C36.603 4.49465 37.4753 3.84929 38.466 3.45101C39.5884 3 40.9167 3 43.5734 3H55.7208C58.381 3 59.7111 3 60.8344 3.45205C61.8261 3.85109 62.6988 4.49772 63.3694 5.33018Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M65.3945 68.3321C62.6045 70.7178 57.0359 72.3448 50.6215 72.3448C42.7487 72.3448 36.15 69.8938 34.399 66.5975C33.773 68.4867 33.6327 70.6488 33.6327 72.03C33.6327 72.03 33.2203 78.812 37.9374 83.5291C37.9374 81.0797 39.9229 79.0942 42.3722 79.0942C46.5704 79.0942 46.5657 82.7568 46.5619 85.7284L46.5616 85.9936C46.5616 90.5039 49.3182 94.3703 53.2386 96C52.6531 94.7957 52.3246 93.4433 52.3246 92.0141C52.3246 87.7124 54.85 86.1107 57.7851 84.2492C60.1204 82.7681 62.7151 81.1226 64.5033 77.8215C65.4364 76.0991 65.9662 74.1264 65.9662 72.03C65.9662 70.7407 65.7658 69.4982 65.3945 68.3321V68.3321Z"
                      fill="#d94dd1"
                      stroke="#d94dd1"
                    />
                  </svg>
                  <span className="ml-2.5"> Astro</span>
                </div>
                <div className="flex items-center ml-6 text-sm font-medium text-primary dark:text-white">
                  <svg
                    viewBox="0 0 256 154"
                    aria-label="Tailwind CSS"
                    className="flex-none w-4 h-4 stroke-current"
                    width={64}
                    height={64}
                    astro-icon="logos:tailwindcss-icon">
                    <path
                      fill="#38bdf9"
                      d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                    />
                  </svg>
                  <span className="ml-2.5"> Tailwind CSS</span>
                </div>
              </div>
              <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                Lexington
              </p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                Free and premium multipage themes and UI Kits for freelancers, developers, businesses, and personal use.
                Beautifully crafted with Astro.js, and Tailwind CSS — Simple &amp; easy to customise.
              </p>
            </div>
          </a>
          <Skills />
          <Slogan />
          <Testimonials />
        </div>
      </div>
    </section>
  )
}
