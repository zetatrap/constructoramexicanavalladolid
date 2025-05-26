export type Subwork = {
  id: number
  label: string
  sublink: string
  images: string[] | { casas: string[]; departamentos: string[] }
  mainText?: string
  listText?: string
}

export type Work = {
  id: number
  label: string
  link: string
  image: string
  subworks: Subwork[]
}

/* CASAS */
// Casas Básico
import CasaBásico1Image from '@/assets/images/casas/casa-básico-1.png'
import CasaBásico2Image from '@/assets/images/casas/casa-básico-2.png'
import CasaBásico3Image from '@/assets/images/casas/casa-básico-3.png'
import CasaBásico4Image from '@/assets/images/casas/casa-básico-4.png'
import CasaBásico5Image from '@/assets/images/casas/casa-básico-5.png'
import CasaBásico6Image from '@/assets/images/casas/casa-básico-6.png'
import CasaBásico7Image from '@/assets/images/casas/casa-básico-7.png'
// Casas de Lujo
import CasaLujo1Image from '@/assets/images/casas/casa-de-lujo-1.jpg'
import CasaLujo2Image from '@/assets/images/casas/casa-de-lujo-2.jpg'
import CasaLujo3Image from '@/assets/images/casas/casa-de-lujo-3.jpg'
import CasaLujo4Image from '@/assets/images/casas/casa-de-lujo-4.jpg'
import CasaLujo5Image from '@/assets/images/casas/casa-de-lujo-5.jpg'
import CasaLujo6Image from '@/assets/images/casas/casa-de-lujo-6.jpg'
import CasaLujo7Image from '@/assets/images/casas/casa-de-lujo-7.jpg'
// Casas Medio Residencial
import CasaMedioResidencial1Image from '@/assets/images/casas/casa-medio-residencial-1.png'
import CasaMedioResidencial2Image from '@/assets/images/casas/casa-medio-residencial-2.png'
import CasaMedioResidencial3Image from '@/assets/images/casas/casa-medio-residencial-3.png'
import CasaMedioResidencial4Image from '@/assets/images/casas/casa-medio-residencial-4.png'
import CasaMedioResidencial5Image from '@/assets/images/casas/casa-medio-residencial-5.png'
// Casas Residenciales
import CasaResidencial1Image from '@/assets/images/casas/casa-residencial-1.png'
import CasaResidencial2Image from '@/assets/images/casas/casa-residencial-2.png'
import CasaResidencial3Image from '@/assets/images/casas/casa-residencial-3.png'
import CasaResidencial4Image from '@/assets/images/casas/casa-residencial-4.png'
import CasaResidencial5Image from '@/assets/images/casas/casa-residencial-5.png'
import CasaResidencial6Image from '@/assets/images/casas/casa-residencial-6.png'
import CasaResidencial7Image from '@/assets/images/casas/casa-residencial-7.png'
import CasaResidencial8Image from '@/assets/images/casas/casa-residencial-8.png'

/* DEPARTAMENTOS */
// Departamentos Básico
import DepartamentoBásico1Image from '@/assets/images/departamentos/departamento-básico-1.jpg'
import DepartamentoBásico2Image from '@/assets/images/departamentos/departamento-básico-2.jpg'
// Departamentos de Lujo
import DepartamentoLujo1Image from '@/assets/images/departamentos/departamento-de-lujo-1.jpg'
import DepartamentoLujo2Image from '@/assets/images/departamentos/departamento-de-lujo-2.jpg'
// Departamentos Medio Residencial
import DepartamentoMedioResidencial1Image from '@/assets/images/departamentos/departamento-medio-residencial-1.jpg'
import DepartamentoMedioResidencial2Image from '@/assets/images/departamentos/departamento-medio-residencial-2.jpg'
// Departamentos Residenciales
import DepartamentoResidencial1Image from '@/assets/images/departamentos/departamento-residencial-1.jpg'
import DepartamentoResidencial2Image from '@/assets/images/departamentos/departamento-residencial-2.jpg'

/* OBRAS COMERCIALES */
// Hoteles
import Hotel1Image from '@/assets/images/obras-comerciales/hoteles-1.jpg'
import Hotel2Image from '@/assets/images/obras-comerciales/hoteles-2.jpg'
// Oficinas
import Oficina1Image from '@/assets/images/obras-comerciales/oficinas-1.jpg'
import Oficina2Image from '@/assets/images/obras-comerciales/oficinas-2.jpg'
// Restaurantes
import Restaurante1Image from '@/assets/images/obras-comerciales/restaurantes-1.jpg'
import Restaurante2Image from '@/assets/images/obras-comerciales/restaurantes-2.jpg'
// Tiendas
import Tienda1Image from '@/assets/images/obras-comerciales/tiendas-1.jpg'
import Tienda2Image from '@/assets/images/obras-comerciales/tiendas-2.jpg'

/* INMUEBLES INDUSTRIALES */
// Almacenes
import Almacen1Image from '@/assets/images/inmuebles-industriales/almacenes-1.jpg'
import Almacen2Image from '@/assets/images/inmuebles-industriales/almacenes-2.jpg'
// Bodegas
import Bodega1Image from '@/assets/images/inmuebles-industriales/bodegas-1.jpg'
import Bodega2Image from '@/assets/images/inmuebles-industriales/bodegas-2.jpg'
import Bodega3Image from '@/assets/images/inmuebles-industriales/bodegas-3.jpg'
import Bodega4Image from '@/assets/images/inmuebles-industriales/bodegas-4.jpg'
// Fábricas
import Fábrica1Image from '@/assets/images/inmuebles-industriales/fábricas-1.jpg'
import Fábrica2Image from '@/assets/images/inmuebles-industriales/fábricas-2.jpg'

/* CONSTRUCCIÓN INSTITUCIONAL */
// Escuelas
import Escuela1Image from '@/assets/images/construcción-institucional/escuelas-1.jpg'
import Escuela2Image from '@/assets/images/construcción-institucional/escuelas-2.jpg'
// Hospitales
import Hospital1Image from '@/assets/images/construcción-institucional/hospitales-1.jpg'
import Hospital2Image from '@/assets/images/construcción-institucional/hospitales-2.jpg'
import Hospital3Image from '@/assets/images/construcción-institucional/hospitales-3.jpg'
import Hospital4Image from '@/assets/images/construcción-institucional/hospitales-4.jpg'

/* VÍAS PÚBLICAS E INFRAESTRUCTURA */
// Carreteras
import Carretera1Image from '@/assets/images/vias-publicas-e-infraestructura/carreteras-1.jpg'
import Carretera2Image from '@/assets/images/vias-publicas-e-infraestructura/carreteras-2.jpg'
import Carretera3Image from '@/assets/images/vias-publicas-e-infraestructura/carreteras-3.jpg'
// Puentes
import Puente2Image from '@/assets/images/vias-publicas-e-infraestructura/puentes-2.jpg'
import Puente3Image from '@/assets/images/vias-publicas-e-infraestructura/puentes-3.jpg'

/* HEADERS */
import CasasApartamentosHeader from '@/assets/images/headers/casas-y-apartamentos.jpg'
import ObrasComercialesHeader from '@/assets/images/headers/obras-comerciales.jpg'
import InmueblesIndustrialesHeader from '@/assets/images/headers/inmuebles-industriales.jpg'
import ConstrucciónInstitucionalHeader from '@/assets/images/headers/construcción-institucional.jpg'
import VíasPúblicasInfraestructuraHeader from '@/assets/images/headers/vías-públicas-e-infraestructura.jpg'

/* GALERÍA TÉCNICA */
// Planos
import Planos1Image from '@/assets/images/galeria-tecnica/planos-1.jpg'
import Planos2Image from '@/assets/images/galeria-tecnica/planos-2.jpg'
import Planos3Image from '@/assets/images/galeria-tecnica/planos-3.jpg'
// Reccorridos Virtuales
import RecorridosVirtuales1Image from '@/assets/images/galeria-tecnica/recorridos-virtuales-1.jpg'
import RecorridosVirtuales2Image from '@/assets/images/galeria-tecnica/recorridos-virtuales-2.jpg'
import RecorridosVirtuales3Image from '@/assets/images/galeria-tecnica/recorridos-virtuales-3.jpg'
// Renders
import Renders1Image from '@/assets/images/galeria-tecnica/renders-1.jpg'
import Renders2Image from '@/assets/images/galeria-tecnica/renders-2.jpg'
import Renders3Image from '@/assets/images/galeria-tecnica/renders-3.jpg'
import Renders4Image from '@/assets/images/galeria-tecnica/renders-4.jpg'
import Renders5Image from '@/assets/images/galeria-tecnica/renders-5.jpg'
import Renders6Image from '@/assets/images/galeria-tecnica/renders-6.jpg'
import Renders7Image from '@/assets/images/galeria-tecnica/renders-7.jpg'

export const WORKS: Work[] = [
  {
    id: 1,
    label: 'Casas / Apartamentos',
    link: 'casas-apartamentos',
    image: CasasApartamentosHeader,
    subworks: [
      {
        id: 1,
        label: 'Terminado Básico',
        sublink: 'terminado-basico',
        images: {
          casas: [
            CasaBásico1Image,
            CasaBásico2Image,
            CasaBásico3Image,
            CasaBásico4Image,
            CasaBásico5Image,
            CasaBásico6Image,
            CasaBásico7Image,
          ],
          departamentos: [DepartamentoBásico1Image, DepartamentoBásico2Image],
        },
      },
      {
        id: 2,
        label: 'Terminado Medio Residencial',
        sublink: 'terminado-medio-residencial',
        images: {
          casas: [
            CasaMedioResidencial1Image,
            CasaMedioResidencial2Image,
            CasaMedioResidencial3Image,
            CasaMedioResidencial4Image,
            CasaMedioResidencial5Image,
          ],
          departamentos: [
            DepartamentoMedioResidencial1Image,
            DepartamentoMedioResidencial2Image,
          ],
        },
      },
      {
        id: 3,
        label: 'Terminado Residencial',
        sublink: 'terminado-residencial',
        images: {
          casas: [
            CasaResidencial1Image,
            CasaResidencial2Image,
            CasaResidencial3Image,
            CasaResidencial4Image,
            CasaResidencial5Image,
            CasaResidencial6Image,
            CasaResidencial7Image,
            CasaResidencial8Image,
          ],
          departamentos: [
            DepartamentoResidencial1Image,
            DepartamentoResidencial2Image,
          ],
        },
      },
      {
        id: 4,
        label: 'Terminado de Lujo',
        sublink: 'terminado-de-lujo',
        images: {
          casas: [
            CasaLujo1Image,
            CasaLujo2Image,
            CasaLujo3Image,
            CasaLujo4Image,
            CasaLujo5Image,
            CasaLujo6Image,
            CasaLujo7Image,
          ],
          departamentos: [DepartamentoLujo1Image, DepartamentoLujo2Image],
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Obras Comerciales',
    link: 'obras-comerciales',
    image: ObrasComercialesHeader,
    subworks: [
      {
        id: 1,
        label: 'Hoteles',
        sublink: 'hoteles',
        mainText:
          'Combinamos funcionalidad y diseño estético, creando espacios acogedores y atractivos para los huéspedes. Cada detalle, desde la distribución de las habitaciones hasta la elección de los materiales, es cuidadosamente planeado para ofrecer una experiencia confortable y memorable.',
        images: [Hotel1Image, Hotel2Image],
      },
      {
        id: 2,
        label: 'Tiendas',
        sublink: 'tiendas',
        images: [Tienda1Image, Tienda2Image],
      },
      {
        id: 3,
        label: 'Oficinas',
        sublink: 'oficinas',
        listText:
          '• Diseño y Distribución del Espacio: Optimizar el uso del espacio con distribución eficiente y ergonómica. • Materiales duraderos y sostenibles: tecnología de eficiencia energética (ventanas con aislamiento térmico, iluminación LED, etc.). • Iluminación y Ventilación: maximizamos el uso de luz natural para reducir costos de energía. Instalaciones de sistemas de ventilación y climatización eficientes. Se utiliza iluminación artificial equilibrada para evitar la fatiga visual.',
        images: [Oficina1Image, Oficina2Image],
      },
      {
        id: 4,
        label: 'Restaurantes',
        sublink: 'restaurantes',
        mainText: `Diseño Sostenible en la Gastronomía: Espacios Amigables con el Medio Ambiente. 
        Construcciones  optimizadas. Una construcción diseñada específicamente para tu restaurante te permitirá aprovechar al máximo el espacio, optimizar los flujos de trabajo y brindar una experiencia excepcional a tus clientes. Con una construcción bien planificada y ejecutada, podrás aumentar tu capacidad de atención, mejorar la eficiencia operativa y generar mayores ingresos.`,
        images: [Restaurante1Image, Restaurante2Image],
      },
      // { id: 5, label: 'Mobiliarios', sublink: 'mobiliarios' },
    ],
  },
  {
    id: 3,
    label: 'Inmuebles Industriales',
    link: 'inmuebles-industriales',
    image: InmueblesIndustrialesHeader,
    subworks: [
      {
        id: 1,
        label: 'Fábricas',
        sublink: 'fabricas',
        listText:
          '• Centros de Almacenamiento y Distribución. • Instalaciones de Manufactura. • Plantas de Energía. • Instalaciones de Procesamiento Químico. • Instalaciones Mineras.',
        images: [Fábrica1Image, Fábrica2Image],
      },
      {
        id: 2,
        label: 'Almacenes',
        sublink: 'almacenes',
        images: [Almacen1Image, Almacen2Image],
      },
      {
        id: 3,
        label: 'Bodegas',
        sublink: 'bodegas',
        mainText:
          'Una bodega no solo sirve como lugar de almacenamiento, sino que es un elemento clave para la organización y gestión eficiente de inventarios',
        listText:
          'Espacios amplios y libres de obstáculos: Permite la circulación de mercancías y maquinaria de manera fluida. •	Sistemas de ventilación y climatización: Crucial para garantizar que los productos almacenados se mantengan en óptimas condiciones. •	Iluminación adecuada: Tanto natural como artificial, la luz es clave para la seguridad y la eficiencia del trabajo en el interior de la bodega. •	Diseño modular: Facilita la expansión o modificación de la estructura según las necesidades cambiantes de la empresa. •	Bodegas industriales: Especialmente diseñadas para almacenar maquinaria pesada, productos manufacturados o materias primas. •	Bodegas logísticas: Centradas en el manejo y distribución de productos, con fácil acceso para camiones y otras formas de transporte. • Bodegas refrigeradas: Utilizadas para almacenar productos que requieren temperaturas controladas, como alimentos y medicamentos. •	Mini-bodegas: Espacios más pequeños, ideales para el almacenamiento de productos en menor escala o uso personal.',
        images: [Bodega1Image, Bodega2Image, Bodega3Image, Bodega4Image],
      },
    ],
  },
  {
    id: 4,
    label: 'Construcción Institucional',
    link: 'construccion-institucional',
    image: ConstrucciónInstitucionalHeader,
    subworks: [
      {
        id: 1,
        label: 'Escuelas',
        sublink: 'escuelas',
        listText:
          '• Planeación • Contratación • Proyecto Ejecutivo • Construcción •Mobiliario y Equipamiento •	Elementos para la Conservación del Ambiente •	Cumplimiento de normas establecidas por la Secretaría de Desarrollo Urbano y Vivienda (SEDUVI) • Consideración de aspectos como seguridad estructural, ventilación, iluminación y accesibilidad.',
        images: [Escuela1Image, Escuela2Image],
      },
      {
        id: 2,
        label: 'Hospitales',
        sublink: 'hospitales',
        mainText: `Contar con sólidos estudios de pre-inversión para los diseños. 
      Planificación, diseño, licencias, permisos y arquitectura.`,
        listText:
          '• Diseño arquitectónico funcional: Centrado en la funcionalidad y el flujo de trabajo. • Tecnología avanzada: Incorporación de tecnología para atención médica efectiva. • Mantenimiento y sostenibilidad: La infraestructura debe ser sostenible y bien mantenida. • Espacios para la atención centrada en el paciente.',
        images: [
          Hospital1Image,
          Hospital2Image,
          Hospital3Image,
          Hospital4Image,
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'Vías Públicas e Infraestructura',
    link: 'vias-publicas-e-infraestructura',
    image: VíasPúblicasInfraestructuraHeader,
    subworks: [
      {
        id: 1,
        label: 'Carreteras',
        sublink: 'carreteras',
        images: [Carretera1Image, Carretera2Image, Carretera3Image],
      },
      {
        id: 2,
        label: 'Puentes',
        sublink: 'puentes',
        images: [Puente2Image, Puente3Image],
      },
    ],
  },
]

export const TECH_GALLERY = [
  {
    id: 1,
    label: 'Planos',
    images: [Planos1Image, Planos2Image, Planos3Image],
  },
  {
    id: 2,
    label: 'Renders',
    images: [
      Renders1Image,
      Renders2Image,
      Renders3Image,
      Renders4Image,
      Renders5Image,
      Renders6Image,
      Renders7Image,
    ],
  },
  {
    id: 3,
    label: 'Recorridos Virtuales',
    images: [
      RecorridosVirtuales1Image,
      RecorridosVirtuales2Image,
      RecorridosVirtuales3Image,
    ],
  },
]
