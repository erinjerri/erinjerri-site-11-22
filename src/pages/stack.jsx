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
        intro="Sharing the stack of tools, gadgets, and products I use."
      >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Pro, M1, 16GB RAM (2021)">
            A lot faster than my last MacBook, could work better for AI, but still a huge improvement from my prior laptop.
            I like the sliding bar most. On Apple <a href="https://www.apple.com/macbook-air-m1/">here.</a>
          </Tool>
          <Tool title="MacBook Mouse with Fironst Magic Grips bumpers">
            The essential must-have bumper to hug my Apple Macbook Mouse which you can find on <a href="https://www.amazon.com/gp/product/B08ZLY1GBQ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">Amazon</a>.
          </Tool>
          <Tool title="Automonous Chair">
            <a href="https://www.autonomous.ai/office-chairs">Ergonomic Chairs, which I found was a recommendation for Humbled Trader</a>
          </Tool>
          <Tool title="Flexispot Standing Desk">
            Great for anyone struggling with back problems sitting for long periods of time. It was a lot like my desk working out of the Mozilla office in SF. Also found on <a href="https://www.amazon.com/gp/product/B07H2W9Y3W/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1">Amazon.</a>
          </Tool>
          <Tool title="Ergonomic Foam - Footrest">
            For my feet. Works well with my chair for my back problems. Found <a href="Ergonomic Foam - Footrest">here.</a>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Where I can do check-off lists. It is also really popular in web3 communities to replace documentation. A little expensive but helpful and pretty UI. I also sometimes use Airtable in its place depending on the task. Really fast labeling.
          </Tool>
          <Tool title="Rainlendar">
            For when I need to look at a calendar on my desktop. This sometimes has a lot of pop-ups which you can close, sometimes faster to see your desktop rather than opening a tab on your browser to open your calendar. You can customize these too. See <a href="https://www.rainlendar.net/">here.</a>
          </Tool>
          <Tool title="Spectacle">
            Must have for splitting your screen. Download <a href="https://spectacle.en.softonic.com/mac">here.</a>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio">
            After going from DreamWeaver in the early 90s and 2000s, to Sublime Text, in the early 2010s, and then to Atom, it is a switch that works for all other parts of the stack outside of mobile iOS development. See <a href="https://visualstudio.microsoft.com/">here.</a>
          </Tool>
          <Tool title="Fish">
            My skin for iTerm. It is customizable too to some degree, normally I just leave it as is unless I want to use ViM instead. Download <a href="https://fishshell.com/">here.</a>
          </Tool>
          <Tool title="Inkdrop">
            Where I like to take notes for pretty much everything, and sometimes code snippets. <a href="https://www.inkdrop.app">Inkdrop</a> is one of the best also one of the very few cross-platform notetaking applications that is friendly to software engineers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="3D Software Development and Design">
          <Tool title="Unity and Unreal Engine">
            For all things you use to code, these are the essential game engines to use to create and deploy metaverse (AR VR MR XR/spatial computing) applications. <a href="https://www.unity.com">Unity</a> was the sponsor of my book launch, and <a href="https://www.unrealengine.com/">Unreal Engine</a> is great for those working with large datasets for creating data visualization experiences in XR. 
          </Tool>
          <Tool title="Gravity Sketch, Blocks, Tiltbrush">
            For all things you use to make 3D assets while in Virtual Reality (VR) itself. , these are the essential game engines to use to create and deploy metaverse (AR VR MR XR/spatial computing) applications. <a href="https://www.unity.com">Unity</a> was the sponsor of my book launch, and <a href="https://www.unrealengine.com/">Unreal Engine</a> is great for those working with large datasets for creating data visualization experiences in XR. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Flat Design and Layout"> 
          <Tool title="Adobe InDesign and Canva">
            I learned InDesign in the early 2000s and only recently in the last 7 years made a switch to Sketch. It is a still good to have, but usually Sketch replaces my workflow here. Canva is good too, but a little costly and most stuff I can replicate (sans the nice video animations, but not always essential).
          </Tool>
          <Tool title="Figma and Sketch">
            I am an early <a href="https://www.figma.com">Figma</a> and <a href="https://www.sketch.com">Sketch</a> user. I use this to make raw assets. Figma sometimes has some nice UI kits that folks open source which I use as base layouts (like Apple Design etc.). 
          </Tool>
          <Tool title="Adobe InDesign and Canva">
            I learned InDesign in the early 2000s and only recently in the last 7 years made a switch to Sketch. It is a still good to have, but usually Sketch replaces my workflow here. Canva is good too, but a little costly and most stuff I can replicate (sans the nice video animations, but not always essential).
          </Tool>
        </ToolsSection>
      </div>
      </SimpleLayout>
    </>
  )
}
