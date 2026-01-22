import React from 'react';
import { AlertTriangle, Info, CheckCircle2, ChevronRight } from 'lucide-react';

interface MarketItem {
  label: string;
  desc: string;
}

interface ColumnProps {
  title: string;
  status: 'critical' | 'warning' | 'success';
  count: number;
  items: MarketItem[];
}

const TrafficColumn = ({ title, status, count, items }: ColumnProps) => {
  // Mantenemos la lógica de colores solo para el acento (icono, badge y título)
  const statusStyles = {
    critical: {
      text: 'text-rose-500',
      bgIcon: 'bg-rose-50 dark:bg-rose-900/20',
      badge: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600',
      icon: <AlertTriangle size={18} />
    },
    warning: {
      text: 'text-amber-500',
      bgIcon: 'bg-amber-50 dark:bg-amber-900/20',
      badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600',
      icon: <Info size={18} />
    },
    success: {
      text: 'text-emerald-500',
      bgIcon: 'bg-emerald-50 dark:bg-emerald-900/20',
      badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
      icon: <CheckCircle2 size={18} />
    }
  };

  const style = statusStyles[status];

  return (
    // Contenedor principal con el mismo estilo que tu KPICard
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
      
      {/* Header - Siguiendo la estética de tu KPICard */}
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${style.bgIcon} ${style.text}`}>
            {style.icon}
          </div>
          <h3 className={`text-sm font-bold tracking-tight ${style.text}`}>
            {title}
          </h3>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${style.badge}`}>
          {count}
        </span>
      </div>

      {/* Body - Listado de items */}
      <div className="p-5 space-y-5">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-3 group">
            <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${style.text} opacity-50`} />
            <div className="space-y-1">
              <h4 className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                {item.label}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MarketTrafficLight = () => {
  const sections: ColumnProps[] = [
    {
      title: "Riesgos y Alertas",
      status: "critical",
      count: 3,
      items: [
        { label: "Alta variación en San Luis Potosí y Querétaro", desc: "Precios de pollo entero con inestabilidad. Riesgo de sobreprecios." },
        { label: "Desalineación Pilgrim's y Nutri Pollo", desc: "Variación de precios afecta márgenes de ganancia." },
        { label: "Brechas de precio en huevo", desc: "Precios altos en Morelia y Aguascalientes." }
      ]
    },
    {
      title: "Monitorear",
      status: "warning",
      count: 3,
      items: [
        { label: "Dispersión ~2% en distribución pollo", desc: "Mercado estable con señales tempranas de presión." },
        { label: "Pollo rosticero con variación relevante", desc: "Menor variación que entero, pero rangos a vigilar." },
        { label: "Estructura de precios huevo variable", desc: "Brecha mayorista/minorista puede generar volatilidad." }
      ]
    },
    {
      title: "Favorable",
      status: "success",
      count: 3,      
      items: [
        { label: "Centros principales estables", desc: "Mercado mayorista unificado con buen comportamiento." },
        { label: "Pechuga y pierna/muslo equilibrados", desc: "Cortes importantes mantienen estabilidad." },
        { label: "Precios de huevo sin cambios", desc: "Mayoría de centros mantuvieron precios estables." }
      ]
    }
  ];

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end px-1">
        <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Semáforo Ejecutivo del Mercado
        </h2>
        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          Semana 5-9 Enero 2026
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((sec, i) => (
          <TrafficColumn key={i} {...sec} />
        ))}
      </div>
    </section>
  );
};