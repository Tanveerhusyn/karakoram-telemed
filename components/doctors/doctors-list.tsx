"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Languages,
  Award,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { Doctor, Filters } from "@/types/doctor";
import { useMemo } from "react";

const doctors: Doctor[] = [
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
    consultationFee: "Rs. 1500",
    languages: ["English", "Urdu"],
    feeType: "paid",
    qualifications: ["MBBS", "FCPS"],
    totalConsultations: 1200,
    availableSlots: 4,
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
    consultationFee: "Free",
    languages: ["English", "Urdu", "Chinese"],
    feeType: "free",
    qualifications: ["MBBS", "MD Psychiatry"],
    totalConsultations: 980,
    availableSlots: 2,
  },
  {
    id: 3,
    name: "Dr. Fatima Ahmed",
    specialty: "General Physician",
    nextAvailable: "Tomorrow",
    availableTime: "9:00 AM - 1:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.7,
    location: "Hunza",
    experience: "8+ years",
    consultationFee: "Rs. 1200",
    languages: ["English", "Urdu", "Burushaski"],
    feeType: "paid",
    qualifications: ["MBBS", "FCPS (Medicine)"],
    totalConsultations: 750,
    availableSlots: 6,
  },
  {
    id: 4,
    name: "Dr. Ali Khan",
    specialty: "Nutritionist",
    nextAvailable: "Today",
    availableTime: "1:00 PM - 5:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.6,
    location: "Gilgit City",
    experience: "5+ years",
    consultationFee: "Rs. 1000",
    languages: ["English", "Urdu"],
    feeType: "paid",
    qualifications: ["BS Nutrition", "MS Clinical Nutrition"],
    totalConsultations: 520,
    availableSlots: 3,
  },
  {
    id: 5,
    name: "Dr. Sarah Wilson",
    specialty: "Psychiatrist",
    nextAvailable: "Tomorrow",
    availableTime: "10:00 AM - 3:00 PM",
    imageUrl: "https://static.marham.pk/assets/images/doctor-photo-male.webp",
    rating: 4.9,
    location: "Skardu",
    experience: "10+ years",
    consultationFee: "Rs. 2000",
    languages: ["English", "Urdu", "Balti"],
    feeType: "paid",
    qualifications: ["MBBS", "FCPS Psychiatry"],
    totalConsultations: 890,
    availableSlots: 5,
  },
];

interface DoctorsListProps {
  filters: Filters;
}

export function DoctorsList({ filters }: DoctorsListProps) {
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          doctor.name.toLowerCase().includes(searchTerm) ||
          doctor.specialty.toLowerCase().includes(searchTerm) ||
          doctor.location.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Fee type filter
      if (filters.feeType !== "all" && doctor.feeType !== filters.feeType) {
        return false;
      }

      // Specialty filter
      if (
        filters.specialties.length > 0 &&
        !filters.specialties.includes(doctor.specialty)
      ) {
        return false;
      }

      // Location filter
      if (
        filters.locations.length > 0 &&
        !filters.locations.includes(doctor.location)
      ) {
        return false;
      }

      // Availability filter
      if (filters.availability.length > 0) {
        const matchesAvailability = filters.availability.some(
          (availability) => {
            switch (availability) {
              case "Available Today":
                return doctor.nextAvailable === "Today";
              case "Available Tomorrow":
                return doctor.nextAvailable === "Tomorrow";
              // Add more cases as needed
              default:
                return false;
            }
          }
        );
        if (!matchesAvailability) return false;
      }

      return true;
    });
  }, [filters]);

  // Group doctors by specialty
  const doctorsBySpecialty = useMemo(() => {
    const grouped: Record<string, Doctor[]> = {};
    filteredDoctors.forEach((doctor) => {
      if (!grouped[doctor.specialty]) {
        grouped[doctor.specialty] = [];
      }
      grouped[doctor.specialty].push(doctor);
    });
    return grouped;
  }, [filteredDoctors]);

  if (filteredDoctors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No doctors found matching your criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(doctorsBySpecialty).map(([specialty, doctorsList]) => (
        <div key={specialty}>
          <h2 className="text-xl font-bold mb-4">{specialty}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctorsList.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-sm transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Profile Image with Slots Badge */}
                    <div className="relative">
                      <div className="w-16 h-16 relative rounded-full overflow-hidden bg-muted">
                        <Image
                          src={doctor.imageUrl}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg leading-tight">
                            {doctor.name}
                          </h3>
                          <p className="text-orange-500 text-sm">
                            {doctor.specialty}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-base">
                            {doctor.consultationFee}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            per visit
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 space-y-1.5">
                        <div className="flex items-center text-sm">
                          <Award className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{doctor.qualifications.join(", ")}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
                          <span>
                            {doctor.rating} ({doctor.totalConsultations}+
                            consultations)
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Languages className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{doctor.languages.join(", ")}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5 text-muted-foreground" />
                          <span>{doctor.nextAvailable}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1.5 text-muted-foreground" />
                          <span>{doctor.availableTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-10 text-sm font-medium"
                    >
                      Contact
                    </Button>
                    <Button className="h-10 text-sm font-medium bg-orange-500 hover:bg-orange-600">
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
