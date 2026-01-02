# Micrositio de Inteligencia Agropecuaria - Panel Estratégico

Este proyecto es una propuesta técnica para la visualización de datos críticos del sector avícola en México, diseñada específicamente para tomadores de decisiones.

## 🛠️ Stack Tecnológico
- **Framework:** Next.js 15+ (App Router)
- **Lenguaje:** TypeScript (Tipado estricto para modelos de datos)
- **Estilos:** Tailwind CSS (Diseño responsive y modo oscuro)
- **Gráficos:** Recharts (Visualización de datos interactiva)
- **Iconografía:** Lucide React

## 🚀 Decisiones Técnicas
- **Componentes Atómicos:** Se crearon componentes base (`Button`, `Badge`, `KPICard`) para asegurar la consistencia visual y facilitar la escalabilidad.
- **Rendimiento:** Implementación de `React.memo` en componentes de alta repetición (KPIs) para optimizar los re-renderizados.
- **Arquitectura de Datos:** La data está desacoplada en `src/data`, permitiendo una transición inmediata de Mock Data a una API real (Node.js/MongoDB).

## 📦 Instalación
1. Clonar el repo: `git clone`
2. Instalar dependencias: `npm install`
3. Correr local: `npm run dev`
