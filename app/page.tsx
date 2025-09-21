import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PracticeAreasSection } from "@/components/practice-areas-section"
import { ProfessionalsSection } from "@/components/professionals-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <ProfessionalsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
