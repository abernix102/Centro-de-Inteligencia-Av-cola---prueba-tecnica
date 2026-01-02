"use client";
import { BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';

const data = [
  { name: 'Lun', huevo: 34.1, pollo: 27.5 },
  { name: 'Mar', huevo: 34.3, pollo: 27.8 },
  { name: 'Mie', huevo: 34.5, pollo: 28.1 },
  { name: 'Jue', huevo: 34.4, pollo: 28.0 },
  { name: 'Vie', huevo: 34.6, pollo: 28.2 },
];

export const MainChart = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-slate-300">
          <BarChart3 size={18} className="text-blue-500" />
          <span className="text-sm font-bold uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex gap-2">
                  <Button
                    // variant={activeTab === "produccion" ? "default" : "outline"}
                    size="sm"
                    // onClick={() => setActiveTab("produccion")}
                  >
                    Producción
                  </Button>
                  <Button
                    // variant={activeTab === "precios" ? "default" : "outline"}
                    size="sm"
                    // onClick={() => setActiveTab("precios")}
                  >
                    Precios
                  </Button>
                  <Button
                    // variant={activeTab === "comercio" ? "default" : "outline"}
                    size="sm"
                    // onClick={() => setActiveTab("comercio")}
                  >
                    Comercio
                  </Button>
                </div>
      </div>
      
      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Line 
              type="monotone" 
              dataKey="huevo" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={false}
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};