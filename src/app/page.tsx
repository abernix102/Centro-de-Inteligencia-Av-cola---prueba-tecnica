import { AnalysisSection } from "@/components/dashboard/AnalysisSection";
import { KPICard } from "@/components/dashboard/KPICard";
import { MainChart } from "@/components/dashboard/MainChart";
import { NewsSection } from "@/components/dashboard/NewsSection";
import { Header } from "@/components/layout/Header";
import { kpis, news } from "@/data/mockData";
import { Suspense } from "react";


export default function Home() {
    return (
        <main className="min-h-screen p-6 lg:p-10 max-w-400 mx-auto space-y-8">
            <Header title="MICROSITIO DE INTELIGENCIA AGROPECUARIA"
                subtitle="Panel de control estratégico para toma de decisiones" />
            <section className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {
                    kpis.map((kpi) => (
                        <KPICard
                            key={kpi.id}
                            unit={kpi.unit}
                            description={kpi.description}
                            label={kpi.label}
                            value={kpi.value}
                            trend={kpi.trend}
                            upward={kpi.upward} 
                            icon={kpi.icon}/>
                    ))
                }
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Suspense fallback={<div className="h-112.5 bg-slate-800 animate-pulse rounded-2xl" />}>
                    <div className="lg:col-span-2">
                        <MainChart/>
                    </div>
                </Suspense>
                <aside className="space-y-8">
                    <AnalysisSection />
                </aside>
            </div>
            <NewsSection items={news}/>
        </main>
    );
}
