export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  videoUrl?: string; // Placeholder for video
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    liveLink: string;
    images: string[];
  };
}

export interface PhilosophyItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface GearItem {
  category: string;
  items: TechStackItem[];
}

export interface TechStackItem {
  name: string;
  url: string;
}

export interface TechStackCategory {
  category: string;
  items: TechStackItem[];
}

export interface Book {
  title: string;
  author: string;
  description: string;
  url: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  timeline: string;
}

export interface InspirationItem {
  name: string;
  description: string;
  url: string;
}

export interface BetItem {
  title: string;
  description: string;
}

export interface ChangelogItem {
  date: string;
  title?: string;

export interface DeskSetupItem {
  label: string;
  value: string;
}

export interface DeskSetupCategory {
  category: string;
  items: DeskSetupItem[];
}