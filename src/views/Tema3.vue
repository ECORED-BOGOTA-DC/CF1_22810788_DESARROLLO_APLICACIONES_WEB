<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tecnologías para el desarrollo Node.js
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p NodeJs es una tecnología de desarrollo de software, con la que se puede construir cualquier tipo de necesidad de ámbito general, está basada en JavaScript y es totalmente particular dado que es una solución que está sacada totalmente del ámbito del navegador. Los creadores exaltaron las cualidades del lenguaje y lo abstrajeron a otro contexto haciendo uso del motor v8.
        .cajon.color-secundario.p-4.mb-0
          p.mb-0 Con NodeJs se pueden construir diversas aplicaciones, actualmente hay varios CRM desarrollados en esta tecnología, aunque se ha vuelto muy popular en el desarrollo de APIs tipo Rest. Es una tecnología multiplataforma que puede correr en cualquier sistema operativo, ya sea Microsoft, Linux o Mac, para el desarrollo de una aplicación es sumamente sencillo solo es cuestión de instalar el npm y tener un IDE o un editor de código de preferencia y comenzar a codificar.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 380px" ,alt='').m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-botones
      h2 3.1. Frameworks back-end
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p En el ámbito del desarrollo de software y especialmente en el desarrollo #[i backend] hay diversos lenguajes de programación y a su vez por cada uno de ellos hay diferentes #[i frameworks] de desarrollo. Un #[i framework backend] es el que se ejecuta del lado del servidor y determina una serie de paquetes, librerías y funcionalidades estándar para el desarrollo en este caso generalmente #[i web].
        p.mb-0 Los #[i frameworks] sirven para agilizar el proceso de desarrollo, teniendo en cuenta que ya se cuenta con varios elementos preconstruidos y se pueden extender y reutilizar, permitiendo organizar de mejor manera el estilo de desarrollo y enfocando la mayoría de los esfuerzos en la lógica de negocio y no en configuración o tareas técnicas.
    p.mb-5 Los más usados son:
    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h4 PHP
          p.mb-0 Laravel o symphony, simples, potentes y presentan una interfaz sofisticada y elegante.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario1.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4 Ruby
          p.mb-0 Ruby on rails.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario2.p-5
          .tarjeta-numerada__numero
            .h2 3
          h4 Python
          p.mb-0 Django, flask, dependiendo el enfoque será necesario usar uno o el otro.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario3.p-5
          .tarjeta-numerada__numero
            .h2 4
          h4 JavaScript
          p.mb-0 NodeJs implementando Express o Next.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario4.p-5
          .tarjeta-numerada__numero
            .h2 5
          h4 Java
          p.mb-0 Spring MVC, Spring Boot, Spark, entre otros.
    p.mb-0(data-aos="fade-right") Para definir qué lenguaje y framework usar, es ideal qué tipo de proyecto y con base a qué arquitectura se delineará, dado que no es igual una aplicación monolítica a una orientada a microservicios, aunque tampoco será igual, implementar un componente en Java donde se necesitaran más recursos de ejecución que en NodeJs que presenta un estilo más liviano para los servidores.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-botones
      h2 3.2. Introducción al back-end
    .row.align-items-center.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Es muy común dar bastante importancia a los aspectos de las aplicaciones #[i web] que son visibles, como lo son las imágenes o el diseño, pero también existen otros elementos muy importantes para que una aplicación funcione de forma correcta y que no son visibles a simple vista.
        .cajon.color-acento-botones.p-4
          p.mb-0 El #[b #[i backend]] es esa parte invisible pero esencial en todo proyecto #[i web], y a la que es de extrema importancia darle toda la trascendencia del caso, porque de él depende en gran parte los procesos informáticos que realiza un sistema.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img2.png', style="width: 380px" ,alt='').m-auto
    p.mb-0(data-aos="fade-right") En el desarrollo #[i web], el #[i backend], es la parte del sistema que se encarga de todos los procesos necesarios para que la aplicación #[i web] funcione de forma correcta. Estos procesos o funciones no son visibles, algunas de estas acciones que controla el #[i backend] son la conexión con la base de datos o la comunicación con el servidor de y los procesos o algoritmos que debe realizar la aplicación. A continuación, se presenta como desarrollar un #[i backend] sencillo que permita interactuar con la base de datos sin prestar muche énfasis en el desarrollo de algoritmos informáticos. Esto debido a que en los procos de pruebas es importante comprender como funcionan internamente las aplicaciones #[i web].
    Separador
    #t_3_3
    .titulo-segundo.color-acento-botones
      h2 3.3. NodeJs
    p(data-aos="fade-right") Es un entorno de ejecución multiplataforma de código abierto, fundamentalmente diseñado para el desarrollo del lado del servidor con el lenguaje JavaScript, sus características es que es asíncrono, una arquitectura orientada a eventos y basado en el motor V8 de Google. Se debe recordar que las soluciones desarrolladas en este entorno no se ejecutan en el navegador si no en el servidor #[i web].
    p.mb-5(data-aos="fade-left") La particularidad de NodeJs es que incorpora una serie de módulos básicos para dar solución a problemas comunes para los desarrolladores, tales como componentes para conexión a bases de datos, componentes para crear servicios #[i web], para manipulación de archivos, creación de imágenes dinámicas entre otros.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Una ventaja de conocer este #[i framework] es que habrá homogeneidad en el desarrollo, teniendo en cuenta que tanto el front-end como el back-end manejarán el mismo lenguaje de programación, y estructuras similares, a pesar de que las tecnologías sean diferentes y estén totalmente separadas.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Figura 23]. Desarrollo del lado servidor con NodeJs
    .row
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.justify-content-center
            .col-auto
              pre
                code.language-javascript
                  | var net = require('net');
                  |
                  | net.createServer(function (stream) {
                  |   stream.write('hello\r\n');
                  |
                  |   stream.on('end', function() {
                  |     stream.end('goodbye\r\n');
                  |   });
                  |
                  |   stream.pipe(stream);
                  | }).listen(7000);
    Separador
    #t_3_4
    .titulo-segundo.color-acento-botones
      h2 3.4 Express
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width: 380px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Es el #[b #[i framework]] más popular de NodeJs para la creación de componentes y funcionalidades del lado del servidor, este marco de trabajo presenta diferentes módulos y componentes, que facilitan el desarrollo.
        p Se pueden encontrar módulos para:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 #[b Gestión de rutas.]
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 #[b Renderización de templetes.]
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 #[b Manejo de sesiones.]
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 #[b Seguridad, entre otros.]
    p.mb-0(data-aos="fade-right") Se caracteriza por simple pero altamente potente, con capacidad de crear aplicaciones robustas y con un alto performance, especialmente tratándose de funcionalidades asíncronas y de tiempo real.
    Separador
    #t_3_5
    .titulo-segundo.color-acento-botones
      h2 3.5. Ciclos de vida y beneficios
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p NodeJs se basa en el tiempo de ejecución del motor v8 de Chrome, el cual está diseñado en C++, periódicamente surgen actualizaciones, parches de seguridad, rendimiento y compatibilidad con la tecnología base de JavaScript, esto se realiza regularmente para todos los sistemas operativos. El uso de JavaScript en el #[i frontend] y #[i backend] promueve el uso de Json como transferencia de datos, haciendo que sea una comunicación bilateral más rápida.
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 La arquitectura de un subproceso permite controlar múltiples conexiones de manera simultánea de manera eficiente discrepando de otras tecnologías que en su caso crearían un nuevo hilo de ejecución, utilizando más memoria RAM en el proceso. Node al operar sobre un solo hilo, hace uso de bucles de eventos y devoluciones para operaciones del tipo E/S, delegando tareas tipo bloqueantes para que se resuelvan lo antes posible tales como las conexiones a las bases de datos.
        p.mb-0 Cuenta con el módulo de #[b Cluster], el cual permite el equilibrio de carga en varios núcleos de la CPU, adoptando mejor escalabilidad.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width: 380px" ,alt='').m-auto
    .row
      .col-12.bg-c17
        .p-4
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img3.svg', style="width: 350px" ,alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p Entre las ventajas podemos encontrar:
              ol.lista-ol--cuadro.lista-ol--separador
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | Es confiable crear aplicaciones en tiempo real con mucho tráfico.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  | Utilizar un solo lenguaje tanto en el servidor como en el cliente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3
                  | Aumenta la eficiencia en el proceso de desarrollo y se minimiza la discrepancia entre el desarrollador front y back.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 4
                  | El NPM está en constante crecimiento agregando módulos y funcionalidades a usar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 5
                  | Se ejecuta más rápido que cualquier implementación en otros entornos.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 6
                  | Es ideal para el desarrollo de microservicios.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema3',
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
