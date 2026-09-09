'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Navbar } from '@/components/site/navbar';
import { ScrollProgress } from '@/components/site/scroll-progress';
import { Hero } from '@/components/site/hero';
import { Problems } from '@/components/site/problems';
import { Disciplines } from '@/components/site/disciplines';
import { HowWeOperate } from '@/components/site/how-we-operate';
import { Industries } from '@/components/site/industries';
import { HealthcareVertical } from '@/components/site/healthcare-vertical';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { CtaBanner } from '@/components/site/cta-banner';
import { Footer } from '@/components/site/footer';

export default function Home() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 1. Hero: Autonomous Enterprise AI & Workflow Systems (Preserved verbatim) */}
        <Hero />

        {/* 2. What We Solve: Manual Work, Disconnected Tools & Visibility */}
        <Problems />

        {/* 3. What We Do: Core Capabilities (UI/UX 100% untouched, content updated) */}
        <Disciplines />

        {/* 4. How We Work: AI Speed, Human Judgment (3-step methodology) */}
        <HowWeOperate />

        {/* 5. Who We Serve: Commercial Enterprises & High-Precision Industries */}
        <Industries />

        {/* 6. Healthcare Focus: Specialized RCM, Medical Billing & Denial Mitigation */}
        <HealthcareVertical />

        {/* 7. Why Myer Systems: Technology + People, Tested in High-Stakes Sectors */}
        <WhyChooseUs />

        {/* 10. Get Started: Executive Briefing & Consultation */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
