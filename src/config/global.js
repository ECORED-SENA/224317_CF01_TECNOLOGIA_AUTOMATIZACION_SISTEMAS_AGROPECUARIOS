export default {
  global: {
    Name: 'Sistematización y analítica de datos agropecuarios',
    Description:
      'Las fuentes, tipos de datos, bases de datos, <i>big data</i>, requisitos, seguridad, estadística, modelos, preparación de datos, representación gráfica, <i>machine learning</i>, verificación, documentación, mejora continua, sostenibilidad digital y contingencias sustentan la sistematización de datos agropecuarios.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fuentes de información y tipos de datos agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fuentes de información agropecuaria: concepto y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características, rangos y formatos de los datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Datos estructurados, semiestructurados y no estructurados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bases de datos y <i>big data</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Conceptos, clasificación y características de las bases de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelos de datos y técnicas de consulta',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sistemas de bases de datos en el sector agropecuario',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<i>Big data</i>: concepto, características y utilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Aplicación del <i>big data</i> en procesos agropecuarios y agroindustriales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Ingeniería de requisitos, calidad y seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Ingeniería de requisitos: técnicas de modelado y representación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios de calidad de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Seguridad de la información y normativa de protección de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Comunicación técnica: confidencialidad y trazabilidad de registros',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estadística y modelos matemáticos aplicados al agro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estadística descriptiva e inferencial, población y muestra',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Variables, niveles de medición y medidas descriptivas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores agropecuarios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Modelos matemáticos: concepto, tipos y características',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Modelos aplicados a cultivos y sistemas pecuarios',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Preparación de datos: consultas, limpieza, normalización y codificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Consultas, manipulación y calidad del dato',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de limpieza y transformación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Datos cualitativos y cuantitativos, codificación y libro de códigos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Normalización, estandarización y control de calidad',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Herramientas de analítica, <i>big data</i> y representación gráfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Herramientas de analítica aplicadas al agro',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Arquitectura de <i>big data</i> y Hadoop',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Data warehouse, data lake y almacenamiento en la nube',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Representación gráfica de datos: Power BI, Tableau y Python',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '<i>Machine learning</i> básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Conceptos fundamentales y diferencias con la IA y la estadística',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Tipos de aprendizaje, problemas y algoritmos introductorios',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Conjuntos de datos, métricas y evaluación del modelo',
            hash: 't_7_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: '<i>Big data</i>',
      significado:
        'Conjuntos de datos de gran volumen, velocidad y variedad que requieren tecnologías y métodos específicos para su análisis.',
    },
    {
      termino: 'Brecha digital',
      significado:
        'Desigualdad en el acceso, uso y aprovechamiento de las tecnologías digitales.',
    },
    {
      termino: 'Ciencia de datos',
      significado:
        'Campo interdisciplinario que obtiene conocimiento a partir de datos mediante métodos cuantitativos, herramientas informáticas y conocimientos especializados del área de estudio.',
    },
    {
      termino: 'Copia de respaldo',
      significado:
        'Réplica de los datos almacenada en una ubicación diferente para permitir su recuperación en caso de pérdida.',
    },
    {
      termino: 'Dato estructurado',
      significado:
        'Dato organizado según un esquema fijo de filas y columnas con tipos de datos definidos.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Documento que describe el significado, tipo, unidad y reglas de cada campo de una base de datos.',
    },
    {
      termino: 'Forma normal',
      significado:
        'Regla de organización de tablas que permite reducir la redundancia en bases de datos relacionales.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida que resume el desempeño de un proceso y permite evaluar su evolución a lo largo del tiempo.',
    },
    {
      termino: 'Libro de códigos',
      significado:
        'Documento que describe las variables, sus códigos válidos y sus respectivos significados.',
    },
    {
      termino: '<i>Machine learning</i>',
      significado:
        'Rama de la inteligencia artificial en la que los modelos aprenden patrones a partir de datos.',
    },
    {
      termino: 'Metadato',
      significado:
        'Dato que describe las características de otro dato, como su fuente, fecha, unidad o autor.',
    },
    {
      termino: 'Nivel de medición',
      significado:
        'Clasificación de una variable según su escala de medición: nominal, ordinal, de intervalo o de razón.',
    },
    {
      termino: 'PHVA',
      significado:
        'Ciclo de mejora continua compuesto por cuatro etapas: planear, hacer, verificar y actuar.',
    },
    {
      termino: 'Sesgo',
      significado:
        'Distorsión sistemática que afecta la capacidad de los datos o resultados para representar adecuadamente la realidad.',
    },
    {
      termino: 'Sobreajuste',
      significado:
        'Situación en la que un modelo se adapta excesivamente a los datos de entrenamiento y presenta dificultades para generar resultados precisos con datos nuevos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chapman, P., Clinton, J., Kerber, R., Khabaza, T., Reinartz, T., Shearer, C., & Wirth, R. (2000). CRISP-DM 1.0: Step-by-step data mining guide. SPSS.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley Estatutaria 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia: 'Deming, W. E. (1986). Out of the crisis. MIT Press.',
      link: '',
    },
    {
      referencia:
        'James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An introduction to statistical learning: With applications in R (2.ª ed.). Springer.',
      link: 'https://doi.org/10.1007/978-1-0716-1418-1',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). Boletín agroclimático nacional (edición 115, agosto de 2024). IDEAM.',
      link: 'https://ideam.gov.co/sites/default/files/prensa/boletines/2024-09-11/boletin_agroclimatico_nacional_agosto_2024.pdf',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., & Sudarshan, S. (2020). Database system concepts (7.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Swanson, M., Bowen, P., Phillips, A. W., Gallup, D., & Lynes, D. (2010). Contingency planning guide for federal information systems (NIST Special Publication 800-34 Rev. 1). National Institute of Standards and Technology.',
      link: 'https://doi.org/10.6028/NIST.SP.800-34r1',
    },
    {
      referencia:
        'Trendov, N. M., Varas, S., & Zeng, M. (2019). Digital technologies in agriculture and rural areas: Status report. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'https://www.fao.org/3/ca4887en/ca4887en.pdf',
    },
    {
      referencia:
        'Wolfert, S., Ge, L., Verdouw, C., & Bogaardt, M.-J. (2017). Big data in smart farming – A review. Agricultural Systems, 153, 69–80.',
      link: '',
    },
    {
      referencia:
        'Wood, P. D. P. (1967). Algebraic model of the lactation curve in cattle. Nature, 216, 164–165.',
      link: 'https://doi.org/10.1038/216164a0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
