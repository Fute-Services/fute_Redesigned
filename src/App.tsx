import SiteNav from '@/components/SiteNav'
import ScrollEffects from '@/components/ScrollEffects'
import Interactive from '@/components/Interactive'
import AgentDialog from '@/components/AgentDialog'
import { AgentProvider } from '@/components/AgentProvider'
import {
  AiSection,
  BuyerSignal,
  Capabilities,
  CaseStudy,
  Clients,
  Delivery,
  Experience,
  FilmReel,
  Hero,
  IntroBlock,
  Lifecycle,
  Perspective,
  Showcase,
  SiteFooter,
  Systems,
  Voice,
} from '@/components/sections'

export default function App() {
  return (
    <AgentProvider>
      <main className="site">
        <SiteNav />
        <Hero />
        <IntroBlock />
        <Capabilities />
        <Showcase />
        <FilmReel />
        <BuyerSignal />
        <Experience />
        <Lifecycle />
        <AiSection />
        <Interactive />
        <Systems />
        <Delivery />
        <Voice />
        <Perspective />
        <Clients />
        <CaseStudy />
        <SiteFooter />

        <div className="cursor-aura" aria-hidden="true"></div>
        <AgentDialog />
        <ScrollEffects />
      </main>
    </AgentProvider>
  )
}
