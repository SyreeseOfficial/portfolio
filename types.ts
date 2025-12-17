import React from 'react';

export enum ToolCategory {
  PhotoEditing = "Photo Editing",
  ScreenRecording = "Screen Recording",
  Fun = "Fun",
  Focus = "Focus",
  Writing = "Writing",
  TechPicks = "Tech Picks",
}

export interface ToolItem {
  name: string;
  category: ToolCategory;
  url: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon?: 'mrr' | 'job' | 'family' | 'farm';
  completed?: boolean;
}

export interface BentoSubItem {
  label: string;
  url: string;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  size: '1x1' | '1x2' | '2x1' | '3x1';
  type: 'community' | 'extension' | 'boxing' | 'fitness' | 'review';
  subItems?: BentoSubItem[];
}