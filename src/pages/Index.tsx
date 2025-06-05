
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Facts from '../components/Facts';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Services />
        <Facts />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
