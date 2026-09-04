# Guía operativa Meta Ads — VINCUFY SMOKE

Documento vivo. Resumen del estado, blockers, decisiones tomadas y cronograma.
Última actualización: **2026-06-16** (martes) — campaña arranca HOY.

Plan de referencia (la fuente de verdad estratégica): http://100.105.180.26:8100/_preview/vincufy-meta-ads-plan.html — versión v4 (días 1-2 fijos · días 3-4 a definir con datos · gastar 150 USD completo).

---

## 0. Snapshot de la cuenta de Meta Ads

| Asset | Valor |
|---|---|
| Business Portfolio | Vincufy |
| Ad account | `act_2384906755364790` ("Vincufy 1") |
| Currency | USD |
| Timezone | `America/Buenos_Aires` (-3) |
| Spend cap | 0 → a setear en 150 USD |
| Account status | 1 (activa) |
| Balance | 0,00 USD |
| Amount spent total | 0,00 USD |
| **Método de pago** | ✅ **Mastercard *7914** (verificada vía MCP el 16-jun) |
| Pixel asignado | `1346754234198995` ("Vincufy Pixel 2") — disparando eventos |
| Page de Facebook | "Vincufy" (`1098616386676942`) — con foto de perfil |
| Instagram Business | `@vincufy` (`17841469935615648`) — 115 followers — login resuelto |

---

## 1. Estado de pre-vuelo

### 🟢 Resuelto

- ✅ Método de pago cargado
- ✅ Pixel ID nuevo (`1346754234198995`) integrado en la landing y disparando eventos
- ✅ IG `@vincufy` vinculada al ad account
- ✅ Page Vincufy con foto de perfil
- ✅ Timezone Buenos Aires
- ✅ Tracking enriquecido + cambio del evento principal: el click "Comprar" ahora dispara `InitiateCheckout` (estándar de Meta) en lugar de `CreateEventClick` (custom). Manda `segment`, `tier_total_ars`, `value` (USD), `currency`. Commits `b35b0d8` + `2d82769`. Live en bundle `index-Ba6_5Ozw.js` (16-jun).
- ✅ 6 creativos recibidos y verificados (formatos OK, ver §5)
- ✅ Copy de los 6 creativos generado en `meta-creativos/copy.md`

### 🟡 Pendiente de decisión / acción del equipo

- ⏳ Confirmar 8 defaults de configuración (§2)
- ⏳ Posts orgánicos mínimos en `@vincufy` y page de FB (#18, #19) — no-blocker
- ⏳ Configurar tablero `[VINCUFY][SMOKE]` en Ads Manager UI (no se puede vía API)
- ⏳ Verificar Test Events del Pixel (PageView + CreateEventClick + Lead) manualmente

### 🔴 Bloqueante para hoy

- ⏳ Tu OK para que arme **campaña + 6 adsets + 6 ads + spend cap** PAUSED en Meta
- ⏳ Tu OK final para activar la campaña

---

## 2. Decisiones tomadas

| # | Decisión | Valor confirmado |
|---|---|---|
| 4 | Geografía | **CABA + GBA + Córdoba + Rosario** ✅ confirmado 16-jun |
| 5 | Edad | **25-45** ✅ confirmado 16-jun |
| 6 | Intereses Productores | **Event planning, Music festivals, Disc jockey, Event management** ✅ confirmado 16-jun, usados como Advantage+ Audience Suggestions (no restricciones — segmentación Andrómeda) |
| 7 | Intereses Boliches | **Nightlife, Nightclubs, Bar establishment, Hospitality industry** ✅ confirmado 16-jun, usados como Advantage+ Audience Suggestions (no restricciones — segmentación Andrómeda) |
| 8 | Umbral validación binaria | **≥3 clicks-Comprar en productores O ≥3 en boliches** ✅ confirmado por el equipo |
| 9 | Umbral validación parcial | **≥5 en uno, <4 en otro** ✅ confirmado por el equipo |
| 9b | Umbral "no valida" | **<3 en ambos** ✅ confirmado por el equipo |
| 10 | Costo máximo por click-Comprar | **3 USD** (recomendado — confirmación pendiente, no bloqueante para armar) |
| 11 | Spend cap account-level | **150 USD** ✅ confirmado (red de seguridad) |
| 12 | Duración de la campaña | **2 días (mar 16 + mié 17)** ✅ confirmado 16-jun — después se revisa y se decide si extender |
| 13 | Tipo de segmentación | **Advantage+ Audience (Andrómeda)** ✅ confirmado 16-jun — intereses como audience suggestions, no restricciones; Advantage+ Placements automáticos |

### Argumentación del equipo sobre los umbrales (16-jun)

> "Los tickets de Vincufy son medianamente altos (plan más popular ≈ 107 USD inicial), pero más importante que el monto es que la decisión es institucional: para un productor o un boliche, agregar a Vincufy como su ticketera es una decisión grande. No es comprar un producto — es cambiar de proveedor en su core operativo. Por eso cada click en Comprar vale MUCHO más que un click típico de e-commerce, y los umbrales pueden ser más bajos sin perder rigor."

Esto significa:
- 3 clicks-Comprar en un segmento = **3 personas que tomaron una decisión grande viendo el precio**. Para un smoke test direccional de B2B early-stage, es señal suficiente.
- Si llegamos a 5+ en un segmento = señal fuerte para focalizar ese segmento.
- <3 en ambos = no hay tracción todavía → iterar oferta/canal/segmento, no construir el MVP aún.

---

## 3. Estructura de la campaña

```
CAMPAÑA: "VINCUFY SMOKE"
  Objetivo:                OUTCOME_LEADS (Clientes potenciales)
  Ubicación conversión:    Sitio web (vincufy.com)
  Presupuesto:             ABO (a nivel de cada conjunto, no campaña)
  Spend cap account:       150 USD (red de seguridad — usaremos 72 USD en estos 2 días)
  Pixel:                   1346754234198995
  Evento optimización:     InitiateCheckout (estándar de Meta; click en "Comprar" de un plan)
                           Razón: usar evento estándar activa los modelos pre-entrenados de Meta,
                           más optimizable con poco presupuesto que un custom.
  Fecha de inicio:         16/06/2026 (mar) — al subir
  Fecha de cierre:         17/06/2026 (mié) — manual al cerrar el día. Sin "fecha de finalización" automática.
                           Duración: 2 días. Después el equipo decide si extender.
  Identidades del ad:      Page Vincufy + IG @vincufy

  ├─ ADSET-PRODUCTOR-1  →  productor-1-video-comunidad.mp4    (6 USD/día)
  ├─ ADSET-PRODUCTOR-2  →  productor-2-video-comision.mp4     (6 USD/día)
  ├─ ADSET-PRODUCTOR-3  →  productor-3-imagen-versus.png      (6 USD/día)
  ├─ ADSET-BOLICHE-1    →  boliche-1-video-comunidad.mp4      (6 USD/día)
  ├─ ADSET-BOLICHE-2    →  boliche-2-video-comisiones.mp4     (6 USD/día)
  └─ ADSET-BOLICHE-3    →  boliche-3-imagen-versus.png        (6 USD/día)

  SEGMENTACIÓN ANDRÓMEDA (Advantage+ Audience):

  Audiencia productores (1-2-3 idénticas):
    Geo:                    CABA + GBA + Córdoba (capital y provincia) + Rosario
    Age:                    25-45 (amplia — Meta optimiza adentro)
    Detailed targeting:     Advantage Detailed Targeting ON
    Intereses (suggestions, no restrictions):
                            Event planning, Music festivals, Disc jockey, Event management
    Placements:             Advantage+ Placements (automatic — Feed/Stories/Reels/Explore)

  Audiencia boliches (1-2-3 idénticas):
    Geo:                    CABA + GBA + Córdoba (capital y provincia) + Rosario
    Age:                    25-45 (amplia — Meta optimiza adentro)
    Detailed targeting:     Advantage Detailed Targeting ON
    Intereses (suggestions, no restrictions):
                            Nightlife, Nightclubs, Bar (establishment), Hospitality industry
    Placements:             Advantage+ Placements (automatic — Feed/Stories/Reels/Explore)

  URL destino (directo a la oferta del segmento, sin quiz; cada uno con su utm_content):
    https://vincufy.com/q/eventos/r/<productores|boliches>
      ?utm_source=meta_ads
      &utm_medium={{placement}}
      &utm_campaign=vincufy-smoke
      &utm_content=<productor|boliche>-<1|2|3>
```

**Por qué directo a la oferta y no al quiz**: el creativo ya define a qué segmento le habla, así
que las preguntas iniciales sólo agregan pasos antes de que la persona vea el precio. Las rutas
`/q/eventos/r/productores`, `/q/eventos/r/boliches` y `/q/eventos/r/casual` ya funcionan como
entrada directa (el fallback SPA de GitHub Pages resuelve el deep link). `/q/eventos` sigue
existiendo para tráfico sin segmento conocido.

**Sobre la segmentación Andrómeda**: en lugar de pickear intereses como "restricciones duras" (solo gente que matchee esos intereses), los usamos como **suggestions** (sugerencias para el algoritmo). Meta amplía a partir de ahí usando señales del Pixel y comportamiento de gente que convirtió. Con `Advantage Detailed Targeting ON`, Meta puede salir de los intereses para encontrar audiencia parecida que también convierta. Es lo recomendado por la masterclass Andrómeda — funciona mejor que segmentar fino con poco presupuesto.

---

## 4. Presupuesto por día (plan v5 — 2 días)

Cambio respecto al plan v4: el equipo decidió cortar a **2 días** en lugar de 4. Los 78 USD que quedan del tope de 150 NO se gastan ahora; quedan disponibles para una posible segunda iteración si el equipo decide extender después de leer los resultados.

| Día | Fecha | Qué corre | Gasto del día | Acumulado |
|---|---|---|---|---|
| 1 | Mar 16/06 | 6 creativos × 6 USD | 36 USD | 36 USD |
| 2 | Mié 17/06 | 6 creativos × 6 USD | 36 USD | **72 USD ✅** |
| 3 | Jue 18/06 | — | 0 USD | 72 USD |
| 4 | Vie 19/06 | — | 0 USD | 72 USD |

Tope account-level: **150 USD** (red de seguridad — no se debería tocar).

Reglas firmes:
- Días 1-2: **NO TOCAR NADA**. Solo verificar que los 6 adsets gastan y que el Pixel reporta. Mirar entrada la tarde-noche.
- Fin del día 2 (miércoles a la noche): **apagar manualmente** los 6 adsets. Nunca usar "fecha de finalización" automática (limita rendimiento y es irreversible).
- Día 3 (jueves): análisis + decisión del equipo. ¿Cerramos acá o extendemos con los 78 USD restantes?

---

## 5. Estado de creativos

Ubicación: `meta-creativos/` (en el repo, sin commitear).

| # | Archivo | Tipo | Resolución | Duración | Audio | Estado | Notas |
|---|---|---|---|---|---|---|---|
| 1 | `productor-1-video-comunidad.mp4` | Video | 1080×1920 (9:16) | 33s | ✅ | ✅ OK | Relato / Comunidad |
| 2 | `productor-2-video-comision.mp4` | Video | 1080×1920 (9:16) | 35s | ✅ | ✅ OK | Agresivo / Comisiones |
| 3 | `productor-3-imagen-versus.png` | Imagen | 941×1672 (9:16) | — | — | ⚠️ Funciona | Por debajo de 1080 — re-export ideal pero no blocker |
| 4 | `boliche-1-video-comunidad.mp4` | Video | 1080×1920 (9:16) | 30s | ✅ | ✅ OK | Relato / Comunidad |
| 5 | `boliche-2-video-comisiones.mp4` | Video | 1080×1920 (9:16) | 13s | ✅ | ✅ OK | Agresivo / Corto e impactante |
| 6 | `boliche-3-imagen-versus.png` | Imagen | 768×1376 (9:16) | — | — | ⚠️ Funciona | Por debajo de 1080 — re-export ideal pero no blocker |

Copy generado en `meta-creativos/copy.md` (hook + headline + description + CTA por cada creativo, basado en transcripción del audio y análisis visual).

### Lo que hay que confirmar
- ¿Los textos de `copy.md` te cierran o querés editarlos?
- ¿Re-exportas las 2 imágenes en 1080×1920 antes de las 9 AM o vamos con la resolución actual?
- ¿Los videos tienen subtítulos hardcodeados, o dejamos que Meta auto-genere?

---

## 6. Métricas y umbrales

### KPIs jerarquizados

| Prioridad | Métrica | Cómo se lee |
|---|---|---|
| 1 (rector) | clicks en "Comprar" en un plan (`InitiateCheckout` estándar) | Vincufy mide intención de pago real — evento de optimización en Meta |
| 2 (refuerzo) | leads completos (`Lead` estándar — email + teléfono) | Señal más fuerte, más escasa |
| Intermedia | clicks en "Crear evento" del hero/tagline (`CreateEventClick` custom) | Mide engagement / intención previa, no se usa para optimización |
| Diagnóstico | CTR | ¿El creativo engancha? |
| Diagnóstico | CPM | ¿El nicho es caro? |
| Diagnóstico | PageView en /q/eventos | ¿La landing carga? |

### Benchmarks AR (referencia para juzgar)

| Métrica | Bueno | Alarma |
|---|---|---|
| CTR | ≥1-2% | <1% |
| CPM | ~5-7 USD | >10 USD sostenido |
| CPC link | ~1-2 USD | >3 USD |
| % de clicks que llegan a la web | ≥70-80% | <70% → landing lenta |
| Frecuencia | <2 | >2-3 = fatiga |

### Umbrales de decisión (al cierre del viernes 19/06)

| Resultado | Lectura | Acción |
|---|---|---|
| ≥3 en productores **Y** ≥3 en boliches | ✅ Ambos segmentos validan | Construir MVP con copy/oferta diferenciada por segmento |
| ≥5 en uno, <4 en el otro | ✅ Validación parcial fuerte | Focalizar el segmento ganador, iterar el otro |
| ≥3 en uno, <3 en el otro | 🟡 Validación parcial débil | Construir hacia el ganador con cautela, iterar el otro |
| <3 en ambos | ❌ No valida | Iterar oferta, canal, ángulos o segmento antes de construir |

### Costo máximo por click-Comprar

- Verde: 0,50 - 2,50 USD
- Amarillo (sostenible, no escalar todavía): 2,50 - 3,00 USD
- **Rojo (apagar): >3 USD**

---

## 7. Cronograma operativo

### HOY MARTES 16/06 — pre-vuelo + lanzamiento

| Hora | Acción | Quién | Estado |
|---|---|---|---|
| ya | Pasarme creativos | vos | ✅ hecho |
| ya | Generar copy de los 6 ads | yo | ✅ hecho |
| ya | Mejorar tracking CreateEventClick + deploy | yo | ✅ hecho |
| ya | Confirmar método de pago | vos | ✅ hecho |
| AHORA | Vos: revisás `copy.md`, confirmás 8 defaults de §2, decís "creá todo en Meta" | vos | ⏳ |
| AHORA | Vos: 1-2 posts orgánicos a `@vincufy` y page de FB | vos / equipo | ⏳ |
| Después de tu OK | Yo: subo 6 creativos a Meta library + creo campaña + 6 adsets + 6 ads + spend cap 150 USD, todo PAUSED | yo | ⏳ |
| Después | Vos: revisás previews en Ads Manager (FB Feed + IG Feed + Stories + Reels), configurás tablero `[VINCUFY][SMOKE]`, verificás Test Events del Pixel | vos | ⏳ |
| Cuando estés conforme | Vos: tirás el prompt **"Activá VINCUFY SMOKE"** | vos | ⏳ |
| 0 → medianoche | NO TOCAR NADA. Meta arranca a distribuir. Revisión rápida 20-22 hs | — | ⏳ |

### MIÉRCOLES 17/06 — Día 2 (cierre)

| Hora | Acción |
|---|---|
| Toda la mañana | No tocar. 6 adsets siguen a 6 USD/día. Gasto acumulado al cierre = 72 USD ✅ |
| 22-23 hs | **Apagar manualmente** los 6 adsets. Nunca usar "fecha de finalización" |
| 23-24 hs | Yo paso reporte final por segmento + decisión vs. umbrales |

### JUEVES 18/06 — decisión del equipo

Mirar reporte vs. umbrales decididos en §6. Decisión binaria contra los números escritos arriba. Sin discusión emocional.

Decisiones posibles:
1. **Validado** (≥3 clicks-Comprar en al menos un segmento) → construir MVP enfocado en el segmento ganador.
2. **No validado** (<3 en ambos) → opciones: (a) extender la campaña con los 78 USD restantes para juntar más data, (b) iterar oferta/canal/segmento, (c) descartar la hipótesis y pivotar.

> Si se decide extender (opción 2a), yo armo los días extra con los creativos ganadores (no con los 6 originales). Esa decisión la toma el equipo el jueves.

---

## 8. Order ideal para arrancar ahora

1. **Vos AHORA**: leés `copy.md`, decís "OK" o me marcás qué hooks cambiar
2. **Vos AHORA**: confirmás los 5 defaults pendientes de §2 (#4, #5, #6, #7, #10, #11 — los 3 umbrales ya están confirmados)
3. **Vos en paralelo**: subís 1-2 posts orgánicos a `@vincufy` y a la page de FB
4. **Vos**: decís **"creá todo en Meta"**
5. **Yo**: subo 6 creativos a Meta library, creo campaña + 6 adsets + 6 ads + spend cap 150 USD, todo PAUSED. Te paso URL del Ads Manager + screenshots de previews
6. **Vos**: revisás en UI (10 min), configurás tablero `[VINCUFY][SMOKE]`, verificás Test Events del Pixel
7. **Vos**: tirás "Activá VINCUFY SMOKE" → arrancó

Si los pasos 1-7 los hacemos antes de las 10-11 AM, Meta tiene el día completo para distribuir. Si arrancamos más tarde, perdemos parte del día 1. Si por algún motivo no llegamos hoy, lo más responsable es arrancar mañana miércoles (perdés 1 día = 3 días buenos en vez de 4).

---

## 9. Apéndice — datos de la cuenta de Meta

- Business Portfolio: Vincufy
- Ad account: `act_2384906755364790`
- Pixel: `1346754234198995` ("Vincufy Pixel 2")
- Page de Facebook: `1098616386676942` ("Vincufy")
- Instagram Business: `17841469935615648` (`@vincufy`)
- Connection ID Pipeboard: `5e1f0253-9123-4dd2-a01a-bc06347ccb15`
- MCP de Meta Ads conectado vía Pipeboard ✅

## 10. Apéndice — tracking de la landing (eventos del Pixel)

### Funnel de eventos hacia el Pixel de Meta (post commits `b35b0d8` + `2d82769` del 16-jun)

| Step del flujo | Evento Meta | Tipo | Dónde se dispara |
|---|---|---|---|
| Llega a /q/eventos | `PageView` | estándar | autocaptura — cada cambio de ruta SPA |
| Llega a oferta /r/:segment | `ViewContent` | estándar | autocaptura del `useEffect` de OfferPage con `content_category: segment` |
| Click "Crear evento" en hero/tagline/etc. | `CreateEventClick` | custom | `scrollToPricing()` en OfferModule.jsx — solo mide engagement intermedio, NO se usa para optimización |
| **Click "Comprar" en un plan** | **`InitiateCheckout`** | **estándar** | **`handleCtaBuy()` en OfferPage.jsx — evento de optimización principal** |
| Completa modal con email+teléfono | `Lead` | estándar | `handleSubmitLead()` en OfferPage.jsx tras submit OK |

### Props enriquecidas que manda `InitiateCheckout`

```js
{
  source: "pricing_card" | "custom_volume_link" | "sticky-mobile" | ...,
  tier: "starter" | "pro" | "business" | "custom",
  segment: "boliches" | "productores" | "casual",
  tier_total_ars: 10980 | 149700 | 449000 | null,
  value: 7.84 | 106.93 | 320.71 | null,  // en USD (TC 1 USD = 1.400 ARS)
  currency: "USD"
}
```

Esto le da a Meta:
1. **Segmento** → puede optimizar por segmento adentro del adset, aunque ya estamos separando por adset.
2. **Value en USD** + **currency** → habilita que Meta optimice por VALOR (preferir clicks en planes caros) si en una iteración posterior decidimos cambiar la estrategia. Para el smoke test no activamos value optimization, pero deja la puerta abierta.

### Por qué `InitiateCheckout` (estándar) y no `CreateEventClick` (custom) para el click "Comprar"

- Meta tiene **modelos pre-entrenados** para eventos estándar como `InitiateCheckout` que reconocen patrones de "personas que inician checkout" en el mercado AR.
- Un custom event tendría que aprender de cero con 36 USD/día — no le da tiempo con 4 días.
- Semánticamente correcto: el click "Comprar" en un plan = la persona vio el precio y decidió proceder = inicio de checkout.
- **No usamos `Purchase`** porque no hay pago real (es smoke test). Tampoco `Lead` para este step porque la persona no dejó datos todavía — Lead viene después.

PostHog sigue trackeando `comprar_clicked` como evento custom con todas las props para análisis fino (qué tier, qué segmento, cuánto vale en ARS). El cambio del nombre afecta solo al Pixel de Meta, no al dashboard de PostHog.
