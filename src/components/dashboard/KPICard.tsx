import { memo } from 'react';
import { KPI } from '@/types/dashboard';

export const KPICard = memo(({ 
  label, 
  value, 
  unit, 
  description, 
  trend, 
  upward, 
  icon: Icon 
}: Omit<KPI, 'id'>) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
          <Icon size={20} />
        </div>
        <div className={`flex items-center text-xs font-bold ${upward ? 'text-emerald-500' : 'text-rose-500'}`}>
          {trend}
        </div>
      </div>

      {/* Fila Media: Label y Valor */}
      <div className="space-y-1">
        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-tight">
          {label}
        </p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">
            {value}
          </h3>
          {unit && (
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Fila Inferior: Descripción */}
      {description && (
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">
          {description}
        </p>
      )}
    </div>
  );
});

KPICard.displayName = 'KPICard';