import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "trotec-speedy-100",
    name: "Trotec Speedy 100",
    shortDescription:
      "Compact desktop laser engraver and cutter with CO2 or flexx technology for maximum versatility.",
    description:
      "The Trotec Speedy 100 is the ideal entry into professional laser processing. Despite its compact footprint, it delivers the same Austrian-engineered precision and reliability Trotec is known for. Available with CO2, fiber, or flexx (dual-source) laser configurations, the Speedy 100 handles engraving, cutting, and marking across a wide range of materials. Perfect for startups, small businesses, awards shops, and personalization studios.",
    category: "flatbed-engravers",
    images: [
      { src: "/images/products/trotec-speedy-100/main.jpg", alt: "Trotec Speedy 100 laser engraver", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Working Area", value: "610 x 305", unit: "mm" },
      { label: "Laser Source", value: "CO2 / Fiber / Flexx" },
      { label: "CO2 Laser Power", value: "Up to 60", unit: "W" },
      { label: "Fiber Laser Power", value: "Up to 20", unit: "W" },
      { label: "Max Engraving Speed", value: "3.55", unit: "m/s" },
      { label: "Resolution", value: "Up to 1000", unit: "dpi" },
      { label: "Connectivity", value: "Ethernet / USB" },
      { label: "Software", value: "Trotec Ruby" },
    ],
    features: [
      "Austrian-engineered precision and build quality",
      "Flexx dual-source option for CO2 + fiber in one machine",
      "InPack Technology for sealed optics and low maintenance",
      "Trotec Ruby software for intuitive workflow management",
      "Compact desktop footprint for space-efficient operation",
      "Motorized Z-axis for auto-focus and thick materials",
    ],
    materials: ["Wood", "Acrylic", "Leather", "Paper", "Glass", "Anodized Aluminum", "Coated Metals", "Rubber", "Fabric"],
    inStock: true,
    isFeatured: true,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-300", "trotec-speedy-360"],
    seo: {
      title: "Trotec Speedy 100 Laser Engraver",
      description: "Compact professional laser engraver by Trotec. CO2, fiber, or flexx configurations. Ideal for small businesses and personalization.",
      keywords: ["Trotec Speedy 100", "laser engraver", "desktop laser", "CO2 laser"],
    },
  },
  {
    id: "2",
    slug: "trotec-speedy-300",
    name: "Trotec Speedy 300",
    shortDescription:
      "Mid-range flatbed laser engraver with a generous working area and high-speed processing.",
    description:
      "The Trotec Speedy 300 is the workhorse of the Speedy series. With a large working area, powerful laser options up to 120W CO2, and blazing-fast engraving speeds, it's built for businesses that need production-level throughput without compromising on detail. From awards and signage to industrial marking, the Speedy 300 handles it all with Trotec's hallmark precision.",
    category: "flatbed-engravers",
    images: [
      { src: "/images/products/trotec-speedy-300/main.jpg", alt: "Trotec Speedy 300 laser engraver", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Working Area", value: "726 x 432", unit: "mm" },
      { label: "Laser Source", value: "CO2 / Fiber / Flexx" },
      { label: "CO2 Laser Power", value: "Up to 120", unit: "W" },
      { label: "Fiber Laser Power", value: "Up to 50", unit: "W" },
      { label: "Max Engraving Speed", value: "3.55", unit: "m/s" },
      { label: "Resolution", value: "Up to 1000", unit: "dpi" },
      { label: "Z-Depth", value: "200", unit: "mm" },
      { label: "Software", value: "Trotec Ruby" },
    ],
    features: [
      "Large 726 x 432mm working area for versatile production",
      "Up to 120W CO2 for fast engraving and thick material cutting",
      "Flexx dual-source technology available",
      "CeramiCore CO2 laser source for long life and stability",
      "Integrated camera system for precise material positioning",
      "Pass-through capability for oversized materials",
    ],
    materials: ["Wood", "Acrylic", "Leather", "Glass", "Paper", "Anodized Aluminum", "Coated Metals", "Stone", "Fabric", "Rubber"],
    inStock: true,
    isFeatured: true,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-100", "trotec-speedy-360", "trotec-speedy-400"],
    seo: {
      title: "Trotec Speedy 300 Laser Engraver & Cutter",
      description: "Mid-range professional laser engraver by Trotec with 726x432mm working area. Up to 120W CO2 for high-speed production.",
      keywords: ["Trotec Speedy 300", "laser engraver", "laser cutter", "professional laser"],
    },
  },
  {
    id: "3",
    slug: "trotec-speedy-360",
    name: "Trotec Speedy 360",
    shortDescription:
      "High-performance flatbed laser with extended working area and premium features for demanding production.",
    description:
      "The Trotec Speedy 360 combines a generous working area with Trotec's fastest engraving technology. Designed for high-demand production environments, it features the same robust construction and intelligent features as the flagship Speedy 400 in a slightly more compact form factor. Ideal for sign shops, industrial engraving, and multi-material processing.",
    category: "flatbed-engravers",
    images: [
      { src: "/images/products/trotec-speedy-360/main.jpg", alt: "Trotec Speedy 360 laser engraver", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Working Area", value: "813 x 508", unit: "mm" },
      { label: "Laser Source", value: "CO2 / Fiber / Flexx" },
      { label: "CO2 Laser Power", value: "Up to 120", unit: "W" },
      { label: "Fiber Laser Power", value: "Up to 50", unit: "W" },
      { label: "Max Engraving Speed", value: "3.55", unit: "m/s" },
      { label: "Resolution", value: "Up to 1000", unit: "dpi" },
      { label: "Z-Depth", value: "200", unit: "mm" },
      { label: "Software", value: "Trotec Ruby" },
    ],
    features: [
      "Extended 813 x 508mm working area",
      "Flexx dual-source for CO2 + fiber processing",
      "High-speed OptiMotion servo drives",
      "InPack Technology sealed optics path",
      "Integrated exhaust management system",
      "Trotec Ruby workflow software included",
    ],
    materials: ["Wood", "Acrylic", "Leather", "Glass", "Metal (coated/anodized)", "Paper", "Stone", "Fabric", "Rubber", "MDF"],
    inStock: true,
    isFeatured: true,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-300", "trotec-speedy-400"],
    seo: {
      title: "Trotec Speedy 360 High-Performance Laser Engraver",
      description: "High-performance Trotec laser engraver with 813x508mm bed. Flexx dual-source technology for CO2 and fiber in one machine.",
      keywords: ["Trotec Speedy 360", "laser engraver", "flexx laser", "dual source laser"],
    },
  },
  {
    id: "4",
    slug: "trotec-speedy-400",
    name: "Trotec Speedy 400",
    shortDescription:
      "Trotec's flagship flatbed laser engraver with the largest working area and maximum power in the Speedy series.",
    description:
      "The Trotec Speedy 400 is the flagship of the Speedy series, offering the largest working area and the most powerful laser options available. Built for high-volume production facilities that demand the absolute best in speed, precision, and reliability. With up to 120W CO2 and 50W fiber, the Speedy 400 is the ultimate all-in-one laser processing system.",
    category: "flatbed-engravers",
    images: [
      { src: "/images/products/trotec-speedy-400/main.jpg", alt: "Trotec Speedy 400 flagship laser engraver", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Working Area", value: "1000 x 610", unit: "mm" },
      { label: "Laser Source", value: "CO2 / Fiber / Flexx" },
      { label: "CO2 Laser Power", value: "Up to 120", unit: "W" },
      { label: "Fiber Laser Power", value: "Up to 50", unit: "W" },
      { label: "Max Engraving Speed", value: "3.55", unit: "m/s" },
      { label: "Resolution", value: "Up to 1000", unit: "dpi" },
      { label: "Z-Depth", value: "305", unit: "mm" },
      { label: "Software", value: "Trotec Ruby" },
    ],
    features: [
      "Largest working area in the Speedy series: 1000 x 610mm",
      "305mm Z-depth for thick or tall objects",
      "Flexx dual-source technology for ultimate versatility",
      "CeramiCore laser source with industry-leading lifespan",
      "Pass-through doors front and back for unlimited material length",
      "Integrated camera and auto-focus system",
    ],
    materials: ["Wood", "Acrylic", "Leather", "Glass", "Metal (coated/anodized)", "Paper", "Stone", "Fabric", "Rubber", "MDF", "Foam"],
    inStock: true,
    isFeatured: true,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-360", "trotec-speedmarker-300"],
    seo: {
      title: "Trotec Speedy 400 Flagship Laser Engraver",
      description: "Trotec's flagship flatbed laser engraver. Largest Speedy series working area with up to 120W CO2 and 50W fiber.",
      keywords: ["Trotec Speedy 400", "flagship laser", "large format engraver", "professional laser"],
    },
  },
  {
    id: "5",
    slug: "trotec-sp500",
    name: "Trotec SP500",
    shortDescription:
      "Large-format flatbed laser for high-throughput cutting and engraving of non-metal materials.",
    description:
      "The Trotec SP500 bridges the gap between the Speedy desktop series and full industrial production. With a large working area, powerful CO2 laser options, and robust construction, it handles high-volume cutting and engraving of acrylic, wood, textiles, and more. Built for sign shops, display manufacturers, packaging companies, and fabrication businesses that need to process larger sheet materials at production speeds.",
    category: "flatbed-engravers",
    images: [
      { src: "/images/products/trotec-sp500/main.png", alt: "Trotec SP500 large format flatbed laser", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Working Area", value: "1245 x 710", unit: "mm" },
      { label: "Laser Source", value: "CO2" },
      { label: "CO2 Laser Power", value: "120 / 200", unit: "W" },
      { label: "Max Speed", value: "3.55", unit: "m/s" },
      { label: "Resolution", value: "Up to 1000", unit: "dpi" },
      { label: "Z-Depth", value: "305", unit: "mm" },
      { label: "Software", value: "Trotec Ruby" },
    ],
    features: [
      "Large 1245 x 710mm working area for oversized materials",
      "Available in 120W and 200W CO2 configurations",
      "Robust steel frame construction for industrial reliability",
      "Pass-through doors for unlimited material length",
      "Vacuum hold-down table for flat material processing",
      "Trotec Ruby software for intuitive workflow management",
    ],
    materials: ["Acrylic", "Wood", "MDF", "Plywood", "Textiles", "Leather", "Paper", "Cardboard", "Foam", "Rubber"],
    inStock: true,
    isFeatured: true,
    isNew: true,
    relatedProductSlugs: ["trotec-speedy-400", "trotec-speedy-360"],
    seo: {
      title: "Trotec SP500 Large Format Flatbed Laser",
      description: "Large-format Trotec flatbed laser with 1245x710mm working area. Up to 400W CO2 for high-throughput cutting and engraving.",
      keywords: ["Trotec SP500", "large format laser", "flatbed laser cutter", "production laser"],
    },
  },
  {
    id: "7",
    slug: "trotec-speedmarker-300",
    name: "Trotec SpeedMarker 300",
    shortDescription:
      "Compact fiber laser marking system for high-speed metal and plastic marking applications.",
    description:
      "The Trotec SpeedMarker 300 is a dedicated fiber laser marking station designed for permanent marking on metals and plastics. Its enclosed, Class 1 design makes it safe for any workspace, while the high-speed galvo scanning system delivers thousands of marks per hour. Ideal for serial numbers, barcodes, logos, and traceability marking.",
    category: "fiber-marking",
    images: [
      { src: "/images/products/trotec-speedmarker-300/main.jpg", alt: "Trotec SpeedMarker 300 fiber laser", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Marking Area", value: "100 x 100 to 290 x 290", unit: "mm" },
      { label: "Laser Source", value: "Fiber" },
      { label: "Fiber Laser Power", value: "20 / 30 / 50", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Marking Speed", value: "Up to 8000", unit: "mm/s" },
      { label: "Safety Class", value: "Class 1 (fully enclosed)" },
      { label: "Software", value: "Trotec SpeedMark" },
    ],
    features: [
      "Class 1 fully enclosed safety design",
      "High-speed galvo scanning for production marking",
      "Available in 20W, 30W, and 50W configurations",
      "Color marking capability on stainless steel",
      "Integrated automation interfaces for production line integration",
      "SpeedMark software with barcode and serialization support",
    ],
    materials: ["Stainless Steel", "Aluminum", "Titanium", "Brass", "Copper", "Anodized Metals", "Plastics", "Coated Metals"],
    inStock: true,
    isFeatured: false,
    isNew: false,
    relatedProductSlugs: ["trotec-speedmarker-700", "trotec-speedmarker-cl"],
    seo: {
      title: "Trotec SpeedMarker 300 Fiber Laser Marking System",
      description: "Compact fiber laser marking station by Trotec. Class 1 enclosed design for safe, high-speed metal and plastic marking.",
      keywords: ["Trotec SpeedMarker", "fiber laser marking", "metal marking", "laser engraving"],
    },
  },
  {
    id: "8",
    slug: "trotec-speedmarker-700",
    name: "Trotec SpeedMarker 700",
    shortDescription:
      "Large-field fiber laser marker with extended working area for bigger parts and higher volume.",
    description:
      "The Trotec SpeedMarker 700 extends the SpeedMarker platform with a larger marking field and working area, making it suitable for bigger parts, fixtures, and higher-volume batch processing. The same precision galvo scanning system and robust fiber laser source deliver permanent, high-contrast marks on metals and engineered plastics.",
    category: "fiber-marking",
    images: [
      { src: "/images/products/trotec-speedmarker-700/main.png", alt: "Trotec SpeedMarker 700 large fiber laser marker", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Marking Area", value: "Up to 290 x 290", unit: "mm" },
      { label: "Working Area", value: "690 x 500", unit: "mm" },
      { label: "Laser Source", value: "Fiber" },
      { label: "Fiber Laser Power", value: "20 / 30 / 50", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Z-Axis Travel", value: "420", unit: "mm" },
      { label: "Safety Class", value: "Class 1 (fully enclosed)" },
      { label: "Software", value: "Trotec SpeedMark" },
    ],
    features: [
      "Extended 690 x 500mm working area for large parts",
      "420mm Z-axis travel for tall workpieces",
      "Motorized XY table for multi-position marking",
      "Class 1 laser safety enclosure",
      "Barcode, QR code, and serial number generation",
      "Production line integration via automation interfaces",
    ],
    materials: ["Stainless Steel", "Aluminum", "Titanium", "Brass", "Copper", "Anodized Metals", "Plastics", "Coated Metals", "Tool Steel"],
    inStock: true,
    isFeatured: false,
    isNew: true,
    relatedProductSlugs: ["trotec-speedmarker-300", "trotec-speedmarker-1300"],
    seo: {
      title: "Trotec SpeedMarker 700 Large Field Fiber Marker",
      description: "Large-field fiber laser marking system by Trotec. Extended working area for bigger parts and high-volume production.",
      keywords: ["Trotec SpeedMarker 700", "fiber laser", "large field marking", "industrial marking"],
    },
  },
  {
    id: "9",
    slug: "trotec-speedmarker-1300",
    name: "Trotec SpeedMarker 1300",
    shortDescription:
      "Extra-large fiber laser marking system with an oversized working area for big parts and heavy workpieces.",
    description:
      "The Trotec SpeedMarker 1300 is the largest dedicated marking station in the SpeedMarker lineup. Its extra-large working area and heavy-duty table accommodate oversized parts, heavy fixtures, and multi-part batch layouts. Ideal for aerospace, automotive, medical device, and heavy industrial marking applications where part size and weight demand a bigger machine.",
    category: "fiber-marking",
    images: [
      { src: "/images/products/trotec-speedmarker-1300/main.jpg", alt: "Trotec SpeedMarker 1300 large marking system", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Marking Area", value: "Up to 290 x 290", unit: "mm" },
      { label: "Working Area", value: "1000 x 600", unit: "mm" },
      { label: "Laser Source", value: "Fiber" },
      { label: "Fiber Laser Power", value: "20 / 30 / 50 / 100", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Z-Axis Travel", value: "600", unit: "mm" },
      { label: "Max Load", value: "100", unit: "kg" },
      { label: "Safety Class", value: "Class 1 (fully enclosed)" },
      { label: "Software", value: "Trotec SpeedMark" },
    ],
    features: [
      "Extra-large 1000 x 600mm working area for oversized parts",
      "600mm Z-axis travel for tall and heavy workpieces",
      "Up to 100W fiber laser for deep marking and engraving",
      "Heavy-duty table supports up to 100kg",
      "Motorized XY positioning for multi-location marking",
      "Full automation interface for production line integration",
    ],
    materials: ["Stainless Steel", "Aluminum", "Titanium", "Brass", "Copper", "Hardened Steel", "Anodized Metals", "Plastics", "Tool Steel", "Carbide"],
    inStock: true,
    isFeatured: false,
    isNew: true,
    relatedProductSlugs: ["trotec-speedmarker-700", "trotec-speedmarker-cl"],
    seo: {
      title: "Trotec SpeedMarker 1300 Extra-Large Fiber Marker",
      description: "Extra-large fiber laser marking station by Trotec. 1000x600mm working area for oversized parts in aerospace, automotive, and industrial applications.",
      keywords: ["Trotec SpeedMarker 1300", "large marking system", "industrial fiber laser", "heavy part marking"],
    },
  },
  {
    id: "10",
    slug: "trotec-speedmarker-cl",
    name: "Trotec SpeedMarker CL",
    shortDescription:
      "Conveyor-fed fiber laser marking system for continuous high-volume inline production marking.",
    description:
      "The Trotec SpeedMarker CL (Conveyor Line) is designed for seamless integration into automated production lines. Parts are fed through the enclosed marking station on a conveyor belt, enabling continuous marking without operator intervention. Ideal for high-volume serial number, barcode, and traceability marking in manufacturing environments.",
    category: "fiber-marking",
    images: [
      { src: "/images/products/trotec-speedmarker-cl/main.jpg", alt: "Trotec SpeedMarker CL conveyor line marker", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Marking Area", value: "Up to 290 x 290", unit: "mm" },
      { label: "Laser Source", value: "Fiber" },
      { label: "Fiber Laser Power", value: "20 / 30 / 50", unit: "W" },
      { label: "Wavelength", value: "1064", unit: "nm" },
      { label: "Conveyor", value: "Integrated belt conveyor" },
      { label: "Conveyor Speed", value: "Variable, up to 30", unit: "m/min" },
      { label: "Safety Class", value: "Class 1 (fully enclosed)" },
      { label: "Software", value: "Trotec SpeedMark" },
    ],
    features: [
      "Integrated conveyor belt for continuous inline marking",
      "Automatic part detection and marking trigger",
      "Variable conveyor speed for different throughput requirements",
      "Class 1 enclosure for operator-free production",
      "PLC and automation interface for factory integration",
      "Mark-on-the-fly capability for moving parts",
    ],
    materials: ["Stainless Steel", "Aluminum", "Titanium", "Brass", "Copper", "Anodized Metals", "Plastics", "Coated Metals"],
    inStock: true,
    isFeatured: false,
    isNew: false,
    relatedProductSlugs: ["trotec-speedmarker-1300", "trotec-speedmarker-700"],
    seo: {
      title: "Trotec SpeedMarker CL Conveyor Line Marker",
      description: "Conveyor-fed fiber laser marking system for automated production lines. Continuous inline marking for high-volume manufacturing.",
      keywords: ["Trotec SpeedMarker CL", "conveyor laser marking", "inline marking", "production marking"],
    },
  },
  {
    id: "11",
    slug: "trotec-atmos-air-filter",
    name: "Trotec Atmos Exhaust System",
    shortDescription:
      "Purpose-built fume extraction and filtration system designed specifically for Trotec lasers.",
    description:
      "The Trotec Atmos exhaust systems are engineered to work seamlessly with Trotec laser machines. Multi-stage filtration captures particulates, gases, and odors generated during laser processing. Available in multiple configurations to match your specific machine and application, the Atmos line ensures a clean, safe, and compliant workspace.",
    category: "accessories",
    images: [
      { src: "/images/products/trotec-atmos/main.jpg", alt: "Trotec Atmos exhaust and filtration system", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Filtration", value: "Multi-stage (pre, HEPA, carbon)" },
      { label: "HEPA Efficiency", value: "99.97% at 0.3μm" },
      { label: "Models", value: "Atmos Compact / Mono / Duo" },
      { label: "Noise Level", value: "From 53", unit: "dB(A)" },
      { label: "Connectivity", value: "Direct machine interface" },
      { label: "Filter Monitoring", value: "Intelligent sensor system" },
    ],
    features: [
      "Designed specifically for Trotec laser systems",
      "Multi-stage HEPA and activated carbon filtration",
      "Intelligent filter monitoring with replacement alerts",
      "Direct interface with Trotec machines for automatic on/off",
      "Multiple models for different machine sizes and applications",
      "Quiet operation suitable for office environments",
    ],
    materials: [],
    inStock: true,
    isFeatured: false,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-100", "trotec-speedy-300"],
    seo: {
      title: "Trotec Atmos Exhaust & Filtration Systems",
      description: "Purpose-built fume extraction systems for Trotec lasers. HEPA and carbon filtration for clean, safe laser operation.",
      keywords: ["Trotec Atmos", "laser exhaust", "fume extraction", "laser filtration"],
    },
  },
  {
    id: "12",
    slug: "trotec-rotary-attachment",
    name: "Trotec Rotary Attachment",
    shortDescription:
      "Precision rotary engraving attachment for cylindrical objects like bottles, glasses, and tools.",
    description:
      "The Trotec Rotary Attachment enables 360-degree engraving on cylindrical and round objects. Engineered for seamless integration with Trotec Speedy series machines, it delivers the same precision on curved surfaces that you expect from flat engraving. Perfect for personalized drinkware, awards, tools, and promotional products.",
    category: "accessories",
    images: [
      { src: "/images/products/trotec-rotary/main.jpg", alt: "Trotec rotary attachment for cylindrical engraving", width: 800, height: 600 },
    ],
    priceDisplay: "Request a Quote",
    specifications: [
      { label: "Max Diameter", value: "Up to 200", unit: "mm" },
      { label: "Compatibility", value: "Trotec Speedy Series" },
      { label: "Drive", value: "Precision stepper motor" },
      { label: "Setup", value: "Quick-mount, tool-free" },
    ],
    features: [
      "360-degree engraving on cylindrical objects",
      "Quick-mount system for fast setup and changeover",
      "Automatic configuration via Trotec Ruby software",
      "Precision stepper motor for smooth, consistent rotation",
      "Compatible with all Trotec Speedy series machines",
      "Handles glasses, bottles, pens, rings, and tools",
    ],
    materials: [],
    inStock: true,
    isFeatured: false,
    isNew: false,
    relatedProductSlugs: ["trotec-speedy-100", "trotec-speedy-300"],
    seo: {
      title: "Trotec Rotary Attachment for Cylindrical Engraving",
      description: "Engrave bottles, glasses, tools and cylindrical objects with precision. Compatible with all Trotec Speedy series lasers.",
      keywords: ["Trotec rotary", "cylindrical engraving", "bottle engraving", "rotary attachment"],
    },
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
