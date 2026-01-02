import { NewsItem } from '@/types/dashboard'
import { Newspaper } from 'lucide-react';
import React from 'react'

interface newSectionProps {
    items: NewsItem[];
}

export const NewsSection = ({items}: newSectionProps) => {
  return (
    <section>
        <div>
            <Newspaper size={20} className="text-blue-500" />
            <h2 className="text-lg font-bold text-white text-uppercase tracking-tight">Noticias Clave del Sector</h2>
        </div>
        <div>
            
        </div>
    </section>
  )
}
