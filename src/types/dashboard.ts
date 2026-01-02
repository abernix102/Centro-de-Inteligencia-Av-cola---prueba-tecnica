import { LucideIcon } from 'lucide-react';

export interface KPI {
  id: number;
  label: string;
  value: string;
  unit?: string;      
  description?: string; 
  trend: string;
  upward: boolean;
  icon: LucideIcon;     
}
export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string; 
  source: string;
}


export interface Document {
  id: number;
  title: string;
  category: string;
  pages: number;
  date: string;
}