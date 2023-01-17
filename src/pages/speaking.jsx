import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Erin Pangilinan</title>
        <meta
          name="description"
          content="This is a list of talks I was asked to present, hackathons I've judged, and more."
        />
      </Head>
      <SimpleLayout
        title="This is a list of past and upcoming talks I was asked to present, hackathons I've judged, and more."
        intro="This does not include a list of performances."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
          <Appearance
              href="https://www.harvardwecode.com/about-wecode"
              title="Panel"
              description="The Harvard WECode (Women Engineers Code) Conference is organized by undergraduate women at Harvard University and is an initiative of Harvard Undergraduate Women in CS. WECode hosts the largest student-run women in tech conference in the world."
              event="Harvard WeCode 2023 - Boston"
              cta="Register"
              />
           <Appearance
              href="https://wwww.techintersections.org"
              title="Keynote address"
              description="Tech Intersections is an inspiring, accessible, and affordable conference for the women of color most underrepresented in computing."
              event="Tech Intersections 2023 - Oakland"
              cta="Register"
            />
            <Appearance
              href="https://bit.ly/AWE18-Erin"
              title="Designing Data Visualization in XR."
              description="Selected as speaker for annual AWE Conference - 31
              May 2018."
              event="Augmented World Expo (AWE) - 2018 "
              cta="Watch"
            />
            <Appearance
              href="https://www.gdcvault.com/play/1023914/VR-Ethics-How-to-Not"
              title="“VR Ethics: How not to Join the League of Evil”"
              description="Selected speaker for 2016 annual conference. 	Panelists discuss the potential future ramifications of VR: how to avoid unethical behavior, what unethical VR creation looks like, and how to use your developer superpowers only for good."
              event="Game Developer Conference (GDC) 2016"
              cta="Watch"
              />
            <Appearance
              href="http://stanfordxr.org/"
              title="Stanford XR Conference"
              description="Selected as panelist for Stanford XR ( formerly
                RabbitholeVR) student organizat ion for annual
                conference. 1 June 2020."
              cta="Learn more"
            />
              <Appearance
              href="https://bit.ly/KaporCapTalk18"
              title="Mixed Reality, Art, and Blockchain"
              description="Selected as moderator for panel on mixed reality, art, and blockchain for first Fridays in Oakland."
              event="Kapor Capital, First Fridays - Oakland - 6 July 2018"
              cta="Learn more"
              />
          </SpeakingSection>
          <SpeakingSection title="Hackathon Judge">
          <Appearance
              href="https://pixelhacks.com"
              title="Pixel Hacks"
              description="I was elected as a judge for the San Francisco Bay Area's First All-Female High School Hackathon. I was selected as a judge for past years 2019. I spoke in 2019, 2021, and 2022. I gave a workshop on AR/VR in 2019 at EY."
              cta="Learn more"
              /> 
              <Appearance
              href="https://imaginecup.microsoft.com/en-us/Events"
              title="Microsoft Imagine Cup"
              description="Selected as a judge for United States ImagineCup - 5 May 2018."
              cta="Learn more"
              />
              <Appearance
              href="https://www.nar.realtor/technology"
              title="National Association of Realtors iOi 2018 Hackathon"
              description="Selected as iOi 2018 Hackathon judge to evaluate
              projects in machine learning, augmented reality."
              cta="Learn more"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
