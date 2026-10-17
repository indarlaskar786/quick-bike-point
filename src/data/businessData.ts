export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  tag?: string;
  badge?: string;
  isAssistanceOnly?: boolean;
  note?: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  snippet: string;
  timeAgo: string;
  highlight?: boolean;
  avatarColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const BUSINESS_CONFIG = {
  name: "Quick Bike Point",
  legalName: "Quick Bike Point Two Wheeler Service",
  subtitle: "Bike & Scooter Service",
  eyebrow: "PANATHUR'S TWO-WHEELER SERVICE EXPERTS",
  headline: "Reliable Bike & Scooter Service in Panathur",
  supportingText:
    "Professional servicing, repairs and maintenance for your bike or scooter. Quality work, experienced mechanics and honest service.",
  category: "Two Wheeler Repair Shop",
  
  rating: 4.9,
  maxRating: 5,
  reviewsCount: 32,
  
  phone: "06363295272",
  phoneDisplay: "063632 95272",
  phoneHref: "tel:06363295272",
  whatsappNumber: "916363295272",
  
  address: "Panathur Main Rd, opposite Dine Bell Restaurant, Munireddy Layout, Mariyappa Layout, Kadubeesanahalli, Panathur, Bengaluru, Karnataka 560103",
  addressShort: "Panathur Main Rd, opposite Dine Bell Restaurant, Kadubeesanahalli, Panathur, Bengaluru 560103",
  addressLines: [
    "Panathur Main Rd, opposite Dine Bell Restaurant,",
    "Munireddy Layout, Mariyappa Layout, Kadubeesanahalli,",
    "Panathur, Bengaluru, Karnataka 560103",
  ],
  landmark: "Opposite Dine Bell Restaurant",
  locality: "Panathur & Kadubeesanahalli",
  city: "Bengaluru, Karnataka",
  plusCode: "WMQX+9F Bengaluru, Karnataka",
  
  hoursToday: "Open · Closes at 1:00 AM",
  hoursNotice: "Call before visiting to confirm availability.",
  
  positioning: "Professional bike and scooter servicing, repairs and maintenance in Panathur, Bengaluru.",
  
  aboutDescription:
    "Quick Bike Point is a local two-wheeler repair and service shop serving riders around Panathur and Kadubeesanahalli, Bengaluru. Whether your bike needs regular servicing, an engine repair or a quick fix, the team is ready to help keep you back on the road.",

  trustStrip: [
    "Experienced Mechanics",
    "Bike & Scooter Service",
    "Reliable Repairs",
    "Convenient Panathur Location",
  ],

  // Links
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Quick+Bike+Point+Panathur+Main+Rd+opposite+Dine+Bell+Restaurant+Kadubeesanahalli+Panathur+Bengaluru+560103",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Quick+Bike+Point+Panathur+Main+Rd+opposite+Dine+Bell+Restaurant+Bengaluru+560103",
  
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Hi Quick Bike Point, I would like to enquire about bike/scooter service in Panathur.";
    return `https://wa.me/916363295272?text=${encodeURIComponent(customMessage || defaultMsg)}`;
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bike-servicing",
    name: "Bike Servicing",
    description: "Regular maintenance and complete bike servicing.",
    tag: "Essential",
    badge: "All Makes & Models",
    iconName: "Wrench",
  },
  {
    id: "scooter-servicing",
    name: "Scooter Servicing",
    description: "Reliable servicing for scooters and automatic two-wheelers.",
    tag: "Daily Riders",
    badge: "Activa • Jupiter • Access",
    iconName: "Bike",
  },
  {
    id: "engine-repair",
    name: "Engine Repair",
    description: "Professional diagnosis and engine repair.",
    tag: "Specialist",
    badge: "Noise & Performance",
    iconName: "Flame",
  },
  {
    id: "general-repairs",
    name: "General Repairs",
    description: "Quick solutions for common bike and scooter problems.",
    tag: "Fast Fix",
    badge: "Cable, Chain & Tuning",
    iconName: "Hammer",
  },
  {
    id: "oil-change",
    name: "Oil Change",
    description: "Engine oil replacement and routine maintenance.",
    tag: "Routine Care",
    badge: "Quality Lubricants",
    iconName: "Droplets",
  },
  {
    id: "brake-tyre",
    name: "Brake & Tyre Service",
    description: "Brake inspection, repair and tyre-related service.",
    tag: "Safety Check",
    badge: "Pads, Shoes & Alignment",
    iconName: "Disc",
  },
  {
    id: "electrical-repairs",
    name: "Electrical Repairs",
    description: "Battery, wiring, lights and electrical troubleshooting.",
    tag: "Diagnostics",
    badge: "Battery, Horn & Lights",
    iconName: "BatteryCharging",
  },
  {
    id: "pickup-assistance",
    name: "Pickup / Service Assistance",
    description: "Contact us to check availability for two-wheeler assistance.",
    note: "Contact us to check availability. Not guaranteed at all times.",
    tag: "On Request",
    badge: "Contact to Check Availability",
    isAssistanceOnly: true,
    iconName: "Navigation",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "mechanics",
    title: "Experienced Mechanics",
    description: "Skilled professionals who understand two-wheelers.",
    iconName: "UserCheck",
  },
  {
    id: "quality",
    title: "Quality Service",
    description: "Careful inspection and reliable repair work.",
    iconName: "ShieldCheck",
  },
  {
    id: "transparent",
    title: "Fair & Transparent",
    description: "Clear communication before major repairs.",
    iconName: "CheckCircle2",
  },
  {
    id: "convenient",
    title: "Local & Convenient",
    description: "Conveniently located in Panathur, Bengaluru.",
    iconName: "MapPin",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Local Rider",
    rating: 5,
    snippet: "Good service",
    timeAgo: "Google Review",
    avatarColor: "bg-emerald-600",
  },
  {
    id: "rev-2",
    author: "Panathur Rider",
    rating: 5,
    snippet: "बहुत अच्छा",
    timeAgo: "Google Review",
    avatarColor: "bg-orange-600",
  },
  {
    id: "rev-3",
    author: "Panathur Commuter",
    rating: 5,
    snippet: "Very nice done my bike engine repair here",
    timeAgo: "Google Review",
    highlight: true,
    avatarColor: "bg-blue-600",
  },
  {
    id: "rev-4",
    author: "Daily Rider",
    rating: 5,
    snippet: "Great job done here 👏 do recommend for bike and scooter service",
    timeAgo: "Google Review",
    highlight: true,
    avatarColor: "bg-amber-600",
  },
  {
    id: "rev-5",
    author: "Bike Owner",
    rating: 5,
    snippet: "Well experienced mechanic's ...❤",
    timeAgo: "Google Review",
    highlight: true,
    avatarColor: "bg-red-600",
  },
  {
    id: "rev-6",
    author: "Two-Wheeler Owner",
    rating: 5,
    snippet: "Nice bike services good pric!",
    timeAgo: "Google Review",
    highlight: true,
    avatarColor: "bg-purple-600",
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Bike Service",
    category: "Two-Wheeler Servicing",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80",
    caption: "Inspection, cleaning and complete two-wheeler servicing.",
  },
  {
    id: "gal-2",
    title: "Workshop",
    category: "Work Station",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80",
    caption: "Organized workshop space equipped for all two-wheeler maintenance.",
  },
  {
    id: "gal-3",
    title: "Maintenance",
    category: "Routine Care",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    caption: "Regular preventive checks, chain care and lubrication.",
  },
  {
    id: "gal-4",
    title: "Repair",
    category: "Troubleshooting",
    imageUrl: "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?auto=format&fit=crop&w=900&q=80",
    caption: "Diagnosis and mechanical repair for scooters and bikes.",
  },
  {
    id: "gal-5",
    title: "Engine Repair",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80",
    caption: "Engine inspection, troubleshooting and rebuild precision work.",
  },
  {
    id: "gal-6",
    title: "Tools & Inspection",
    category: "Mechanical Work",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    caption: "Dedicated tools for electrical, brake, tyre and engine service.",
  },
];
