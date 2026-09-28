import { img, type Img } from './images';

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/estudio', label: 'Estudio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

// Número ficticio para la demostración. Sustituirlo por el WhatsApp real antes de publicar.
const whatsappNumber = '573000000000';
const whatsappText = 'Hola, Morfeo Arquitectos. Quiero conversar sobre un proyecto.';
export const contact = {
  city: 'Duitama, Boyacá, Colombia',
  whatsappNumber,
  phone: '+57 300 000 0000',
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
};

export const contactCta = { href: contact.whatsappHref, label: 'Hablemos por WhatsApp' };

export type Service = { title: string; text: string; deliverables: string; image: Img };

export const services: Service[] = [
  { title: 'Diseño de vivienda', text: 'Casas urbanas y campestres pensadas para la forma de vivir de cada cliente y las condiciones del lugar.', deliverables: 'Programa, concepto, anteproyecto, proyecto arquitectónico y visualizaciones.', image: img.svcVivienda },
  { title: 'Remodelación y ampliación', text: 'Transformamos espacios existentes para darles nueva luz, mejor circulación y usos más flexibles.', deliverables: 'Diagnóstico, propuesta de intervención, planos y especificaciones.', image: img.svcRemodelacion },
  { title: 'Diseño interior', text: 'Materiales, mobiliario, iluminación y detalles que completan la experiencia del espacio.', deliverables: 'Concepto interior, selección de acabados, planos de detalle y guía de ambientación.', image: img.svcInterior },
  { title: 'Espacios comerciales y de hospitalidad', text: 'Lugares que expresan una marca y ofrecen una experiencia cálida a visitantes y usuarios.', deliverables: 'Concepto, distribución, diseño arquitectónico e interior.', image: img.svcComercial },
  { title: 'Equipamientos y espacios colectivos', text: 'Propuestas para el encuentro, el servicio y la vida comunitaria.', deliverables: 'Estudios iniciales, anteproyecto y documentación arquitectónica según el encargo.', image: img.svcColectivo },
  { title: 'Acompañamiento de proyecto', text: 'Seguimiento de la intención de diseño y coordinación con profesionales técnicos durante el desarrollo del proyecto.', deliverables: 'Reuniones de revisión, coordinación y visitas según el alcance contratado.', image: img.svcAcompanamiento },
];

export const method = [
  { title: 'Conversamos', text: 'Conocemos a las personas, sus objetivos, el presupuesto de referencia y el lugar.' },
  { title: 'Investigamos', text: 'Estudiamos condiciones del predio o inmueble y organizamos necesidades y prioridades.' },
  { title: 'Proponemos', text: 'Desarrollamos una idea espacial y visual que el cliente pueda comprender y discutir.' },
  { title: 'Definimos', text: 'Ajustamos distribución, materiales y documentación para tomar decisiones con claridad.' },
  { title: 'Acompañamos', text: 'Coordinamos el desarrollo del diseño y su relación con los equipos técnicos, según el contrato.' },
];

export const principles = [
  { title: 'Escuchar primero', text: 'La manera de vivir y trabajar de cada cliente guía las decisiones.' },
  { title: 'Leer el lugar', text: 'Topografía, orientación, vistas, vegetación y entorno construyen el punto de partida.' },
  { title: 'Hacer que todo tenga sentido', text: 'Distribución, estructura, materiales y detalles deben responder a una idea común.' },
  { title: 'Diseñar para durar', text: 'Preferimos soluciones sobrias, flexibles y fáciles de mantener.' },
  { title: 'Cuidar la experiencia', text: 'La calidad se siente al entrar, recorrer, usar y permanecer en un espacio.' },
];

export const clients = [
  { title: 'Familias y particulares', note: 'Vivienda y casas campestres', text: 'Quieren una casa propia o campestre, una ampliación o un interior que responda a su vida real.', image: img.clientFamilias },
  { title: 'Empresas e inversionistas', note: 'Comercio, estancia y oficinas', text: 'Necesitan espacios de estancia, comercio u oficinas con identidad y una experiencia consistente.', image: img.clientEmpresas },
  { title: 'Instituciones', note: 'Encuentro y servicio', text: 'Buscan espacios de encuentro, aprendizaje o servicio con claridad funcional y vínculo con la comunidad.', image: img.clientInstituciones },
];

export const roles = [
  { title: 'Dirección de diseño', text: 'Define la idea de cada proyecto y cuida que se mantenga en todas las etapas.', image: img.rolDireccion },
  { title: 'Desarrollo arquitectónico', text: 'Convierte el concepto en planos, especificaciones y documentación clara.', image: img.rolDesarrollo },
  { title: 'Interiorismo', text: 'Materiales, mobiliario e iluminación que completan la experiencia.', image: img.rolInterior },
  { title: 'Coordinación de especialistas', text: 'Integra a los profesionales externos que cada encargo necesita.', image: img.rolCoordinacion },
];

export const faq = [
  { q: '¿Trabajan solo en Duitama?', a: 'La firma tiene su base en Duitama y puede evaluar proyectos en otros municipios según su alcance y necesidades.' },
  { q: '¿Puedo contactarlos si todavía no tengo un terreno?', a: 'Sí. Una conversación temprana puede ayudar a ordenar objetivos y criterios antes de avanzar con una compra o un diseño.' },
  { q: '¿Diseñan únicamente casas nuevas?', a: 'No. También se contemplan remodelaciones, interiores y otros espacios de escala compatible con la práctica.' },
  { q: '¿Cómo se define el costo del diseño?', a: 'Depende del alcance, la complejidad, el lugar y los entregables. Se prepara una propuesta después de conocer el proyecto.' },
  { q: '¿Cuánto tarda un proyecto?', a: 'El cronograma se define al acordar el alcance y depende de revisiones, información disponible y procesos externos.' },
];
