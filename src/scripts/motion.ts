const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)] as T[];

// Entradas al hacer scroll (una sola vez).
const reveal = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      reveal.unobserve(e.target);
    }
  },
  { threshold: 0.12 },
);
$$('[data-reveal]').forEach((el) => reveal.observe(el));

// Barra de navegación: transparente sobre el hero, sólida al bajar.
const nav = document.querySelector<HTMLElement>('[data-nav]');
const sentinel = document.querySelector('[data-nav-sentinel]');
if (nav && sentinel && !nav.hasAttribute('data-scrolled')) {
  new IntersectionObserver(([e]) => nav.toggleAttribute('data-scrolled', !e.isIntersecting)).observe(sentinel);
}

// Columna fija más alta que la ventana: se fija por su borde inferior para que todo se pueda leer.
$$('[data-sticky-fit]').forEach((el) => {
  const fit = () => (el.style.top = `${Math.min(100, innerHeight - el.offsetHeight - 24)}px`);
  new ResizeObserver(fit).observe(el);
  addEventListener('resize', fit);
});

// Menú móvil (dialog nativo: foco atrapado y Escape incluidos).
const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
document.querySelector('[data-menu-open]')?.addEventListener('click', () => menu?.showModal());
document.querySelector('[data-menu-close]')?.addEventListener('click', () => menu?.close());

// Servicios: la imagen fija cambia según el panel que cruza el centro de la pantalla.
$$('[data-services]').forEach((root) => {
  const imgs = $$('[data-svc-img]', root);
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const i = Number((e.target as HTMLElement).dataset.svcPanel);
        imgs.forEach((im, j) => im.classList.toggle('is-active', i === j));
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  );
  $$('[data-svc-panel]', root).forEach((p) => io.observe(p));
});

// Carrusel horizontal de tarjetas.
$$('[data-track]').forEach((root) => {
  const list = root.querySelector<HTMLElement>('[data-track-list]')!;
  const [prev, next] = $$<HTMLButtonElement>('[data-track-btn]', root);
  const step = () => {
    const card = list.firstElementChild as HTMLElement;
    return card.offsetWidth + parseFloat(getComputedStyle(list).columnGap || '0');
  };
  const go = (dir: number) => list.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
  prev?.addEventListener('click', () => go(-1));
  next?.addEventListener('click', () => go(1));
  const ends = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const btn = e.target === list.firstElementChild ? prev : next;
        if (btn) btn.disabled = e.isIntersecting;
      }
    },
    { root: list, threshold: 0.95 },
  );
  if (list.firstElementChild) ends.observe(list.firstElementChild);
  if (list.lastElementChild) ends.observe(list.lastElementChild);
});

// Filtros del portafolio: mantiene el patrón alto/bajo en damero con las tarjetas visibles.
const filters = document.querySelector<HTMLElement>('[data-filters]');
if (filters) {
  const cards = $$('[data-cat]');
  const status = document.querySelector('[data-filter-status]');
  const layout = () => cards.filter((c) => !c.hidden).forEach((c, i) => c.toggleAttribute('data-tall', (Math.floor(i / 2) + (i % 2)) % 2 === 0));
  layout();
  filters.addEventListener('click', (ev) => {
    const btn = (ev.target as HTMLElement).closest<HTMLButtonElement>('button[data-filter]');
    if (!btn) return;
    const f = btn.dataset.filter;
    $$('button[data-filter]', filters).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    cards.forEach((c) => (c.hidden = f !== 'todos' && c.dataset.cat !== f));
    layout();
    const n = cards.filter((c) => !c.hidden).length;
    if (status) status.textContent = `${n} ${n === 1 ? 'proyecto' : 'proyectos'}`;
  });
}

// El formulario estático prepara el mensaje y lleva al visitante a WhatsApp.
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
form?.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const fields = new FormData(form);
  const value = (name: string) => String(fields.get(name) ?? '').trim();
  const message = [
    'Hola, Morfeo Arquitectos. Quiero conversar sobre un proyecto.',
    '',
    `Nombre: ${value('nombre')}`,
    ...(value('correo') ? [`Correo: ${value('correo')}`] : []),
    ...(value('telefono') ? [`Teléfono: ${value('telefono')}`] : []),
    `Municipio: ${value('municipio')}`,
    `Tipo de proyecto: ${value('tipo')}`,
    `Estado actual: ${value('estado')}`,
    `Mi idea: ${value('mensaje')}`,
  ].join('\n');
  const url = new URL(`https://wa.me/${form.dataset.whatsappNumber}`);
  url.searchParams.set('text', message);
  window.location.assign(url.toString());
});

