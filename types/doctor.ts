export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  nextAvailable: string;
  availableTime: string;
  imageUrl: string;
  rating: number;
  location: string;
  experience: string;
  consultationFee: string;
  languages: string[];
  feeType: "free" | "paid";
  qualifications: string[];
  totalConsultations: number;
  availableSlots: number;
}

export interface Filters {
  search: string;
  feeType: "all" | "free" | "paid";
  specialties: string[];
  locations: string[];
  availability: string[];
}
