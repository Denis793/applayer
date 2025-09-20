import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ClientLogoSection } from './components/ClientLogoSection';
import { FeatureSection } from './components/FeatureSection';
import { FAQSection } from './components/FAQSection';
import { StepsSection } from './components/StepsSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { TestimonialSection } from './components/TestimonialSection';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ClientLogoSection />
      <FeatureSection />
      <FAQSection />
      <StepsSection />
      <DepartmentsSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}

export default App;
