/* ==========================================================
   H&H | Casas y Ampliaciones
   Todo lo editable está arriba: CONFIG, PROJECT_TYPES y PROJECTS.
   ========================================================== */

/* ---------- 1. CONFIGURACIÓN ---------- */
const CONFIG = {
  // NÚMERO DE PRUEBA: reemplázalo por el número real de H&H.
  // Formato internacional, solo dígitos, sin "+" ni espacios. Ejemplo Chile: "56912345678"
  // Si lo dejas vacío (""), ningún botón abre WhatsApp y el formulario solo muestra una vista previa.
  WHATSAPP_NUMBER: "56930217437",
  INSTAGRAM_URL: "https://www.instagram.com/hh.casasllaveenmano/",
  PLANS_MESSAGE:
    "Hola, me gustaría cotizar un proyecto con H&H. Ya tengo los planos y quisiera enviárselos para su evaluación.",
  DIRECT_MESSAGE: "Hola, me gustaría consultar por un proyecto con H&H.",
};

/* ---------- 2. DATOS CENTRALIZADOS ---------- */
// Tipos de proyecto que aparecen en el formulario.
const PROJECT_TYPES = [
  { id: "casa", label: "Casa" },
  { id: "ampliacion", label: "Ampliación" },
  { id: "quincho", label: "Quincho" },
  { id: "piscina", label: "Piscina" },
  { id: "local", label: "Local u oficina" },
  { id: "vulcometal", label: "Estructura en vulcometal" },
  { id: "otro", label: "Otro / aún no lo sé" },
];

// Proyectos del catálogo. Edita nombres, descripciones y fotos aquí. Cada proyecto puede tener varias imágenes.
// category: "construcciones" | "ampliaciones"   ·   type: id de PROJECT_TYPES
const PROJECTS = [
  {
    id: "casa-un-piso",
    title: "Casa de un piso",
    category: "construcciones",
    type: "casa",
    cta: "Cotizar mi casa",
    short: "Casa moderna de un piso con terraza, rodeada de áreas verdes.",
    description:
      "Casa moderna de un piso con grandes ventanales que se abren a la terraza. Tiene un living-comedor integrado a la cocina y dos dormitorios, el principal con baño propio.",
    images: [{ src: "assets/construccion2.jpg", alt: "Casa de un piso con áreas verdes" }],
    specs: {
      surface: 90, bedrooms: 2, baths: 2, floors: 1,
      layout: "Living-comedor abierto a la cocina, pasillo, dormitorio principal con baño, segundo dormitorio, baño de servicio y terraza frontal.",
    },
    materials: [
      ["Estructura principal", "Fundación de hormigón armado con pilotes bajo la terraza y estructura de pino impregnado."],
      ["Muros y aislación", "Tabiques con lana de vidrio de 100 mm, membrana hidrófuga y revestimiento exterior de madera tratada en tono grafito."],
      ["Techumbre", "Cubierta de baja pendiente en zinc-alum prepintado, con cerchas de pino y cielo interior de madera."],
      ["Pisos", "Porcelanato en living, cocina y baños; piso flotante en dormitorios; deck de pino impregnado en la terraza."],
      ["Cocina", "Muebles de melamina con cubierta de cuarzo, campana de extracción y encimera a gas."],
      ["Baños", "Cerámica en zona de ducha, vanitorio con cubierta de cuarzo y grifería monomando."],
      ["Puertas y ventanas", "Ventanales de aluminio con termopanel hacia la terraza y puerta de acceso de madera sólida."],
    ],
    plan: {
      w: 12, h: 7.5,
      rooms: [
        { n: "Dorm. principal", x: 0, y: 0, w: 4, h: 3.5 },
        { n: "Baño", x: 4, y: 0, w: 2, h: 3.5, wet: true },
        { n: "Dormitorio 2", x: 6, y: 0, w: 3.5, h: 3.5 },
        { n: "Baño", x: 9.5, y: 0, w: 2.5, h: 3.5, wet: true },
        { n: "Pasillo", x: 0, y: 3.5, w: 12, h: 1, noArea: true },
        { n: "Living-comedor", x: 0, y: 4.5, w: 7.5, h: 3 },
        { n: "Cocina", x: 7.5, y: 4.5, w: 4.5, h: 3, wet: true },
      ],
      doors: [
        { o: "h", x: 0.8, y: 3.5, l: 0.9, s: -1 },
        { o: "v", x: 4, y: 0.7, l: 0.8, s: -1 },
        { o: "h", x: 6.6, y: 3.5, l: 0.9, s: -1 },
        { o: "h", x: 10.4, y: 3.5, l: 0.8, s: -1 },
        { o: "h", x: 3.2, y: 7.5, l: 1, s: -1 },
        { o: "h", x: 4.8, y: 4.5, l: 2.2, arc: false },
        { o: "h", x: 8.2, y: 4.5, l: 2.4, arc: false },
        { o: "v", x: 7.5, y: 5, l: 2, arc: false },
      ],
      windows: [
        { o: "h", x: 0.6, y: 7.5, l: 2.2 }, { o: "h", x: 4.8, y: 7.5, l: 2.2 }, { o: "h", x: 8.6, y: 7.5, l: 2.6 },
        { o: "h", x: 1, y: 0, l: 2 }, { o: "h", x: 4.5, y: 0, l: 1 }, { o: "h", x: 7, y: 0, l: 1.8 }, { o: "h", x: 10.2, y: 0, l: 1.2 },
        { o: "v", x: 0, y: 0.9, l: 1.5 }, { o: "v", x: 0, y: 5.2, l: 1.6 }, { o: "v", x: 12, y: 5.4, l: 1.5 },
      ],
      outdoor: { x: 0, y: 7.5, w: 12, h: 2, label: "Terraza" },
    },
  },
  {
    id: "casa-frontal",
    title: "Casa amplia",
    category: "construcciones",
    type: "casa",
    cta: "Cotizar mi casa",
    short: "Casa de un piso amplia y luminosa, con corredor al frente.",
    description:
      "Casa de un piso amplia y luminosa, con corredor al frente y un gran espacio social. Cuenta con living, comedor y cocina, tres dormitorios y dos baños, pensada para una familia.",
    images: [{ src: "assets/construccion4.jpg", alt: "Frente de una casa" }],
    specs: {
      surface: 126, bedrooms: 3, baths: 2, floors: 1,
      layout: "Living, comedor y cocina conectados, pasillo, dormitorio principal con baño, dos dormitorios, segundo baño y corredor frontal.",
    },
    materials: [
      ["Estructura principal", "Fundación corrida de hormigón armado, albañilería confinada de ladrillo y pilares de madera en el corredor."],
      ["Muros y aislación", "Muros de ladrillo con estuco exterior, poliestireno expandido de 40 mm como aislación y terminación interior pintada."],
      ["Techumbre", "Cerchas de pino con cubierta de teja asfáltica y aleros anchos sobre el corredor; cielo de yeso-cartón."],
      ["Pisos", "Porcelanato en áreas sociales, piso flotante en dormitorios y cerámica antideslizante en baños y corredor."],
      ["Cocina", "Cocina integrada al comedor con muebles de melamina, cubierta de granito y espacio para isla."],
      ["Baños", "Cerámica hasta el cielo en ducha, vanitorio con mueble y grifería monomando; baño principal con ducha amplia."],
      ["Puertas y ventanas", "Ventanas de PVC con termopanel y cuarterones, y puerta principal de madera maciza."],
    ],
    plan: {
      w: 14, h: 9,
      rooms: [
        { n: "Dorm. principal", x: 0, y: 0, w: 4, h: 3.5 },
        { n: "Baño", x: 4, y: 0, w: 2, h: 3.5, wet: true },
        { n: "Dormitorio 2", x: 6, y: 0, w: 3, h: 3.5 },
        { n: "Dormitorio 3", x: 9, y: 0, w: 3, h: 3.5 },
        { n: "Baño", x: 12, y: 0, w: 2, h: 3.5, wet: true },
        { n: "Pasillo", x: 0, y: 3.5, w: 14, h: 1, noArea: true },
        { n: "Living", x: 0, y: 4.5, w: 5.5, h: 4.5 },
        { n: "Comedor", x: 5.5, y: 4.5, w: 4.5, h: 4.5 },
        { n: "Cocina", x: 10, y: 4.5, w: 4, h: 4.5, wet: true },
      ],
      doors: [
        { o: "h", x: 0.8, y: 3.5, l: 0.9, s: -1 },
        { o: "v", x: 4, y: 0.7, l: 0.8, s: -1 },
        { o: "h", x: 6.5, y: 3.5, l: 0.9, s: -1 },
        { o: "h", x: 9.5, y: 3.5, l: 0.9, s: -1 },
        { o: "h", x: 12.6, y: 3.5, l: 0.8, s: -1 },
        { o: "h", x: 2, y: 9, l: 1.1, s: -1 },
        { o: "h", x: 3, y: 4.5, l: 2, arc: false },
        { o: "h", x: 7, y: 4.5, l: 2.4, arc: false },
        { o: "h", x: 11, y: 4.5, l: 2, arc: false },
        { o: "v", x: 5.5, y: 5.2, l: 3, arc: false },
        { o: "v", x: 10, y: 5.2, l: 2.2, arc: false },
      ],
      windows: [
        { o: "h", x: 0.4, y: 9, l: 1.2 }, { o: "h", x: 3.6, y: 9, l: 1.6 }, { o: "h", x: 6.3, y: 9, l: 3.2 }, { o: "h", x: 10.8, y: 9, l: 2.4 },
        { o: "h", x: 1, y: 0, l: 2 }, { o: "h", x: 4.6, y: 0, l: 0.8 }, { o: "h", x: 6.8, y: 0, l: 1.4 }, { o: "h", x: 9.8, y: 0, l: 1.4 }, { o: "h", x: 12.6, y: 0, l: 0.8 },
        { o: "v", x: 0, y: 6, l: 1.6 }, { o: "v", x: 14, y: 5.6, l: 1.6 },
      ],
      outdoor: { x: 0, y: 9, w: 14, h: 1.8, label: "Corredor" },
    },
  },
  {
    id: "cabana",
    title: "Casa pequeña o cabaña",
    category: "construcciones",
    type: "casa",
    cta: "Cotizar mi cabaña",
    short: "Casa compacta y acogedora con revestimiento de madera.",
    description:
      "Casa compacta y acogedora con revestimiento de madera. Una distribución simple con living-comedor, cocina, dos dormitorios y un baño, pensada para aprovechar cada metro.",
    images: [{ src: "assets/construccion3.jpg", alt: "Casa pequeña o cabaña de color rojo" }],
    specs: {
      surface: 54, bedrooms: 2, baths: 1, floors: 1,
      layout: "Living-comedor con cocina abierta, dos dormitorios, un baño y terraza de acceso.",
    },
    materials: [
      ["Estructura principal", "Radier de hormigón armado y entramado de pino impregnado."],
      ["Muros y aislación", "Tabiques de pino con lana mineral de 80 mm, membrana hidrófuga y revestimiento de tinglado de madera pintado en rojo."],
      ["Techumbre", "Cerchas de pino y cubierta de planchas de zinc-alum prepintado con alero perimetral."],
      ["Pisos", "Piso flotante laminado en living y dormitorios; cerámica en cocina y baño."],
      ["Cocina", "Cocina compacta con muebles de melamina, cubierta laminada y encimera a gas."],
      ["Baños", "Cerámica en ducha y piso, vanitorio simple y grifería monomando."],
      ["Puertas y ventanas", "Ventanas de PVC con termopanel y puerta de acceso de madera con vidrio."],
    ],
    plan: {
      w: 9, h: 6,
      rooms: [
        { n: "Dormitorio 1", x: 0, y: 0, w: 3.5, h: 3 },
        { n: "Baño", x: 3.5, y: 0, w: 2, h: 3, wet: true },
        { n: "Dormitorio 2", x: 5.5, y: 0, w: 3.5, h: 3 },
        { n: "Living-comedor", x: 0, y: 3, w: 6, h: 3 },
        { n: "Cocina", x: 6, y: 3, w: 3, h: 3, wet: true },
      ],
      doors: [
        { o: "h", x: 0.8, y: 3, l: 0.9, s: -1 },
        { o: "h", x: 4.1, y: 3, l: 0.8, s: -1 },
        { o: "h", x: 6.3, y: 3, l: 0.9, s: -1 },
        { o: "h", x: 2.2, y: 6, l: 1, s: -1 },
        { o: "v", x: 6, y: 3.5, l: 1.6, arc: false },
      ],
      windows: [
        { o: "h", x: 3.4, y: 6, l: 2.2 }, { o: "h", x: 6.7, y: 6, l: 1.6 },
        { o: "h", x: 0.9, y: 0, l: 1.8 }, { o: "h", x: 4.2, y: 0, l: 0.8 }, { o: "h", x: 6.6, y: 0, l: 1.8 },
        { o: "v", x: 0, y: 3.7, l: 1.5 }, { o: "v", x: 9, y: 0.9, l: 1.3 },
      ],
      outdoor: { x: 0, y: 6, w: 9, h: 1.5, label: "Terraza" },
    },
  },
  {
    id: "estructura-en-obra",
    title: "Casa en acero liviano",
    category: "construcciones",
    type: "casa",
    cta: "Cotizar mi casa",
    short: "Estructura de acero liviano levantándose en obra.",
    description:
      "Modelo en estructura de acero liviano, un sistema ordenado y eficiente de construir. Distribución práctica con living-comedor, cocina, tres dormitorios y un baño.",
    images: [{ src: "assets/construccion1.jpg", alt: "Estructura de una casa en construcción" }],
    specs: {
      surface: 72, bedrooms: 3, baths: 1, floors: 1,
      layout: "Living-comedor, cocina, tres dormitorios y un baño compartido.",
    },
    materials: [
      ["Estructura principal", "Estructura de acero galvanizado liviano (steel framing) sobre radier de hormigón armado."],
      ["Muros y aislación", "Paneles con placa OSB, membrana hidrófuga, lana de vidrio de 90 mm, fibrocemento por fuera y yeso-cartón por dentro."],
      ["Techumbre", "Cerchas de acero galvanizado con cubierta de zinc-alum y cielo de yeso-cartón."],
      ["Pisos", "Piso vinílico en dormitorios; porcelanato en living-comedor, cocina y baño."],
      ["Cocina", "Muebles de melamina con cubierta de postformado, campana y encimera a gas."],
      ["Baños", "Cerámica en ducha, vanitorio con mueble y grifería monomando."],
      ["Puertas y ventanas", "Ventanas de aluminio con termopanel y puertas interiores de MDF."],
    ],
    plan: {
      w: 12, h: 6,
      rooms: [
        { n: "Dorm. principal", x: 0, y: 0, w: 3.5, h: 3 },
        { n: "Dormitorio 2", x: 3.5, y: 0, w: 3, h: 3 },
        { n: "Baño", x: 6.5, y: 0, w: 2, h: 3, wet: true },
        { n: "Dormitorio 3", x: 8.5, y: 0, w: 3.5, h: 3 },
        { n: "Living-comedor", x: 0, y: 3, w: 7, h: 3 },
        { n: "Cocina", x: 7, y: 3, w: 5, h: 3, wet: true },
      ],
      doors: [
        { o: "h", x: 0.8, y: 3, l: 0.9, s: -1 },
        { o: "h", x: 4.1, y: 3, l: 0.9, s: -1 },
        { o: "h", x: 7.1, y: 3, l: 0.8, s: -1 },
        { o: "h", x: 9.2, y: 3, l: 0.9, s: -1 },
        { o: "h", x: 2, y: 6, l: 1, s: -1 },
        { o: "v", x: 7, y: 3.6, l: 1.8, arc: false },
      ],
      windows: [
        { o: "h", x: 3.4, y: 6, l: 2.6 }, { o: "h", x: 8.3, y: 6, l: 2.6 },
        { o: "h", x: 1, y: 0, l: 1.8 }, { o: "h", x: 4.4, y: 0, l: 1.6 }, { o: "h", x: 6.9, y: 0, l: 0.8 }, { o: "h", x: 9.5, y: 0, l: 1.8 },
        { o: "v", x: 0, y: 3.8, l: 1.4 }, { o: "v", x: 12, y: 3.8, l: 1.4 },
      ],
    },
  },
  {
    id: "ampliacion-interior",
    title: "Ampliación interior",
    category: "ampliaciones",
    type: "ampliacion",
    cta: "Cotizar mi ampliación",
    short: "Nuevos espacios dentro de tu casa, bien integrados a lo que ya tienes.",
    description:
      "Sumamos metros a tu vivienda creando nuevos espacios interiores, conectados con lo que ya tienes y con acceso directo al patio.",
    images: [{ src: "assets/ampliacion.jpg", alt: "Pasillo de una ampliación interior" }],
    extras: {
      kind: "Ampliación interior hacia el patio o el costado de la vivienda, conectada a los espacios existentes por un pasillo o una puerta nueva.",
      result: "Una casa con más espacio útil y mejor circulación, con terminaciones que combinan con la vivienda original, más luz natural y salida directa al patio.",
      ideas: [
        { t: "Nuevo dormitorio", d: "Un espacio privado para un hijo, una visita o una oficina en casa." },
        { t: "Sala de estar", d: "Un lugar más amplio para compartir en familia, con luz natural." },
        { t: "Acceso y circulación", d: "Pasillos y entradas que ordenan la casa y la conectan con el patio." },
      ],
    },
  },
];

// Comunas del formulario, agrupadas. Se editan aquí.
const OTHER_COMUNA = "__otra__";
const COMUNA_GROUPS = [
  { label: "Santiago", items: ["Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Santiago","Vitacura"] },
  { label: "Cordillera", items: ["Pirque","Puente Alto","San José de Maipo"] },
  { label: "Maipo", items: ["Buin","Calera de Tango","Paine","San Bernardo"] },
  { label: "Talagante", items: ["El Monte","Isla de Maipo","Padre Hurtado","Peñaflor","Talagante"] },
  { label: "Melipilla", items: ["Alhué","Curacaví","María Pinto","Melipilla","San Pedro"] },
  { label: "Chacabuco", items: ["Colina","Lampa","Til Til"] },
  { label: "Zonas cercanas fuera de la Región Metropolitana", items: ["Casablanca","San Antonio","Santo Domingo","Navidad","Litueche","Las Cabras","Mostazal"] },
];

const CATEGORIES = {
  construcciones: {
    label: "Construcciones",
    intro: "Casas, quinchos, piscinas, locales, oficinas y otros trabajos de construcción.",
  },
  ampliaciones: {
    label: "Ampliaciones",
    intro: "Ampliaciones de viviendas y creación de nuevos espacios.",
  },
};

/* ---------- 3. UTILIDADES ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const escapeHTML = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const typeLabel = (id) => (PROJECT_TYPES.find((t) => t.id === id) || {}).label || "";
const getProject = (id) => PROJECTS.find((p) => p.id === id);

const ICON_CHAT =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5z"/></svg>';
const ICON_HOUSE =
  '<svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>';

/* ---------- 4. WHATSAPP ---------- */
function whatsappReady() {
  return /^\d{8,15}$/.test(String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, ""));
}
function whatsappUrl(message) {
  const number = String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, "");
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}
function buildQuoteMessage({ name, type, comuna, description, project }) {
  const lines = [
    "Hola, me gustaría solicitar una cotización en H&H.",
    "",
    "Nombre: " + name,
    "Tipo de proyecto: " + type,
    "Comuna: " + comuna,
    "Descripción: " + description,
  ];
  if (project) lines.push("", "Proyecto de referencia: " + project.title);
  return lines.join("\n");
}
function openWhatsApp(message) {
  if (!whatsappReady()) {
    toast("El número de WhatsApp aún no está configurado.");
    return false;
  }
  const win = window.open(whatsappUrl(message), "_blank", "noopener");
  if (!win) window.location.href = whatsappUrl(message);
  return true;
}

/* ---------- 5. TOAST ---------- */
let toastTimer;
function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.textContent = msg;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 4500);
}

/* ---------- 6. IMÁGENES (con respaldo elegante) ---------- */
function phHTML(img, { lazy = true } = {}) {
  const imgTag = img
    ? `<img src="${escapeHTML(img.src)}" alt="${escapeHTML(img.alt || "")}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async">`
    : "";
  return `<div class="ph">${ICON_HOUSE}<span class="ph-text">Foto del proyecto</span>${imgTag}</div>`;
}
function guardImages(root = document) {
  $$(".ph img", root).forEach((img) => {
    const drop = () => img.remove();
    img.addEventListener("error", drop, { once: true });
    if (img.complete && img.naturalWidth === 0) drop();
  });
}

/* ---------- 7. FORMULARIO DE COTIZACIÓN ---------- */
function createQuoteForm(prefix, { typeId = "", projectId = "" } = {}) {
  const project = getProject(projectId);
  const options = ['<option value="">Selecciona una opción</option>']
    .concat(PROJECT_TYPES.map((t) => `<option value="${t.id}"${t.id === typeId ? " selected" : ""}>${t.label}</option>`))
    .join("");

  const comunaOptions =
    '<option value="">Selecciona tu comuna</option>' +
    COMUNA_GROUPS.map(
      (g) => `<optgroup label="${escapeHTML(g.label)}">${g.items.map((c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("")}</optgroup>`
    ).join("") +
    `<option value="${OTHER_COMUNA}">Otra comuna o región</option>`;

  const form = document.createElement("form");
  form.className = "quote-form";
  form.noValidate = true;
  form.innerHTML = `
    <div class="field">
      <label for="${prefix}-name">Tu nombre</label>
      <input id="${prefix}-name" name="name" type="text" autocomplete="name" aria-describedby="${prefix}-name-err" required>
      <p class="error" id="${prefix}-name-err"></p>
    </div>
    <div class="field">
      <label for="${prefix}-type">Tipo de proyecto</label>
      <select id="${prefix}-type" name="type" aria-describedby="${prefix}-type-err" required>${options}</select>
      <p class="error" id="${prefix}-type-err"></p>
    </div>
    <div class="field">
      <label for="${prefix}-comuna">Comuna</label>
      <select id="${prefix}-comuna" name="comuna" autocomplete="address-level2" aria-describedby="${prefix}-comuna-err" required>${comunaOptions}</select>
      <p class="error" id="${prefix}-comuna-err"></p>
    </div>
    <div class="field" id="${prefix}-otra-wrap" hidden>
      <label for="${prefix}-otra">¿Cuál es tu comuna o región?</label>
      <input id="${prefix}-otra" name="otra" type="text" aria-describedby="${prefix}-otra-err">
      <p class="error" id="${prefix}-otra-err"></p>
    </div>
    <div class="field">
      <label for="${prefix}-desc">¿Qué quieres construir o ampliar?</label>
      <textarea id="${prefix}-desc" name="description" aria-describedby="${prefix}-desc-err" required></textarea>
      <p class="error" id="${prefix}-desc-err"></p>
    </div>
    <button type="submit" class="btn btn-wa btn-block">${ICON_CHAT}Enviar cotización por WhatsApp</button>
    <p class="form-note">Se abrirá WhatsApp con tu mensaje listo. Tú confirmas el envío desde ahí.</p>
    <div class="form-output" aria-live="polite"></div>
  `;

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Escribe tu nombre."),
    type: (v) => (v ? "" : "Elige el tipo de proyecto."),
    comuna: (v) => (v ? "" : "Elige tu comuna."),
    otra: (v) => (form.elements.comuna.value !== OTHER_COMUNA || v.trim().length >= 2 ? "" : "Escribe tu comuna o región."),
    description: (v) => (v.trim().length >= 10 ? "" : "Cuéntanos un poco más (mínimo 10 caracteres)."),
  };
  const errIds = { name: "name", type: "type", comuna: "comuna", otra: "otra", description: "desc" };

  function validateField(field) {
    const el = form.elements[field];
    const msg = rules[field](el.value);
    $("#" + prefix + "-" + errIds[field] + "-err", form).textContent = msg;
    el.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }
  // Mostrar el campo de texto solo si elige "Otra comuna o región"
  const otraWrap = $("#" + prefix + "-otra-wrap", form);
  form.elements.comuna.addEventListener("change", () => {
    const isOther = form.elements.comuna.value === OTHER_COMUNA;
    otraWrap.hidden = !isOther;
    if (isOther) form.elements.otra.focus();
    else { form.elements.otra.value = ""; validateField("otra"); }
  });

  Object.keys(rules).forEach((f) => {
    form.elements[f].addEventListener("blur", () => validateField(f));
    form.elements[f].addEventListener("input", () => {
      if (form.elements[f].getAttribute("aria-invalid") === "true") validateField(f);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(rules).map((f) => [f, validateField(f)]);
    const firstBad = results.find(([, ok]) => !ok);
    if (firstBad) {
      form.elements[firstBad[0]].focus();
      return;
    }
    const message = buildQuoteMessage({
      name: form.elements.name.value.trim(),
      type: typeLabel(form.elements.type.value),
      comuna: form.elements.comuna.value === OTHER_COMUNA ? form.elements.otra.value.trim() : form.elements.comuna.value,
      description: form.elements.description.value.trim(),
      project,
    });
    const out = $(".form-output", form);
    if (whatsappReady()) {
      openWhatsApp(message);
      out.innerHTML = `<div class="success">Listo. Se abrió WhatsApp con tu mensaje. Si no se abrió, <a href="${whatsappUrl(message)}" target="_blank" rel="noopener">tócalo aquí</a>. Recuerda confirmar el envío desde WhatsApp.</div>`;
    } else {
      out.innerHTML = `<div class="preview"><strong>Vista previa del mensaje</strong><pre>${escapeHTML(message)}</pre><p class="form-note">Aún no hay un número de WhatsApp configurado, por eso no se abre ningún chat.</p></div>`;
    }
  });

  return form;
}

/* ---------- 8. MODAL DE COTIZACIÓN ---------- */
let dialog;
function ensureDialog() {
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.className = "quote-dialog";
  dialog.setAttribute("aria-labelledby", "quote-dialog-title");
  dialog.innerHTML = `
    <div class="dialog-inner">
      <div class="dialog-head">
        <div>
          <h2 id="quote-dialog-title">Cotiza tu proyecto</h2>
          <p class="dialog-sub">Cuéntanos qué necesitas. Son solo cuatro datos.</p>
        </div>
        <button type="button" class="dialog-close" aria-label="Cerrar formulario">&times;</button>
      </div>
      <div class="dialog-body"></div>
      <div class="dialog-actions-alt">¿Ya tienes planos? <button type="button" data-plans>Envíalos por WhatsApp</button></div>
    </div>`;
  document.body.appendChild(dialog);
  $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  return dialog;
}
function openQuote(typeId = "", projectId = "") {
  const d = ensureDialog();
  const project = getProject(projectId);
  $(".dialog-sub", d).textContent = project
    ? "Estás viendo: " + project.title + ". Cuéntanos qué necesitas."
    : "Cuéntanos qué necesitas. Son solo cuatro datos.";
  const body = $(".dialog-body", d);
  body.innerHTML = "";
  body.appendChild(createQuoteForm("modal", { typeId: typeId || (project && project.type) || "", projectId }));
  document.body.classList.add("modal-open");
  if (typeof d.showModal === "function") d.showModal();
  else d.setAttribute("open", "");
  const first = $("input", body);
  if (first) first.focus();
}

/* ---------- 9. RENDERIZADO ---------- */
function cardMeta(p) {
  const sp = p.specs;
  if (!sp) return "";
  return `<p class="card-meta">${fmtNum(sp.surface)} m² · ${sp.bedrooms} dorm. · ${sp.baths} ${sp.baths === 1 ? "baño" : "baños"}</p>`;
}

function projectCard(p) {
  return `
  <article class="card project-card reveal">
    ${phHTML(p.images[0])}
    <div class="card-body">
      <span class="tag">${CATEGORIES[p.category].label}</span>
      <h3><a href="proyecto.html?id=${encodeURIComponent(p.id)}">${escapeHTML(p.title)}</a></h3>
      <p>${escapeHTML(p.short)}</p>
      ${cardMeta(p)}
      <span class="text-link" aria-hidden="true">Ver proyecto →</span>
    </div>
  </article>`;
}

function ctaCard(cat) {
  const t = cat === "ampliaciones"
    ? { h: "¿Tienes un espacio que ampliar?", p: "Cuéntanos qué necesitas y lo conversamos.", type: "ampliacion", b: "Cotizar mi ampliación" }
    : { h: "¿Quieres construir algo así?", p: "Cuéntanos tu idea o envíanos tus planos.", type: "casa", b: "Cotizar mi proyecto" };
  return `<article class="card cta-card reveal"><h3>${t.h}</h3><p>${t.p}</p>
    <div class="btn-row"><button type="button" class="btn btn-primary" data-quote="${t.type}">${t.b}</button>
    <button type="button" class="btn btn-secondary" data-plans>Enviar planos</button></div></article>`;
}

function renderFeatured() {
  const host = $("[data-render='featured']");
  if (!host) return;
  const ids = ["casa-un-piso", "estructura-en-obra", "ampliacion-interior"];
  host.innerHTML = ids.map(getProject).filter(Boolean).map(projectCard).join("");
}

function renderProjectsPage() {
  const host = $("[data-render='projects']");
  if (!host) return;
  const tabs = $$("[role='tab']", host);
  const panel = $("#projects-panel", host);

  function show(cat) {
    if (!CATEGORIES[cat]) cat = "construcciones";
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.cat === cat)));
    const list = PROJECTS.filter((p) => p.category === cat);
    panel.setAttribute("aria-labelledby", "tab-" + cat);
    panel.innerHTML =
      `<p class="panel-intro">${CATEGORIES[cat].intro}</p>` +
      (list.length
        ? `<div class="grid grid-3">${list.map(projectCard).join("")}${ctaCard(cat)}</div>`
        : `<p class="empty-note">Pronto agregaremos proyectos en esta categoría.</p>`);
    guardImages(panel);
    revealInit(panel);
    if (location.hash.slice(1) !== cat) history.replaceState(null, "", "#" + cat);
  }
  tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.cat)));
  tabs.forEach((t, i) =>
    t.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      show(next.dataset.cat);
    })
  );
  window.addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1));
}

/* ---------- PLANOS (SVG generado desde los datos) ---------- */
const fmtNum = (n) => String(+n.toFixed(2)).replace(".", ",");

function planSVG(p) {
  const plan = p.plan, out = plan.outdoor;
  const S = 40, pad = 56, ink = "#303334";
  const W = plan.w, H = plan.h;
  const bodyH = (H + (out ? out.h : 0)) * S;
  const vbW = W * S + pad * 2;
  const vbH = pad + bodyH + 20 + 38;
  const X = (m) => pad + m * S;
  const Y = (m) => pad + m * S;
  const line = (x1, y1, x2, y2, stroke, w, extra = "") =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}" ${extra}/>`;
  let g = "";

  if (out) {
    g += `<rect x="${X(out.x)}" y="${Y(out.y)}" width="${out.w * S}" height="${out.h * S}" fill="#EFE5D8" stroke="#A87550" stroke-width="1.5" stroke-dasharray="6 4"/>`;
    g += `<text x="${X(out.x + out.w / 2)}" y="${Y(out.y + out.h / 2) + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="#6F4526">${escapeHTML(out.label)}</text>`;
  }
  plan.rooms.forEach((r) => {
    g += `<rect x="${X(r.x)}" y="${Y(r.y)}" width="${r.w * S}" height="${r.h * S}" fill="${r.wet ? "#EEEAE1" : "#FFFFFF"}" stroke="${ink}" stroke-width="1.8"/>`;
  });
  g += `<rect x="${X(0)}" y="${Y(0)}" width="${W * S}" height="${H * S}" fill="none" stroke="${ink}" stroke-width="7"/>`;

  // puertas y aberturas: se abre un hueco en el muro y, si corresponde, se dibuja el giro de la hoja
  (plan.doors || []).forEach((d) => {
    const exterior = d.o === "h" ? d.y === 0 || d.y === H : d.x === 0 || d.x === W;
    const gw = exterior ? 9 : 4;
    g += d.o === "h"
      ? line(X(d.x), Y(d.y), X(d.x + d.l), Y(d.y), "#fff", gw)
      : line(X(d.x), Y(d.y), X(d.x), Y(d.y + d.l), "#fff", gw);
    if (d.arc === false) return;
    const r = d.l * S, sg = d.s === 1;
    if (d.o === "h") {
      g += line(X(d.x), Y(d.y), X(d.x), Y(d.y + d.s * d.l), ink, 2.5);
      g += `<path d="M ${X(d.x + d.l)} ${Y(d.y)} A ${r} ${r} 0 0 ${sg ? 1 : 0} ${X(d.x)} ${Y(d.y + d.s * d.l)}" fill="none" stroke="${ink}" stroke-width="1.2" opacity=".6"/>`;
    } else {
      g += line(X(d.x), Y(d.y), X(d.x + d.s * d.l), Y(d.y), ink, 2.5);
      g += `<path d="M ${X(d.x)} ${Y(d.y + d.l)} A ${r} ${r} 0 0 ${sg ? 0 : 1} ${X(d.x + d.s * d.l)} ${Y(d.y)}" fill="none" stroke="${ink}" stroke-width="1.2" opacity=".6"/>`;
    }
  });
  (plan.windows || []).forEach((w) => {
    const a = w.o === "h" ? [X(w.x), Y(w.y), X(w.x + w.l), Y(w.y)] : [X(w.x), Y(w.y), X(w.x), Y(w.y + w.l)];
    g += line(...a, ink, 9) + line(...a, "#BFDCE8", 5);
  });

  plan.rooms.forEach((r) => {
    const cx = X(r.x + r.w / 2), cy = Y(r.y + r.h / 2);
    g += `<text x="${cx}" y="${r.noArea ? cy + 5 : cy - 2}" text-anchor="middle" font-size="${r.noArea ? 13 : 15}" font-weight="800" fill="${ink}">${escapeHTML(r.n)}</text>`;
    if (!r.noArea) g += `<text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="12.5" font-weight="600" fill="#5A5E5F">${fmtNum(r.w * r.h)} m²</text>`;
  });

  // cotas generales
  const dy = Y(0) - 24, dx = X(0) - 24;
  g += line(X(0), dy, X(W), dy, "#8A5934", 1.5) + line(X(0), dy - 6, X(0), dy + 6, "#8A5934", 1.5) + line(X(W), dy - 6, X(W), dy + 6, "#8A5934", 1.5);
  g += `<text x="${X(W / 2)}" y="${dy - 8}" text-anchor="middle" font-size="13" font-weight="800" fill="#8A5934">${fmtNum(W)} m</text>`;
  g += line(dx, Y(0), dx, Y(H), "#8A5934", 1.5) + line(dx - 6, Y(0), dx + 6, Y(0), "#8A5934", 1.5) + line(dx - 6, Y(H), dx + 6, Y(H), "#8A5934", 1.5);
  g += `<text transform="translate(${dx - 9} ${Y(H / 2)}) rotate(-90)" text-anchor="middle" font-size="13" font-weight="800" fill="#8A5934">${fmtNum(H)} m</text>`;

  // norte y rótulo
  g += `<g transform="translate(${vbW - 28} 30)"><path d="M0 -14 L7 8 L0 3 L-7 8 Z" fill="${ink}"/><text y="24" text-anchor="middle" font-size="12" font-weight="800" fill="${ink}">N</text></g>`;
  const ty = pad + bodyH + 20 + 20;
  g += `<text x="${X(0)}" y="${ty}" font-size="13" font-weight="800" fill="${ink}">Planta</text>`;
  g += `<text x="${X(W)}" y="${ty}" text-anchor="end" font-size="13" font-weight="600" fill="#5A5E5F">Superficie construida: ${fmtNum(p.specs.surface)} m²</text>`;

  const desc = `Plano de planta de ${p.title}: ${p.specs.layout}`;
  return `<svg class="plan-svg" viewBox="0 0 ${vbW} ${vbH}" role="img" aria-label="${escapeHTML(desc)}" font-family="'Nunito Sans', system-ui, sans-serif" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
}

let planDialog;
function openPlan(id) {
  const p = getProject(id);
  if (!p || !p.plan) return;
  if (!planDialog) {
    planDialog = document.createElement("dialog");
    planDialog.className = "plan-dialog";
    planDialog.setAttribute("aria-labelledby", "plan-dialog-title");
    planDialog.innerHTML = `
      <div class="dialog-inner">
        <div class="dialog-head">
          <div><h2 id="plan-dialog-title"></h2><p class="plan-hint">Desliza para recorrer el plano.</p></div>
          <button type="button" class="dialog-close" aria-label="Cerrar plano">&times;</button>
        </div>
        <div class="plan-scroll"></div>
      </div>`;
    document.body.appendChild(planDialog);
    $(".dialog-close", planDialog).addEventListener("click", () => planDialog.close());
    planDialog.addEventListener("click", (e) => { if (e.target === planDialog) planDialog.close(); });
    planDialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
  }
  $("#plan-dialog-title", planDialog).textContent = "Plano · " + p.title;
  $(".plan-scroll", planDialog).innerHTML = planSVG(p);
  document.body.classList.add("modal-open");
  if (typeof planDialog.showModal === "function") planDialog.showModal();
  else planDialog.setAttribute("open", "");
  $(".dialog-close", planDialog).focus();
}

/* ---------- FICHA INDIVIDUAL ---------- */
function statsHTML(sp) {
  const items = [
    [fmtNum(sp.surface) + " m²", "Superficie construida"],
    [sp.bedrooms, sp.bedrooms === 1 ? "Dormitorio" : "Dormitorios"],
    [sp.baths, sp.baths === 1 ? "Baño" : "Baños"],
    [sp.floors, sp.floors === 1 ? "Piso" : "Pisos"],
  ];
  return `<div class="stats">${items.map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join("")}</div>`;
}

function materialsHTML(p) {
  return `<section class="section section-alt"><div class="container">
    <div class="section-head"><span class="eyebrow">Materiales y terminaciones</span>
      <h2>Cómo está construida esta casa</h2>
      <p>Un resumen por zona para que entiendas qué incluye el modelo.</p></div>
    <dl class="mat-list">${p.materials
      .map(([z, t]) => `<div class="mat-row"><dt>${escapeHTML(z)}</dt><dd>${escapeHTML(t)}</dd></div>`)
      .join("")}</dl>
  </div></section>`;
}

function planSectionHTML(p) {
  return `<section class="section"><div class="container">
    <div class="section-head"><span class="eyebrow">Plano de la vivienda</span>
      <h2>Así se distribuye</h2>
      <p>Toca el plano para verlo más grande.</p></div>
    <figure class="plan-fig">
      <button type="button" class="plan-open" data-plan="${p.id}" aria-label="Ampliar el plano de ${escapeHTML(p.title)}">
        ${planSVG(p)}<span class="plan-zoom" aria-hidden="true">Ampliar plano</span>
      </button>
      <figcaption><strong>Distribución:</strong> ${escapeHTML(p.specs.layout)}</figcaption>
    </figure>
  </div></section>`;
}

function extrasHTML(p) {
  const e = p.extras;
  return `<section class="section section-alt"><div class="container">
    <div class="grid grid-2">
      <div class="feature-box"><span class="eyebrow">Tipo de ampliación</span><p>${escapeHTML(e.kind)}</p></div>
      <div class="feature-box"><span class="eyebrow">Resultado esperado</span><p>${escapeHTML(e.result)}</p></div>
    </div>
    <div class="section-head" style="margin-top:3rem"><h2>Ideas para tu espacio</h2>
      <p>Algunas posibilidades. Cuéntanos qué necesitas y lo adaptamos a tu casa.</p></div>
    <div class="grid grid-3">${e.ideas
      .map((i) => `<div class="value-card"><h3>${escapeHTML(i.t)}</h3><p>${escapeHTML(i.d)}</p></div>`)
      .join("")}</div>
  </div></section>`;
}

function renderProjectDetail() {
  const host = $("[data-render='project']");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = getProject(id);
  if (!p) {
    document.title = "Proyecto no encontrado | H&H Casas y Ampliaciones";
    host.innerHTML = `<div class="container section"><h1>No encontramos ese proyecto</h1><p class="lead">Puede que el enlace esté incompleto.</p><a class="btn btn-primary" href="proyectos.html">Ver todos los proyectos</a></div>`;
    return;
  }
  document.title = p.title + " | H&H Casas y Ampliaciones";
  const cat = CATEGORIES[p.category];
  const related = PROJECTS.filter((x) => x.id !== p.id && x.category === p.category);
  const others = related.length ? related : PROJECTS.filter((x) => x.id !== p.id).slice(0, 3);
  const isHouse = !!p.specs;

  host.innerHTML = `
  <section class="page-head"><div class="container">
    <nav class="breadcrumb" aria-label="Ruta">
      <a href="index.html">Inicio</a> / <a href="proyectos.html#${p.category}">${cat.label}</a> / <span aria-current="page">${escapeHTML(p.title)}</span>
    </nav>
  </div></section>
  <section class="section" style="padding-top:1rem"><div class="container project-layout">
    <div>
      <div class="gallery-main" id="gallery-main">${phHTML(p.images[0], { lazy: false })}</div>
      ${p.images.length > 1 ? `<div class="gallery-thumbs" role="group" aria-label="Fotos del proyecto">${p.images
        .map((im, i) => `<button type="button" data-i="${i}" aria-label="Ver foto ${i + 1}" aria-current="${i === 0}">${phHTML(im)}</button>`)
        .join("")}</div>` : ""}
    </div>
    <aside class="project-info">
      <span class="tag">${cat.label}</span>
      <h1>${escapeHTML(p.title)}</h1>
      <p class="lead">${escapeHTML(p.description)}</p>
      ${isHouse ? statsHTML(p.specs) : ""}
      <div class="btn-row">
        <button type="button" class="btn btn-primary" data-quote="${p.type}" data-project="${p.id}">${ICON_CHAT}${escapeHTML(p.cta)}</button>
        <button type="button" class="btn btn-secondary" data-plans>Ya tengo planos: enviarlos</button>
      </div>
      <p class="note-box">Los planos no son obligatorios. Si aún no los tienes, puedes cotizar contándonos tu idea.</p>
    </aside>
  </div></section>
  ${isHouse ? materialsHTML(p) + planSectionHTML(p) : p.extras ? extrasHTML(p) : ""}
  <section class="section section-soft cta-band"><div class="container">
    <h2>${isHouse ? "¿Te gustó este modelo?" : "¿Quieres ampliar tu casa?"}</h2>
    <p class="lead">${isHouse ? "Cuéntanos tu terreno y lo que necesitas, o envíanos tus planos." : "Cuéntanos qué espacio necesitas y lo conversamos."}</p>
    <div class="btn-row">
      <button type="button" class="btn btn-primary" data-quote="${p.type}" data-project="${p.id}">${ICON_CHAT}${escapeHTML(p.cta)}</button>
      <button type="button" class="btn btn-secondary" data-plans>Enviar planos</button>
    </div>
  </div></section>
  <section class="section section-alt"><div class="container">
    <div class="section-head"><h2>Otros proyectos</h2></div>
    <div class="grid grid-3">${others.map(projectCard).join("")}</div>
  </div></section>`;

  const thumbs = $$(".gallery-thumbs button", host);
  thumbs.forEach((b) =>
    b.addEventListener("click", () => {
      const i = Number(b.dataset.i);
      $("#gallery-main", host).innerHTML = phHTML(p.images[i], { lazy: false });
      thumbs.forEach((t) => t.setAttribute("aria-current", String(t === b)));
      guardImages(host);
    })
  );
  guardImages(host);
  revealInit(host);
}

function renderInlineForms() {
  $$("[data-inline-form]").forEach((host) => {
    host.appendChild(createQuoteForm("inline", { typeId: new URLSearchParams(location.search).get("tipo") || "" }));
  });
}

/* ---------- 10. NAVEGACIÓN Y EVENTOS ---------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  if (!toggle || !nav) return;
  const set = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".nav-toggle-text").textContent = open ? "Cerrar" : "Menú";
  };
  toggle.addEventListener("click", () => set(!nav.classList.contains("open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      set(false);
      toggle.focus();
    }
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", () => set(false)));
}

function initActions() {
  document.addEventListener("click", (e) => {
    const planBtn = e.target.closest("[data-plan]");
    if (planBtn) {
      e.preventDefault();
      openPlan(planBtn.dataset.plan);
      return;
    }
    const quote = e.target.closest("[data-quote]");
    if (quote) {
      e.preventDefault();
      if (dialog && dialog.open) dialog.close();
      openQuote(quote.dataset.quote, quote.dataset.project || "");
      return;
    }
    const plans = e.target.closest("[data-plans]");
    if (plans) {
      e.preventDefault();
      if (openWhatsApp(CONFIG.PLANS_MESSAGE) && dialog && dialog.open) dialog.close();
      return;
    }
    const direct = e.target.closest("[data-wa-direct]");
    if (direct) {
      e.preventDefault();
      openWhatsApp(CONFIG.DIRECT_MESSAGE);
    }
  });
  $$("[data-instagram]").forEach((a) => (a.href = CONFIG.INSTAGRAM_URL));
  const digits = String(CONFIG.WHATSAPP_NUMBER).replace(/\D/g, "");
  if (/^\d{8,15}$/.test(digits)) {
    const pretty = /^569\d{8}$/.test(digits) ? `+56 9 ${digits.slice(3, 7)} ${digits.slice(7)}` : `+${digits}`;
    $$("[data-phone]").forEach((a) => { a.href = `tel:+${digits}`; a.textContent = pretty; });
  }
}

function initFab() {
  const fab = $(".fab");
  if (!fab) return;
  let queued = false;
  const check = () => {
    queued = false;
    const vh = window.innerHeight;
    const covered = $$("[data-quote]").some((el) => {
      if (el === fab) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < vh;
    });
    fab.classList.toggle("is-hidden", covered);
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(check); } };
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  document.addEventListener("click", () => setTimeout(queue, 50));
  check();
}

function revealInit(root = document) {
  const items = $$(".reveal:not(.in)", root);
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");
  renderFeatured();
  renderProjectsPage();
  renderProjectDetail();
  renderInlineForms();
  initNav();
  initActions();
  initFab();
  guardImages();
  revealInit();
});
