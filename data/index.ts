import type {
  NavItem,
  ServiceItem,
  ProjectItem,
  StatItem,
  ValueItem,
  WhyChooseItem,
  SocialLink,
} from "@/types";

// ============================================================
// NAVIGATION
// ============================================================
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// COMPANY INFO
// ============================================================
export const COMPANY = {
  name: "Olymors Investment Limited",
  shortName: "Olymors",
  tagline: "Engineering Value. Delivering Excellence.",
  phone: "07077653308",
  email: "Info@Olymors.com",
  address: "38, Oloja Road Igbe, Ikorodu, Lagos State",
  founded: 2015,
};

// ============================================================
// HERO STATS
// ============================================================
export const STATS: StatItem[] = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Satisfied Clients" },
  { value: 6, suffix: "", label: "Industries Served" },
];

// ============================================================
// SERVICES
// ============================================================
export const SERVICES: ServiceItem[] = [
  {
    id: "engineering",
    title: "Engineering Services",
    description:
      "We provide comprehensive engineering solutions — from structural design and mechanical systems to electrical installations and technical consulting. Our experienced engineers deliver projects that meet international standards and exceed client expectations.",
    icon: "Settings",
    features: [
      "Structural Engineering",
      "Mechanical & Electrical Systems",
      "Technical Consulting",
      "Engineering Design",
      "Quality Assurance",
      "Site Supervision",
    ],
    color: "from-blue-600 to-navy-500",
  },
  {
    id: "construction",
    title: "Construction & Project Execution",
    description:
      "From groundbreaking to handover, we manage the full lifecycle of construction projects. Our team delivers residential, commercial, and industrial structures on time, within budget, and to the highest quality standards.",
    icon: "Building2",
    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Industrial Facilities",
      "Project Management",
      "Infrastructure Development",
      "Renovation & Remodeling",
    ],
    color: "from-amber-600 to-gold-500",
  },
  {
    id: "contracts",
    title: "Contract Services",
    description:
      "We execute contracts across diverse sectors including government, private, and institutional clients. Our contract management ensures seamless execution, compliance, risk management, and value delivery at every stage.",
    icon: "FileText",
    features: [
      "Government Contracts",
      "Private Sector Projects",
      "Contract Management",
      "Procurement Services",
      "Compliance & Risk",
      "Stakeholder Management",
    ],
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: "merchandise",
    title: "General Merchandise",
    description:
      "We supply a wide range of construction materials, industrial goods, and general merchandise. Our reliable supply chain ensures quality products are delivered to your project site on time and at competitive prices.",
    icon: "Package",
    features: [
      "Construction Materials",
      "Industrial Equipment",
      "Building Supplies",
      "Hardware & Tools",
      "Safety Equipment",
      "Bulk Procurement",
    ],
    color: "from-purple-600 to-indigo-500",
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-001",
    title: "Ikorodu Road Infrastructure Upgrade",
    category: "Infrastructure",
    description:
      "Comprehensive road infrastructure improvement project covering 12km of arterial roads, drainage systems, and pedestrian walkways in the Ikorodu corridor.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    year: "2024",
    status: "completed",
    tags: ["Roads", "Drainage", "Infrastructure"],
  },
  {
    id: "proj-002",
    title: "Commercial Office Complex, Victoria Island",
    category: "Commercial Buildings",
    description:
      "A 12-floor premium commercial office development with smart building systems, modern facades, and sustainable design elements in Lagos's prime business district.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    year: "2023",
    status: "completed",
    tags: ["Commercial", "High-rise", "Smart Building"],
  },
  {
    id: "proj-003",
    title: "Industrial Warehouse Facility, Apapa",
    category: "Industrial Projects",
    description:
      "A state-of-the-art 8,000 sqm industrial warehouse with climate control, heavy-duty flooring, fire suppression systems, and modern logistics infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1553708881-112abc53fe54?w=800&q=80",
    year: "2023",
    status: "completed",
    tags: ["Industrial", "Warehouse", "Logistics"],
  },
  {
    id: "proj-004",
    title: "Power Distribution Engineering, Lagos",
    category: "Engineering Solutions",
    description:
      "End-to-end electrical engineering for a medium-voltage power distribution network serving 5,000+ residential and commercial units across three local government areas.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    year: "2024",
    status: "completed",
    tags: ["Electrical", "Power", "Engineering"],
  },
  {
    id: "proj-005",
    title: "Residential Estate Development, Ikorodu",
    category: "Construction",
    description:
      "A 60-unit luxury residential estate featuring detached and semi-detached homes with modern amenities, perimeter security, and landscaped common areas.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    year: "2022",
    status: "completed",
    tags: ["Residential", "Estate", "Construction"],
  },
  {
    id: "proj-006",
    title: "Multi-Purpose Sports Complex",
    category: "Commercial Buildings",
    description:
      "A modern multi-purpose sports and recreation complex with an Olympic-standard swimming pool, indoor sports hall, fitness centre, and event spaces.",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    year: "2022",
    status: "completed",
    tags: ["Sports", "Recreation", "Commercial"],
  },
];

// ============================================================
// CORE VALUES
// ============================================================
export const CORE_VALUES: ValueItem[] = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, transparency, and ethical conduct in every project and partnership we undertake.",
    icon: "Shield",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We are committed to delivering superior quality and craftsmanship in all our engineering, construction, and commercial services.",
    icon: "Star",
  },
  {
    id: "reliability",
    title: "Reliability",
    description:
      "Our clients trust us to deliver on time, within budget, and to specification — consistently and without compromise.",
    icon: "CheckCircle",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace modern technologies, methods, and ideas to create smarter, more sustainable solutions for complex engineering challenges.",
    icon: "Lightbulb",
  },
  {
    id: "partnership",
    title: "Partnership",
    description:
      "We build lasting relationships with clients, communities, and stakeholders, working collaboratively toward shared goals and mutual success.",
    icon: "Handshake",
  },
];

// ============================================================
// WHY CHOOSE US
// ============================================================
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "excellence",
    title: "Professional Excellence",
    description:
      "Our team of highly qualified engineers, project managers, and specialists brings world-class expertise and precision to every engagement.",
    icon: "Award",
  },
  {
    id: "delivery",
    title: "Reliable Project Delivery",
    description:
      "We have a strong track record of completing projects on time, within budget, and to the exact specifications agreed with our clients.",
    icon: "Clock",
  },
  {
    id: "partnerships",
    title: "Strong Industry Partnerships",
    description:
      "Our network of trusted suppliers, contractors, and industry partners ensures we have access to the best resources for every project.",
    icon: "Network",
  },
  {
    id: "value",
    title: "Commitment to Value",
    description:
      "We optimize every project for cost-efficiency, longevity, and long-term return on investment without sacrificing quality.",
    icon: "TrendingUp",
  },
];

// ============================================================
// SOCIAL LINKS
// ============================================================
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "#", icon: "Linkedin" },
  { platform: "Twitter", href: "#", icon: "Twitter" },
  { platform: "Facebook", href: "#", icon: "Facebook" },
  { platform: "Instagram", href: "#", icon: "Instagram" },
];

// ============================================================
// PROJECT CATEGORIES
// ============================================================
export const PROJECT_CATEGORIES = [
  "All",
  "Infrastructure",
  "Commercial Buildings",
  "Engineering Solutions",
  "Construction",
  "Industrial Projects",
];
