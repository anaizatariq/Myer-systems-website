import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-heading text-ink mb-8">Terms & Conditions</h1>
        <p className="text-slate-600 font-sans leading-relaxed">
          Welcome to Myer Systems. This is a placeholder for our full terms and conditions, which govern the use of our website, enterprise AI systems, and automated operational frameworks.
        </p>
      </main>
      <Footer />
    </div>
  );
}
