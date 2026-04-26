/* ============================================================
   AUDIX — main.js
   Carga bloques.json y rellena las páginas dinámicamente.
   ============================================================ */

/* ── Icono SVG placeholder ──────────────────────────────────── */
const ICON_PLACEHOLDER = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <polyline points="21 15 16 10 5 21"/>
</svg>`;

/* ── Construir un bloque HTML ───────────────────────────────── */
function crearBloque(item, index) {
  const esInvertido   = index % 2 !== 0 ? 'invertido' : '';
  const esPlaceholder = !item.imágen || item.imágen.includes('placeholder');

  const imagenHTML = esPlaceholder
    ? `<div class="bloque-imagen placeholder">${ICON_PLACEHOLDER}</div>`
    : `<div class="bloque-imagen">
         <img src="${item.imágen}" alt="${item.título}" loading="lazy">
       </div>`;

  return `
    <div class="bloque-wrapper fade-in">
      <div class="bloque ${esInvertido}">
        ${imagenHTML}
        <div class="bloque-texto">
          <h3>${item.título}</h3>
          <p>${item.descripción}</p>
        </div>
      </div>
    </div>`;
}

/* ── Inyectar bloques en un contenedor ─────────────────────── */
function inyectarBloques(contenedorId, items) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor || !items) return;

  contenedor.innerHTML = items.map(crearBloque).join('');
}

/* ── Cargar JSON y poblar la página ────────────────────────── */
async function cargarBloques() {
  let data;
  try {
    const res = await fetch('bloques.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.error('No se pudo cargar bloques.json:', err);
    return;
  }

  // Index — Nosotros
  if (document.getElementById('contenedor-nosotros')) {
    inyectarBloques('contenedor-nosotros', data['Nosotros']);
  }

  // Servicios
  if (document.getElementById('contenedor-servicios')) {
    inyectarBloques('contenedor-servicios', data['Servicios']);
  }

  // Audífonos
  if (document.getElementById('contenedor-audifonos')) {
    inyectarBloques('contenedor-audifonos', data['Audífonos']);
  }

  // Activar animaciones de entrada (IntersectionObserver)
  iniciarAnimaciones();
}

/* ── Animaciones de aparición al hacer scroll ───────────────── */
function iniciarAnimaciones() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

/* ── Menú hamburguesa ────────────────────────────────────────── */
function initMenuMovil() {
  const toggle   = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('nav.mobile');
  const overlay  = document.querySelector('.nav-overlay');

  if (!toggle || !navMobile) return;

  function abrir() {
    toggle.classList.add('abierto');
    navMobile.classList.add('abierto');
    overlay?.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function cerrar() {
    toggle.classList.remove('abierto');
    navMobile.classList.remove('abierto');
    overlay?.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () =>
    toggle.classList.contains('abierto') ? cerrar() : abrir()
  );
  overlay?.addEventListener('click', cerrar);
  navMobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));
}

/* ── Marcar enlace activo en el nav ─────────────────────────── */
function marcarNavActivo() {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((a) => {
    const href = a.getAttribute('href')?.split('#')[0] || '';
    if (
      (pagina === 'index.html' && href === 'index.html') ||
      (pagina === 'servicios.html' && href === 'servicios.html') ||
      (pagina === 'audifonos.html' && href === 'audifonos.html')
    ) {
      a.classList.add('activo');
    }
  });
}

/* ── Inicialización ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  cargarBloques();
  initMenuMovil();
  marcarNavActivo();
});
