import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Gallery from '@/components/sections/Gallery';
import Skills from '@/components/sections/Skills';
import Resume from '@/components/sections/Resume';
import Education from '@/components/sections/Education';
import Certificates from '@/components/sections/Certificates';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-base">
        <ScrollProgress />

        <Navbar />

        <SocialSidebar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Gallery />
          <Skills />
          <Resume />
          <Education />
          <Certificates />
          <Blog />
          <Contact />
        </main>

        <Footer />

        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;