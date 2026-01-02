import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export const AnalysisSection = () => {
    const docs = [
        {
            id: 1,
            title: "Análisis de Mercado Q4 2025",
            type: "Reporte Trimestral",
            date: "31 Dic 2025",
            pages: 47,
        },
        {
            id: 2,
            title: "Proyecciones de Producción 2026",
            type: "Forecast",
            date: "15 Ene 2026",
            pages: 32,
        },
        {
            id: 3,
            title: "Impacto de Nuevas Regulaciones",
            type: "Estudio Regulatorio",
            date: "10 Ene 2026",
            pages: 28,
        },
        {
            id: 4,
            title: "Benchmarking Internacional",
            type: "Análisis Comparativo",
            date: "08 Ene 2026",
            pages: 55,
        },
    ]

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className='flex items-center justify-between mb-6'>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Documentos de Análisis</h2>
                <Button variant='ghost' size='sm' className='text-blue-400 hover:text-blue-300'>
                    ver todos
                </Button>
            </div>
            <div className="space-y-3">
                {docs.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-800 hover:border-slate-600 transition-all">
                        <div className="flex items-start justify-between gap-3">
                            <div className='flex-1 min-w-0'>
                                <p className="text-xs font-semibold text-slate-200">{doc.title}</p>
                            <div className="flex items-center gap-2 mt-1.5">
                                <Badge className="text-xs">
                                    {doc.type}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{doc.pages} pgs</span>
                            </div>
                            <p className='text-xs text-muted-foreground mt-1'>{doc.date}</p>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <Download size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};