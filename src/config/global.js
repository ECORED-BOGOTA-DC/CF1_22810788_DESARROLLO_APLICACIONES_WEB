export default {
  global: {
    componenteFormativo: 'Fundamentos de JavaScript',
    descripcionCurso:
      'En este componente se abordarán los conceptos fundamentales y básicos del lenguaje de programación JavaScript en conjunto con tecnologías como HTML5, Css3 y frameworks para el desarrollo de aplicaciones del lado del cliente y servidor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Fundamentos de JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sintaxis y variables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Declaraciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Operadores y objetos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Poo y estructuras de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Condicionales y clases',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Intervalos y retardos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Nombramiento y funcionamiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ciclos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Bloques de código',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Prototipos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Funciones y declaración de funciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tecnologías para el desarrollo Node.js',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<i>Frameworks back-end</i>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Introducción al <i>back-end</i>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Node.js',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Express',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ciclos de vida y beneficios',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Características y bibliotecas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos TCP',
            hash: 't_4_1',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
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
      tema: 'Tecnologías para el desarrollo Node.js',
      referencia:
        'Gabriel Coding. (2020). <i>COMO INSTALAR NODE JS EN WINDOWS 10</i>. ',
      tipo: 'Vídeo de Youtube',
      link: 'https://www.youtube.com/watch?v=BgtB31gXkoA',
    },
    {
      tema: 'Poo y estructuras de control',
      referencia:
        'Ortega, D. J. O., & Pérez, M. A. B. (2019). <i>Bootstrap y Laravel, herramientas para el desarrollo de aplicaciones web</i>.',
      tipo: 'PDF',
      descarga: '/downloads/anexo1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Backend',
      significado:
        'desarrollo que se realiza del lado del servidor, aplicaciones que centralizan principalmente la lógica del negocio, las bases de datos y los recursos de un sistema para que sean consumidos por una aplicación tipo cliente, o un frontend.',
    },
    {
      termino: 'Framework',
      significado:
        'librería o marco de trabajo que contiene, clases, funciones, configuraciones, paquetes y componentes, que son comunes en el desarrollo de funcionalidades.',
    },
    {
      termino: 'Frontend',
      significado:
        'desarrollo que se realiza del lado del cliente, aplicaciones web, aplicaciones de escritorio, aplicaciones móviles; estas se despliegan en la máquina del usuario. Esta es la capa o el nivel con lo que los usuarios interactúan. ',
    },
    {
      termino: 'JavaScript',
      significado:
        'lenguaje de programación tipo scripting que sirve para agregar funcionalidad a documentos web.',
    },
    {
      termino: 'Localhost',
      significado:
        'en el contexto de las redes de computadoras, localhost es una computadora que ejecuta un programa. La computadora que se tiene al frente funciona también como un servidor virtual. Este modo es comúnmente utilizado para realizar pruebas en el desarrollo web.',
    },
    {
      termino: 'TypeScript',
      significado:
        'lenguaje de programación creado por Microsoft, que da supercapas a JavaScript, se caracteriza por añadir características de lenguaje orientado a objetos. ',
    },
  ],
  referencias: [
    {
      referencia: 'Red Hat. (2021). <i>¿Qué es y para qué sirve un IDE? </i>. ',
      link: 'https://www.redhat.com/es/topics/middleware/what-is-ide',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2020). <i>Framework para aplicaciones web - Wikipedia, la enciclopedia libre</i>. ',
      link:
        'https://es.wikipedia.org/w/index.php?title=Framework_para_aplicaciones_web&oldid=128980356',
    },
    {
      referencia:
        'Fundéu RAE. (2012). <i>Edición y maquetación de documentos web</i>. ',
      link:
        'https://www.fundeu.es/escribireninternet/edicion-y-maquetacion-de-documentos-web',
    },
    {
      referencia: 'NodeJS.org. (2021). <i>Acerca de Node.js. Node.js</i>. ',
      link: 'https://nodejs.org/es/about/',
    },
    {
      referencia: 'npm. (2021). <i>About npm</i>. ',
      link: 'https://www.npmjs.com/about',
    },
    {
      referencia:
        'Mozilla. (2021b, junio 9). <i>Introducción a Express/Node - Aprende sobre desarrollo web | MDN. MDN Web Docs</i>. ',
      link:
        'https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction',
    },
    {
      referencia: 'Gomez, D. (2017). Nodemon. <i>vortexbird</i>. ',
      link:
        'https://vortexbird.com/nodemon/#:%7E:text=Nodemon%20es%20una%20utilidad%20que,desarrollo%20de%20aplicaciones%20en%20nodojs',
    },
    {
      referencia:
        'Choque, J. C. (2016). <i>Adición de estándares de codificación nodejs</i>. ',
      link:
        'https://gitlab.agetic.gob.bo/dbarra/bolivia-libre/commit/1ff84b6ae70f0e9436f6e6ddc7f3e060bc9556ad',
    },
    {
      referencia:
        'Whyte, A. (2021). Google JavaScript Style Guide. <i>Google JavaScript Style Guide</i>. ',
      link: 'https://google.github.io/styleguide/javascriptguide.xml',
    },
    {
      referencia:
        'Express. (2021). <i>Direccionamiento básico de Express</i>. ',
      link: 'https://expressjs.com/es/starter/basic-routing.html',
    },
    {
      referencia:
        'Mozilla. (2021b). <i>await - JavaScript | MDN. MDN Web Docs</i>. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await',
    },
    {
      referencia:
        'López, A. (2021). <i>Qué es Postman y primeros pasos. OpenWebinars.net</i>. ',
      link: 'https://openwebinars.net/blog/que-es-postman/',
    },
    {
      referencia: 'Chrome web store. (2021). <i>Postman</i>. ',
      link:
        'https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=es-419',
    },
    {
      referencia:
        'Lázaro, G. (2015). <i>Efecto Ripple de Material Design [HTML+CSS+JS]</i>. ',
      link: '',
    },
    {
      referencia: 'Material Design. (2021). <i>The color system</i>. ',
      link:
        'https://material.io/design/color/the-color-system.html#color-usage-and-palettes',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Adolfo Rodríguez Quinayas',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
