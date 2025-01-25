"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  education: string;
  imageUrl: string;
  availability: string;
  languages: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Medicine",
    experience: "15+ years",
    education: "MD, Harvard Medical School",
    imageUrl: "/images/doctors/doctor-1.jpg", // You'll need to add actual images
    availability: "Mon-Fri, 9AM-5PM",
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    experience: "12+ years",
    education: "MD, Stanford University",
    imageUrl: "/images/doctors/doctor-2.jpg",
    availability: "Mon-Sat, 10AM-6PM",
    languages: ["English", "Mandarin"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Mental Health",
    experience: "10+ years",
    education: "PhD, Yale University",
    imageUrl: "/images/doctors/doctor-3.jpg",
    availability: "Tue-Sat, 11AM-7PM",
    languages: ["English", "Portuguese"],
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Dermatology",
    experience: "8+ years",
    education: "MD, Johns Hopkins University",
    imageUrl: "/images/doctors/doctor-4.jpg",
    availability: "Mon-Fri, 8AM-4PM",
    languages: ["English", "French"],
  },
];

export function DoctorsSection() {
  return (
    <section className="container py-16 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Meet Our Healthcare Professionals
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our team of experienced and board-certified doctors are here to
          provide you with the highest quality healthcare through virtual
          consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col items-center bg-card rounded-lg p-6 shadow-sm"
          >
            <div className="relative w-40 h-40 mb-4">
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
            <div className="text-sm text-muted-foreground text-center mb-4">
              <p>{doctor.experience} Experience</p>
              <p>{doctor.education}</p>
              <p className="mt-2">Available: {doctor.availability}</p>
              <p>Languages: {doctor.languages.join(", ")}</p>
            </div>
            <Button className="w-full">Book Appointment</Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Doctors
        </Button>
      </div>
    </section>
  );
}
