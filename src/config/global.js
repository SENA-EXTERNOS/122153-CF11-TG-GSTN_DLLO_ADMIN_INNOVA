export default {
  global: {
    componenteFormativo:
      'Modelos matemáticos y estadísticos aplicados en big data',
    descripcionCurso:
      'Equipos móviles (teléfonos, tabletas, relojes, televisores, neveras inteligentes), dispositivos sencillos, hoy son emisores de información, con Internet como medio, proponiendo canales de emisión, receptores, otros equipos o sitios de almacenaje de datos, esperando ser utilizados de la mejor manera y con la rapidez posible; esa es la vida de hoy, a eso le llaman el Internet de las cosas (IoT)',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-01.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-01.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-02.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-03.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-04.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelos matemáticos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estadística descriptiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estadística inferencial',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de toma de decisiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Big data',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Paquetes ofimáticos aplicados al modelado de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Analítica de datos',
      referencia:
        'Virtual Training Lteam. (2016). Análisis de Datos (video). YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/sv6yaVunVms',
    },
    {
      tema: 'Big data',
      referencia: 'EDteam. (2019). ¿Qué es el Big Data? (video). YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/M26iIqmqWkI',
    },
    {
      tema: 'Paquetes ofimáticos aplicados al modelado de datos ',
      referencia: 'Concepto.de. (s.f.). Base de datos.',
      tipo: 'Página web',
      link: 'https://concepto.de/base-de-datos/#ixzz7d75P9SNx',
    },
    {
      tema: 'Paquetes ofimáticos aplicados al modelado de datos',
      referencia:
        'Powerdata.es. (2017). 10 técnicas de análisis de datos para estadísticas de big data. ',
      tipo: 'Página web',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/10-tecnicas-de-analisis-de-datos-para-estadisticas-de-big-data',
    },
  ],
  glosario: [
    {
      termino: 'Analítica de datos',
      significado:
        'permite gestionar acciones de mejora de forma rápida y eficaz, e igualmente es muy útil en la toma de decisiones proactivas para anticipar eventos.',
    },
    {
      termino: 'Big data',
      significado:
        'hace referencia a la acumulación de grandes cantidades de datos, así como su análisis por medio de máquinas y equipos de cómputo, con el fin de generar o perfilar patrones de comportamiento de información.',
    },
    {
      termino: 'Cualitativo',
      significado:
        'toma atributos que describen cualidades y características específicas que describen una población objeto de estudio, sin utilizar para esto algún parámetro numérico.',
    },
    {
      termino: 'Cuantitativo',
      significado:
        'se puede expresar con valores numéricos, pueden ser de tipo discreto o continuos.',
    },
    {
      termino: 'Decisión',
      significado:
        'es la determinación para actuar ante una situación que presenta varias alternativas. La palabra proviene del latín decisio, qué significa opción tomada entre otras posibilidades.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'es un índice numérico de mide la dispersión con respecto al parámetro que agrupa la distribución de los datos, midiendo el grado de alejamiento (el dato disperso n menos la medida de tendencia central como la media) con respecto a esta, de cada dato individualmente; luego se suman todas estas diferencias, dividido por el número de datos; realmente es un promedio de las diferencias de los datos con respecto a la media. (Nota: se toma la distribución de datos como la población objeto de estudio denominado n).',
    },
    {
      termino: 'Estadística',
      significado:
        'rama de la matemática que recoge, organiza, jerarquiza, ordena, clasifica y analiza datos e información.',
    },
    {
      termino: 'Inferencia',
      significado:
        'hace deducciones a partir de muestras (que deben tener todas las características y propiedades de la población), de allí mide tendencias, infiere propiedades y hasta define conclusiones.',
    },
    {
      termino: 'Modelo matemático',
      significado:
        'es la representación simbólica en lenguaje o términos matemáticos, de cualquier evento o fenómeno físico, químico, económico, social o tecnológico',
    },
    {
      termino: 'Población',
      significado:
        'se refiere a la cantidad de individuos (personas o grupos de personas), animales (o grupo de estos), cosas o eventos que sean objeto de un estudio o investigación en particular.',
    },
  ],
  referencias: [
    {
      referencia: 'Castillo, J. A. (2018). Big Data. IFCT128PO. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Hillier, F. S. y Lieberman, G. J. (2006). Introducción a la investigación de operaciones (8va ed.). Mc Graw Hill.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
