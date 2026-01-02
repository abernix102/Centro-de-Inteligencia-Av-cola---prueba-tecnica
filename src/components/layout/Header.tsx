import { Calendar, Egg, Download } from "lucide-react"; // Importé Download para el móvil
import { Button } from "../ui/button";

interface Props {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 shrink-0 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/10">
          <Egg className="h-5 w-5 text-white" />
        </div>
        
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase italic leading-tight">
            {title}
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 border-t border-white/5 pt-4 md:border-none md:pt-0">
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
          <Calendar className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Actualizado:</span>
          <span className="text-slate-300">02 Ene 2026</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <Download className="h-4 w-4 mr-2 md:hidden" /> 
          <span className="text-xs md:text-sm">Exportar <span className="hidden md:inline">PDF</span></span>
        </Button>
      </div>
    </header>
  );
};