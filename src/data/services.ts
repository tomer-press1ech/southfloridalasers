import type { Service } from "@/types/common";

export const services: Service[] = [
  {
    id: "laser-engraving",
    title: "Laser Engraving",
    shortDescription: "Precision engraving on virtually any material with micron-level accuracy.",
    description:
      "Our laser engraving machines deliver stunning detail on wood, metal, acrylic, leather, glass, and more. Whether you need serial numbers on industrial parts or intricate artwork on jewelry, we have the right equipment for every application.",
    icon: "engrave",
    features: [
      "Micron-level precision for fine detail work",
      "Compatible with 50+ material types",
      "Variable depth control for 3D engraving",
      "High-speed processing for production runs",
      "Photo-realistic image engraving capability",
      "Rotary attachment for cylindrical objects",
    ],
    image: "",
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting",
    shortDescription: "Clean, precise cuts through a wide range of materials and thicknesses.",
    description:
      "From delicate paper designs to thick acrylic sheets and metal plates, our laser cutting equipment delivers clean edges with minimal material waste. Perfect for prototyping, production runs, and custom fabrication.",
    icon: "cut",
    features: [
      "Clean cuts with no material deformation",
      "Cuts metal up to 20mm thickness",
      "Non-contact process preserves material integrity",
      "Complex geometry and intricate patterns",
      "Minimal kerf width for material efficiency",
      "Automated nesting for optimal material usage",
    ],
    image: "",
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    shortDescription: "Tailored laser systems designed for your specific production needs.",
    description:
      "Every business is unique. We work with you to design and configure laser systems that perfectly match your production requirements, workspace constraints, and budget. From single machines to complete production lines.",
    icon: "custom",
    features: [
      "Free on-site consultation and assessment",
      "Custom machine configurations",
      "Workflow optimization and layout planning",
      "Software integration with existing systems",
      "Scalable solutions that grow with your business",
      "Turnkey installation and training",
    ],
    image: "",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Keep your equipment running at peak performance with expert support.",
    description:
      "Protect your investment with our comprehensive maintenance programs and expert technical support. Our certified technicians provide fast response times and genuine replacement parts to minimize downtime.",
    icon: "support",
    features: [
      "Preventive maintenance programs",
      "24/7 emergency technical support",
      "Genuine OEM replacement parts",
      "Remote diagnostics and troubleshooting",
      "On-site repair and calibration",
      "Extended warranty options",
    ],
    image: "",
  },
];
