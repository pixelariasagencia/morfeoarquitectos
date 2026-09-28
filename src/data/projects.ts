import type { Img } from './images';
import { url } from './url';

export type Category = 'vivienda' | 'interiores' | 'hospitalidad' | 'colectivos';

export const categories: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'vivienda', label: 'Vivienda' },
  { id: 'interiores', label: 'Interiores y transformación' },
  { id: 'hospitalidad', label: 'Hospitalidad' },
  { id: 'colectivos', label: 'Espacios colectivos' },
];

export type Project = {
  slug: string;
  title: string;
  type: string;
  category: Category;
  place: string;
  idea: string;
  summary: string;
  challenge: string;
  proposal: string;
  features: string[];
  materials?: string;
  cover: Img;
  gallery: Img[];
};

const image = (name: string, desc: string): Img => ({ path: url(`/images/${name}.webp`), desc });

export const projects: Project[] = [
  {
    slug: 'casa-arrayan',
    title: 'Casa Arrayán',
    type: 'Vivienda campestre',
    category: 'vivienda',
    place: 'Duitama, Boyacá',
    idea: 'Una casa abierta a las montañas y protegida para la vida familiar.',
    summary: 'Una vivienda campestre que alterna espacios íntimos y áreas comunes abiertas al paisaje.',
    challenge: 'Casa Arrayán se concibe para una familia que quiere salir de la ciudad sin renunciar a la cercanía de la vida cotidiana.',
    proposal: 'La propuesta organiza la casa alrededor de un patio resguardado, que permite disfrutar del exterior incluso en días fríos. Las áreas sociales se abren hacia las vistas; los dormitorios se ubican en una franja más silenciosa. Piedra de tono claro, madera y superficies minerales aportan calidez sin competir con el entorno.',
    features: ['Patio como corazón de la casa', 'Transición cubierta entre interior y jardín', 'Sala y comedor con luz natural', 'Paleta de piedra, madera y tonos tierra'],
    materials: 'Piedra de tono claro, madera y superficies minerales.',
    cover: image('casa-arrayan', 'Casa Arrayán entre montañas de Boyacá, en piedra clara y madera.'),
    gallery: [
      image('casa-arrayan', 'Casa Arrayán entre montañas de Boyacá, en piedra clara y madera.'),
      image('casa-arrayan-interior', 'Sala de Casa Arrayán abierta al patio y las montañas.'),
    ],
  },
  {
    slug: 'casa-bruma',
    title: 'Casa Bruma',
    type: 'Vivienda campestre',
    category: 'vivienda',
    place: 'Paipa, Boyacá',
    idea: 'Recogimiento, luz suave y una relación pausada con el jardín.',
    summary: 'Una casa serena que usa patios y umbrales para graduar la luz y la privacidad.',
    challenge: 'Casa Bruma explora una forma de habitar el campo con calma.',
    proposal: 'En lugar de abrir todas sus fachadas por igual, la vivienda alterna muros protectores con grandes aperturas cuidadosamente orientadas. El recorrido pasa de un acceso contenido a una sala luminosa y, después, a una terraza que prolonga la vida interior. La materialidad busca una elegancia tranquila: estuco claro, madera natural, piedra y textiles cálidos.',
    features: ['Secuencia de acceso', 'Patio de luz', 'Terraza protegida', 'Atmósfera íntima'],
    materials: 'Estuco claro, madera natural, piedra y textiles cálidos.',
    cover: image('casa-bruma', 'Casa Bruma en un paisaje de niebla y jardín.'),
    gallery: [
      image('casa-bruma', 'Casa Bruma en un paisaje de niebla y jardín.'),
      image('casa-bruma-interior', 'Patio íntimo de Casa Bruma con muros claros y luz suave.'),
    ],
  },
  {
    slug: 'patio-de-lino',
    title: 'Patio de Lino',
    type: 'Remodelación de vivienda',
    category: 'interiores',
    place: 'Duitama, Boyacá',
    idea: 'Dar una nueva vida a una casa existente sin borrar su memoria.',
    summary: 'Una transformación residencial que encuentra amplitud y luz en la estructura de una casa familiar.',
    challenge: 'Patio de Lino parte de una vivienda con espacios fragmentados y poca conexión con su patio.',
    proposal: 'La propuesta conserva la escala doméstica y reorganiza la zona social para que cocina, comedor y jardín funcionen como un conjunto. Nuevas aperturas, superficies claras y carpinterías de madera vuelven más legible la casa. Las habitaciones mantienen la privacidad, mientras el patio se convierte en el lugar de encuentro diario.',
    features: ['Nueva relación entre interior y patio', 'Cocina integrada', 'Patio habitable', 'Materiales de renovación'],
    materials: 'Superficies claras y carpinterías de madera.',
    cover: image('patio-de-lino', 'Fachada restaurada de Patio de Lino con carpintería nueva.'),
    gallery: [
      image('patio-de-lino', 'Fachada restaurada de Patio de Lino con carpintería nueva.'),
      image('patio-de-lino-interior', 'Cocina y comedor de Patio de Lino abiertos al patio.'),
    ],
  },
  {
    slug: 'alto-roble',
    title: 'Alto Roble',
    type: 'Vivienda familiar',
    category: 'vivienda',
    place: 'Tibasosa, Boyacá',
    idea: 'Una casa flexible que pueda cambiar con la familia.',
    summary: 'Espacios conectados y adaptables en una vivienda pensada para distintas etapas de vida.',
    challenge: 'Alto Roble reúne espacios de líneas sencillas que se adaptan a distintas rutinas familiares.',
    proposal: 'La planta reúne las actividades cotidianas en un volumen abierto y reserva un segundo ámbito para descanso y trabajo. Un cuarto flexible puede ser estudio, habitación de invitados o espacio de juego. La terraza cubierta extiende las reuniones al exterior y ofrece una transición cómoda entre la vivienda y el jardín.',
    features: ['Flexibilidad', 'Espacios de trabajo en casa', 'Relación con el jardín', 'Cubierta protectora'],
    cover: image('alto-roble', 'Alto Roble, vivienda de madera entre árboles de Boyacá.'),
    gallery: [
      image('alto-roble', 'Alto Roble, vivienda de madera entre árboles de Boyacá.'),
      image('alto-roble-interior', 'Terraza familiar de Alto Roble conectada al jardín.'),
    ],
  },
  {
    slug: 'posada-umbral',
    title: 'Posada Umbral',
    type: 'Hospitalidad de pequeña escala',
    category: 'hospitalidad',
    place: 'Boyacá',
    idea: 'Un lugar de estancia que se sienta cercano y memorable.',
    summary: 'Una posada contemporánea de escala íntima, organizada alrededor de jardines y espacios comunes.',
    challenge: 'Posada Umbral organiza una experiencia de alojamiento donde la arquitectura invita a bajar el ritmo.',
    proposal: 'Las habitaciones se distribuyen en piezas pequeñas para mantener privacidad y vistas propias. Un espacio común con cocina, comedor y chimenea reúne a los huéspedes sin perder la sensación de refugio. La propuesta combina acabados naturales, iluminación cálida y una imagen sobria que puede sostener una marca de hospitalidad de alto nivel.',
    features: ['Llegada y recepción', 'Jardín como articulador', 'Habitaciones privadas', 'Experiencia de marca'],
    materials: 'Acabados naturales e iluminación cálida.',
    cover: image('posada-umbral', 'Pabellones de Posada Umbral al anochecer.'),
    gallery: [
      image('posada-umbral', 'Pabellones de Posada Umbral al anochecer.'),
      image('posada-umbral-interior', 'Salón común cálido de Posada Umbral.'),
    ],
  },
  {
    slug: 'casa-del-encuentro',
    title: 'Casa del Encuentro',
    type: 'Equipamiento comunitario',
    category: 'colectivos',
    place: 'Duitama, Boyacá',
    idea: 'Un espacio abierto y adaptable para aprender, reunirse y compartir.',
    summary: 'Una propuesta de escala barrial donde el patio y los espacios flexibles apoyan la vida comunitaria.',
    challenge: 'Casa del Encuentro desarrolla una arquitectura de escala barrial, sencilla y acogedora.',
    proposal: 'Salas de uso múltiple se agrupan alrededor de un patio que sirve como punto de orientación y lugar de reunión. Aleros y corredores ofrecen áreas intermedias para actividades informales. La propuesta prioriza recorridos claros, accesibilidad desde el diseño y materiales robustos, con una identidad que pertenece al barrio.',
    features: ['Patio público', 'Salas modulares', 'Accesos legibles', 'Espacios intermedios'],
    materials: 'Materiales robustos y de fácil mantenimiento.',
    cover: image('casa-del-encuentro', 'Casa del Encuentro y su patio comunitario.'),
    gallery: [
      image('casa-del-encuentro', 'Casa del Encuentro y su patio comunitario.'),
      image('casa-del-encuentro-interior', 'Sala flexible y patio de Casa del Encuentro.'),
    ],
  },
];
