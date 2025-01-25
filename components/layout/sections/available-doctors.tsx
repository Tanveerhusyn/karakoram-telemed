"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Star, MapPin } from "lucide-react";
import Image from "next/image";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  nextAvailable: string;
  availableTime: string;
  imageUrl: string;
  rating: number;
  location: string;
  experience: string;
}

const availableDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    nextAvailable: "Today",
    availableTime: "2:00 PM - 6:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.8,
    location: "Gilgit City",
    experience: "15+ years",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Psychiatrist",
    nextAvailable: "Today",
    availableTime: "3:30 PM - 8:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.9,
    location: "Skardu",
    experience: "12+ years",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Nutritionist",
    nextAvailable: "Tomorrow",
    availableTime: "9:00 AM - 1:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.7,
    location: "Lahore",
    experience: "10+ years",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "General Physician",
    nextAvailable: "Today",
    availableTime: "4:00 PM - 9:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.6,
    location: "Karachi",
    experience: "8+ years",
  },
  {
    id: 5,
    name: "Dr. Lisa Chang",
    specialty: "Psychiatrist",
    nextAvailable: "Tomorrow",
    availableTime: "10:00 AM - 3:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.9,
    location: "Islamabad",
    experience: "12+ years",
  },
];

export function AvailableDoctorsSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Available Doctors</h2>
            <p className="text-muted-foreground">
              Book an appointment with our experienced healthcare professionals
            </p>
          </div>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            View All Doctors
          </Button>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4 scrollbar-hide">
          {availableDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="flex-shrink-0 w-[340px] hover:shadow-lg transition-shadow duration-300 border-2"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{doctor.name}</h3>
                    <p className="text-primary font-medium">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span>{doctor.rating}</span>
                      <span className="mx-2">•</span>
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {doctor.location}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Next Available</span>
                    </div>
                    <span className="font-medium text-primary">
                      {doctor.nextAvailable}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Time Slot</span>
                    </div>
                    <span className="font-medium">{doctor.availableTime}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
