import { NewsItem } from '@/types/dashboard'
import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';


interface NewsSectionProps {
  items: NewsItem[];
}

export const NewsSection = ({ items }: NewsSectionProps) => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Noticias del Sector
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Actualización continua de eventos relevantes
          </p>
        </div>
        <Button variant="outline" size="sm" className="font-semibold text-slate-700 dark:text-slate-300">
          Ver archivo completo
        </Button>
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <article 
            key={item.id} 
            className={`group py-8 first:pt-0 last:pb-0 ${
              index !== items.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-5">
              
              <div className="w-20 shrink-0 pt-1">
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500 leading-tight">
                  {item.date.split(' ').slice(0, 2).join(' ')}
                </p>
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                  {item.date.split(' ')[2]}
                </p>
              </div>
              <div className="flex-1 space-y-3">
                <Badge variant="outline" className="rounded-md border-slate-200 text-slate-600 font-medium px-2 py-0.5">
                  {item.category}
                </Badge>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-1 cursor-pointer group/source w-fit pt-1">
                  <span className="text-xs font-bold text-slate-400 group-hover/source:text-slate-600 transition-colors">
                    {item.source}
                  </span>
                  <ChevronRight size={14} className="text-slate-400 group-hover/source:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}