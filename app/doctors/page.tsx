"use client";
import React, { useState } from "react";
import { DoctorsList } from "@/components/doctors/doctors-list";
import { DoctorsSearch } from "@/components/doctors/doctors-search";
import { DoctorsFilters } from "@/components/doctors/doctors-filters";
import { Filters } from "@/types/doctor";

// export const metadata = {
//   title: "Find Doctors - Karakoram Telehealth",
//   description:
//     "Search and connect with our experienced healthcare professionals",
// };

export default function DoctorsPage() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    feeType: "all",
    specialties: [],
    locations: [],
    availability: [],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Find Doctors</h1>
            <p className="text-muted-foreground">
              Search from our network of qualified healthcare professionals
            </p>
          </div>

          <DoctorsSearch
            onSearch={(term) =>
              setFilters((prev) => ({ ...prev, search: term }))
            }
          />

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-[300px]">
              <DoctorsFilters filters={filters} onFilterChange={setFilters} />
            </aside>

            <main className="flex-1">
              <DoctorsList filters={filters} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
