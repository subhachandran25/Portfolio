import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import BackgroundViz from '@/components/BackgroundViz';
import Timeline from '@/components/Timeline';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ScrollEffects from '@/components/ScrollEffects';

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <div className="sheet">
        <BackgroundViz />
        <Nav />
        <Hero />
        <Timeline />
        <CaseStudies />
        <About />
        <Contact />
        <footer>© 2026 Subha Chandran · Dubai</footer>
      </div>
    </>
  );
}
