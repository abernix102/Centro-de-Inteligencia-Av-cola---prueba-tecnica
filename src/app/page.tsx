import { AnalysisSection } from "@/components/dashboard/AnalysisSection";
import { KPICard } from "@/components/dashboard/KPICard";
import { MainChart } from "@/components/dashboard/MainChart";
import { NewsSection } from "@/components/dashboard/NewsSection";
import { Header } from "@/components/layout/Header";
import { kpis, news } from "@/data/mockData";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen p-6 lg:p-10 max-w-8xl mx-auto space-y-8">
      <Header 
        title="Micrositio de Inteligencia Agropecuaria"
        subtitle="Panel de control estratégico para toma de decisiones" 
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.id} {...kpi} />
        ))}
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <section>
            <Suspense fallback={<div className="h-112.5 animate-pulse rounded-2xl" />}>
                <MainChart />
            </Suspense>
          </section>
          <section>
             <NewsSection items={news} />
          </section>
        </div>
        <aside className="lg:col-span-4">
          <div className="sticky top-10 space-y-6">
            <AnalysisSection />
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800">
              Datos actualizados al: <strong>{new Date().toLocaleDateString()}</strong>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
