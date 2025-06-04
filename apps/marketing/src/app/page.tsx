import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import ProgramShowcase from '@/components/sections/program-showcase';
import Logos from '@/components/sections/logos';
import Pricing from '@/components/sections/pricing';
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
