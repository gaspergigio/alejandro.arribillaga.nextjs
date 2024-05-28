import {
  IconBrandReact,
  IconBrandAngular,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandCSharp,
  IconBrandAws,
  IconBrandAzure,
  IconBrandBootstrap,
  IconBrandFigma,
  IconBrandFramerMotion,
  IconBrandMantine,
  IconBrandReactNative,
  IconBrandStorybook,
  IconSql,
  IconBrandVercel,
} from '@tabler/icons-react'

import AuthenticCapital from '@/assets/portfolio/authenticcapital.thumb.webp'
import Basemintgang from '@/assets/portfolio/basemintgang.thumb.webp'
import Buttonwood from '@/assets/portfolio/buttonwood.thumb.webp'
import Casper from '@/assets/portfolio/casper.thumb.webp'
import Cmt from '@/assets/portfolio/cmt.thumb.webp'
import Connor from '@/assets/portfolio/connor.thumb.png'
import Geopop from '@/assets/portfolio/geopop.thumb.png'
import Nugverse from '@/assets/portfolio/nugverse.thumb.png'
import Outlaw from '@/assets/portfolio/outlaw.thumb.webp'
import Scalio from '@/assets/portfolio/scalio-thumb.jpg'
import Sep from '@/assets/portfolio/sep.thumb.png'
import Builder from '@/assets/portfolio/webbuilder.thumb.png'
import Wedplanco from '@/assets/portfolio/wedplanco.thumb.png'
import Yo from '@/assets/portfolio/yo.thumb.png'

export const portfolioData = [
  {
    title: 'The Wedding Planning CO',
    src: Wedplanco.src,
    category: 'PRODUCT',
    description: `I contributed as a FrontEnd Engineer to the wedding planning platform, aiding in crafting a unique and
    personalized digital experience for users.`,
    skills: [
      { name: 'React', url: 'https://reactjs.org', icon: IconBrandReact },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Mantine', url: 'https://mantine.dev/', icon: IconBrandMantine },
      { name: 'Figma', url: 'https://www.figma.com/', icon: IconBrandFigma },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 1,
  },
  {
    title: 'Scalio Website',
    src: Scalio.src,
    category: 'SSR',
    description: `I worked as a FrontEnd Developer on Scalio's institutional website, built using Next.js, contributing to
    its development and optimization.`,
    skills: [
      { name: 'React', url: 'https://reactjs.org', icon: IconBrandReact },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Next.js', url: 'https://nextjs.org', icon: IconBrandNextjs },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Vercel', urk: 'https://vercel.com/', icon: IconBrandVercel },
    ],
    id: 2,
  },
  {
    title: 'Geopop',
    src: Geopop.src,
    category: 'SAAS',
    description: `I've worked as a FullStack Engineer for 5 years at Geopop, a human resources outsourcing platform
    operating in Argentina, Chile, and Peru. I have been a technical leader for 3 year, here.`,
    skills: [
      { name: 'C# & .Net', url: 'https://dotnet.microsoft.com/es-es/languages/csharp', icon: IconBrandCSharp },
      { name: 'Javascript', url: 'https://javascript.com', icon: IconBrandJavascript },
      { name: 'Sql - Sql Server and Relational DB', url: 'https://www.w3schools.com/sql/', icon: IconSql },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Azure', url: 'https://azure.microsoft.com/', icon: IconBrandAzure },
    ],
    id: 3,
  },
  {
    title: 'Basemint Gang',
    src: Basemintgang.src,
    category: 'CRIPTO',
    description: `I collaborated as a FrontEnd Engineer on a crypto marketplace within an application that combined Angular
    and React, contributing to its development and functionality.`,
    id: 4,
    skills: [
      { name: 'React', url: 'https://reactjs.org', icon: IconBrandReact },
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
  },
  {
    title: 'Nugverse',
    src: Nugverse.src,
    category: 'PRODUCT',
    description: `The NugVerse is a community of motion designers, filmmakers and social creators at the forefront of digital advertising. 
    Video ads are created for platforms such as Facebook, Instagram, YouTube, Snapchat, TikTok, Twitter and Pinterest. Here I have served as FE Engineer at React.`,
    skills: [
      { name: 'React', url: 'https://reactjs.org', icon: IconBrandReact },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Mantine', url: 'https://mantine.dev/', icon: IconBrandMantine },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
      { name: 'Storybook', url: 'https://storybook.js.org/', icon: IconBrandStorybook },
    ],
    id: 5,
  },
  {
    title: 'BuildHero',
    src: Builder.src,
    category: 'WEB BUILDER',
    description:
      'I have participated in the creation of this webbuilder at Scalio as FrontEnd developer. I worked with Next and React.',
    skills: [
      { name: 'React', url: 'https://reactjs.org', icon: IconBrandReact },
      { name: 'Next.js', url: 'https://nextjs.org', icon: IconBrandNextjs },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Mantine', url: 'https://mantine.dev/', icon: IconBrandMantine },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 6,
  },
  {
    title: 'CMT Digital',
    src: Cmt.src,
    category: 'WEB DEVELOPMENT',
    description: `Contributed to the development of a website using Angular Universal, applying my skills to improve functionality, enhance performance, and deliver an intuitive user experience.`,
    skills: [
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 7,
  },
  {
    title: 'Buttonwood',
    src: Buttonwood.src,
    category: 'WEB DEVELOPMENT',
    description: `Engaged in the creation of a sophisticated front-end project featuring intricate user interface designs. Leveraged advanced techniques to implement complex UI elements, ensuring seamless interaction and captivating visual appeal.`,
    skills: [
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 8,
  },
  {
    title: 'Authentic Capital',
    src: AuthenticCapital.src,
    category: 'WEB DEVELOPMENT',
    description: `Contributed to the development of a sophisticated user interface for an institutional website, navigating through intricate design requirements and ensuring seamless user interaction. Implemented innovative solutions to optimize content presentation and enhance user engagement.`,
    skills: [
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 9,
  },
  {
    title: 'Casper Labs',
    src: Casper.src,
    category: 'WEB DEVELOPMENT',
    description: `Collaborated on the development of a Next.js website, leveraging my expertise to enhance functionality, optimize performance, and ensure a seamless user experience.`,
    skills: [
      { name: 'Next.js', url: 'https://nextjs.org', icon: IconBrandNextjs },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 10,
  },
  {
    title: 'Outlaw',
    src: Outlaw.src,
    category: 'WEB DEVELOPMENT',
    description: `Contributed to the development of a challenging UI for a gaming platform, navigating through intricate design requirements and pushing the boundaries of user interaction. Implemented innovative solutions to enhance gameplay experience and captivate players.`,
    skills: [
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 11,
  },
  {
    title: 'Connor Consulting',
    src: Connor.src,
    category: 'WEB DEVELOPMENT',
    description: `Played a key role in crafting the user interface for an institutional website, focusing on delivering an intuitive and visually appealing platform for visitors. Employed creative design strategies to convey complex information effectively and create a memorable user experience.`,
    skills: [
      { name: 'Angular', url: 'https://angular.io', icon: IconBrandAngular },
      { name: 'Typescript', url: 'https://typescriptlang.org', icon: IconBrandTypescript },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: IconBrandFramerMotion },
      { name: 'AWS', url: 'https://aws.amazon.com/', icon: IconBrandAws },
    ],
    id: 12,
  },
  {
    title: 'SEP',
    src: Sep.src,
    category: 'WEB SITE, PRODUCT & APP',
    description: `I've contributed to maintaining the Health System, developed a new software solution tailored for Dentistry, and crafted websites and applications to support the organization's objectives.`,
    skills: [
      { name: 'C# & .Net', url: 'https://dotnet.microsoft.com/es-es/languages/csharp', icon: IconBrandCSharp },
      { name: 'Javascript', url: 'https://javascript.com', icon: IconBrandJavascript },
      { name: 'Sql - Sql Server and Relational DB', url: 'https://www.w3schools.com/sql/', icon: IconSql },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'React Native & Ionic', url: 'https://reactnative.dev/', icon: IconBrandReactNative },
    ],
    id: 13,
  },
  {
    title: 'YO',
    src: Yo.src,
    category: 'APP',
    description: `I was heavily involved in the development of the internal Sooft Technology App, which has since been rebranded and consolidated into Geopop. During this time, I served as the Technical Lead, overseeing various aspects of the project's implementation and ensuring its successful execution.`,
    skills: [
      { name: 'C# & .Net', url: 'https://dotnet.microsoft.com/es-es/languages/csharp', icon: IconBrandCSharp },
      { name: 'Javascript', url: 'https://javascript.com', icon: IconBrandJavascript },
      { name: 'Sql - Sql Server and Relational DB', url: 'https://www.w3schools.com/sql/', icon: IconSql },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'React Native & Ionic', url: 'https://reactnative.dev/', icon: IconBrandReactNative },
    ],
    id: 13,
  },
]
