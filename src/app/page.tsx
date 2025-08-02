import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ShippingOffers from '@/components/ShippingOffers';
import WhyChooseUs from '@/components/WhyChooseUs';
import PainPoints from '@/components/PainPoints';
import AirfreightScenarios from '@/components/AirfreightScenarios';
import LogoSlider from '@/components/LogoSlider';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ShippingOffers />
        <WhyChooseUs />
        <PainPoints />
        <AirfreightScenarios />
        <LogoSlider />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
