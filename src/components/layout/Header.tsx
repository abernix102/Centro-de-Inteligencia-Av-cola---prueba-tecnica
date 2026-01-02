import { Calendar, Egg } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  subtitle: string;
}
//First Contentful Paint
<Egg className="h-5 w-5 text-primary-foreground" />

export const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-white/20 flex items-center justify-center">
          <Egg className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white uppercase italic">
            {title}
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-xs muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Actualizado: 15 Ene 2026, 14:30</span>
        </div>
        <Button variant={"outline"} size={"sm"}>
          Descargar Reporte
        </Button>
      </div>
    </header>
  )
}
