# Copy de los 6 creativos — VINCUFY SMOKE

Generado a partir del análisis de los videos (transcripción de audio) y las imágenes.
Voseo argentino, primera persona, formato Meta Ads (Primary text + Headline + CTA).

Convención: cada ad de Meta tiene 3-4 campos:
- **Primary text** (Hook): aparece arriba del media. Máx recomendado 125 chars (3 líneas).
- **Headline**: aparece debajo del media. Máx 40 chars.
- **Description** (opcional): refuerza beneficio. Máx 30 chars.
- **CTA button**: predefinido por Meta. Usamos `Learn More` ("Más información") por ser neutro para smoke test / B2B early-stage.

URL destino para los 3 ads de productores: `https://vincufy.com/q/eventos/r/productores?utm_source=meta_ads&utm_medium={{placement}}&utm_campaign=vincufy-smoke&utm_content=productor-<ID>`
URL destino para los 3 ads de boliches: `https://vincufy.com/q/eventos/r/boliches?utm_source=meta_ads&utm_medium={{placement}}&utm_campaign=vincufy-smoke&utm_content=boliche-<ID>`

El ad cae **directo en la oferta** (`/q/eventos/r/<segmento>`), sin pasar por las preguntas
iniciales: cada creativo ya sabe a qué segmento le habla, así que preguntárselo de nuevo es
fricción. La ruta `/q/eventos` (quiz) queda para tráfico sin segmento conocido (orgánico, link
compartido). Consecuencia para el análisis: el segmento pasa a salir del creativo y no de la
respuesta del usuario — el smoke #1 mostró que no son lo mismo (gente que entró por creativos de
boliches se autodeclaró productora), así que el corte por segmento hay que leerlo como
"segmento al que le habla el ad", no "segmento real del usuario".

Meta reemplaza `{{placement}}` automáticamente con el feed/stories/reels donde se mostró el ad.

---

## 🎬 PRODUCTOR 1 — Video Comunidad (relato, 33s)

**Archivo**: `productor-1-video-comunidad.mp4` (1080×1920 · 9:16 · 33s · con audio)

**Mensaje del video**: si cada evento te obliga a buscar gente nueva, no estás creciendo, estás sobreviviendo. Con Vincufy cada entrada vendida suma una persona a tu comunidad propia.

**Ángulo**: Relato / Comunidad propia entre eventos.

### Primary text (hook)
> Si cada evento te obliga a buscar gente nueva, no estás creciendo, estás sobreviviendo.
>
> Con Vincufy cada entrada vendida suma una persona a tu comunidad propia. Conocés a tu público, lo contactás y lo volvés a activar para tus próximos eventos.

### Headline
> Construí tu comunidad, no la alquiles.

### Description (opcional)
> Vincufy — comunidad real entre eventos.

### CTA
`LEARN_MORE` ("Más información")

---

## 🎬 PRODUCTOR 2 — Video Comisión (agresivo, 35s) — copy actualizado por el equipo 16-jun

**Archivo**: `productor-2-video-comision.mp4` (1080×1920 · 9:16 · 35s · con audio)

**Mensaje del video**: si tu público paga de más por entrada por la comisión de servicio, vender es más difícil. Vincufy no cobra comisión y además convierte cada entrada en una persona en tu comunidad privada.

**Ángulo**: Agresivo / Comisiones (precio final + comunidad).

### Primary text (hook)
> Las ticketeras tradicionales solo venden entradas. Vincufy te ayuda a vender sin comisión, cobrar sin esperas y construir una comunidad propia con cada evento.
>
> Porque el valor de un asistente no termina cuando compra la entrada.

### Headline
> Más que una simple ticketera.

### Description (opcional)
> Vendé entradas, creá tu comunidad.

### CTA
`LEARN_MORE` ("Más información")

---

## 🖼️ PRODUCTOR 3 — Imagen Versus (demostración) — copy actualizado por el equipo 16-jun

**Archivo**: `productor-3-imagen-versus.png` (941×1672 · 9:16 · imagen estática)

⚠️ **Nota técnica**: la imagen tiene 941px de ancho. Meta recomienda mínimo 1080. Va a funcionar (Meta acepta desde 600), pero en pantallas grandes puede verse un poquito menos nítida.

**Mensaje visual**: comparación lado a lado entre "Ticketera tradicional" (4 X) y "Vincufy" (5 ✓ + un highlight final: "Tu base de asistentes vale más que una entrada"), sobre el fondo de un evento real con la entrada en neón.

**Ángulo**: Demostración / Versus visual.

### Primary text (hook)
> Tu ticketera solo vende entradas… ¿y encima te encarece el precio final con costo de servicio?
>
> Con Vincufy vendés sin comisión y cada asistente pasa a formar parte de tu comunidad propia. Datos reales, contacto directo y una base que crece evento tras evento.

### Headline
> No vendas solo entradas.

### Description (opcional)
> Construí comunidad.

### CTA
`LEARN_MORE` ("Más información")

---

## 🎬 BOLICHE 1 — Video Comunidad (relato, 30s) — copy actualizado por el equipo 16-jun

**Archivo**: `boliche-1-video-comunidad.mp4` (1080×1920 · 9:16 · 30s · con audio)

**Mensaje del video**: metiste mil personas en tu última fiesta, pero cuando terminó a la noche, ¿qué te quedó? Si dependés solo de las redes sociales, cada fecha vuelve a empezar de cero. Con Vincufy cada evento te deja datos, comunidad y contacto directo.

**Ángulo**: Relato / No depender de redes para llenar la próxima.

### Primary text (hook)
> Metiste mil personas el sábado, pero cuando termina la fiesta, ¿qué te queda?
>
> Si dependés solo de las redes, cada finde arrancás de cero. Con Vincufy cada evento te deja datos, comunidad y contacto directo con tus clientes.
>
> Vendé entradas, creá tu comunidad.

### Headline
> Llená el finde y construí la próxima comunidad

### Description (opcional)
> Vincufy — más que una ticketera.

### CTA
`LEARN_MORE` ("Más información")

---

## 🎬 BOLICHE 2 — Video Comisiones (agresivo, 13s) — copy actualizado por el equipo 16-jun

**Archivo**: `boliche-2-video-comisiones.mp4` (1080×1920 · 9:16 · 13s · con audio)

**Mensaje del video**: tu ticketera se queda con el costo de servicio y encima no te ayuda a crecer. Dejá de regalar tu plata y tu comunidad.

**Ángulo**: Agresivo / Corto y directo / Comisiones + pérdida de comunidad.

⚠️ **Nota**: el video es corto (13s). Funciona muy bien para Reels y Stories — atención total y mensaje único.

### Primary text (hook)
> Tu ticketera se queda con el costo de servicio… ¿y encima no te ayuda a crecer?
>
> Dejá de regalar tu plata y tu comunidad. Tocá acá y mirá cómo vender sin comisión.

### Headline
> Vendé sin comisión. Recibí el dinero al instante.

### Description (opcional)
> Vincufy, más que una simple ticketera

### CTA
`LEARN_MORE` ("Más información")

---

## 🖼️ BOLICHE 3 — Imagen Versus (demostración) — copy actualizado por el equipo 16-jun

**Archivo**: `boliche-3-imagen-versus.png` (768×1376 · 9:16 · imagen estática)

⚠️ **Nota técnica**: 768px de ancho. Por debajo del mínimo recomendado (1080). Funciona pero menos nítida en pantallas grandes.

**Mensaje visual**: comparativa de íconos lado a lado entre "Ticketera tradicional" (cobra costo de servicio, relación termina al acreditar, guarda datos transaccionales, cada evento empieza de cero) y "Vincufy" (libre de costos de servicio, relación continúa después del evento, convierte datos en comunidad reutilizable, cada evento fortalece la base del siguiente). Footer destacado: "Las ticketeras venden entradas. Vincufy transforma asistentes en comunidad."

**Ángulo**: Demostración / Versus visual.

### Primary text (hook)
> Las ticketeras tradicionales terminan en la venta, cobran costo de servicio y liquidan el dinero luego del evento.
>
> Vincufy transforma cada entrada en datos, contacto directo y comunidad para volver a llenar tus próximos eventos. Sin costo de servicio y liquidamos al instante.

### Headline
> Crecé con tu comunidad.

### Description (opcional)
> Datos para volver a vender.

### CTA
`LEARN_MORE` ("Más información")

---

## Notas operativas (para cuando arme los ads en Meta)

- **Evento de optimización en Meta**: `InitiateCheckout` (estándar) — se dispara en el click "Comprar" de un plan. Los CTAs "Crear evento" (hero, tagline, etc.) disparan `CreateEventClick` (custom) que **NO se usa para optimización** (es solo engagement intermedio). El `Lead` estándar se dispara cuando completan el modal con email+teléfono.
- **Identidades del ad**: page de Facebook **Vincufy** (`1098616386676942`) + Instagram **@vincufy** (`17841469935615648`). Los 6 ads salen con ambas identidades — así se ven con el handle correcto cuando aparezcan en IG.
- **Placements**: dejar **Advantage+ Placements (automatic)** — Meta distribuye en Feed, Stories, Reels, Explore según rendimiento. Con creativos 9:16 los Reels/Stories van a llevarse la mayor parte.
- **Subtítulos**: los videos tienen audio claro pero Meta requiere que se entienda sin audio (la mayoría de IG/FB se mira en silencio). **Si los videos NO tienen subtítulos hardcodeados**, Meta los auto-genera en distribución. Sería ideal tener subtítulos quemados antes del lanzamiento — si no llegan, va igual con auto-subtítulos de Meta.
- **CTA universal `LEARN_MORE`**: elegido por neutralidad (no presiona "Sign up" que asume conversión a SaaS, ni "Get Offer" que es muy comercial). Para un smoke test donde queremos medir intención sin sesgar, "Más información" es el botón con mejor matching expectativa-realidad.

---

## Pre-deploy checklist de copy (revisalo en 2 minutos)

- [ ] Los hooks no superan 125 caracteres en su primera oración (la que aparece sin "ver más").
- [ ] Los headlines no superan 40 caracteres.
- [ ] No hay typos de voseo ("tu" debería ser "vos" donde corresponda, ya está OK).
- [ ] No prometemos "comprar" — usamos "conocé", "construí", "vendé", coherente con que el botón en la landing es "Comprar" pero el ad lleva al quiz primero.

Si querés editar algún hook, decime cuál y te lo cambio antes de subir.
