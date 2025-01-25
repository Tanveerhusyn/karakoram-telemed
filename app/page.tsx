import { BenefitsSection } from "@/components/layout/sections/benefits";
import { DoctorsSection } from "@/components/layout/sections/doctors";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { InsuranceSection } from "@/components/layout/sections/insurance";
import { SpecialtiesSection } from "@/components/layout/sections/specialties";
import { TestimonialsSection } from "@/components/layout/sections/testimonials";
import { AvailableDoctorsSection } from "@/components/layout/sections/available-doctors";

export const metadata = {
  title: "Karakoram Telehealth - Online Medical Consultations",
  description:
    "Enhance healthcare accessibility by providing convenient and efficient online consultations to tourists and local residents in remote areas",
  openGraph: {
    type: "website",
    url: "https://karakoram-telehealth.com",
    title: "Karakoram Telehealth - Online Medical Consultations",
    description:
      "Enhance healthcare accessibility by providing convenient and efficient online consultations",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karakoram Telehealth Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@healthconnect",
    title: "HealthConnect - Online Medical Consultations",
    description:
      "24/7 access to qualified healthcare professionals through secure video consultations",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AvailableDoctorsSection />
      {/* <InsuranceSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      {/* <ServicesSection /> */}
      {/* <SpecialtiesSection /> */}
      {/* <DoctorsSection /> */}
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
