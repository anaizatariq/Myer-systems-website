'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Navbar } from '@/components/site/navbar';
import { ScrollProgress } from '@/components/site/scroll-progress';
import { Hero } from '@/components/site/hero';
import { TrustStrip } from '@/components/site/trust-strip';
import { Problems } from '@/components/site/problems';
import { Disciplines } from '@/components/site/disciplines';

import { FlagshipPlatform } from '@/components/site/flagship-platform';
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
        {/* 1. Hero: Autonomous Enterprise AI & Workflow Systems */}
        <Hero />
        
        {/* Trust Bar */}
        <TrustStrip />

        {/* 2. What We Do — In 30 Seconds */}
        <Problems />

        {/* 3. What Makes Us Different */}
        <WhyChooseUs />

        {/* 4. Our Services at a Glance */}
        <Disciplines />

        {/* 5. Our Flagship Product: MedSynthea */}
        <FlagshipPlatform />

        {/* 6. Get Started: Executive Briefing & Consultation */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
