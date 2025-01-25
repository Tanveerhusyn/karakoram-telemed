"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Thompson",
    image: "/images/testimonials/patient-1.jpg",
    rating: 5,
    condition: "Annual Check-up",
    doctor: "Dr. Sarah Johnson",
    text: "The virtual consultation was incredibly convenient. Dr. Johnson was thorough, professional, and made me feel at ease throughout the entire appointment.",
  },
  {
    name: "Michael Roberts",
    image: "/images/testimonials/patient-2.jpg",
    rating: 5,
    condition: "Skin Condition",
    doctor: "Dr. James Wilson",
    text: "I was worried about using telehealth, but the experience exceeded my expectations. The doctor diagnosed my condition accurately and the prescribed treatment worked perfectly.",
  },
  {
    name: "Lisa Chen",
    image: "/images/testimonials/patient-3.jpg",
    rating: 5,
    condition: "Pediatric Consultation",
    doctor: "Dr. Michael Chen",
    text: "As a busy mom, being able to consult a pediatrician from home was a game-changer. Dr. Chen was fantastic with my child, even through video!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Patient Success Stories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Read what our patients say about their telehealth experience with our
          doctors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Consultation: {testimonial.condition}
                </p>
                <p className="text-sm text-primary">
                  Doctor: {testimonial.doctor}
                </p>
                <p className="text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
