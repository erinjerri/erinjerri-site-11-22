import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>My Stack - Erin Jerri Pangilinan</title>
        <meta
          name="description"
          content="My Stack: Tools and gadgets I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1, 16GB RAM (2021)">
              A lot faster than my last MacBook, could work better for AI, but still a huge improvement from my prior laptop.
              I like the sliding bar most.
            </Tool>
            <Tool title="MacBook Mouse with Fironst Magic Grips bumpers">
              The essential must-have bumper to hug my Apple Macbook Mouse.
            </Tool>
            <Tool title="Automonous Chair">
              Ergonomic chairs. https://www.autonomous.ai/office-chairs
            </Tool>
            <Tool title="Flexispot Standing Desk">
              Great for anyone struggling with back problems sitting for long periods of time.
            </Tool>
            <Tool title="Ergonomic Foam - Footrest">
              For my feet
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio">
              After going from DreamWeaver in the early 90s and 2000s, to Sublime Text, in the early 2010s, and then to Atom, it's a switch that works for all other parts of the stack outside of mobile iOS development.
            </Tool>
            <Tool title="Fish">
              My skin for iTerm.
            </Tool>
            <Tool title="Inkdrop">
              Where I like to take notes for pretty much everything, and sometims code snippets.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma and Sketch">
              I'm an early Figma and Sketch user.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Notion">
              Where I can do check-off lists
            </Tool>
            <Tool title="Rainlendar">
              For when I need to look at a calendar on my desktop.
            </Tool>
            <Tool title="Spectacle">
             Must have for splitting your screen.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
