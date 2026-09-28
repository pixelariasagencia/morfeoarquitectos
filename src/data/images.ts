import { url } from './url';

// Imágenes originales para el portafolio conceptual de Morfeo.
export type Img = { path: string; desc: string; width?: number; height?: number };
const image = (name: string, desc: string): Img => ({
  path: url(`/images/${name}.webp`),
  desc,
  ...(name === 'hero-home' ? { width: 1904, height: 826 } : {}),
  ...(name === 'paisaje-boyaca' ? { width: 1672, height: 941 } : {}),
});

export const img = {
  heroHome: image('hero-home', 'Vivienda contemporánea de piedra y madera entre montañas de Boyacá al anochecer.'),
  introDetail: image('casa-arrayan-interior', 'Interior cálido de piedra y madera abierto al paisaje de montaña.'),
  footer: image('estudio-maqueta', 'Maqueta arquitectónica y materiales sobre una mesa de trabajo.'),
  cta: image('paisaje-boyaca', 'Montañas y campos de Boyacá bajo la luz cálida del atardecer.'),
  process1: image('estudio-maqueta', 'Maqueta y muestras de materiales en el estudio de arquitectura.'),
  process2: image('estudio-maqueta', 'Maqueta de una vivienda de patio en la mesa del estudio.'),
  process3: image('casa-arrayan-interior', 'Piedra y madera natural en un espacio residencial.'),
  svcVivienda: image('casa-arrayan-interior', 'Sala de vivienda campestre abierta al paisaje.'),
  svcRemodelacion: image('patio-de-lino-interior', 'Cocina y comedor remodelados abiertos al patio.'),
  svcInterior: image('casa-bruma-interior', 'Patio íntimo con acabados cálidos y luz suave.'),
  svcComercial: image('posada-umbral-interior', 'Salón de hospitalidad con materiales naturales y luz cálida.'),
  svcColectivo: image('casa-del-encuentro-interior', 'Patio y sala flexible de un espacio comunitario.'),
  svcAcompanamiento: image('estudio-maqueta', 'Maqueta y materiales del proceso de diseño.'),
  heroEstudio: image('estudio-maqueta', 'Mesa de trabajo con maqueta arquitectónica y muestras de materiales.'),
  estudioAbout: image('estudio-maqueta', 'Estudio de arquitectura con maqueta, planos y materiales.'),
  estudioManifiesto: image('casa-bruma-interior', 'Luz suave en un patio de muros claros.'),
  estudioManifiestoDetalle: image('patio-de-lino-interior', 'Encuentro entre un muro existente y carpintería nueva.'),
  estudioPaisaje: image('paisaje-boyaca', 'Valle y montañas andinas de Boyacá.'),
  rolDireccion: image('estudio-maqueta', 'Maqueta como expresión del concepto arquitectónico.'),
  rolDesarrollo: image('casa-arrayan', 'Vivienda integrada en su paisaje.'),
  rolInterior: image('casa-bruma-interior', 'Materialidad y luz de un espacio interior.'),
  rolCoordinacion: image('casa-del-encuentro-interior', 'Espacio para el encuentro comunitario.'),
  heroServicios: image('casa-arrayan-interior', 'Interior de vivienda abierto a las montañas.'),
  heroProyectos: image('paisaje-boyaca', 'Colinas verdes y montañas de Boyacá.'),
  heroContacto: image('posada-umbral', 'Acceso cálido a una posada entre jardines al anochecer.'),
  clientFamilias: image('alto-roble-interior', 'Terraza familiar abierta al jardín.'),
  clientEmpresas: image('posada-umbral-interior', 'Espacio de hospitalidad de pequeña escala.'),
  clientInstituciones: image('casa-del-encuentro', 'Patio de un edificio comunitario.'),
} satisfies Record<string, Img>;

export const src = (i: Img) => i.path;
