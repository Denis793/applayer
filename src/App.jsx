import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientLogoSection } from './components/ClientLogoSection';
import { FeatureSection } from './components/FeatureSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialSection } from './components/TestimonialSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientLogoSection />
      <FeatureSection />
      <FAQSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}

export default App;
