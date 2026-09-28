// Antepone la ruta base de astro.config (hoy '/'); sirve si el sitio se publica en una subcarpeta.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + path;
