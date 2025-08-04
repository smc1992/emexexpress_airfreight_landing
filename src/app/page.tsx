import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
// ShippingOffers wurde entfernt
// WhyChooseUs wurde entfernt
import WhyChooseEmex from '@/components/WhyChooseEmex';
import PainPoints from '@/components/PainPoints';
import AirfreightScenarios from '@/components/AirfreightScenarios';
import LogoSlider from '@/components/LogoSlider';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ShippingDestinations from '@/components/ShippingDestinations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseEmex />
        <PainPoints />
        <AirfreightScenarios />
        <LogoSlider />
        <AboutSection />
        <ShippingDestinations />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
