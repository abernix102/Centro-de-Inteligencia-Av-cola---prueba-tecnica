# Micrositio de Inteligencia Agropecuaria 🥚🐔

Prueba técnica para el desarrollo de un panel de control estratégico (Dashboard) enfocado en la toma de decisiones para la industria del huevo y pollo en México.

🔗 **Demo Online:** [https://centro-de-inteligencia-av-cola-prue.vercel.app/](https://centro-de-inteligencia-av-cola-prue.vercel.app/)

## 📋 Descripción del Proyecto

Este micrositio fue diseñado como un "Single Page Dashboard". El objetivo principal es reducir la carga cognitiva de los directivos, presentando 5 KPIs críticos, tendencias de mercado interactivas, noticias relevantes y documentos de análisis en una sola vista unificada.

### Características Principales
- **Arquitectura Modular:** Componentes reutilizables y tipados estrictamente.
- **Visualización de Datos:** Gráficas interactivas con `Recharts` (Producción, Precios, Comercio).
- **Diseño Responsivo:** Adaptado para consumo en escritorio y dispositivos móviles .
- **Performance:** Uso de Server Components por defecto y Client Components solo donde es necesario.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gráficos:** Recharts
- **Iconos:** Lucide React
- **Deploy:** Vercel

## 📂 Estructura del Proyecto

El proyecto sigue una estructura semántica y escalable:

```bash
├── components/
│   ├── dashboard/   # Componentes específicos del negocio (KPIs, Charts, News)
│   ├── layout/      # Header y estructura base
│   └── ui/          # Componentes primitivos de interfaz (Buttons, Badges)
├── data/            # Mock Data separado para fácil transición a API real
├── types/           # Definiciones de TypeScript e interfaces
└── app/             # Rutas y Layout principal (Next.js App Router)
