import { NavItem, MetricData, RoadmapItem, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Vault', id: 'vault-hero' },
  { label: 'How it Works', id: 'mechanics' },
  { label: 'Calculator', id: 'calculator' },
  { label: 'Rules', id: 'rules' },
  { label: 'FAQ', id: 'faq' },
];

export const REVENUE_DATA: MetricData[] = [
  { year: '2024', revenue: 120, users: 1.5 },
  { year: '2025', revenue: 280, users: 2.8 },
  { year: '2026', revenue: 550, users: 4.2 },
  { year: '2027', revenue: 890, users: 6.5 },
  { year: '2028', revenue: 1450, users: 9.0 },
];

export const ROADMAP: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    description: 'Establishment of core infrastructure, smart contract development, and initial security auditing.',
    date: 'Q3 2023',
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Beta Launch',
    description: 'Closed beta access for early adopters, bug bounty program, and community building.',
    date: 'Q1 2024',
    status: 'completed',
  },
  {
    phase: 'Phase 3',
    title: 'Public Release',
    description: 'Global platform launch, token generation event (TGE), and major exchange listings.',
    date: 'Q3 2024',
    status: 'current',
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Growth',
    description: 'Integration of third-party game developers, DAO governance implementation, and cross-chain expansion.',
    date: '2025',
    status: 'upcoming',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Vance',
    role: 'CEO & Founder',
    bio: 'Former VP of Engineering at a major fintech firm. Early blockchain adopter with a vision for fair gaming.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google senior engineer specializing in distributed systems and high-frequency trading algorithms.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Product',
    bio: 'Veteran game designer with 15 years of experience in casino game mathematics and player psychology.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Compliance',
    bio: 'International law expert focused on cryptocurrency regulations and licensing across multiple jurisdictions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
];