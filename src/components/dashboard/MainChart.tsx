"use client";
import { BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';

const chartData = {
  produccion: [
    { name: 'Lun', huevo: 2100, pollo: 3500 },
    { name: 'Mar', huevo: 2300, pollo: 3200 },
    { name: 'Mie', huevo: 2200, pollo: 3800 },
    { name: 'Jue', huevo: 2600, pollo: 3100 },
    { name: 'Vie', huevo: 2800, pollo: 3900 },
  ],
  precios: [
    { name: 'Lun', huevo: 42.5, pollo: 55.0 },
    { name: 'Mar', huevo: 43.1, pollo: 54.2 },
    { name: 'Mie', huevo: 42.8, pollo: 56.5 },
    { name: 'Jue', huevo: 44.0, pollo: 53.8 },
    { name: 'Vie', huevo: 43.5, pollo: 55.2 },
  ],
  comercio: [
    { name: 'Lun', huevo: 120, pollo: 450 },
    { name: 'Mar', huevo: 150, pollo: 420 },
    { name: 'Mie', huevo: 180, pollo: 510 },
    { name: 'Jue', huevo: 140, pollo: 480 },
    { name: 'Vie', huevo: 190, pollo: 530 },
  ]
};

type TabType = 'produccion' | 'precios' | 'comercio';

export const MainChart = () => {
  const [activeTab, setActiveTab] = useState<TabType> ('produccion');

  const yAxisFormatter = (value: number) => {
    if(activeTab === 'precios') return `$${value}`
    if(activeTab === "produccion") return `$${value}`
    return value.toString();  
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
          <BarChart3 size={18} className="text-blue-500" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Tendencias de
          </span>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
        {(['produccion', 'precios', 'comercio'] as TabType[]).map((tab) => (
          <Button size='sm' onClick={() => setActiveTab(tab)} variant={activeTab === tab ? 'primary' : 'ghost'} key={tab} className={`capitalize ${activeTab === tab ? '' : 'text-slate-500 hover:text-slate-700'}`}>
            {tab}
          </Button>
        ))

        }
        </div>
      </div>
      
      <div className="h-87.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData[activeTab]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis 
              stroke="#94a3b8" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={yAxisFormatter}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
              }}
            />
            <Line 
              name="Huevo"
              type="monotone" 
              dataKey="huevo" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#3b82f6' }}
              activeDot={{ r: 6 }} 
            />
            
            <Line 
              name="Pollo"
              type="monotone" 
              dataKey="pollo" 
              stroke="#10b981" 
              strokeWidth={3} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};