import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Facilities from '@/components/Facilities';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Admissions />
      <Contact />
    </main>
  );
}