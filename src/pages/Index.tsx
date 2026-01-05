import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/services/FAQSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <CTASection />
    </Layout>
  );
};

export default Index;