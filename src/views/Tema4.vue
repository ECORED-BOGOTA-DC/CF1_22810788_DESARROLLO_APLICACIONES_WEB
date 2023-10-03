<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Características y bibliotecas
    p(data-aos="fade-right") Como se ha mencionado a lo largo del desarrollo de este componente, el desarrollo #[i web] está compuesto de diferentes tecnologías y componentes, aunque principalmente se debe destacar la tecnología que permite interactuar (#[i frontend]) y lo que permite que todo este centralizado (#[i backend]).
    p(data-aos="fade-left") Cuando se habla de aplicación del lado cliente no solo se habla de la interfaz gráfica de los sitios o aplicaciones #[i web], si no por el contrario, también de las aplicaciones de escritorio, aplicaciones móviles, aplicaciones de Smart tvs, entre otros elementos. Es por medio de estas aplicaciones que es posible interactuar, enviar comandos, indicar acciones, visualizar información, registrar información entre otros, es decir, es la capa más externa, orientada hacia el usuario y es aquí donde se puede evidenciar la experiencia de usuario.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p El desarrollo de aplicaciones del lado del cliente específicamente soluciones nativas se pueden encontrar diversas tecnologías, para Android se tiene Android Studio, el cual es una serie de SDK’ donde el lenguaje principal es Java o Kotlin; mientras que para iOS se tiene xcode que al igual que Android estudio tiene sus librerías, teniendo como lenguaje de desarrollo Swift y previamente Objective C; cuando se vira al desarrollo de aplicaciones de escritorio, cada casa puede tener sus propias herramientas de desarrollo, tal como se ve en el mundo #[i mobile], en el caso de Microsoft se cuenta con Visual Studio, y como lenguajes de programación C#, C++, entre otros; Mac como se mencionó previamente hace uso de xcode y Swift; haciendo un paréntesis en este punto, es de recordar que las aplicaciones desarrolladas para Windows no son compatibles con las aplicaciones de OSX, al igual que las desarrolladas para Android no son compatibles con iOS.
        .cajon.color-primario.p-4
          p.mb-0 También se puede encontrar desarrollos multiplataforma, como es el caso de Java, el cual es un lenguaje interpretado y para cada sistema operativo, tiene su traductor, que en este caso es la JVM. Para el caso #[i mobile], también existen diferentes #[i frameworks], aunque estos por lo general se basan en visores #[i web], es decir, el desarrollo es totalmente #[i web], pero con funcionalidades nativas, tales como el caso de Xamarin, Apache cordoba, ionic2, React Native, entre otros.
    .row.bg-c18.mb-4(data-aos="fade-down")
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0 Específicamente en el desarrollo web, el desarrollo #[i frontend] solo tiene una serie de tecnologías, las cuales son html, css y javascript, estas son las que son interpretadas y renderizadas por los motores de los navegadores. El html cumple la función estructural, por medio de su lista de etiquetas, permite establecer un documento electrónico; el css cumple la función relacionada al aspecto, permite ordenar, dar forma, dar color, tamaño, entre otras características, es por decirlo así la obra blanca de un sitio web; mientras que JavaScript otorga la capa funcional y lógica, todo lo relacionado al control del documento, la algoritmia y funcionalidad es gracias al lenguaje de programación. Se debe recordar que cada uno de esos documentos de forma independiente en el ámbito #[i front] no aporta valor al desarrollo #[i front], es decir, solo el html no establece un sitio web, solo el css no establece un sitio web y solo el JavaScript no establece un sitio web, por lo menos deben existir dos de los componentes para poder crear algo y una de las tecnologías fundamentales en este caso es el html, entonces se puede decir que para crear algo, debe obligatoriamente existir la estructura html, pero podría faltar el css o el js.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img1.svg', style="width: 380px" ,alt='').m-auto
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img8.png', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Desde el inicio de la tendencia de desarrollo de aplicaciones single page, aproximadamente en el 2010, con el surgimiento de Android y a su vez de #[i frameworks] como apache cordoba, jquery mobile entre otros, comenzó la carrera por desarrollar un framework que permitiera sentir la misma experiencia de desarrollar de
        p forma nativa, para la web, en este caso para el front, teniendo en cuenta que al mismo tiempo iniciaba la tendencia de desarrollar aplicaciones cliente-servidor, la cual consiste en separar todo el nivel de acceso, con el nivel de negocio, y separando las tecnologías.
        .cajon.color-primario.p-4
          p.mb-0 Surgen #[i frameworks] como Backbone.js, Sencha.js, Angular.Js, Bootstrap css, y a su vez más y más componentes jQuery para optimizar el proceso de desarrollo. Cada uno de estos componentes era sencillo y fácil de implementar, pero a su vez no ofrecía al usuario una forma estándar de implementar las aplicaciones, otro aspecto es que era tedioso el tener que agregar en cada vista los componentes externos para incluir las funcionalidades. Esto fue evolucionando y a la medida que empresas como Facebook, Twitter, Google, Microsoft con sus redes sociales entre otros productos, comenzaron a requerir funcionalidades más complejas iniciaron a promover otros #[i frameworks] y formas de trabajo para la web. En el cual surgieron Angular2, React Js, Vue Js, entre otros, siendo estos los más populares en la actualidad.
    p.mb-0(data-aos="fade-right") Estos nuevos #[i frameworks] se caracterizan por presentar una arquitectura MVC o MVVM, con un cantidad considerable de módulos y funcionalidades predeterminadas, módulos de conexión, seguridad, reactividad, entre otros; también es de notar que estos #[i frameworks] son compilados, dado que por ejemplo en el caso de Angular, está diseñado con TypeScript y para poder ser ejecutando en el navegador debe pasar toda su funcionalidad a JavaScript, permitiendo también de esta forma validar desde la compilación errores de codificación o lógica.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-botones
      h2 4.1. Conceptos TCP
    p(data-aos="fade-right") Protocolo de control de transmisión por sus siglas en inglés, es un protocolo de red que permite que entre servidores haya un intercambio de información, permite que los datos lleguen en el mismo orden en el que fueron enviados para que no haya distorsión de la misma.
    p.mb-5(data-aos="fade-left") El rol de este protocolo es controlar que los paquetes de datos lleguen de forma ordenada, confiable y sin errores, también tiene el control de concurrencia, por lo que validara que las peticiones iniciales sean pequeñas y a la medida de la necesidad vayan aumentando poco a poco, tomando como base el ancho de banda de los servidores y las redes que puede soportar.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Frameworks front-end
    .row.bg-c1.mb-5(data-aos="fade-left")
      .col-12
        .px-5.pt-5
          p Se comienza por explorar la siguiente información:
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Z-YzV72qq4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p(data-aos="fade-right") Los #[i frameworks] son una lista de librerías, archivos, funcionalidades, complementos, entre otros elementos que permiten el diseño y desarrollo de sitios #[i web] rápidamente. Los #[i frameworks] implementan funcionalidades que son genéricas en el mundo del desarrollo de #[i software], en el #[i frontend], existen para la architectura funcional como los de JavaScript y para temas visuales tales como el de CSS.
    p.mb-5(data-aos="fade-right") Esta es una lista de #[i frameworks] del lado cliente:
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-b.color-acento-contenido(data-aos="fade-down")
          .tabla-b__header
            h4.mb-0 Framework de la capa web
          table
            tr.bg-c19
              th Tipo de Frametwork
              th.text-center Nombre
              th.text-center Autor
            tr
              th(rowspan="4") Framework de CSS
              td.text-center Bootstrap
              td.text-center Twitter
            tr
              td.text-center Material Design
              td.text-center Google
            tr
              td.text-center awsm.css
              td.text-center Amazon
            tr
              td.text-center tailwindcss
              td.text-center Tailwindcss
            tr
              th(rowspan="4") Frametwork de JS
              td.text-center Angular
              td.text-center Google
            tr
              td.text-center React.js
              td.text-center Facebook
            tr
              td.text-center Vue.js
              td.text-center Evan You
            tr
              td.text-center JQuery
              td.text-center JQuery
    p.mb-5(data-aos="fade-right") Es relevante que antes de iniciar el proceso de desarrollo de un sistema de información, analizar qué herramientas, componentes y frameworks serán usados para su implementación, esto es importante dado que ayuda a refinar los requisitos funcionales de tal manera que se aprovechen al máximo las capacidades de las herramientas a usar.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Prototipo (Mockus, Sketch, Wireframe)
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img2.png', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Un prototipo es la elaboración de un producto con los componentes básicos, muchas veces solo es la representación visual de los elementos que se desarrollaran en el producto. Esta representación puede ser con técnicas de bajo nivel tales como el sketch, que son ilustraciones a mano alzada, más especializadas tipo mockups con herramientas de software que permiten construir vistas de forma genérica, tipo wireframe, donde toma mucha más relevancia el aspecto desde la perspectiva del diseño o funcionales con maquetas en html.
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 #[b Teniendo en cuenta lo anterior, crear un proyecto tipo mockup en la siguiente herramienta: https://balsamiq.cloud/]
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://balsamiq.cloud/" target="_blank")
                    span(style="color: #12263F !important") Ver enlace
                    i.fas.fa-link(style="color: #12263F !important")
    TabsA.color-acento-contenido.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-contenido.p-4(titulo="Proceso de Registro")
        .row
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema4/img3.png', style="width: 850px" ,alt='').m-auto
      .tarjeta.color-acento-contenido.p-4(titulo="Creación del espacio de trabajo")
        .row
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema4/img4.png', style="width: 850px" ,alt='').m-auto
      .tarjeta.color-acento-contenido.p-4(titulo="Creación del primer proyecto")
        .row
          .col-12.p-4
            p Panel de creación de proyecto en Balsamiq Cloud
            figure
              img(src='@/assets/curso/tema4/img5.png', style="width: 850px" ,alt='').m-auto
      .tarjeta.color-acento-contenido.p-4(titulo="Creación de la estructura")
        .row
          .col-12.p-4
            p #[b Creación de la estructura de las vistas]
            p Vistas para GUI web
            figure.mb-3
              img(src='@/assets/curso/tema4/img6.png', style="width: 850px" ,alt='').m-auto
            p.mb-0 #[b #[i Balsamiq]], solo es una herramienta de las muchas que se pueden encontrar en internet.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Introducción al front-end
    p(data-aos="fade-right") El #[i front-end] hace parte del desarrollo web, en el cual se construye todos los componentes que están de cara al usuario, es decir todo lo visual y relacionado a la interacción de usuario, en otras palabras, lo que también se conoce como el diseño web. Esto tiene en cuenta el contenido, la diagramación, colores, tipografía, elementos gráficos de control, tamaños de letra, color de letra, flujos, navegación, experiencia, usabilidad, entre otros.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Para la construcción de un sitio web, se requieren de diferentes elementos y tecnologías, y hablando solamente del #[i front-end], es requerido identificar que no se puede tener un componente sin vincular las tecnologías de html, css y javascript, las cuales en conjunto determinan el front.
        p.mb-0 El html determina la estructura, las bases del diseño web; el css otorga forma, contextura, agrega valores a las propiedades de los elementos, es decir, es la tecnología que permite dar un look and feel al sitio web; mientras que JavaScript, es la tecnología que permite dar funcionalidad al sitio; si no existiera alguno de los 3 en la construcción de un sitio web, sería casi imposible su óptimo desarrollo.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img7.png', style="width: 380px" ,alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Html5, css3
    .row.mb-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario5
            .p-4
              p.mt-4 Es la última versión del estándar de HTML, que se caracteriza por definir las etiquetas de los documentos de la web, es usada para establecer la estructura fundamental de un documento web. Este documento compuesto de etiquetas se valida en el navegador y se renderiza para luego pintar de forma visual los elementos definidos en el código fuente.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario6
            .p-4
              p.mt-4 En la última versión del estándar de CSS, la cual se caracteriza por permitir dar aspecto y forma a la estructura definida en el html, tales como tamaño, márgenes, bordes, color, fondos, entre otros, en esta versión se añaden de forma nativa animaciones y transiciones que mejoran la experiencia visual del usuario. Es una tecnología tipo script, la cual por sí sola no puede afectar a nada, debe estar acompañada o debe ir de la mano de un documento html.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 TypeScript
    p.mb-5(data-aos="fade-right") #[i TypeScript] es un super conjunto de JavaScript, el cual compila en JavaScript, es decir su código fuente se escribe en Ts y luego se convierte en Js para ser interpretado. Esto se realiza automáticamente dependiente de la herramienta de pre-compilación ya sea en el frontend o el backend. Se debe recordar que el navegador web solo puede interpretar archivos JavaScript (ver figura 28).
    .row.mb-5
      .col-12.bg-c20.p-4.p-lg-0
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema4/img5.svg', style="width: 380px" ,alt='').m-auto
          .col-lg-8(data-aos="fade-left")
            p #[b Ventajas:]
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check(style="color: #451484")
                |
                p.mb-0 Facilidad al implementar aplicaciones complejas.
              li.d-flex
                i.fas.fa-check(style="color: #451484")
                |
                p.mb-0 Agrega tipos, como String, numbers, booleans.
              li.d-flex
                i.fas.fa-check(style="color: #451484")
                |
                p.mb-0 Sintaxis clara para definir clases y propiedades, permitiendo el desarrollo orientado a objetos.
              li.d-flex
                i.fas.fa-check(style="color: #451484")
                |
                p.mb-0 Uso de herencia e implementación de interfaces.
              li.d-flex
                i.fas.fa-check(style="color: #451484")
                |
                p.mb-0 Captura de errores en proceso de compilación.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 23]. Desarrollo del lado servidor con NodeJs
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.justify-content-center
            .col-auto
              pre
                code.language-javascript
                  | export class CreateComponent implements OnInit {
                  |   title: string;
                  |   name: string;
                  |   lastName: string;
                  |   email: string;
                  |   password: string;
                  |
                  |   user: Userx = null;
                  |
                  |   constructor(private userService: UserxService) {}
                  |
                  |   ngOnInit(): void{}
                  |
                  |   create(): void {
                  |     this.user = {
                  |       uuid: "tttt",
                  |       title: this.title,
                  |       email: this.email,
                  |       lastName: this.lastName,
                  |       password: this.password
                  |     };
                  |     this.userService.createUser(this.user).subscribe(
                  |       (data) => {
                  |         this.user = data;
                  |         alert("Creando usuario");
                  |       },
                  |       (err) => {
                  |         console.log(err);
                  |       }
                  |     );
                  |   }
                  | }
    p.mb-5(data-aos="fade-right") Este lenguaje es diseñado por Microsoft y es de distribución libre.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Angular2
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema4/img7.svg', style="width: 70px" ,alt='').m-auto
      .col
        p.mb-0 Es un #[i framework] para el desarrollo de aplicaciones web del lado del cliente, que está desarrollado en #[i TypeScript], es de código abierto y el propietario es Google. Es uno de los #[i frameworks] más conocidos y populares en la actualidad, al estar desarrollado en #[i TypeScript], permite hacer uso y aplicación de conceptos de programación orientada a objetos.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 VueJs
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema4/img8.svg', style="width: 70px" ,alt='').m-auto
      .col
        p.mb-0 Es un #[i framework] para el desarrollo de aplicaciones web del lado del cliente, directamente desarrollado en JavaScript, cuenta con una arquitectura declarativa y por composición de componentes. El #[i framework] está centrado en la construcción de la interacción de la vista, enrutamiento, construcción, gestión de estados, entre otras.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 ReactJs
    .row.align-items-center(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema4/img9.svg', style="width: 70px" ,alt='').m-auto
      .col
        p.mb-0 Es un #[i framework] para el desarrollo de aplicaciones web del lado del cliente, al igual que Angular Y VueJs, este está desarrollado directamente en JavaScript y es mantenido por Facebook, es de licencia libre, busca implementar una arquitectura MVC o MVVM.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  updated() {
    this.$aosRefresh()
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
}
</script>

<style lang="sass"></style>
