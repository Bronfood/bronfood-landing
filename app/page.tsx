import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PaymentSection } from "@/components/payment-section"
import { RoleSection } from "@/components/role-section"
import { RefundSection } from "@/components/refund-section"
import { SecuritySection } from "@/components/security-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <PaymentSection />
        <RoleSection />
        <RefundSection />
        <SecuritySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
