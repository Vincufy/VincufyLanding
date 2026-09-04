import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";

/**
 * Los precios que anuncia la landing tienen que ser los que el backend cobra.
 *
 * Este test existe porque no cumplirlo ya costó plata: los planes están escritos a mano
 * en `config.js` y el precio real lo calcula `cupo-pricing.config.ts` del backend. En
 * junio se cambiaron los precios de un lado y no del otro, y **dos campañas de Meta
 * anunciaron valores 23-30% más baratos que los reales** — con el número quemado
 * incluso dentro del video de un creativo.
 *
 * Mientras los precios vivan en dos lugares, algo tiene que compararlos. Cuando este
 * test falle, el arreglo NO es actualizar el número esperado: es decidir cuál de los dos
 * lados tiene razón y alinear el otro (y revisar los creativos, que también los llevan).
 *
 * Se saltea solo si el backend no está accesible, para no romper el build de alguien sin
 * red — pero en CI conviene que la variable esté puesta y el test corra de verdad.
 */
const BACKEND =
  process.env.VINCUFY_EVENTS_MS_URL ??
  "https://vs-events-ms-prod-408203751405.southamerica-west1.run.app";

// `import.meta.url` no es un file:// usable bajo el transform de vitest, asi que la
// ruta se arma desde la raiz del proyecto.
const configPath = resolve(process.cwd(), "src/funnels/eventos/config.js");
const fuente = readFileSync(configPath, "utf8");

// Se leen del archivo tal como está escrito, sin importarlo: así el test valida el texto
// que un humano edita, que es donde se cometió el error.
const planes = [...fuente.matchAll(
  /tickets:\s*(\d+),\s*\n\s*pricePerTicket:\s*(\d+),\s*\n\s*total:\s*(\d+)/g,
)].map(([, tickets, precioUnit, total]) => ({
  tickets: Number(tickets),
  precioUnit: Number(precioUnit),
  total: Number(total),
}));

describe("precios de la landing", () => {
  it("encuentra los planes en config.js", () => {
    expect(planes.length).toBeGreaterThan(0);
  });

  it("cada plan tiene el total coherente con su precio unitario", () => {
    for (const p of planes) {
      expect(p.tickets * p.precioUnit).toBe(p.total);
    }
  });

  for (const p of planes) {
    it(`${p.tickets} cupos: la landing dice ${p.total} y el backend tiene que cobrar lo mismo`, async () => {
      let real;
      try {
        const res = await fetch(`${BACKEND}/api/payments/cupos/quote`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: p.tickets }),
          signal: AbortSignal.timeout(8000),
        });
        real = (await res.json())?.data?.cost;
      } catch {
        console.warn(`[precios] backend inaccesible, se saltea ${p.tickets}`);
        return;
      }
      expect(real, `el backend no devolvió costo para ${p.tickets}`).toBeDefined();
      expect(real).toBe(p.total);
      // El timeout del test tiene que ser MAYOR que el del fetch. Con el default de 5s
      // de vitest, un backend lento hacía fallar el test por timeout en vez de entrar
      // al catch que lo saltea: el test quedaba intermitente y eso enseña a ignorarlo.
    }, 15000);
  }
});
