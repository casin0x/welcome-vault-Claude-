export interface NavItem {
  label: string;
  id: string;
}

export interface MetricData {
  year: string;
  revenue: number;
  users: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
}