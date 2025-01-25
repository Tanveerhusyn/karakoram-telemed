"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Globe2,
  HeartPulse,
  Laptop,
  Languages,
  UserCheck,
  Stethoscope,
  BookOpen,
} from "lucide-react";

const features = [
  {
    title: "24/7 Accessibility",
    description:
      "Access healthcare services anytime, anywhere in remote regions through our secure platform",
    icon: Clock,
  },
  {
    title: "Tourist-Friendly",
    description:
      "Specialized healthcare support for tourists, with understanding of travel-specific medical needs",
    icon: Globe2,
  },
  {
    title: "Expert Consultations",
    description:
      "Connect with qualified healthcare professionals for comprehensive medical consultations",
    icon: Stethoscope,
  },
  {
    title: "Mental Health Support",
    description:
      "Professional telepsychiatry and counseling services for mental well-being",
    icon: HeartPulse,
  },
  {
    title: "Multilingual Support",
    description:
      "Healthcare consultations available in multiple languages for better accessibility",
    icon: Languages,
  },
  {
    title: "Easy Follow-ups",
    description:
      "Convenient follow-up care and progress monitoring through our digital platform",
    icon: UserCheck,
  },
  {
    title: "Virtual Platform",
    description:
      "User-friendly telehealth interface for seamless remote consultations",
    icon: Laptop,
  },
  {
    title: "Health Education",
    description:
      "Access to health resources and educational materials for preventive care",
    icon: BookOpen,
  },
];

export function FeaturesSection() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Comprehensive Telehealth Features
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience healthcare designed for remote regions and tourist needs,
          combining accessibility with professional medical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
