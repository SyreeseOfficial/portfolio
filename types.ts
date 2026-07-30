import type { ElementType } from 'react';

export type ProjectTag = 'SaaS' | 'CLI / Tools' | 'Mobile' | 'Community';

export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  tag?: ProjectTag;
  videoUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    liveLink?: string;
    links?: { label: string; url: string }[];
    ctaLabel?: string;
    images?: string[];
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
  description: string;
  url: string;
  icon?: ElementType;
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
  icon?: ElementType;
}

export interface BetItem {
  title: string;
  description: string;
  icon?: ElementType;
}

export interface ChangelogItem {
  date: string;
  change: string;
  title?: string;
}

export interface NowModule {
  building: { name: string; description: string };
  reading: string;
  listening: string;
}

export interface KilledProject {
  name: string;
  epitaph: string;
}

export interface BucketListItem {
  text: string;
}

export interface HealthStats {
  steps: number;
  calories: number;
  sleep: number;
}

export interface DeskSetupItem {
  label: string;
  value: string;
}

export interface DeskSetupCategory {
  category: string;
  items: DeskSetupItem[];
}