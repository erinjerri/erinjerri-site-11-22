import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFaster from '@/images/logos/FASTER.svg'
import logoWwcode from '@/images/logos/WWCode-SV.svg'
import logoAla from '@/images/logos/ALA.svg'
import logoSvisa from '@/images/logos/SVISA.svg'
import logoArvracademy from '@/images/logos/arvr-academy.svg'

const projects = [
  {
    name: 'FASTER - Filipinx Americans in STEAM - Science Technology Engineering Arts and Mathematics.',
    description:
      'Since 2015, FASTER as a national organization has served the movement of Filipinx Americans in STEAM-Science Tech Engineering Arts Mathematics.',
    link: { href: 'http://www.faster-steam.org', label: 'faster-steam.org.' },
    logo: logoFaster,
  },
  {
    name: 'AR VR Academy - Augmented Reality Virtual Reality Academy',
    description:
      'A non-profit focused on serving womxn and underrepresented communities in Augmented and Virtual Reality that I co-founded in 2016 which I advised until 2019.',
    link: { href: 'http://www.arvracademy.io', label: 'github.com' },
    logo: logoArvracademy,
  },
  {
    name: 'Asian Leaders Alliance (ALA)',
    description:
      'Served on the leadership team representing a coalition of 350+ tech company Employee Resource Groups (ERGs) from 2021-2022.',
    link: { href: 'http://www.asianleadersalliance.com', label: 'http:///www.asianleadersalliance.com' },
    logo: logoAla,
  },
  {
    name: 'Women Who Code-Silicon Valley',
    description:
      'I served as Lead Evangelist for the Women Who Code - Silicon Valley (WWCode-SV) chapter in 2015-2016.',
    link: { href: 'https://www.womenwhocode.com', label: 'https://www.womenwhocode.com' },
    logo: logoWwcode,
  },
  {
    name: 'Silicon Valley Iceskating Association',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://www.siliconvalleyskates.org', label: 'https://www.siliconvalleyskates.org' },
    logo: logoSvisa,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Erin Pangilinan</title>
        <meta
          name="description"
          content="Non-profit community organization volunteer work I've dedicated myself serving in various leadership roles for 15 years."
        />
      </Head>
      <SimpleLayout
        title="Community Service."
        intro="Non-profit community organization volunteer work I've dedicated myself serving in various leadership roles for 15 years."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
