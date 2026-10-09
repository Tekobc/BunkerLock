# context.md — BunkerLock (Agente de Código)

## 1. Información General y Repositorio
- **Proyecto:** BunkerLock (Web Profesional de Puertas Blindadas y Herrería de Alta Seguridad)
- **Repositorio Git:** `https://github.com/Tekobc/BunkerLock.git`
- **Plataforma de Despliegue:** Vercel

---

## 2. Visión del Proyecto
**BunkerLock** es una marca de alta gama especializada en **puertas blindadas de máxima seguridad** y **herrería profesional de precisión**. El objetivo de este sitio web no es solo informar, sino **deslumbrar visualmente y generar una sensación tangible de peso, solidez, inexpugnabilidad y prestigio industrial**.

---

## 3. Dirección de Arte & Estilo Visual

### Enfoque Estético: *Skeuomorphism* & *Hyper-Tactile Luxury*
Rechazamos el estilo plano tradicional (*flat design*) y la apatía genérica del software corporativo modernista. La interfaz debe transmitir textura, peso y resistencia física a través de la pantalla.

- **Acabados Materiales Realistas:**
  - Acero cepillado (*brushed steel*), hierro forjado mate, titanio oscurecido y remaches biselados.
  - Granos de metal sutiles mediante capas de ruido (*SVG noise textures* / *Canvas*).
  - Sombras profundas, reflejos metálicos especulares, bordes fresados (*chamfered edges*) y biseles tridimensionales en CSS (`box-shadow`, `inset`, `backdrop-filter`).
- **Paleta de Color:**
  - **Base:** Carbón industrial (`#121417`), Grafito profundo (`#1C1F24`), Acero templado (`#2A2E35`).
  - **Detalles Metálicos:** Plata pulida (`#E2E8F0`), Cromo brillante (`#F8FAFC`).
  - **Acentos de Seguridad:** Ámbar industrial / Dorado táctico (`#D97706` / `#F59E0B`) para CTAs y estados activos.
- **Tipografía:**
  - **Titulares:** Neogrotesca industrial o de corte técnico/sólido (ej. *Space Grotesk*, *Syne*, *Integral CF* o *Chakra Petch*).
  - **Cuerpo / Datos Técnicos:** Sans-serif limpia con excelente legibilidad (ej. *Inter*, *Plus Jakarta Sans*) acompañada de detalles tipográficos monospaciados (*JetBrains Mono*) para calibraciones, especificaciones y niveles de blindaje (ej. `RB3 / BALÍSTICA B6`).

---

## 4. Skills, Flujo de Trabajo y Control de Versiones

El agente debe aplicar rigurosamente las siguientes reglas y metodologías desde la primera línea de código:

### A. Reglas de Git y Grafo de Conocimiento
1. **Commit por Feature:**
   - Se debe realizar **un commit por cada feature, componente o hito implementado**, manteniendo un historial de Git limpio, descriptivo y atómico (ej. `feat(hero): implement skeuomorphic metal door toggle`, `feat(builder): add armor level selector`).
2. **Actualización Continua del Grafo (`graphify`):**
   - El agente debe **actualizar constantemente el grafo de arquitectura/dependencias (`graphify`)** con cada nuevo componente, utilidad o estructura que agregue o modifique al codebase, garantizando trazabilidad total del proyecto.

### B. Filosofía Interactiva y Estilo
3. **`taste-skill` & `awesome-design`**:
   - Calidad visual de nivel *Awwwards* / *FWA*.
   - Atención extrema a micro-detalles: iluminación metálica dinámica, biseles cuidados, animaciones de precisión mecánica (bloqueos, pestillos, engranajes).
4. **`web-design-guidelines`**:
   - Mantenimiento de contraste accesible, jerarquía tipográfica impecable, navegación fluida y maquetación responsive sin destruir el peso visual skeuomórfico en dispositivos móviles.
5. **`Scroll-World`**:
   - **Narrativa visual mediante Scroll:** El usuario no solo se desplaza hacia abajo, sino que "desciende" o "desbloquea" secciones.
   - Revelado progresivo de las capas de una puerta blindada (capa exterior de madera o acero -> placas balísticas -> cerrojos multipunto de acero cementado -> núcleo ignífugo).
6. **`anti-slop`**:
   - **Cero genéricos:** Prohibido usar layouts genéricos sin personalizar, componentes "cliché", o textos ficticios genéricos. Cada componente interactivo (botones, tarjetas, conmutadores) debe sentirse como un control físico real.

---

## 5. Arquitectura de la Web

### Secciones Principales
1. **Hero Section (La Cámara de Seguridad):**
   - Experiencia inicial impactante: Una puerta BunkerLock a escala real centrada en pantalla con iluminación volumétrica/metálica.
   - Interacción de apertura/cierre o inspección 3D / Scroll interactivo.
2. **Selector de Puertas Blindadas (Interactive Vault Builder):**
   - Módulos personalizables: Elección de nivel de blindaje (Nivel 1 a 5), tipo de cerradura (Biométrica, Digital, Llave de alta seguridad) y acabados exteriores.
   - Renderizado en tiempo real de especificaciones físicas y cotización estimada.
3. **Sección de Herrería Profesional:**
   - Catálogo táctil para portones automatizados, rejas de diseño de alta resistencia y estructuras blindadas personalizadas.
   - Fotografías e iteraciones de alta resolución con efectos de luz en hover.
4. **Desglose Anatómico de Seguridad (Scroll-World Experience):**
   - Exploración por capas con efecto Parallax/Scrollytelling mostrando los perfiles de acero, cerraduras anti-ganzúa y pivotes anti-palanca.
5. **Simulador de Resistencia / Certificaciones:**
   - Comparativo gráfico e interactivo frente a ataques balísticos, efracción manual y fuego.
6. **Contacto & Cotización Inmediata:**
   - Formulario que asemeja un panel de control / consola industrial táctil.

---

## 6. Especificaciones Técnicas & Despliegue en Vercel

- **Stack Framework:** Next.js (App Router) + React Server Components.
- **Estilado:** Tailwind CSS v4 / CSS Modules extendidos con utilidades skeuomórficas avanzadas (`inset-shadows`, `drop-shadows`, gradientes metálicos complejos).
- **Animaciones & Scrollytelling:** Framer Motion / GSAP + ScrollTrigger (optimizado para GPU, utilizando `will-change` y `transform3d` para prevenir layout thrashing).
- **Optimizaciones para Vercel Edge & CDN:**
  - **Imágenes y Texturas Metalizadas:** Uso estricto de `next/image` con formatos WebP/AVIF y mapas de textura comprimidos en la carpeta `/public` para garantizar la carga instantánea desde Edge Cache.
  - **Fuentes:** `next/font` optimizadas localmente para cero Layout Shift (CLS).
  - **Hidratación y SSR:** Aislamiento de componentes skeuomórficos pesados (como canvas 3D o canvas de ruido) en *Client Components* (`"use client"`) envueltos en `React.Suspense` para mantener el Time to Interactive (TTI) ultra bajo.