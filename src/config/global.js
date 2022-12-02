export default {
  global: {
    componenteFormativo:
      'Alistamiento de instalaciones, equipos y materias primas',
    descripcionCurso:
      'En este proceso de formación se explicará el alistamiento de las instalaciones, equipos y materias primas para la producción de coberturas a base del chocolate, todo esto según los requerimientos técnicos y normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
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
        titulo: 'Chocolate',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aspectos nutricionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conservación ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Características organolépticas de productos de cacao y sucedáneos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ingredientes e insumos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Equipos para la elaboración de cobertura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Equipos de conchado, templado, moldeado y envasado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Cuidado básico en las fases finales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manuales de operación',
            hash: 't_4_2',
          },
        ],
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
      tema: '1. Chocolate',
      referencia:
        'Montalvo Rodríguez, C., Ordoñez Narváez, G. A., García González, E., Marín Aricapa, J. B., Jamilo y Zambrano, L. J., Chamorro Rengifo, J., Acevedo, Y., Mora, R., Soleno, R. & Ortiz, E. (2018). Recomendaciones prácticas para la mejora en la producción artesanal de cacao. SENA.',
      tipo: 'Cartilla',
      link: 'https://repositorio.sena.edu.co/handle/11404/5235',
    },
    {
      tema: '1. Chocolate',
      referencia:
        'Compañía Nacional de Chocolates S.A.S. (2019). Cosecha, Beneficio y Calidad del Grano de Cacao (Theobroma cacao L).',
      tipo: 'Artículo',
      link:
        'https://chocolates.com.co/wp-content/uploads/2020/06/Cartilla-Cosecha-Benef-Calidad-SEP-2019.pdf',
    },
    {
      tema: '4. Equipos de conchado, templado, moldeado y envasado',
      referencia:
        'NTC 1252:2021. Cacao en grano. Especificaciones y requisitos de calidad.',
      tipo: 'Artículo',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=esES&Q=04D103EFA7FE09150F248A099F1E77F9312408EA304CDFA9&Req=',
    },
  ],
  glosario: [
    {
      termino: 'Atemperado',
      significado:
        'Se estabilizan los cristales de manteca de cacao mediante el sometimiento del chocolate a unas temperaturas definidas.',
    },
    {
      termino: 'Cacao',
      significado:
        'Árbol de América, de la familia de las esterculiáceas, de tronco liso de cinco a ocho metros de altura, hojas alternas, lustrosas, lisas, duras y aovadas, flores pequeñas, amarillas y encarnadas, cuyo fruto se emplea como principal ingrediente del chocolate.',
    },
    {
      termino: 'Condiciones',
      significado:
        'Situación o circunstancia indispensable para la existencia de otra.',
    },
    {
      termino: 'Conchado',
      significado:
        'Proceso donde se eliminan los sabores ácidos, se mejora su textura (suavidad y cremosidad). Dependiendo de la formulación y tipos de chocolate este proceso lleva de 3 horas a 3 días, con una temperatura determinada y controlada.',
    },
    {
      termino: 'Chocolate',
      significado:
        'Alimento que se elabora con pasta de chocolate, azúcar y aderezos. Su presentación varía de acuerdo con el requerimiento del fabricante.',
    },
    {
      termino: 'Fases',
      significado:
        'Característica de la variación de una magnitud periódica que determina la iniciación de cada período.',
    },
    {
      termino: 'Molienda',
      significado:
        'Obtención de la pasta de cacao o licor de cacao para elaboración de productos de chocolatería o cacao en polvo.',
    },
    {
      termino: 'Moldeado',
      significado:
        'Se vierte la masa líquida en los moldes y se vibran (movimiento) para eliminar el aire que pudo quedar en los chocolates.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'Conjunto de las fases sucesivas de un fenómeno natural o de una operación artificial.',
    },
    {
      termino: 'Tostado',
      significado:
        'Tueste Bajo: 110-116ºC (230-241ºF) por 15 a 20 minutos (mejorar las notas afrutadas y florales) o 130-135ºC (266-275ºF) durante 20-22 minutos (más cuerpo y notas a caramelo). Tueste Medio: 110ºC (230ºF) por 10 a 20 minutos.',
    },
    {
      termino: 'Variable',
      significado:
        'Magnitud que puede tener un valor cualquiera de los comprendidos en un conjunto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). Manual para la Evaluación de la Calidad del Grano de Cacao. Lima, Cortes: FHIA, 22p.',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Cajo Piche, M. (2021.) Control de Calidad de Chocolate. Editorial Barreto SAC, Lima.',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social. Resolución 1511 de 2011. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que debe cumplir el chocolate y productos de chocolate para consumo humano, que se procese, envase, almacene, transporte, comercialice, expenda, importe o exporte en el territorio nacional.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-1511-de-2011.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social. Resolución 2674 de 2013. Por la cual se reglamente el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202674%20de%202013.pdf',
    },
    {
      referencia:
        'NTC 486: 2008. Masa o pasta o licor de cacao y torta de cacao para la fabricación de productos de cacao y chocolate.',
      link:
        'https://tienda.icontec.org/gp-masa-o-pasta-o-licor-de-cacao-y-torta-de-cacao-para-la-fabricacion-de-productos-de-cacao-y-chocolate-ntc486-2008.html',
    },
    {
      referencia:
        'NTC 1252:2021. Cacao e grano. Especificaciones y requisitos de calidad.',
      link:
        'https://tienda.icontec.org/gp-cacao-en-grano-especificaciones-y-requisitos-de-calidad-ntc1252-2021.html',
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
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Abel Gordillo Peña',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },

      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Yuly Rey',
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
        nombre: 'Diego Fernando Velasco Güiza',
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
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
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
