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

export const news:NewsItem[]= [
  {
    id: 1,
    date: '15 Ene 2026',
    category: 'Regulación',
    title: 'Nueva normativa de bienestar animal entra en vigor para granjas avícolas',
    excerpt: 'SAGARPA implementa estándares más estrictos que afectarán al 60% de las granjas del país.',
    source: 'El Economista'
  },
  {
    id: 2,
    date: '12 Ene 2026',
    category: 'Mercado',
    title: 'Precio del huevo se estabiliza después de pico histórico en diciembre',
    excerpt: 'Analistas proyectan tendencia a la baja para el primer semestre tras normalización de inventarios.',
    source: 'Reforma'
  },
  {
    id: 3,
    date: '10 Ene 2026',
    category: 'Tecnología',
    title: 'Inversión de $300M en automatización de granjas avícolas mexicanas',
    excerpt: 'Principales productores nacionales adoptan sistemas de IA para optimización de producción.',
    source: 'Forbes México'
  },
  {
    id: 4,
    date: '08 Ene 2026',
    category: 'Comercio',
    title: 'México negocia apertura de mercado avícola con nuevos socios asiáticos',
    excerpt: 'Acuerdos comerciales podrían incrementar exportaciones en 25% durante 2026.',
    source: 'Bloomberg Línea'
  },
  {
    id: 5,
    date: '05 Ene 2026',
    category: 'Salud',
    title: 'Cero casos de influenza aviar reportados en producción comercial mexicana',
    excerpt: 'Protocolos de bioseguridad mantienen al sector libre de brotes por tercer año consecutivo.',
    source: 'Milenio'
  }
];