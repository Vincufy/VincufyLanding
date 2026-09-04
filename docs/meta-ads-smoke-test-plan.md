# Plan de la primera campaña de Meta Ads — Smoke Test de Vincufy

> **Qué es este documento.** El plan exacto, paso a paso, para lanzar y operar nuestra primera campaña de anuncios en Meta (Facebook + Instagram). El objetivo no es vender: es **validar si hay demanda real** —gente dispuesta a pagar— en dos segmentos (productores y boliches), **antes** de construir el MVP. Todo lo que sigue está fundamentado en los cursos que ya procesamos (Incubadora de Emprendedores, La Sociedad del Marketing, y el módulo Meta Ads de De Cero a CEO). Cuando una recomendación viene de una clase, lo aclaro entre paréntesis.
>
> **Cómo leerlo.** Cada término técnico de Meta Ads aparece en **negrita** y al lado, entre comillas, su explicación en simple. Nadie del equipo tiene experiencia en ads, así que el documento está escrito para que se entienda sin saber nada de antes.
>
> **Estado:** borrador para revisar y ejecutar. Última actualización: 2026-06-11.

---

## 0. Resumen ejecutivo (leé esto si no leés nada más)

- **Qué hacemos:** una campaña de captación de interesados en Meta, con **6 anuncios (3 apuntados a productores, 3 a boliches)**, llevando tráfico a la landing que ya tenemos (vincufy.com con el quiz + la página de precios).
- **Qué medimos:** si la gente que ve el anuncio **hace click en "Comprar"** dentro de un plan con el precio a la vista. Ese click es nuestra señal #1 de **disposición a pagar**. Que además dejen el email/teléfono es una señal todavía más fuerte, pero secundaria.
- **Qué decidimos al final:** si vale la pena terminar de construir Vincufy y para cuál de los dos segmentos hay más demanda.
- **Plata:** gastamos los **150 USD completos** en los 4 días.
- **Días:** **Lunes a Jueves** (4 días).
- **Esquema de gasto (en dos mitades):**
  - **Días 1-2 (Lun-Mar) — FIJO:** los **6 creativos** a **6 USD/día** cada uno = **72 USD**.
  - **Días 3-4 (Mié-Jue) — A DEFINIR con los datos:** se reparten **los 78 USD restantes**. Cuántos creativos siguen prendidos y cuánto va a cada uno **se decide el miércoles**, después de leer los datos de los 2 primeros días. No fijamos eso de antemano — sale del análisis.
- **El 6 USD/día de los primeros 2 días** está dentro del rango 5-10 USD que recomienda el curso (ver §4 — el instructor usa 5 en sus propias campañas).
- **Lo que confirmamos del curso (no se cambia):** la **estructura ABO** (un anuncio por "cajón", presupuesto fijo por cajón) es la correcta para comparar segmentos.
- **Lo más importante:** el 70-80% del resultado se juega en **la oferta (los 3 planes del quiz) y la fuerza de los 6 creativos**, no en la configuración de la campaña (De Cero a CEO, todas las clases de testeo coinciden). Ahí va el esfuerzo.

---

## 1. El objetivo real: validamos DEMANDA, no el producto

Las 4 clases de validación coinciden en una sola idea, y es la base de todo el plan:

> *"No estamos tratando de validar nuestro producto, estamos tratando de validar que existe demanda."* (Incubadora — *Cómo Validar una Idea de Negocios*)

Esto significa que el smoke test **NO** valida la app de Vincufy (que todavía no existe). Valida que productores y boliches:
1. **Tienen el problema** que decimos que tienen (perder el contacto con su público entre evento y evento, depender de la ticketera de turno), y
2. **Lo pagarían**.

La landing + el quiz + la página de precios **ya son el experimento válido** — no hace falta nada construido para validar demanda (Incubadora — *Desarrollar tu PMV*: "la landing es el PMV").

**Regla de oro (de los cursos, y va para todo el equipo):** el interés no es validación. *"De algo viral con likes a alguien que pasa la tarjeta hay una gran distancia"* (Incubadora — *Cómo Validar una Idea*). Los likes, las impresiones y hasta los clicks baratos no dicen nada. Lo que dice algo es que **alguien avance hasta ver el precio y aun así demuestre que quiere** (click en Comprar) y, mejor todavía, deje sus datos.

### Los dos niveles de validación (importante para leer el resultado)

Los cursos distinguen dos tipos de señal (Incubadora — *Desarrollar tu PMV*):

| Nivel | Qué es | En Vincufy se mide con |
|---|---|---|
| **Testeo A — interés** (señal blanda) | Curiosidad, clicks, atención | PageView, inicio del quiz |
| **Testeo B — disposición a pagar** (señal fuerte) | La persona actúa sabiendo que cuesta plata | **Click en "Comprar"** (vio el precio y aun así quiso) + dejar email/teléfono |

> **Decisión tomada (Daniel):** la **disposición a pagar la medimos con el click en el botón "Comprar"** que está dentro de cada uno de los 3 planes (los planes muestran el precio; el click en cualquiera de los 3 suma). Que dejen el email es una señal **aún más fuerte**, pero el KPI rector del test es el click en Comprar.

---

## 2. Diccionario rápido de Meta Ads (en simple)

Antes de la config, el vocabulario mínimo. Meta organiza todo en **3 niveles, uno adentro del otro** (esto lo dicen idéntico todas las clases de ads):

```
CAMPAÑA  ─ acá se elige el OBJETIVO (qué le pedís a Meta que consiga)
  └─ CONJUNTO DE ANUNCIOS (ad set) ─ acá va la audiencia + el presupuesto + el calendario
       └─ ANUNCIO ─ el creativo (el video/imagen que ve la gente)
```

| Término técnico | Qué significa en simple |
|---|---|
| **Campaña** | El "paraguas" que envuelve todo. Acá elegís **el objetivo**: qué querés que Meta te traiga (clicks baratos, mensajes, o interesados de verdad). |
| **Objetivo de campaña** | La instrucción principal. *"Facebook siempre te da lo que le pedís"* (Sociedad — *Objetivos de campaña*): si pedís Tráfico, te da clicks baratos pero malos; si pedís Clientes potenciales, te busca gente que deja datos. |
| **Conjunto de anuncios** (*ad set*) | El "cajón" donde definís **a quién** le mostrás, **cuánta plata** por día, y **qué días/horas**. Cada cajón tiene su propio presupuesto. |
| **Anuncio** (*creativo*) | El video o imagen concreto que ve el usuario. |
| **ABO** (*presupuesto a nivel de conjunto*) | "Yo decido cuánta plata va a cada cajón." Vos fijás el presupuesto de cada conjunto y Meta lo respeta. |
| **CBO / Advantage+** (*presupuesto a nivel de campaña*) | "Meta decide cómo repartir la plata entre los cajones." Más automático, pero puede dejar cajones sin gastar. |
| **Píxel** | Un código en la web que le avisa a Meta qué hace la gente (entró, clickeó Comprar, dejó datos). Sin esto, Meta optimiza a ciegas. **Ya lo tenemos instalado** (ID 1346754234198995). |
| **Evento de conversión** | La acción que le pedimos a Meta que persiga. En nuestro caso: el click en Comprar (`CreateEventClick`) y/o el `Lead`. |
| **CTR** (*Click-Through Rate*) | De cada 100 que ven el anuncio, cuántos clickean. Mide si el anuncio "engancha". |
| **CPM** (*costo por mil impresiones*) | Cuánto cuesta que el anuncio se vea 1.000 veces. Mide qué tan "caro" es tu público. |
| **CPC** (*costo por click*) | Cuánto pagás por cada click al enlace. |
| **CPL** (*costo por lead*) | Cuánto te sale cada interesado captado. Es la métrica "norte" del test. La fórmula universal: **costo por algo = plata gastada ÷ cantidad de ese algo** (Sociedad — *Analiza métricas*). |
| **Frecuencia** | Cuántas veces, en promedio, la misma persona vio tu anuncio. Si pasa de ~2, empieza la "fatiga" (la gente se satura). |
| **Fase de aprendizaje** | Los primeros días en que Meta "tantea" a quién mostrarle. Sale de ahí recién con ~50 conversiones por campaña (toma ~1 semana). |
| **Business Manager / Portafolio empresarial** | La cuenta "central" de empresa donde viven la página, el Instagram, la cuenta de anuncios y el píxel, todo conectado. Prerequisito obligatorio. |
| **Biblioteca de Anuncios** | Una herramienta pública de Meta donde podés ver TODOS los anuncios que está corriendo cualquier marca. Sirve para espiar a la competencia gratis. |

---

## 3. Estructura de la campaña (confirmada con los cursos)

> **Buenas noticias:** la estructura que ya tenías en mente (un anuncio por cajón, con presupuesto fijo cada uno) es **exactamente** lo que los cursos recomiendan para este caso. Es un testeo **ABO** de "1 creativo por conjunto" sin que lo supieras (De Cero a CEO — *Tu primer testeo ABO*). Lo confirmamos.

### 3.1 El armado

```
CAMPAÑA: "VINCUFY SMOKE"
  Objetivo: Clientes potenciales (leads)
  Ubicación de la conversión: Sitio web (nuestra landing)
  Presupuesto: a nivel de CONJUNTO (ABO) — NO a nivel de campaña (CBO)

  ├─ CONJUNTO: ADSET-PRODUCTOR-1  →  Creativo Productor A   (6 USD/día)
  ├─ CONJUNTO: ADSET-PRODUCTOR-2  →  Creativo Productor B   (6 USD/día)
  ├─ CONJUNTO: ADSET-PRODUCTOR-3  →  Creativo Productor C   (6 USD/día)
  ├─ CONJUNTO: ADSET-BOLICHE-1    →  Creativo Boliche A     (6 USD/día)
  ├─ CONJUNTO: ADSET-BOLICHE-2    →  Creativo Boliche B     (6 USD/día)
  └─ CONJUNTO: ADSET-BOLICHE-3    →  Creativo Boliche C     (6 USD/día)
```

**6 conjuntos = 6 creativos** (3 productores + 3 boliches), 1 creativo por conjunto, mismo presupuesto cada uno. Así se lee un costo limpio por segmento.

**Truco operativo:** armás UN conjunto completo (con su anuncio) y lo **duplicás 5 veces**, cambiando solo el creativo y el nombre (De Cero a CEO — *Tu primer testeo ABO*). Mucho más rápido que armar 6 de cero.

### 3.2 Las 5 decisiones de configuración (con el porqué)

1. **Objetivo = "Clientes potenciales", NO "Tráfico" ni "Interacción/Mensajes".**
   Si pedimos Tráfico, Meta nos trae clicks baratos de gente que no convierte. Le pedimos explícitamente el resultado valioso (Sociedad — *Objetivos de campaña* + *Crea una campaña hacia tu página web*).

2. **Optimizar por el evento que vale.**
   Nuestro evento rector es el **click en Comprar** (`CreateEventClick`) — que además es **más frecuente** que el Lead, así que le da más señal a Meta para optimizar con presupuesto chico. El `Lead` (email) queda como señal secundaria, más fuerte pero más escasa.
   - *Por qué esto encaja perfecto con tu decisión:* los cursos advierten que con poco presupuesto y un evento escaso (como el Lead/email), los cajones no juntan suficientes conversiones y Meta no aprende. Optimizar por el click en Comprar —que es lo que vos elegiste como KPI de disposición a pagar— **resuelve ese problema de raíz** (Sociedad — *Crea campaña a WhatsApp*, aplicación a Vincufy: "si el evento principal es escaso, optimizá por uno más frecuente").

3. **Camino LANDING, no formulario nativo de Facebook.**
   Meta deja captar leads con un formulario que se abre dentro de Facebook (más barato). **No lo usamos**: ese formulario se saltea la página de precios, y justamente lo que queremos validar es si pagan VIENDO el precio (Sociedad — *Formularios de Facebook*). Mandamos a la landing.

4. **ABO (presupuesto por cajón), NO CBO (presupuesto por campaña).**
   Esta es la decisión más importante de configuración. El objetivo del test es **comparar productores vs. boliches**. Si usáramos CBO, Meta podría volcar casi toda la plata en 1-2 anuncios y dejar los otros sin gastar, **arruinando la comparación** (De Cero a CEO — *CBO vs ABO*: la propia clase advierte esto). Con ABO forzamos que cada segmento gaste parejo y podamos leer un costo limpio por cada uno.

5. **Audiencia: empezar acotada por segmento, dejar que Meta expanda.**
   Acá los cursos se contradicen (unos dicen segmentar fino a mano, otros dicen audiencia abierta). Resolución para nosotros: como los creativos ya segmentan solos (el de productores habla a productores), arrancamos con un **interés-base por segmento** y dejamos que Meta haga el resto. No perder horas armando públicos.
   - **Productores:** intereses tipo *producción de eventos, organización de fiestas, DJs, gestión de eventos*.
   - **Boliches:** intereses tipo *vida nocturna, discotecas, dueños de bar/club, hostelería/gastronomía*.
   - **Geografía:** ver §6 (concentrar para no diluir el presupuesto chico).
   - **NO** usar segmentación por ingresos (solo funciona en EE.UU., no en Argentina — Sociedad — *Segmentación*).

---

## 4. Presupuesto: cómo se gastan los 150 USD

> ### El número de los primeros 2 días, fundamentado
>
> **Presupuesto días 1-2:** **6 USD por creativo por día** (los 6 creativos). _(Lo de los días 3-4 sale de un análisis posterior — ver §4.1.)_
>
> **De dónde sale — el rango que da el curso.** De Cero a CEO tiene **dos módulos de Meta Ads** y el mismo instructor da números algo distintos según la clase. Puestos juntos, definen un **rango recomendado de 5 a 10 USD por conjunto/día**:
> - En *Estrategias de testeo (teórico)* dice, textual: *"por conjunto de anuncio… yo recomiendo que le pongamos **mínimamente 5 dólares**"*, *"te da el testear en un lapso de **entre 5 a 10 dólares** por conjunto"*, y *"**yo mismo, en mis propias campañas, testeo con 5 dólares por conjunto**, y eso me basta para tomar decisiones en 48 horas"* (01:02–03:50).
> - En la demo práctica *Tu primer testeo ABO* usa **12 USD** (*"mínimamente 12 dólares, va perfecto"*) — un número más alto, para una sola campaña madre.
> - Abajo del rango hay un piso: *"si le ponés **3 dólares o menos**, vas a llegar a menos personas y vas a tomar decisiones más lento"*. Por eso no bajamos de 5-6.
>
> **Por qué 6 y no 5 ni 12, para los primeros 2 días:**
> - Con **6 creativos**, el precio por creativo tiene que ser bajo (12 USD × 6 son 72 USD/día — se comería casi medio presupuesto en un día). El rango 5-10 es el que aplica.
> - **6 USD** está apenas arriba del piso de 5 que el instructor usa, así que junta un poco más de señal por conjunto. Los 6 creativos a 6 USD × 2 días = **72 USD**, y dejan **78 USD** para repartir en los días 3-4 según los datos (§4.1).
> - El propio instructor confirma que con ~5-6 USD/conjunto **alcanza para decidir en 48 hs** — que es justo nuestra ventana de los 2 primeros días.
>
> **Nota honesta:** una versión anterior de este plan recomendaba 12 USD basándose solo en la clase de la demo. Al revisar el módulo teórico apareció el rango completo (5-10) y la práctica real del instructor (5). Con 6 creativos, 6 USD es la elección correcta dentro de ese rango.

### 4.1 El reparto del presupuesto: dos mitades

Gastamos los **150 USD completos** en los 4 días, en dos tramos: el primero está **fijo**; el segundo se **define con los datos**.

| Tramo | Qué corre | Cálculo | Gasto |
|---|---|---|---|
| **Días 1-2 (Lun-Mar) — FIJO** | Los **6 creativos** (3 productores + 3 boliches) × 6 USD/día | 6 × 6 × 2 | **72 USD** |
| **Días 3-4 (Mié-Jue) — A DEFINIR** | _Se decide el miércoles con los datos:_ a cuántos creativos se les sigue poniendo plata y cuánto a cada uno. | todo el resto | **78 USD** |
| | | **TOTAL** | **150 USD** ✅ (se gasta completo) |

**Cómo funciona:**
- **Días 1-2 (fijo):** los 6 ángulos compiten en igualdad de condiciones a 6 USD cada uno → descubrimos qué dolor/segmento resuena. Cada conjunto junta ~12 USD en esos 2 días, suficiente para decidir (el curso pide que junte ~8-9 USD antes de matar un creativo).
- **Días 3-4 (a definir con los datos):** quedan **78 USD** (= 150 − 72) para repartir entre el miércoles y el jueves. **Cuántos creativos siguen prendidos y cuánto va a cada uno se decide el miércoles**, leyendo el rendimiento de los primeros 2 días. Eso sale del análisis (§12), no se fija de antemano. La única regla firme: **se gasta TODO el resto** (no sobra plata), y el reparto sale de qué funcionó.
- Esto sigue el espíritu del curso —*"apagar el perdedor y volcar su plata al ganador"*, y la masterclass 2026 (filtrar muchos creativos baratos y concentrar en los ganadores)— pero **sin prefijar** la cantidad de ganadores ni el monto: eso lo dicta la data.

> **Referencia rápida** (solo para dimensionar, NO es una decisión tomada): los 78 USD de los días 3-4 dan ~39 USD/día. Según a cuántos creativos se decida ponerles plata, eso podría ser ~39 USD a 1 creativo, ~19,5 a 2, ~13 a 3, etc. **El número final sale del análisis del miércoles.**

### 4.2 Lo que NO hay que hacer con el presupuesto

- **NO subir el presupuesto por entusiasmo** el día 2 (Incubadora — *Cómo Validar una Idea*: "la inversión es inversamente proporcional a la incertidumbre" — solo se sube plata cuando los datos ya confirmaron demanda, nunca antes).
- **NO** aplicar nada de "escalado" de e-commerce (interés compuesto +30%, duplicar 2-4x, CostCap/BidCap). Todo eso es para DESPUÉS de validar, con un anuncio ganador conocido (De Cero a CEO — *Estrategias para escalar*). Con 150 USD y sin ganador conocido, un "cap" puede hacer que ni gaste.
- **Dato tranquilizador:** Meta **siempre gasta un poco menos** del presupuesto asignado. No se asusten si los 6 USD/día gastan 5 y pico (De Cero a CEO — *Métricas clave*).

---

## 5. Ventana de días y horarios

> **Ventana decidida por el equipo:** **Lunes a Jueves** (4 días).
>
> Se evaluó correr Mié-Sáb para "pegar el finde" (productores y boliches viven del fin de semana), pero el equipo optó por mantener **Lun-Jue**. Es una decisión válida: ninguno de los cursos opina sobre qué días de la semana correr —razonan en días-calendario, no en estacionalidad semanal—, así que esto es criterio del equipo. Lo que sí tomamos del curso es el criterio **intradía** de §5.2 (cuándo mirar, cuándo no apagar, cómo cerrar), que aplica igual sea cual sea la ventana.

### 5.1 La ventana: Lunes a Jueves (4 días)

| Días | Qué corre | Gasto |
|---|---|---|
| **Lun + Mar** | Los **6 creativos** (3 productores + 3 boliches) × 6 USD/día — **FIJO** | 72 USD |
| **Mié + Jue** | **A definir con los datos** (cuántos creativos y cuánto a cada uno se decide el miércoles) | 78 USD (todo el resto) |
| | **TOTAL** | **150 USD** ✅ (se gasta completo) |

- **Lun-Mar = exploración:** los 6 ángulos compiten parejo. Cada conjunto junta ~12 USD en los 2 días, suficiente para decidir.
- **Mié = corte y reparto:** con los datos de los 2 primeros días se decide a qué creativos seguir poniéndoles plata, y cuánto a cada uno, repartiendo **los 78 USD restantes** entre miércoles y jueves (ver §4.1 y §12).
- **Mié-Jue = concentración:** corren los creativos elegidos, gastando todo el resto del presupuesto.

### 5.2 Horarios y programación (de los cursos, criterio intradía)

- **Zona horaria PRIMERO:** confirmar que la cuenta está en **America/Argentina/Buenos Aires** antes de fijar fechas. Si quedó en otra TZ (ej. Bogotá), los cortes diarios de presupuesto se corren de día.
- **Arranque:** programar el inicio del **lunes temprano (~5-6 AM hora Argentina)**. Meta necesita el día completo para distribuir; arrancar tarde desperdicia horas de entrega.
- **Sin dayparting (sin "mostrar solo de noche"):** con presupuesto **diario** (que es lo que usamos), Meta **no habilita** el calendario de anuncios por franja horaria — eso requeriría presupuesto "vitalicio", que agrega complejidad innecesaria. Cada día, los anuncios corren 24/7 y Meta reparte solo.
- **Regla de revisión:** **NO decidir a la mañana.** Mirar entrada la **tarde-noche** (de las 14-16h en adelante). Meta tiene hasta la medianoche para gastar el presupuesto del día (De Cero a CEO — *Etapa de testeo*).
- **Regla de duplicar por hora:** si un creativo a media mañana **no gastó nada** de sus 6 USD (posible error de entrega de Meta), **duplicarlo temprano** (antes del mediodía, 11-12h máx) para que tenga el día completo. Si ya es media tarde y no arrancó, **no duplicar** ese día.
- **Cierre:** apagar a mano al cerrar el **jueves** (o al tocar los 150 USD, lo que pase primero). **NUNCA** poner "fecha de finalización" (limita el rendimiento y es irreversible).

### 5.3 Riesgos de esta ventana (y cómo los cubrimos)

- **Margen de ajuste:** dejar Lun-Mar sin tocar + elegir ganadores el miércoles deja el miércoles y jueves como tramo de ganadores. Es una iteración. → Aceptado: esto es un smoke **direccional**, no una optimización. La decisión se toma con la lectura de Lun-Mar, que los cursos consideran suficiente para una señal binaria.
- **El público vive del finde y el test cierra el jueves:** un dueño de boliche puede estar menos receptivo de lunes a jueves que el finde. → Mitigación: el test mide **señal direccional** entre segmentos y creativos; si la respuesta es floja, parte de la lectura es "probar también una ventana de finde en la próxima ronda" antes de descartar la demanda. (Por eso quedó como decisión consciente del equipo, no un descuido.)
- **Boliches deciden más lento que productores:** un boliche es una decisión más institucional → ciclo de consideración más largo. No descartar el segmento boliches solo por bajo volumen en 4 días; matizar la lectura.

---

## 6. Geografía y audiencia

- **Concentrar, no abrir todo el país.** Con 150 USD, abrir "Argentina entera" diluye el presupuesto y sube el CPM. Recomendado: **CABA + GBA**, y si querés cubrir más, sumar **Córdoba y Rosario** (las plazas con más vida nocturna/eventos). Densificar el budget en menos territorio baja el costo por persona (De Cero a CEO — *Métricas clave*, sobre CPM y competencia).
- **Edad sugerida:** dueños/managers de boliches y productores suelen tener 25-45. Empezar ahí; es ajustable.
- **Audiencia base por segmento:** la de §3.2. No obsesionarse con segmentación fina — el creativo segmenta más que el targeting.

---

## 7. Los 6 creativos: donde se juega el 70-80% del resultado

> Todas las clases de testeo cierran igual: *"lo que importa siempre es el producto y los creativos; la campaña es secundaria."* (De Cero a CEO). Acá va el esfuerzo.

### 7.1 Regla madre: 6 ÁNGULOS distintos, no 6 versiones parecidas

El riesgo #1: que los creativos sean demasiado parecidos. Si lo son, **Meta los trata como iguales**, satura el mismo público y nos da un falso "no hay demanda" (De Cero a CEO — *Masterclass Andrómeda 2025*). 

Buena noticia: con **6 creativos** ya entramos en el rango que el curso considera bueno para que "alguno salga ganador" (la masterclass pide 5-8 ángulos realmente distintos). Pero solo cuenta si **de verdad son distintos**: los 3 de cada segmento tienen que atacar **un dolor distinto cada uno**, no ser cambios de color. Mezcla recomendada por segmento: **1 agresivo + 1 relato/storytelling + 1 testimonio/demostración**.

**Mapa de ángulos sugerido** (derivado de los dolores reales de cada avatar, Sociedad — *Workshop Avatar* + *Niveles de consciencia*):

| Creativo | Segmento | Ángulo (dolor) | Tono |
|---|---|---|---|
| Productor A | Productores | "Armás un evento, lo llenás… y arrancás de cero con el siguiente" (perdés el contacto con tu público) | Relato |
| Productor B | Productores | "Dependés de la ticketera y no sos dueño de tus datos / tu audiencia" | Agresivo |
| Productor C | Productores | "Tu comunidad propia, que te sigue entre evento y evento" (la solución mostrada en acción) | Demostración |
| Boliche A | Boliches | "Llenás el finde pero no sabés quién entró ni cómo volver a invitarlos" (no fidelizás) | Agresivo |
| Boliche B | Boliches | "Tu lista de clientes vive en stories que se borran" → necesitás algo propio | Relato |
| Boliche C | Boliches | "El finde que vuelva tu gente, no que arranques de cero" (recurrencia / comunidad) | Testimonio/relato |

**Diferenciador común a los 6:** *"comunidad propia que te sigue entre evento y evento"*, no "una ticketera más". Ese es el corazón de la propuesta de Vincufy.

> El mapa es una **sugerencia**: si ya tienen los 6 creativos hechos con otros ángulos, lo importante es que sean genuinamente distintos entre sí y 3 claramente de cada segmento. Nombrarlos en la campaña por segmento (ADSET-PRODUCTOR-1/2/3, ADSET-BOLICHE-1/2/3) para leer las métricas separadas.

### 7.2 Estructura de cada creativo (fórmula del curso)

Embudo de 4 fases + PAS (Problema-Agitación-Solución), Sociedad — *Palabras que Venden* + De Cero a CEO — *Guiones*:

1. **Hook (primeros 3-6 segundos)** — frena el scroll y, en la primera frase, ya segmenta al avatar correcto. *"¿Producís fiestas pero arrancás de cero cada evento?"* El hook decide el 80% del resultado del creativo.
2. **Interés** — una línea que demuestra que entendés su mundo.
3. **Deseo (PAS)** — Problema (tu público no es tuyo) → Agitación (cada evento empezás de cero) → Solución (Vincufy = tu comunidad propia).
4. **CTA al quiz**, en primera persona y con beneficio: *"Quiero ver mi comunidad"*, *"Empezá en 30 segundos"*, *"Sumate a la lista de fundadores"*.

### 7.3 Reglas de copy y formato

- **El CTA nunca es "Comprar"** en el anuncio (no hay producto que comprar todavía). Usar **"Registrarte" / "Suscribirte" / "Más información"** que lleve al quiz (Sociedad — *Estructura de anuncios ganadores*). *(Ojo: el botón "Comprar" SÍ existe, pero adentro de la landing, en la página de precios — ahí es donde medimos disposición a pagar.)*
- **Coherencia anuncio → landing:** la promesa del hook debe coincidir con el título (H1) de la landing. El 80% del éxito de una landing es el titular (Sociedad — *Palabras que Venden*). Si el ad promete "tu comunidad propia", el H1 lo tiene que reforzar, o el interesado se cae.
- **Video:** SIEMPRE con subtítulos (se mira sin audio) + música + oferta clara + CTA al cierre. Cambio visual cada 4-5 segundos para retener (Andrómeda).
- **Escasez REAL, nunca inventada:** aprovechar el pre-launch honestamente — *"acceso anticipado", "primeros productores en la lista"*. **No inventar testimonios ni estadísticas** (los cursos se contradicen, pero para un SaaS B2B sin trayectoria, inventar prueba social es riesgoso y contamina la señal — gana la regla de Sociedad: prueba social y escasez deben ser reales).
- **Formatos a exportar:** imagen cuadrada 1080×1080 (feed) + vertical 1080×1920 (stories/reels). Acompañar cada video con una imagen estática que diga el gancho y muestre el precio (filtra y sube la calidad del interesado).

### 7.4 Pre-trabajo antes de lanzar (gratis, mueve la aguja)

- Pasar los 6 creativos + la landing por **ChatGPT/Claude**: *"¿qué mejorarías? ¿esta oferta tiene demanda?"* (De Cero a CEO — *Etapa de testeo*).
- Espiar la **Biblioteca de Anuncios de Meta**: buscar *"venta de entradas", "productora de eventos", "boliche", "fiesta"* y ticketeras argentinas (Passline, etc.). Los anuncios que llevan **más tiempo activos o más duplicados** = estructura que les funciona. Modelar (no copiar) (Sociedad — *Estructura de anuncios ganadores*).

---

## 8. Las métricas: qué mirar y cómo decidir

### 8.1 Jerarquía de métricas (de tu decisión + cursos)

```
DECISIÓN (apagar/escalar un creativo)
  1º  Clicks en "Comprar"  (CreateEventClick)  ← KPI RECTOR: disposición a pagar
  2º  Leads (email/teléfono dejados)            ← señal más fuerte, pero más escasa

DIAGNÓSTICO (para entender QUÉ arreglar, no para decidir)
  • CTR   — ¿el creativo engancha?
  • CPM   — ¿el público es caro? ¿el nicho es muy chico?
  • PageView / inicio de quiz — ¿la landing carga y retiene?
```

El **costo por click-en-Comprar** y el **CPL** se leen **por segmento** (productores vs. boliches por separado) — esa comparación es el hallazgo central del test.

### 8.2 Benchmarks de Argentina, hoy (para juzgar los creativos)

> Estos números son del mercado argentino actual (De Cero a CEO — *Métricas clave*). Sirven para juzgar si un creativo "engancha". Ojo: los benchmarks de COSTO POR VENTA de los cursos son de e-commerce y NO se trasladan directo a nuestro costo por lead — usamos solo los de "tope de embudo".

| Métrica | Bueno | Malo / alarma |
|---|---|---|
| **CTR** | 1-2% o más (≥2% es bueno) | < 1% = el creativo no tiene hook → candidato a apagar; < 0,8% = malo |
| **CPM** | ~5-7 USD (referencia AR hoy) | +10 USD sostenido = señal de que el nicho casi no existe |
| **CPC** | ~1-2 USD | sube mucho si el público es chico/caro |
| **Clic → llegada a la web** | ≥70-80% llegan | < 70% = la landing carga lento (arreglar la página, no el anuncio) |
| **Frecuencia** | < 2 | > 2-3 = fatiga, la gente ya lo vio demasiado (riesgo bajo en pocos días) |

### 8.3 La regla de decisión: "el juego del detective"

Al cierre del jueves (antes de elegir ganadores), leer el embudo por segmento y diagnosticar (Sociedad — *Analiza métricas* + De Cero a CEO — *Métricas clave*):

- **CTR bajo** → problema del **CREATIVO** (cambiar hook/imagen). La gente ni clickea.
- **CTR bueno, pero pocos clicks-en-Comprar respecto a las visitas** → problema de la **OFERTA/PRECIO/LANDING**, no del anuncio. Llegan pero no se entusiasman con los planes.
- **Llegan a la web < 70% de los que clickean** → la **landing carga lento** (que cargue en menos de 1 segundo). Arreglar la página, no apagar el ad.
- **Clicks en Comprar pero pocos leads** → **fricción en el formulario/quiz**.

Esto es clave: separa **"no hay demanda"** (señal negativa válida) de **"hay demanda pero la landing falla"** (arreglable a tiempo, antes de concentrar en ganadores el miércoles). Evita que matemos la hipótesis por la razón equivocada.

### 8.4 Tablero a configurar antes de lanzar

En el Administrador de Anuncios: **Columnas → Personalizar**, dejar solo estas y guardar el preset como **`[VINCUFY][SMOKE]`** (Sociedad — *Analiza métricas* + De Cero a CEO):

`Nombre del conjunto` · `Presupuesto` · `Importe gastado` · `Resultados` (clicks en Comprar / Leads) · `Costo por resultado` (CPL) · `CTR` · `CPC` · `CPM` · `Clics en el enlace` · `Frecuencia`

> Destildar **todas** las variantes repetidas de cada métrica (Meta ofrece como 5 versiones de cada una; deja solo una). Mirar el tablero también en las pestañas "Conjuntos de anuncios" y "Anuncios".

Y una **planilla simple aparte** (Google Sheets), revisada 5 min por día:
`fecha · creativo · segmento · tier-más-clickeado · gasto · PageView · clicks-Comprar · leads · CPL`

### 8.5 Qué métrica se lee dónde (Meta vs PostHog) — importante

Hay una **asimetría** entre lo que ve Meta y lo que ve PostHog. Saberla evita conclusiones equivocadas:

| Lo que necesitamos saber | ¿Meta (Pixel)? | ¿PostHog? |
|---|---|---|
| Que hubo un click en Comprar | ✅ `CreateEventClick` | ✅ `comprar_clicked` |
| **En qué plan/tier** clickeó | ⚠️ va como prop custom, no segmentable en el reporte estándar | ✅ `tier_id`, `tier_total_ars`, `tier_tickets` (completo) |
| **Qué segmento** (productor/boliche) | ⚠️ hoy NO va en `CreateEventClick` (sí en `Lead`) | ✅ `segment` en todos los eventos |
| Valor en pesos del interés | ⚠️ solo en `Lead` (`value`+`currency`) | ✅ `tier_total_ars` |

**Regla práctica:**
- **Para el dinero / decidir presupuesto** (CPL, costo por click-en-Comprar, CTR, CPM, todo **por segmento**) → **Administrador de Meta**. Como separamos los segmentos en conjuntos distintos (§3), ahí se lee limpio.
- **Para la calidad del interés** (qué tier, qué segmento, qué valor — la señal más rica) → **PostHog**, cruzando por las UTMs. PostHog es quien dice *"el plan Pro fue el más clickeado entre productores"*. Meta no te lo da prolijo.

#### Dos arreglos de tracking recomendados ANTES del lunes (chicos, gran señal)

El click en Comprar hoy dispara `CreateEventClick` con poca metadata. Conviene, en `src/pages/OfferPage.jsx`:

1. **Agregar `segment` y `tier` (y `tier_total_ars`) como propiedades del `CreateEventClick`** (hoy solo manda `source` y `tier`). Sin `segment` en el evento, Meta no puede optimizar/segmentar por segmento en ese evento.
2. **Mandar `value` + `currency` en `CreateEventClick`** (hoy solo está en `Lead`). Permite que Meta, opcionalmente, optimice por **valor** y no solo por cantidad de clicks — así captura mejor a los organizadores grandes (plan Mejor costo).

> Son cambios de 2-3 líneas. Si no se llegan a hacer, el test igual corre: la señal por tier/segmento se lee igual en **PostHog**. Pero hacerlos mejora lo que Meta puede optimizar.

---

## 9. Paso 0 — Checklist PRE-VUELO (hacer ANTES del lunes, es bloqueante)

> Los cursos son tajantes: sin esto, o se quema el día 1, o el resultado es un **falso negativo** (Meta no muestra los ads, o el píxel no reporta y leemos "0 interesados" cuando en realidad el tracking estaba roto). Hacerlo el fin de semana, antes del lanzamiento del lunes.

- [ ] **Business Manager / Portafolio** creado, usando un **Facebook personal con antigüedad** de un co-founder como admin (una cuenta nueva arriesga bloqueo — De Cero a CEO — *BM y Píxel*).
- [ ] Los **3 co-founders agregados** como usuarios del BM por email (no depender de una sola cuenta).
- [ ] **Página de Facebook + Instagram profesional** conectados, **con foto de perfil cargada** (⚠️ sin foto de perfil, los anuncios **no salen en Instagram** = se pierde la mitad del alcance, blocker silencioso — Sociedad — *Estructura de anuncios ganadores*).
- [ ] Algo de **contenido orgánico** mínimo en la página/IG (reduce fricción y riesgo de bloqueo con cuenta nueva).
- [ ] Cuenta publicitaria en **zona horaria America/Buenos Aires (GMT-3)** y **divisa USD** (no se cambian después y afectan los cortes diarios de presupuesto — De Cero a CEO — *BM y Píxel*). _(Ya tenemos `act_2384906755364790` "Vincufy 1" en USD — confirmar la zona horaria.)_
- [ ] **Píxel verificado**: confirmar en **Test Events** de Meta que dispara `PageView`, `CreateEventClick` (click en Comprar) y `Lead`, **cruzándolo con PostHog**. Si el píxel no reporta, 0 conversiones se lee como "no hay demanda" cuando es tracking roto.
- [ ] **UTMs configuradas** en los destinos de los anuncios, para que PostHog atribuya qué creativo/segmento trajo cada interesado:
  `utm_source=meta_ads&utm_medium={{placement}}&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`
- [ ] **Tablero `[VINCUFY][SMOKE]`** configurado (§8.4).
- [ ] **Definir por escrito el umbral de éxito** (§10) ANTES de lanzar, con el tipo de cambio confirmado (hoy 1 USD = 1.400 ARS).
- [ ] _(Opcional, recomendado)_ **Arreglos de tracking** (§8.5): agregar `segment` + `tier` + `value`/`currency` al evento `CreateEventClick` en `src/pages/OfferPage.jsx`. Sin esto el test corre igual (la señal por tier se lee en PostHog), pero Meta optimiza mejor con ello.
- [ ] **Ensayar todo en BORRADOR** ("verdecito") el fin de semana, sin publicar, tocando cada campo del Administrador para perderle el miedo (Sociedad — *Segmentación*).

---

## 10. Umbral de éxito: definirlo ANTES de lanzar

> El plan original decía "ajustar según métricas" pero no fijaba el número que separa **validado** de **descartado**. Sin ese número, al cierre el equipo va a discutir **emocionalmente** si "anduvo". Los cursos son unánimes: escribir el umbral antes de lanzar (Incubadora — *Cómo Validar una Idea*; De Cero a CEO — *Métricas clave*).

### 10.1 Qué validan los planes (de dónde sale el umbral)

Los 3 planes son **paquetes de entradas prepagas**. Una "entrada" = capacidad de asistentes que el organizador puede gestionar en sus eventos. El número del plan describe el **tamaño del organizador** al que apunta. Tipo de cambio usado: **1 USD = 1.400 ARS** (ajustar si cambia).

| Plan | Entradas | $/entrada | Total ARS | ≈ USD | A quién describe |
|---|---|---|---|---|---|
| **Pequeños eventos** | 20 | $549 | $10.980 | **~8 USD** | party-thrower chico / micro-evento |
| **Más popular** ⭐ | 300 | $499 (-20%) | $149.700 | **~107 USD** | productor mediano / boliche de barrio |
| **Mejor costo** | 1000 | $449 (-40%) | $449.000 | **~321 USD** | boliche grande / productora grande |

> **Insight clave:** un click en "Comprar" **no vale lo mismo según el plan**. Quien clickea *Mejor costo* (~321 USD) declara una disposición a pagar **~40× mayor** que quien clickea *Pequeños eventos* (~8 USD). Por eso NO alcanza con contar clicks-en-Comprar: hay que mirar **en qué plan** clickearon. Ese dato (qué tier eligió cada uno) es la señal más rica del test —dice no solo "hay demanda" sino "de organizadores de qué tamaño"— y se lee en **PostHog**, no en Meta (ver §8.5).

### 10.2 La tabla de umbrales (ya con números — confirmar antes del lunes)

Como el test no tiene "ganancia por venta" (no hay venta todavía), el techo del costo no sale de un margen: sale de **cuánto vale captar a ese organizador**. Un lead del plan Pro vale ~107 USD de ticket inicial (y mucho más en recurrencia, porque el modelo es comunidad entre eventos). Pagar pocos USD por captarlo es claramente rentable. De ahí salen estos números (los de "costo por click-en-Comprar" usan el benchmark de intención temprana de Argentina de los cursos: 0,50–2,50 USD bueno, ~3-4 USD tope):

| | Productores | Boliches |
|---|---|---|
| **Costo por click-en-Comprar objetivo** (verde) | 0,50 – 2,50 USD | 0,50 – 2,50 USD |
| **Costo máximo tolerable** (rojo → apagar) | ~3-4 USD | ~3-4 USD |
| **Costo por Lead (email) tolerable** | hasta ~5-10 USD | hasta ~5-10 USD |
| **# clicks-en-Comprar que = "señal positiva"** | _confirmar_ (sugerido: ≥10-12 en los 4 días) | _confirmar_ (sugerido: ≥10-12) |
| **# leads (email) que = "señal fuerte"** | _confirmar_ (sugerido: ≥3-5) | _confirmar_ (sugerido: ≥3-5) |

> Los `_confirmar_` dependen de cuántos eventos proyecten juntar con el presupuesto (probablemente pocas decenas en total). Los números sugeridos son un piso razonable para un smoke test; el equipo los ajusta según su apetito de riesgo. **Lo importante no es clavar el número perfecto, es haberlo escrito ANTES** para no auto-engañarse el jueves.
>
> **Matiz de calidad sobre la cantidad:** 3 clicks en *Mejor costo* (boliches grandes) son mejor señal que 15 clicks en *Pequeños eventos*. Al leer el resultado, pesar el **tier elegido**, no solo el conteo.

### 10.3 Gestión de expectativas (decirlo al equipo desde ya)

- Los **150 USD compran INFORMACIÓN** (un SÍ/NO sobre demanda + de qué tamaño de organizador), no clientes ni ganancia.
- Con presupuesto chico y pocos días, **Meta probablemente no llega a optimizar del todo**. El test mide **señal relativa entre segmentos y tiers**, no un costo "maduro".
- Si el resultado es **ambiguo**, la lectura correcta puede ser *"necesito más budget/tiempo"*, **NO** *"no hay demanda"*.
- Si no valida, **no es un fracaso**: es un descarte barato. Se itera el segmento, la oferta o el ángulo (Incubadora — *Desarrollar tu PMV*: "si empatás, ganaste, porque validaste").

---

## 11. Canal paralelo recomendado (casi gratis, alta señal)

Mientras corre la pauta, los cursos recomiendan correr **en paralelo** un canal de prospección directa B2B — porque tanto productores como boliches son **negocios contactables** (Incubadora — *Validar SIN Recursos*):

- **DM por Instagram / mensajes / Google Maps** a boliches y productoras reales de la zona.
- Da **conversaciones reales** (señal mucho más fuerte que un lead frío) y, sobre todo, **frases textuales del dolor** que mejoran el copy de los 6 creativos en caliente.
- Funnel esperado en frío: ~100 mensajes → ~15 interesados → ~1-3 reuniones. Calibra la magnitud y es casi gratis.

No es obligatorio para el smoke test, pero es **el complemento de validación más rentable** disponible para un B2B como este. Recomendado.

---

## 12. Cronograma día por día y órdenes para la IA de Meta

> La otra IA (conectada a Meta vía Pipeboard + a PostHog) ve las métricas en tiempo real y ejecuta los ajustes. Esta sección es **la lista de órdenes** que le damos. La ventana exacta de días se fija en §5.

> **Calendario:** **Lun → Jue** (ver §5). El fin de semana previo es para el Paso 0.

### Fin de semana previo (preparación, sin gastar)
- **Equipo:** completar todo el **Paso 0** (§9) + el **umbral de éxito** (§10) + el **pre-trabajo de creativos** (§7.4).
- **Orden a la IA:** dejar las **6 estructuras** armadas **en borrador** (sin publicar), con la nomenclatura `VINCUFY SMOKE / ADSET-PRODUCTOR-1/2/3 / ADSET-BOLICHE-1/2/3` y las UTMs puestas. **Confirmar la zona horaria de la cuenta (Buenos Aires).** Verificar que el píxel reporta los 3 eventos.

### LUNES — Día 1 (lanzamiento, exploración)
- **Orden a la IA:** publicar la campaña **temprano (~5-6 AM hora Argentina)** para tomar el día completo de entrega. Los **6 conjuntos** a 6 USD/día (36 USD el día).
- **Regla:** **NO tocar nada.** Solo verificar que los 6 conjuntos están gastando y que el píxel registra eventos. Mirar **entrada la tarde-noche**, nunca a la mañana (Meta tiene hasta la medianoche para gastar el presupuesto del día).
- **Excepción (regla de duplicar por hora):** si a media mañana un conjunto **no gastó nada** (posible error de Meta), duplicarlo **antes del mediodía**. Si ya es la tarde, dejarlo.

### MARTES — Día 2 (cierre de la exploración + análisis)
- **Regla:** **seguir sin tocar** durante el día (los días 1-2 solo acumulan datos — De Cero a CEO — *Etapa de testeo*). Los 6 conjuntos siguen a 6 USD (36 USD el día). **Gasto acumulado Lun+Mar = 72 USD** (fijo). **Quedan 78 USD** para días 3-4.
- **Orden a la IA (al cierre del martes, tarde-noche):**
  - Generar **reporte por segmento** de los 6 creativos: gasto, CTR, CPM, clicks-en-Comprar, leads, costo por click-en-Comprar, + diagnóstico de embudo (§8.3).
  - **Análisis de reparto:** sobre esos datos, recomendar **a cuántos creativos seguir poniéndoles plata** y **cuánto a cada uno**, de modo que los **78 USD restantes** se gasten entre miércoles y jueves. El criterio es el rendimiento (menor costo por click-en-Comprar, con leads/email de desempate); el número de creativos y el reparto **no están prefijados** — salen de este análisis. Pueden quedar más o menos creativos según lo que muestre la data.
  - **Fallback:** si algún conjunto juntó 0 eventos por escasez (no por falta de demanda), confirmar que optimiza por `CreateEventClick` (más frecuente que Lead).

### MIÉRCOLES — Día 3 (aplicar el reparto definido)
- **Orden a la IA:** aplicar el reparto que salió del análisis del martes: **apagar los creativos descartados** y **subir el presupuesto de los que siguen** para que, entre miércoles y jueves, se gasten los **78 USD restantes** (≈ 39 USD/día de referencia). **Reasignar dentro del tope** — no sumar plata fuera de los 150.
- Si el diagnóstico apuntó a la landing/oferta (CTR bueno pero pocos clicks-en-Comprar), **avisar al equipo** para retocar página/pricing — no es trabajo de la campaña.
- **Regla:** no tocar durante el día; mirar de tarde-noche.

### JUEVES — Día 4 (cierre y decisión)
- **Orden a la IA:** mantener el reparto del miércoles, ajustando si hace falta para **gastar el total de 150 USD** al cierre. **Cerrar APAGANDO manualmente** al final del día —o al tocar los 150 USD, lo que pase primero (⚠️ **NUNCA** "fecha de finalización": limita el rendimiento desde el inicio y es irreversible — Sociedad — *Segmentación*).
- **Orden a la IA:** generar el **reporte final por segmento**: costo por click-en-Comprar, # de clicks-en-Comprar, # de leads, CPL, y la comparación productores vs. boliches.
- **Equipo:** tomar la decisión contra el **umbral de éxito** (§10), sobre **INDICIOS** (CTR sano + costo de intención bajo + gente que vio el precio y quiso), **no** sobre un costo optimizado y maduro.

### Resumen de órdenes permanentes para la IA
1. Optimizar siempre por el evento de **click-en-Comprar** (`CreateEventClick`); Lead como secundario.
2. Mantener **ABO** (presupuesto fijo por cajón). Nunca pasar a CBO durante el test.
3. **Días 1-2 fijos** (6 creativos × 6 USD = 72 USD). **Días 3-4 = los 78 USD restantes**, repartidos según el análisis del martes. **Gastar los 150 USD completos.**
4. **No tocar nada los días 1-2 (lun-mar).** El reparto de los días 3-4 se aplica el miércoles, según los datos.
5. **No decidir a la mañana** — leer siempre de tarde-noche.
6. Reportar **siempre por segmento** (productores vs. boliches separados).
7. Cerrar **apagando manual**, nunca con fecha-fin.
8. Ante cualquier "0 conversiones", **primero verificar tracking** (píxel/PostHog) antes de concluir "no hay demanda".

---

## 13. Apéndice — datos de las cuentas (referencia rápida)

- **Cuenta de anuncios:** `act_2384906755364790` ("Vincufy 1", USD)
- **Píxel:** `1346754234198995` ("Vincufy Pixel 2") — coincide con el de la landing ✅
- **Eventos del píxel que ya dispara la landing:**
  - `PageView` — automático en cada ruta
  - `ViewContent` — al llegar a la página de oferta (con `content_category` = segmento)
  - `CreateEventClick` — al clickear cualquier CTA "Comprar" (← **KPI rector de disposición a pagar**)
  - `Lead` — al completar el formulario del modal con éxito (← señal secundaria más fuerte)
- **PostHog:** project Vincufy (221213), dashboard: https://us.posthog.com/project/221213/dashboard/1693089
- **Landing:** https://vincufy.com (quiz de 3 preguntas → segmento → oferta con 3 planes → modal de captura → gracias)
- **Modelo de la oferta mostrada:** paquetes de entradas prepagas en ARS (no SaaS mensual). 1 entrada = 1 asistente que el organizador puede gestionar. Tipo de cambio: 1 USD = 1.400 ARS.
  - Pequeños eventos: 20 entradas × $549 = **$10.980 (~8 USD)**
  - Más popular ⭐: 300 entradas × $499 (-20%) = **$149.700 (~107 USD)**
  - Mejor costo: 1000 entradas × $449 (-40%) = **$449.000 (~321 USD)**

> **Nota sobre la landing:** hoy las versiones de boliches y productores tienen copy casi idéntico (la de productores incluso dice "tu boliche"). La diferenciación entre segmentos, por ahora, la cargan **los creativos**, no la landing. Si el test muestra demanda clara de un segmento, conviene diferenciar la copy de la landing de ese segmento en la siguiente ronda.
