import { Calendar } from "lucide-react";

interface Props {
    title: string;
    subtitle:string;
}
 //First Contentful Paint

export const Header = ({title, subtitle} : Props) => {
  return (
    <header>
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">AGRO</span> 
          {title}
        </h1>
        <p>{subtitle}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
            <Calendar className="h-4 w-4" />
            <span>Actualizado: 15 Ene 2026, 14:30</span>
            <button>
                Descargar Reporte
              </button>
      </div>
    </header>
  )
}
