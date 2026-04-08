import estate1 from '@/assets/estate-1.jpg';
import estate2 from '@/assets/estate-2.jpg';
import estate3 from '@/assets/estate-3.jpg';

export interface Estate {
  slug: string;
  name: string;
  location: string;
  status: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  price: string;
}

export const estates: Estate[] = [
  {
    slug: 'promiseland-al-barka',
    name: 'PROMISELAND AL-BARKA',
    location: 'Abuja, FCT',
    status: 'Available',
    description: 'A premium estate in one of Abuja\'s most sought-after locations with excellent infrastructure and rapid appreciation.',
    longDescription: 'Promiseland Al-Barka is a carefully planned estate offering premium plots with verified documentation. Located in a rapidly developing area with proximity to major landmarks, this estate promises exceptional returns for smart investors.',
    image: estate1,
    gallery: [estate1, estate2, estate3],
    features: ['Certificate of Occupancy (C of O)', 'Tarred Road Network', 'Perimeter Fencing', 'Security Post', 'Electricity Infrastructure', 'Drainage System'],
    price: 'From ₦2,500,000',
  },
  {
    slug: 'penny-city',
    name: 'PENNY CITY',
    location: 'Abuja, FCT',
    status: 'Available',
    description: 'An affordable smart city concept designed for modern living with world-class amenities.',
    longDescription: 'Penny City is designed to be the most affordable smart estate in Abuja. With modern infrastructure planning and a focus on community living, this estate offers an incredible entry point for first-time investors and homeowners.',
    image: estate2,
    gallery: [estate2, estate3, estate1],
    features: ['Affordable Payment Plans', 'Smart City Infrastructure', 'Green Spaces', 'Community Center', 'Street Lights', 'Good Road Network'],
    price: 'From ₦1,500,000',
  },
  {
    slug: 'maitama-2',
    name: 'MAITAMA 2',
    location: 'Maitama Extension, Abuja',
    status: 'Developing',
    description: 'Premium plots in the prestigious Maitama extension area — the gold standard of Abuja real estate.',
    longDescription: 'Maitama 2 brings the prestige of Maitama to discerning investors at accessible prices. This extension area is poised for massive appreciation as development continues in this prime corridor of the FCT.',
    image: estate3,
    gallery: [estate3, estate1, estate2],
    features: ['Prime Location', 'High Appreciation Potential', 'Verified Title', 'Proximity to City Center', 'Infrastructure Development', 'Exclusive Neighborhood'],
    price: 'From ₦5,000,000',
  },
  {
    slug: 'karsana-north',
    name: 'KARSANA NORTH',
    location: 'Karsana, Abuja',
    status: 'Available',
    description: 'Strategically positioned in the fast-growing Karsana district with excellent access roads.',
    longDescription: 'Karsana North Estate offers strategic positioning in one of Abuja\'s fastest-growing residential areas. With proximity to the Northern Expressway and established communities, this estate provides both comfort and investment value.',
    image: estate1,
    gallery: [estate1, estate3, estate2],
    features: ['Strategic Location', 'Rapid Development Area', 'Good Access Roads', 'Residential Zoning', 'Secure Documentation', 'Payment Flexibility'],
    price: 'From ₦3,000,000',
  },
  {
    slug: 'smart-city-lugbe',
    name: 'SMART CITY LUGBE',
    location: 'Lugbe, Abuja',
    status: 'Available',
    description: 'A technology-driven estate concept in the bustling Lugbe area with modern amenities.',
    longDescription: 'Smart City Lugbe is a forward-thinking development bringing smart infrastructure to one of Abuja\'s most populated areas. With planned tech hubs, reliable utilities, and modern planning, this is the future of urban living in Abuja.',
    image: estate2,
    gallery: [estate2, estate1, estate3],
    features: ['Smart Infrastructure', 'Tech-Ready Plots', 'Proximity to Airport', 'Commercial Zones', 'Recreational Areas', 'Stable Power Supply'],
    price: 'From ₦2,000,000',
  },
  {
    slug: 'lugbe-phase-1',
    name: 'LUGBE PHASE 1',
    location: 'Lugbe, Abuja',
    status: 'Developing',
    description: 'Our flagship Lugbe development with proven track record and ongoing infrastructure delivery.',
    longDescription: 'Lugbe Phase 1 represents our commitment to delivering value in one of Abuja\'s most established suburbs. With ongoing infrastructure development and a strong investor community, this estate continues to appreciate year after year.',
    image: estate3,
    gallery: [estate3, estate2, estate1],
    features: ['Established Community', 'Ongoing Development', 'Proven Appreciation', 'Mixed-Use Zoning', 'Water Supply', 'Estate Management'],
    price: 'From ₦2,800,000',
  },
  {
    slug: 'city-view-2',
    name: 'CITY VIEW 2',
    location: 'Abuja, FCT',
    status: 'Available',
    description: 'Panoramic city views meet premium real estate — an exclusive investment opportunity.',
    longDescription: 'City View 2 offers an unmatched combination of scenic beauty and investment potential. Elevated terrain provides stunning views of the Abuja skyline while being minutes from key business districts.',
    image: estate1,
    gallery: [estate1, estate2, estate3],
    features: ['Elevated Terrain', 'City Skyline Views', 'Premium Location', 'Gated Community', 'Underground Drainage', 'Recreational Facilities'],
    price: 'From ₦3,500,000',
  },
  {
    slug: 'tri-tower',
    name: 'TRI-TOWER',
    location: 'Abuja, FCT',
    status: 'Coming Soon',
    description: 'A landmark mixed-use development combining residential, commercial, and lifestyle spaces.',
    longDescription: 'Tri-Tower is our most ambitious project — a mixed-use development that will redefine luxury living in Abuja. Combining residential apartments, commercial spaces, and lifestyle amenities in a single iconic structure.',
    image: estate2,
    gallery: [estate2, estate3, estate1],
    features: ['Mixed-Use Development', 'Luxury Apartments', 'Commercial Spaces', 'Rooftop Amenities', 'Parking Garage', 'Concierge Services'],
    price: 'From ₦10,000,000',
  },
];

export const statusColors: Record<string, string> = {
  Available: 'bg-green-deep text-primary-foreground',
  Developing: 'bg-gold text-foreground',
  'Coming Soon': 'bg-secondary text-secondary-foreground',
  'Sold Out': 'bg-destructive text-destructive-foreground',
};

export const getEstateBySlug = (slug: string) => estates.find((e) => e.slug === slug);
