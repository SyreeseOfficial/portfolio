export interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
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
  items: string[];
}

export interface Book {
  title: string;
  author: string;
  description: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  timeline: string;
}

export interface InspirationItem {
  name: string;
  description: string;
}

export interface BetItem {
  title: string;
  description: string;
}

export interface ChangelogItem {
  date: string;
  title?: string;
  change: string;
}