import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Erin Pangilinan</title>
        <meta
          name="description"
          content="I am Erin Pangilinan."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I am Erin Pangilinan.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Enter my universe.
              </p>
              <p>
              I have been writing code and scripts since CSS was born in 1993. I am an entrepreneur, author, as well as a software engineer and computational hybrid. 
              I take an interdisciplinary approach to technical and creative work, both coding and designing, producing and screenwriting. 
              My name is Erin Pangilinan (pronounced Pong-eel-lee-none). And no, my book cover of
              Creating Augmented and Virtual Realities was not chosen by me and my last name has nothing to do with pangolins. 
              </p>
              <p>
              I am a proud Silicon Valley native born and raised and alumnus of UC Berkeley (Go Bears!).
                I was one of the graduation speakers who started the tradition of performing a spoken word collective poem that has been adopted every year.
              </p>
              <p> Currently, I am working in stealth mode as Co-Founder and Chief Creative Technology Officer of Salamat Inc. working at fostering the future of storytelling in the mediums of film, television, web3, games, and the metaverse.
              </p>
              <p> Many people know me as the lead author of the O Reilly Media anthology: Creating Augmented and Virtual Realities: Theory and Practice for Next-Generation Spatial Computing. 
                Since its publication and release in 2019, it has become an internationally acclaimed book, with circulation in over 2 dozen countries and has been translated in Chinese and Korean. 
                My chapter focuses on data and machine learning visualization in spatial computing with a focus on use cases in biotech, healthtech. I have worked on exponential technologies including: the metaverse (Augmented Reality, Virtual Reality, Mixed Reality, eXtended Reality (AR VR MR XR)/Spatial Computing), Artificial Intelligence (AI), and web3/blockchain/cryptocurrency.</p>
                <p> I am an alumnus of these fellowships. 
              * GitCoin Kernel Block IV - 2021
              * Alley (housed out of Verizon Ventures) - 2019 
              * Oculus Launch Pad - 2018
              * University of San Francisco (USF), Data Institute - Deep Learning Program (2017-2018), Data Ethics Inaugural Class - 2020 
              </p>
              <p> More about my preferred tech stack and ways I communicate: </p>
              <p>
            Skills: Life-long performing and visual artist, coding since CSS was born (1994). </p><p>
            Fluent: LAMP Stack, JAMStack. Objective C, Swift, Python, C++, C#, Unity, Unreal Engine, 
            Sketch, Maya, Adobe CC. VR: Tiltbrush, Gravity Sketch, Quill.</p><p> 
            Native tongues: English, basic Tagalog, Pampango.</p>
            <p> Conversational and elementary written French. </p>
            <p>
            <p>Community Service and Activism</p>
            <p>An alumnus of Ethnic and Asian American Studies, my aim towards striving for excellence in professional technological contributions is also poised towards striving for justice and equality as many have known me as a long-time activist. I have served on numerous non-profit boards over the course of over a dozen years. I am well known as the founder of Filipinx Americans in STEAM - FASTER serving the movement of Filipinx Americans working in Science Technology Engineering Arts and Mathematics (established in 2015) and was Associate and then Senior Marketing and Communications Director of Filipinos For Obama: KAYA Filipino Americans for Progress until 2013. I have also been known as an educator, previously a founder of non-profit organization focused on serving women and underrepresented communites ARVR Academy (now defunct), and Women Who Code - Silicon Valley Lead Evangelist. Early in my career, I worked for 5+ years in civic engagement and was official paid electoral campaign staff for Ro Khanna for Congress (2014) and Obama for America (2012). Growing up in the heart of Silicon Valley and SF Bay Area has shaped me to continue my body of professional work in an a quest towards creativity, innovation, activism. 
            </p></p></div> 
          </div>
          <div className="lg:pl-20">
            <ul role="list">
        
            <SocialLink href="https://www.github.com/erinjerri" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/erinjerri" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contactme@erinjerri.xyz"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@erinjerri.xyz
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
