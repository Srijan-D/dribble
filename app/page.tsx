import { About } from "@/components/about"
import { EQ } from "@/components/eq-section"
import { Footer } from "@/components/footer"
import { Main } from "@/components/main"
import { Timeline } from "@/components/timeline"
import { MidSection } from "@/components/midSection"
import { Signature } from "@/components/signature"
import { WorkWithUs } from "@/components/workWithUs"
import { SocialCard } from "@/components/socialCard"

export default function Home() {
  return (
    <main className="overflow-hidden px-12">
      <Main />
      <EQ />
      <About />
      <Timeline />
      <MidSection />
      <SocialCard />
      <Signature />
      <WorkWithUs />
      {/*  */}
      <Footer />
    </main>
  )
}
