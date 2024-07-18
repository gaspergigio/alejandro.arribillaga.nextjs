import React from 'react'

import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'
import { FadeX } from '@/components/Animations'
export default function Footer() {
  return (
    <section className="py-12 bg-secondary">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <FadeX x={-50}>
              <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">© Copyright 2024 Alejandro Arribillaga</p>
            </FadeX>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <FadeX x={50}>
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                <li>
                  <a
                    href="/"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    {' '}
                    Home{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="/portfolio"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    {' '}
                    Portfolio{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="/blog"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    {' '}
                    Blog{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="/apps"
                    title=""
                    className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    {' '}
                    Apps{' '}
                  </a>
                </li>
              </ul>
            </FadeX>
            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>
            <FadeX x={50}>
              <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a
                    href="https://github.com/gaspergigio"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <IconBrandGithub color="white" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/alejandroarribillaga"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <IconBrandLinkedin color="white" />
                  </a>
                </li>
              </ul>
            </FadeX>
          </div>
        </div>
      </div>
    </section>
  )
}
