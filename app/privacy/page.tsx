import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading text-ink mb-8">Privacy Policy</h1>
        <p className="text-slate-600 font-sans leading-relaxed">
          At Myer Systems, we take your privacy seriously. This is a placeholder for our full privacy policy, which will detail how we handle your data, security measures, and enterprise-grade compliance protocols.
        </p>
      </main>
      <Footer />
    </div>
  );
}
