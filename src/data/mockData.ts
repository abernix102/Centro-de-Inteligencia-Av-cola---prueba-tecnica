import { 
  Box, 
  DollarSign, 
  Users, 
  Activity, 
  TrendingUp 
} from 'lucide-react';
import { KPI, NewsItem } from '@/types/dashboard';

export const kpis: KPI[] = [
  { 
    id: 1, 
    label: "Producción Nacional", 
    value: "3.2M", 
    unit: "toneladas", 
    description: "vs. trimestre anterior", 
    trend: "+5.2%", 
    upward: true, 
    icon: Box 
  },
  { 
    id: 2, 
    label: "Precio Promedio", 
    value: "$42.50", 
    unit: "MXN/kg", 
    description: "últimos 30 días", 
    trend: "-2.8%", 
    upward: false, 
    icon: DollarSign 
  },
  { 
    id: 3, 
    label: "Consumo Per Cápita", 
    value: "24.8", 
    unit: "kg/año", 
    description: "vs. año anterior", 
    trend: "+3.1%", 
    upward: true, 
    icon: Users 
  },
  { 
    id: 4, 
    label: "Granjas Certificadas", 
    value: "1,847", 
    unit: "activas", 
    description: "crecimiento anual", 
    trend: "+8.5%", 
    upward: true, 
    icon: Activity 
  },
  { 
    id: 5, 
    label: "Exportaciones", 
    value: "$127M", 
    unit: "USD", 
    description: "vs. mismo período 2024", 
    trend: "+12.3%", 
    upward: true, 
    icon: TrendingUp 
  },
];

export const news: NewsItem[] = [
  { 
    id: 1, 
    title: "Incremento en la tecnificación de granjas avícolas en Sonora", 
    source: "AgroMonitor", 
    date: "Hace 2h" 
  },
  { 
    id: 2, 
    title: "Exportaciones de huevo a EE.UU. marcan nuevo récord trimestral", 
    source: "Reforma Agro", 
    date: "Ayer" 
  },
  { 
    id: 3, 
    title: "Estabilización de precios del maíz reduce costos de producción", 
    source: "Economía MX", 
    date: "Hace 2 días" 
  },
  { 
    id: 4, 
    title: "Nuevas medidas sanitarias para el control de influenza aviar", 
    source: "SAGARPA", 
    date: "Hace 3 días" 
  },
  { 
    id: 5, 
    title: "Análisis: Tendencias del consumo de pollo procesado para 2026", 
    source: "Insights Agro", 
    date: "Hace 1 sem" 
  },
];