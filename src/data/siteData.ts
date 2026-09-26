import { Truck, Route, Building2, HardHat, Milestone, Fuel, Navigation2, ShieldCheck, Container } from 'lucide-react';
import type { ElementType } from 'react';

// ─── Types ────────────────────────────────────────────────────

export type ProjectStatus = 'completed' | 'ongoing' | 'awaited';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ElementType;
  image: string;
}

export interface Project {
  name: string;
  location: string;
  category: string;
  status: ProjectStatus;
  progress: number | null;
}

export interface ProjectStats {
  completed: number;
  ongoing: number;
  awaited: number;
}

export interface Capability {
  title: string;
  description: string;
  icon: ElementType;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fleet' | 'aggregates' | 'dispatch';
  categoryLabel: string;
  location: string;
  image: string;
  caption: string;
  tag: string;
}

// ─── Company ──────────────────────────────────────────────────

export const company = {
  name: 'SSEM',
  fullName: 'Shree Shyam Earthmovers LLP',
};

// ─── Contact ──────────────────────────────────────────────────

export const contact = {
  email: 'info@ssem.in',
  address: '129, New Bus Stand Mau, District Bhind, 477222, Madhya Pradesh',
};

// ─── Navigation ───────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ─────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'TRANSPORT FLEET | LOGISTICS | INFRASTRUCTURE SUPPORT',
  headline: 'MOVING CARGO.\nBUILDING CONNECTIVITY.',
  description:
    'Reliable transport fleet and logistics operations supporting road, highway and infrastructure projects across India.',
  primaryCta: { label: 'Explore Our Fleet →', href: '#capabilities' },
  secondaryCta: { label: 'Contact Us', href: '#contact' },
  posterImage: '/images/ssem-hero-poster.jpg',
  videoSrc: '/videos/ssem-hero.mp4',
};

// ─── About ────────────────────────────────────────────────────

export const about = {
  eyebrow: 'Who We Are',
  title: 'Dedicated Transport & Fleet Operations',
  paragraphs: [
    'Shree Shyam Earthmovers LLP (SSEM) operates a heavy transport and commercial fleet network engineered specifically for large-scale logistics, road construction material haulage, and highway project supply chains.',
    'From dedicated dumper and multi-axle truck logistics moving thousands of metric tonnes of crushed stone, aggregates, and bitumen daily, to specialized low-bed trailers mobilizing heavy earthmovers and asphalt pavers across job sites — our entire operation is built around efficient, uninterrupted road transport.',
    'With real-time dispatch management, experienced heavy-vehicle pilots, and strict safety compliance, we ensure uninterrupted raw material pipelines for EPC contractors, government infrastructure authorities, and industrial partners.',
  ],
};

// ─── Services: Full Transport Verticals ────────────────────────

export const services: Service[] = [
  {
    title: 'Full Truckload (FTL) Freight',
    description:
      'Dedicated point-to-point heavy commercial truckload transport for construction, industrial, and infrastructure consignments with high-volume dispatch schedules.',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90&auto=format&fit=crop',
  },
  {
    title: 'Road Construction Material Haulage',
    description:
      'Specialized dumper and tipper truck operations transporting crushed aggregates, sub-base gravel, stone dust, bitumen drums, and ready-mix materials to active paving sites.',
    icon: Route,
    image: '/images/services/road-construction-material-haulage.avif',
  },
  {
    title: 'Highway Project Supply Logistics',
    description:
      'Continuous corridor logistics feeding major expressway and national highway packages with high-frequency shuttle loops between quarries, batching plants, and paving stretches.',
    icon: Milestone,
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=90&auto=format&fit=crop',
  },
  {
    title: 'Heavy Machinery & Plant Mobilization',
    description:
      'Low-bed and semi-low-bed trailer transport moving heavy earthmoving equipment, crawler excavators, vibratory rollers, and road pavers safely between job sites.',
    icon: HardHat,
    image: '/images/services/heavy-machinery-plant-mobilization.webp',
  },
  {
    title: 'Bulk Earthmoving & Muck Transport',
    description:
      'Large-scale excavation clearance and muck haulage utilizing high-cube tipper trucks for highway cuttings, corridor leveling, and embankment reclamation.',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1200&q=90&auto=format&fit=crop',
  },
  {
    title: 'Dedicated Contract Fleet Management',
    description:
      'Long-term and contract-based dedicated truck fleet leasing with on-site dispatchers, maintenance crews, and telemetry tracking tailored for major infrastructure developers.',
    icon: Container,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=90&auto=format&fit=crop',
  },
];

// ─── Projects & Haulage Corridors ─────────────────────────────

export const projects: Project[] = [
  {
    name: 'NH-34 Material Transportation',
    location: 'UP – MP Border',
    category: 'Full Transport',
    status: 'ongoing',
    progress: 60,
  },
  {
    name: 'MP State Road',
    location: 'Satna , Madhya Pradesh',
    category: 'Road Material Transport',
    status: 'completed',
    progress: 100,
  },
  {
    name: '2 Lane to 4 Lane Upgradation(NH347BG)',
    location: 'Madhya Pradesh',
    category: 'Tipper / Dumper Fleet',
    status: 'awaited',
    progress: 0,
  },
];

// ─── Project Statistics ───────────────────────────────────────

export const projectStats: ProjectStats = {
  completed: 7,
  ongoing: projects.filter((p) => p.status === 'ongoing').length,
  awaited: projects.filter((p) => p.status === 'awaited').length,
};

// ─── Capabilities: Transport Strengths ─────────────────────────

export const capabilities: Capability[] = [
  {
    title: 'High-Capacity Fleet Strength',
    description:
      'Modern, well-maintained fleet of multi-axle commercial trucks, high-volume tippers, and heavy-duty trailers ready for rapid deployment.',
    icon: Truck,
  },
  {
    title: 'Uninterrupted Material Feeds',
    description:
      'Continuous turnaround schedules guaranteeing road paving and batching plants never stall due to raw material aggregate deficits.',
    icon: Route,
  },
  {
    title: 'Site Safety & Transit Compliance',
    description:
      '100% adherence to national motor transport standards, driver safety protocols, cargo lashing, and axle-weight regulations.',
    icon: ShieldCheck,
  },
  {
    title: 'GPS Route & Fleet Telemetry',
    description:
      'Active vehicle tracking and coordinated corridor dispatch providing transparent transit monitoring and estimated time of delivery.',
    icon: Navigation2,
  },
  {
    title: 'Heavy Equipment Mobilization',
    description:
      'Specialized low-bed capabilities to transport bulldozers, pavers, compactors, and hydraulic excavators directly to job-sites.',
    icon: HardHat,
  },
  {
    title: 'Fuel & Maintenance Discipline',
    description:
      'Dedicated on-corridor maintenance support and fuel logistics ensuring maximum vehicle uptime and zero route breakdowns.',
    icon: Fuel,
  },
];

// ─── Fleet & Transport Gallery ────────────────────────────────

export const gallery: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Mountain Highway Infrastructure Corridor',
    category: 'fleet',
    categoryLabel: 'Commercial Tipper Fleet',
    location: 'High-Altitude Expressway Stretch',
    image: '/images/gallery/gallery-8-truck.jpg',
    caption:
      'Heavy multi-axle commercial tipper navigating gradient terrain, hauling bulk excavation material along active roadway alignment.',
    tag: 'Multi-Axle Tipper',
  },
  {
    id: 'g-2',
    title: 'Highway Route & Night Transit Logistics',
    category: 'fleet',
    categoryLabel: 'Commercial Tipper Fleet',
    location: 'Interstate Transport Corridor',
    image: '/images/gallery/gallery-2.jpg',
    caption:
      'High-capacity commercial tipper equipped with retro-reflective contour markers executing scheduled bulk material transit.',
    tag: 'Long-Haul Transit',
  },
  {
    id: 'g-3',
    title: 'Fleet Staging & Corridor Transit Terminal',
    category: 'dispatch',
    categoryLabel: 'Transit Hubs & Staging',
    location: 'National Highway Transit Hub',
    image: '/images/gallery/gallery-6.jpg',
    caption:
      'Commercial dumper units staged with tarpaulin-secured bulk cargo at regional corridor terminal for coordinated dispatch.',
    tag: 'Fleet Staging',
  },
  {
    id: 'g-4',
    title: 'Graded Aggregate Crushed Stone Depot',
    category: 'aggregates',
    categoryLabel: 'Aggregate & Material Feeds',
    location: 'Crushing & Screening Facility',
    image: '/images/gallery/gallery-4.jpg',
    caption:
      'High-volume stockpiles of laboratory-graded crushed stone aggregates prepared for continuous sub-base and asphalt paving.',
    tag: 'Graded Aggregates',
  },
  {
    id: 'g-5',
    title: 'Active Material Transit & Conveyance Route',
    category: 'fleet',
    categoryLabel: 'Commercial Tipper Fleet',
    location: 'Material Transit Corridor',
    image: '/images/gallery/gallery-1.jpg',
    caption:
      'Multi-axle commercial tipper convoy in active night-shift rotation, maintaining continuous delivery to construction packages.',
    tag: '24/7 Operations',
  },
  {
    id: 'g-6',
    title: 'Direct Batching Plant Material Discharge',
    category: 'aggregates',
    categoryLabel: 'Aggregate & Material Feeds',
    location: 'Hot-Mix Batching Plant Sector',
    image: '/images/gallery/gallery-5.jpg',
    caption:
      'Hydraulic tipper unloading raw aggregate supply directly at high-capacity processing hoppers during continuous paving feeds.',
    tag: 'Hydraulic Discharge',
  },
  {
    id: 'g-7',
    title: 'Night Shift Fleet Mobilization Yard',
    category: 'dispatch',
    categoryLabel: 'Transit Hubs & Staging',
    location: 'Corridor Marshalling Yard',
    image: '/images/gallery/gallery-3.jpg',
    caption:
      'Heavy commercial fleet assembled at project base for synchronized night-cycle earthmoving and subgrade haulage.',
    tag: 'Shift Marshalling',
  },
  {
    id: 'g-8',
    title: 'Raw Material Inventory & Quality Inspection',
    category: 'aggregates',
    categoryLabel: 'Aggregate & Material Feeds',
    location: 'Regional Storage Hub',
    image: '/images/gallery/gallery-7.jpg',
    caption:
      'Systematic volumetric tracking and quality assessment of crushed stone stockpiles dedicated to highway subgrade works.',
    tag: 'Quality Control',
  },
];

// ─── Footer ───────────────────────────────────────────────────

export const footer = {
  description:
    'Shree Shyam Earthmovers LLP (SSEM) is a premier full transport service and commercial fleet logistics provider specializing in road construction haulage, aggregate supply, and heavy plant mobilization.',
  copyright: `© ${new Date().getFullYear()} Shree Shyam Earthmovers LLP. All rights reserved.`,
};

