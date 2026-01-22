"use client";
import { BarChart3, ExternalLink, TrendingUp, Package, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

type TabType = 'tablero' | 'detalles';

export const MainChart = () => {
  const [activeTab, setActiveTab] = useState<TabType>('tablero');

  const pbiUrl = "https://app.powerbi.com/view?r=eyJrIjoiYTQ0YjdmMzYtZTA3NS00MTY2LWIxMzUtNWRkNjMzNGZlNDA3IiwidCI6Ijk0MWY0MmRmLTQwODEtNDYwZi04NzIzLWI3ZTAwMDY5NDBlNyIsImMiOjl9";

  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. SECCIÓN DE KPI CARDS (Esto es lo que lo hace "bonito" y visual) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-blue-500">
            <Package size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Producción Total</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">254.1k</span>
            <span className="text-xs font-medium text-green-500">+2.4%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-emerald-500">
            <DollarSign size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Precio Pollo (Prom)</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">$55.20</span>
            <span className="text-xs font-medium text-slate-400">MXN/Kg</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2 text-orange-500">
            <TrendingUp size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Precio Huevo (Prom)</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">$43.50</span>
            <span className="text-xs font-medium text-red-500">+1.2%</span>
          </div>
        </div>
      </div>

      {/* 2. CONTENEDOR DEL POWER BI */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        {/* Header del Componente */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
            <BarChart3 size={18} className="text-blue-500" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Análisis Interactivo del Sector
            </span>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <Button 
              size='sm' 
              onClick={() => setActiveTab('tablero')} 
              variant={activeTab === 'tablero' ? 'primary' : 'ghost'} 
              className={activeTab === 'tablero' ? '' : 'text-slate-500'}
            >
              Tablero Principal
            </Button>
            <a 
              href={pbiUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-slate-500 hover:text-blue-500 transition-colors"
            >
              <ExternalLink size={14} />
              Expandir
            </a>
          </div>
        </div>
        
        {/* Iframe con mejor presentación */}
        <div className="relative w-full rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-inner" 
             style={{ height: '600px' }}> 
          <iframe 
            title="Tablero Ejecutivo Estratégico del Sector Avícola" 
            src={pbiUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Pie del componente */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] text-slate-400 uppercase tracking-tighter">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Conexión en vivo con Power BI Service</span>
          </div>
          <span>Unión Nacional de Avicultores © 2026</span>
        </div>
      </div>
    </div>
  );
};