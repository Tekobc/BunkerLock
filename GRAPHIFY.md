# GRAPHIFY — BunkerLock Architecture & Component Dependency Graph

```mermaid
graph TD
    subgraph UI_Shell [Capa de Presentación y Experiencia]
        RootLayout[app/layout.tsx] --> AppHeader[components/Navbar.tsx]
        RootLayout --> Page[app/page.tsx]
        RootLayout --> AppFooter[components/Footer.tsx]
    end

    subgraph Core_Sections [Módulos Principales de la Web]
        Page --> Hero[components/HeroVault.tsx]
        Page --> Builder[components/VaultBuilder.tsx]
        Page --> Anatomy[components/AnatomyScroll.tsx]
        Page --> Simulator[components/ResistanceSimulator.tsx]
        Page --> Ironwork[components/IronworkCatalog.tsx]
        Page --> Console[components/IndustrialConsole.tsx]
    end

    subgraph Interactive_Systems [Sistemas Interactivos y Audio]
        SoundEngine[lib/sound.ts] --> Hero
        SoundEngine --> Builder
        SoundEngine --> Simulator
        SoundEngine --> Console
        SoundEngine --> AudioToggle[components/AudioToggle.tsx]
    end

    subgraph Data_Models [Modelos de Datos y Especificaciones]
        Types[types/bunker.ts] --> Builder
        Types --> Anatomy
        DoorData[data/doors.ts] --> Builder
        IronData[data/ironwork.ts] --> Ironwork
        TestSpecs[data/testing.ts] --> Simulator
    end

    subgraph Styling_Engine [Dirección de Arte Skeuomórfica]
        GlobalsCSS[app/globals.css] -.-> UI_Shell
        GlobalsCSS -.-> Core_Sections
        NoiseTexture[SVG & CSS Noise / Metal Gradients] -.-> GlobalsCSS
    end
```

## Registro de Componentes y Estado

| Módulo / Archivo | Responsabilidad | Dependencias Principales | Estado |
| :--- | :--- | :--- | :--- |
| `app/globals.css` | Design System Skeuomórfico (acero cepillado, titanio, biseles, remaches, reflejos) | Tailwind CSS v4 | En desarrollo |
| `lib/sound.ts` | Motor de audio táctil sintetizado mediante Web Audio API (latches, clicks, alarmas, pernos) | Web Audio API nativo | Planificado |
| `types/bunker.ts` | Tipos TypeScript de blindaje, cerraduras, herrería y presupuestación | TypeScript | Planificado |
| `components/Navbar.tsx` | Barra de estado industrial táctil con status LED y acceso rápido | Lucide, Sound | Planificado |
| `components/HeroVault.tsx` | "La Cámara de Seguridad": Puerta interactiva con cerrojos mecánicos móviles | Framer Motion, Sound | Planificado |
| `components/VaultBuilder.tsx` | Configurador interactivo con cálculo de peso, grosor y presupuesto en tiempo real | Types, Sound | Planificado |
| `components/AnatomyScroll.tsx` | Desglose anatómico scrollytelling de las 5 capas de blindaje | Framer Motion | Planificado |
| `components/ResistanceSimulator.tsx` | Simulador interactivo de impacto balístico, radial y fuego | Sound, Testing Data | Planificado |
| `components/IronworkCatalog.tsx` | Catálogo táctil de herrería pesada de alta precisión | Iron Data | Planificado |
| `components/IndustrialConsole.tsx` | Consola de control industrial para contacto y cotización instantánea | Sound, Types | Planificado |
| `components/Footer.tsx` | Sellos normativos, garantía de por vida y especificaciones técnicas | Lucide | Planificado |
