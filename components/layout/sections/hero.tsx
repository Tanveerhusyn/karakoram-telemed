"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between gap-8 py-8 md:py-12">
      {/* Left side content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Karakoram
          <span className="text-primary mx-2">Telehealth</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          At Karakoram Telehealth, we are dedicated to enhancing healthcare
          accessibility by offering seamless online consultations for tourists
          and residents in remote regions. Our services include expert medical
          consultations, telepsychiatry, nutritional guidance, follow-up care,
          and health education, ensuring you receive the care you need, wherever
          you are.
        </p>
        <Button size="lg" className="text-lg px-8">
          Make An Appointment
        </Button>
      </div>

      {/* Right side image */}
      <div className="flex-1 relative">
        <div className="relative w-full aspect-square">
          <Image
            src="/doctor2.png"
            alt="Doctor with headset"
            fill
            className="object-cover w-[1200px] h-[1400px]"
            priority
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -z-10 inset-0">
          <div className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-blue-100" />
          <div className="absolute bottom-1/4 -right-4 w-12 h-12 rounded-full bg-pink-100" />
          <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-purple-50" />
        </div>
      </div>
    </section>
  );
}
