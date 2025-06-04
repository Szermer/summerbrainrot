import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Pricing from '@/components/sections/pricing';
import ProgramShowcase from '@/components/sections/program-showcase';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramShowcase />
      <Logos />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}
