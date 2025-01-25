"use client";
import Image from "next/image";

const insuranceProviders = [
  {
    name: "Blue Cross Blue Shield",
    logo: "/images/insurance/bcbs.png",
    plans: ["PPO", "HMO", "Medicare Advantage"],
  },
  {
    name: "UnitedHealthcare",
    logo: "/images/insurance/united.png",
    plans: ["Choice Plus", "Navigate", "Medicare Solutions"],
  },
  {
    name: "Aetna",
    logo: "/images/insurance/aetna.png",
    plans: ["Select", "Premier", "Medicare"],
  },
  {
    name: "Cigna",
    logo: "/images/insurance/cigna.png",
    plans: ["Open Access", "LocalPlus", "Medicare Advantage"],
  },
  {
    name: "Humana",
    logo: "/images/insurance/humana.png",
    plans: ["Choice Care", "Gold Plus", "Medicare"],
  },
];

export function InsuranceSection() {
  return (
    <section className="container py-16 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Insurance Coverage</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We work with major insurance providers to ensure our telehealth
          services are accessible and affordable. Contact us to verify your
          coverage.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {insuranceProviders.map((provider, index) => (
          <div key={index} className="text-center">
            <div className="relative h-20 w-40 mb-4">
              <Image
                src={provider.logo}
                alt={provider.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {provider.plans.join(" • ")}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          *Coverage may vary. Please contact your insurance provider to verify
          specific benefits.
        </p>
      </div>
    </section>
  );
}
