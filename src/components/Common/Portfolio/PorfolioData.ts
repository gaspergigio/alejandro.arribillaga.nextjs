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
    skills: [
      { name: 'C# & .Net', url: 'https://dotnet.microsoft.com/es-es/languages/csharp', icon: IconBrandCSharp },
      { name: 'Javascript', url: 'https://javascript.com', icon: IconBrandJavascript },
      { name: 'Sql - Sql Server and Relational DB', url: 'https://www.w3schools.com/sql/', icon: IconSql },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBrandBootstrap },
      { name: 'React Native & Ionic', url: 'https://reactnative.dev/', icon: IconBrandReactNative },
    ],
    id: 14,
  },
]
