"use client";

import { Container } from "@/components/ui/Container";
import { StatsCounter } from "@/components/effects/StatsCounter";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatsCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
