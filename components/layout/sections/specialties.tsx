import React from "react";
export function SpecialtiesSection() {
  const specialties = [
    {
      title: "General Medicine",
      description: "Primary care, common illnesses, and preventive health",
      icon: "stethoscope", // You'll need to add appropriate icons
    },
    {
      title: "Mental Health",
      description: "Therapy, counseling, and psychiatric consultations",
      icon: "brain",
    },
    {
      title: "Pediatrics",
      description: "Healthcare for infants, children, and adolescents",
      icon: "baby",
    },
    {
      title: "Dermatology",
      description: "Skin conditions, treatments, and consultations",
      icon: "skin",
    },
    // Add more specialties as needed
  ];

  return (
    <section className="container py-12">
      <h2 className="text-center text-3xl font-bold mb-12">
        Our Medical Specialties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => (
          <div key={index} className="p-6 border rounded-lg">
            {/* Add icon component here */}
            <h3 className="text-xl font-semibold mt-4">{specialty.title}</h3>
            <p className="text-muted-foreground mt-2">
              {specialty.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
