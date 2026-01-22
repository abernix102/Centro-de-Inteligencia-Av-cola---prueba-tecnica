import { RefreshCw, Clock } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image"; // Importante para optimización

interface Props {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between py-4 pt-0 px-1 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      {/* Lado Izquierdo: Logo y Títulos */}
      <div className="flex items-center gap-4">
        {/* Contenedor del Logo */}
        <div className="h-12 w-12 shrink-0 border border-slate-200 dark:border-slate-700 rounded-md flex items-center justify-center bg-white dark:bg-slate-800 overflow-hidden">
           <img 
            src="/una-uni-n-nacional-de-avicultores-logo-blue-profes.jpg" 
            alt="Logo UNA" 
            className="h-full w-full object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight uppercase">
            {title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Lado Derecho: Status, Hora y Botón Actualizar */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Badge "En línea" */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold">En línea</span>
        </div>

        {/* Hora */}
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
          <Clock size={14} />
          <span className="text-[12px] font-medium">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </span>
        </div>

        {/* Botón Actualizar */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex gap-2 h-8"
        >
          <RefreshCw size={14} className="text-slate-400" />
          <span className="text-[12px] font-bold">Actualizar</span>
        </Button>
      </div>
    </header>
  );
};