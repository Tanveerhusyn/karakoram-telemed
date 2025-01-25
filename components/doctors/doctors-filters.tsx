"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Filters } from "@/types/doctor";

const specialties = [
  "General Physician",
  "Psychiatrist",
  "Nutritionist",
  "Dermatologist",
  "Pediatrician",
  "Cardiologist",
];

const locations = ["Gilgit City", "Skardu", "Hunza", "Chitral", "Astore"];

const availabilities = [
  "Available Today",
  "Available Tomorrow",
  "This Week",
  "Next Week",
];

interface DoctorsFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function DoctorsFilters({
  filters,
  onFilterChange,
}: DoctorsFiltersProps) {
  const updateFilters = (updates: Partial<Filters>) => {
    onFilterChange({ ...filters, ...updates });
  };

  return (
    <Card className="sticky top-4">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Consultation Fee</h3>
            <RadioGroup
              value={filters.feeType}
              onValueChange={(value) =>
                updateFilters({ feeType: value as Filters["feeType"] })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free">Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-4">Specialty</h3>
            <div className="space-y-3">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center space-x-2">
                  <Checkbox
                    id={specialty}
                    checked={filters.specialties.includes(specialty)}
                    onCheckedChange={(checked) => {
                      const newSpecialties = checked
                        ? [...filters.specialties, specialty]
                        : filters.specialties.filter((s) => s !== specialty);
                      updateFilters({ specialties: newSpecialties });
                    }}
                  />
                  <Label htmlFor={specialty}>{specialty}</Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={location}
                    checked={filters.locations.includes(location)}
                    onCheckedChange={(checked) => {
                      const newLocations = checked
                        ? [...filters.locations, location]
                        : filters.locations.filter((l) => l !== location);
                      updateFilters({ locations: newLocations });
                    }}
                  />
                  <Label htmlFor={location}>{location}</Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-4">Availability</h3>
            <div className="space-y-3">
              {availabilities.map((availability) => (
                <div key={availability} className="flex items-center space-x-2">
                  <Checkbox
                    id={availability}
                    checked={filters.availability.includes(availability)}
                    onCheckedChange={(checked) => {
                      const newAvailability = checked
                        ? [...filters.availability, availability]
                        : filters.availability.filter(
                            (a) => a !== availability
                          );
                      updateFilters({ availability: newAvailability });
                    }}
                  />
                  <Label htmlFor={availability}>{availability}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              onFilterChange({
                ...filters,
                specialties: [],
                locations: [],
                availability: [],
                feeType: "all",
              });
            }}
            variant="outline"
          >
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
