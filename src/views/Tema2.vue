<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Poo y estructuras de control
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p La POO (programación orientada a objetos) es un paradigma de programación, que pretende solucionar problemas informáticos, realizando la abstracción de las funcionalidades en clases y objetos. Es importante recordar que las clases son una estructura que establece las propiedades y comportamientos, por medio de atributos y métodos, mientras que los objetos son una instancia de lo definido en la clase, dicho de otra manera, la clase es una plantilla y el objeto es una referencia concreta tomada de la plantilla.
        p.mb-0 ¿Cómo se realiza? Observar a continuación:
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px" ,alt='').m-auto
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='')
      .tarjeta.color-primario1.p-3(x="12%" y="100%" numero="1")
        p Comencemos creando una clase con un constructor y pasando como argumento el valor de una propiedad, ver figura Función constructora en JavaScript .  En este caso se crea una función constructora para la estructura la cual recibe el argumento de nombre.
      .tarjeta.color-primario2.p-3(x="37.4%" y="100%" numero="2")
        p También se puede observar como el procedimiento de saludar, el cual al ser ejecutado lanza una alerta haciendo uso de la propiedad nombre.
      .tarjeta.color-primario3.p-3(x="62.8%" y="100%" numero="3")
        p En JavaScript, no existen constructores tal como se ven en otros lenguajes tales como Java, C#, entre otros, por el contrario, por medio de una función y el scope this, se podrá construir todas las propiedades requeridas para la acción de instanciación.
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Función constructora
          .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-primario4.p-3(x="88.1%" y="100%" numero="4")
        p 
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12.p-4
          .row.mb-4
            .col-auto.bg-c12.p-2
              p.mb-0 #[b Función constructora en JavaScript]
          .row.justify-content-center
            .col-auto
              pre
                code.language-html
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       function Persona(nombre) {
                  |         this.nombre = function() {
                  |           alert('Hola yo soy ' + this.nombre + '.');
                  |         };
                  |       }
                  |       var persona1 = new Persona('Gabriela');
                  |       var persona2 = new Persona('Mateo');
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
    .row.mb-4
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Estructura secuencial
    p.mb-5 Las estructuras de control permiten establecer los flujos para la ejecución de un programa o algoritmo, en el caso de que en un problema o fragmento de código solo exista la entrada, el proceso y la salida se le determina estructura secuencial, ver figura 13.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 13]. Estructura secuencial
    .row.mb-5
      .col-12.bg-c2
        .p-4
          .row.justify-content-center
            .col-lg-auto
              pre
                code.language-javascript
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       Let numero1 = prompt ("Ingrese numero1: ", "");
                  |       Let numero2 = prompt ("Ingrese numero2: ", "");
                  |       numero1 = parseInt (numero1);
                  |       numero2 = parseInt (numero2);
                  |       Let resusltado = numero2 + numero2;
                  |       document.write("El resultado es: " + resultado);
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
              p #[b Nota]. SENA (2022)
    p.mb-5 Las soluciones que ejecutan estructuras secuenciales suelen ser los más sencillos, dado que dependiendo de lo que se requiera solucionar se necesitarán de otras estructuras que cambiarán el flujo de control, es de resaltar que no todos los problemas, algoritmos o problemas informáticos se solucionarán con estructuras secuenciales, dado que existirán problemas más complejos, los cuales requerirán tomar decisiones, repeticiones de sentencias con la finalidad de evitar duplicación de funcionalidad, uso de bloques de código para reutilizar funcionalidades, entre otros elementos.
    .row.bg-c5
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white Observa los elementos de la estructura secuencial.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    Separador
    #t_2_1
    .titulo-segundo.color-acento-botones
      h2 2.1. Condicionales y clases
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        p Dado que no todos los problemas se pueden resolver de forma secuencial, se tienen las estructuras condicionales las cuales son las encargadas de poder tomar decisiones, al igual que la vida cotidiana, en los algoritmos informáticos es necesario hacerlo.
        p.mb-0 Para tomar decisiones en procesos algorítmicos será necesario hacer uso de estructuras condicionales, que de forma resumida permiten tomar un flujo u otro en el código fuente planteado en el programa, es decir a diferencia de la estructura secuencial, en la que todo el código se ejecutaba, de tal manera que de la línea 1 hasta la línea 10 se ejecutaba de forma ordenada y consecutiva, con las condiciones no pasa esto, de acuerdo a las condiciones establecidas en las sentencias de evaluación y los valores dados a las variables de control, existirán bloques de código que no se ejecutarán. Para ello tener en cuenta lo que se comparte a continuación:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Estructura condicional simple, if]
            p Es la estructura condicional que permite ejecutar líneas de código o funcionalidades dependiendo de una decisión y si el resultado es afirmativo es decir verdadero, solo en ese caso se ejecutarán las acciones, por otro lado, en el condicional simple, o sea, cuando el resultado es negativo o falso, no ocurre nada. 
            p.mb-p El siguiente ejemplo hace alusión a una persona que se le indica un mensaje de aprobación de curso con una nota superior o igual a 4, ver figura Condicional simple. En caso de que la nota será inferior a ese valor no se generará mensaje. 
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let nombre = prompt ("Ingrese nombre: ", "");
                |       Let nota = prompt ("Ingrese nota: ", "");
                |       nota = parseInt (nota);
                |       // condicional simple
                |       if (nota > 4) {
                |         document.write(nombre + " es sobresaliente con la nota: " + nota);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional simple]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Estructura condicional simple, if]
            p La estructura condicional por la palabra reservada #[b #[i if]] seguido de paréntesis, en el cual debe ir la condición que se está evaluando, esta condición es una sentencia relacional o lógica que genera un valor booleano es decir verdadero o falso, posterior a ello están las llaves que representan el cuerpo de código o bloque de código que se ejecutara si el valor evaluado es verdadero.
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let nombre = prompt ("Ingrese nombre: ", "");
                |       Let nota = prompt ("Ingrese nota: ", "");
                |       nota = parseInt (nota);
                |       // condicional simple
                |       if (nota > 4) {
                |         document.write(nombre + " es sobresaliente con la nota: " + nota);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional simple]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p Es posible que en la vida cotidiana se nos presente una opción u otra, por decirlo así podemos ir por x o y camino, es importante entender que en este caso no será posible ejecutar las acciones de las dos ramas, si pasa el suceso de verdadero solo se ejecutará las acciones determinadas cuando pasa ese suceso o viceversa si es falso solo se ejecutarán las acciones definidas por esa opción.  
            p.mb-0 Por ejemplo, se ingresa 2 números y se quiere saber si el primero es mayor que el segundo, o lo contrario. Ver figura Condicional doble.
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let numero1 = prompt ("Ingrese número  1: ", "");
                |       Let numero2 = prompt ("Ingrese número  2: ", "");
                |       numero1 = parseInt (numero1);
                |       numero2 = parseInt (numero2);
                |       // condicional doble
                |       if (numero1 > nuemro2) {
                |         document.write("el mayor es: " + numero1);
                |       } else {
                |         document.write("el mayor es: " + numero2);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional doble]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p La estructura de un condicional compuesta al igual que la simple contiene la evaluación de verdadero #[i #[b if]], adicional a ello se encuentra el bloque de validación alterno que se denomina #[i #[b else]], este encapsula el cuerpo de código o las sentencias que se ejecutan si el bloque de verdadero no se cumple, es decir, si la condición es falsa se ejecuta el bloque estipulado en el #[b #[i else]].
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let numero1 = prompt ("Ingrese número  1: ", "");
                |       Let numero2 = prompt ("Ingrese número  2: ", "");
                |       numero1 = parseInt (numero1);
                |       numero2 = parseInt (numero2);
                |       // condicional doble
                |       if (numero1 > nuemro2) {
                |         document.write("el mayor es: " + numero1);
                |       } else {
                |         document.write("el mayor es: " + numero2);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional doble]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p Para resumir lo que se ha expuesto hasta el momento, podemos indicar que el condicional simple solamente evalúa una opción, que al ser verdadera permite ejecutar establecido en el interior del cuerpo de definición, el condicional doble, por el contrario permite ejecutar sentencias de código cuando el bloque principal no se ejecuta, en este caso cuando el valor de la condición es falsa; pero puede haber casos en los cuales, no solo se evalué de forma binaria, es decir, no solo tenga dos posibles flujos.
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let numero1 = prompt ("Ingrese número  1: ", "");
                |       Let numero2 = prompt ("Ingrese número  2: ", "");
                |       numero1 = parseInt (numero1);
                |       numero2 = parseInt (numero2);
                |       // condicional doble
                |       if (numero1 > nuemro2) {
                |         document.write("el mayor es: " + numero1);
                |       } else {
                |         document.write("el mayor es: " + numero2);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional doble]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p En el ejemplo anterior, relacionado con cuál de los dos números ingresados el programa solo podrá decir que el primero o el segundo es mayor, pero el programa como tal tiene una falla, dado que hay una posibilidad adicional, la cual consiste en que puede que el numero 1 no es mayor que el número 2, y que el numero 2 es mayor al número 1, es decir que los dos números son iguales.
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       Let numero1 = prompt ("Ingrese número  1: ", "");
                |       Let numero2 = prompt ("Ingrese número  2: ", "");
                |       numero1 = parseInt (numero1);
                |       numero2 = parseInt (numero2);
                |       // condicional doble
                |       if (numero1 > nuemro2) {
                |         document.write("el mayor es: " + numero1);
                |       } else {
                |         document.write("el mayor es: " + numero2);
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional doble]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p En este caso es posible que la estructura if nos brinde el soporte para poder realizar una siguiente evaluación condicional, tal como lo veremos en la figura Condicional con múltiples condiciones. ero o el segundo es mayor, pero el programa como tal tiene una falla, dado que hay una posibilidad adicional, la cual consiste en que puede que el numero 1 no es mayor que el número 2, y que el numero 2 es mayor al número 1, es decir que los dos números son iguales.
          .col-lg-6
            pre
              code.language-html
                | &lt;! DOCTYPE html&gt;
                | &lt;html&gt;
                |   &lt;head&gt;
                |   &lt;/head&gt;
                |   &lt;body&gt;
                |     &lt;script type="text/JavaScript"&gt;
                |       var num1, num2;
                |       num1 = prompt ("Ingrese el primer número:", " ");
                |       num2 = prompt ("Ingrese el primer número:", " ");
                |       num1 = parseInt (num1);
                |       num2 = parseInt (num2);
                |       if (num1 > num2) {
                |         document.write("el mayor es: " + num1);
                |       {
                |       else if (num2 > num1) {
                |         document.write("el mayor es: " + num2);
                |       }
                |       } else {
                |         document.write("los números son iguales");
                |       }
                |     &lt;/script&gt;
                |   &lt;/body&gt;
                | &lt;/html&gt;
            .row
              .col-auto.bg-c13.ms-3.px-4.py-2
                p.text-white.mb-0 #[b Condicional con múltiples condiciones]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p En este ejemplo podemos ver que se añade la estructura else if, el cual permite realizar una validación adicional, dado que la primera condición llegue a ser falsa, dicho así podría leerse de la siguiente manera:
            .row
              .col-12.bg-c14
                .p-4
                  p.mb-0 #[b Si el numero 1 es mayor al número 2]
                  p.ms-4 #[b El mayor es el numero 1]
                  p.mb-0 #[b Si no, si el numero 2 es mayor al número 1]
                  p.ms-4 #[b El mayor es el numero 2]
                  p.mb-0 #[b Si no]
                  p.ms-4 #[b Los dos números son iguales]
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img3.png', style="width: 550px" ,alt='').m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p #[b Condicional doble o compuesta, if – else if – else]
            p Podemos deducir que la estructura #[b #[i else]] llega a convertirse en el bloque por defecto, llegado el caso que la estructura condicional no tenga un condicional que se llegase a ejecutar como afirmativo, es decir si no hay una condición que se cumpla. Esta estructura permite hacer la evaluación de infinida de condiciones, sin importar la cantidad, es recomendado no presentar ambigüedades, también recordar que la ejecución de las condiciones es secuencial, si se llegase a ejecutar por decirlo así la primera condición, el flujo del algoritmo seguiría al finalizar toda la estructura condicional, es decir al finalizar el #[b #[i else]] sin llegar a ejecutar su lógica o bloque de código. 
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width: 550px" ,alt='').m-auto
    .row.bg-c5.mb-5
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white Ten en cuenta para las condicionales la siguiente información.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    .row.mb-4
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Condicional anidado
    p.mb-5 Se debe recordar que cada bloque de código encapsulado en llaves {… } es totalmente independiente a otro bloque de código, por lo cual es posible que se pueda definir una estructura condicional dentro de alguno de los flujos de otro condicional, lo importante en este tipo de casos es que cada condicional realizará la validación de condiciones que no son compatibles, es decir será otro grupo de validación, con otras características, ver figura 14.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 14]. Condicionales anidados
    .row.mb-5
      .col-12.bg-c2
        .p-4
          .row.justify-content-center
            .col-lg-auto
              pre
                code.language-html
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       var edad, opcion;
                  |       edad = prompt("Ingrese edad:", "");
                  |       if (edad<18) {
                  |         opcion = prompt("Quiere helado(h) o pastel(p):", "");
                  |           if(opcion==="h") {
                  |             document.write("Bono de 1000 pesos");
                  |           } else if(opcion==="p") {
                  |             document.write("Bono de 1500 pesos");
                  |           } else {
                  |             document.write("Opción no valida");
                  |           }
                  |       }
                  |       else {
                  |         opcion = prompt("Ingrese genero(m/f/o) :", "");
                  |           if(opcion==="m") {
                  |             document.write("15% desc en camisas y camisetas");
                  |           } else if(opcion==="f") {
                  |             document.write("20% desc en faldas y 15% desc en blusas");
                  |           } else {
                  |             document.write("5% desc en cualquier prenda");
                  |           }
                  |       }
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
              p #[b Nota]. SENA (2022)
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Suponiendo que se tiene una super tienda en la cual venden confitería y prendas de vestir, en el cual tienen apartados para las personas de cualquier tipo de edad, esta tienda quiere saber si quien realiza la compra en su tienda es menor o mayor de edad, dado eso ofrecerá unos beneficios de acuerdo con su edad. Dado que sean menores de edad realizará una bonificación o descuento, si el cliente es menor de edad el beneficio se aplica si se realiza la compra de pastel o helado; por otro lado, si se es mayor de edad, se requiere validar la identidad de género del cliente y con ello aplicar una serie de descuentos de acuerdo con la clasificación.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 En la figura 14 se puede observar que hay un condicional que realiza la primera evaluación la cual consiste en saber si el valor de la edad es menor a 18, en el bloque de verdadero se realiza un condicional anidado lo cual evalúa si el usuario seleccionó helado o pastel; por otro lado, en el bloque del sino del condicional principal se realiza la validación de identidad de género, masculino, femenino u otro, lo cual lleva a una serie de descuentos. Si se analiza, los condicionales internos o anidados se pretende evaluar unas condiciones que no son compatibles con la condición de la estructura condicional principal y dada la naturaleza clasificatoria de la misma se requiere de las estructuras internas para realizar una segunda validación póstuma a la clasificación inicial, se puede observar cómo se presenta para estructura switch y las clases.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img6.png', style="width: 350px" ,alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width: 350px" ,alt='').m-auto
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--verde")
          .row(titulo="Estructura switch")
            .col-12
              p Es una alternativa al condicional, aunque una de sus principales diferencias es que su estructura de validación no hace uso de una sentencia condicional, del tipo mayor que, menor que, etc., solo si el valor de la variable coincide con un valor en específico que por lo general es una constante o un valor literal. Por ejemplo, ver figura Estructura switch.
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span Estructura switch
                .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal2")
                .row
                  .col-auto
                    .row
                      .col-auto.bg-c15.py-2.px-3.mb-4
                        p.mb-0 #[b Estructura switch]
                      pre
                        code.language-html
                          | &lt;! DOCTYPE html&gt;
                          | &lt;html&gt;
                          |   &lt;head&gt;
                          |   &lt;/head&gt;
                          |   &lt;body&gt;
                          |     &lt;script type="text/JavaScript"&gt;
                          |       var diaSemana;
                          |       diaSemana = prompt("Ingrese día de la semana 1-7:", "");
                          |       switch (mes) {
                          |         case 1:
                          |           document.write("Lunes");
                          |           breack;
                          |         case 2:
                          |           document.write("Martes");
                          |           breack;
                          |         case 3:
                          |           document.write("Miercoles");
                          |           breack;
                          |         case 4:
                          |           document.write("Jueves");
                          |           breack;
                          |         case 5:
                          |           document.write("Viernes");
                          |           breack;
                          |         case 6:
                          |           document.write("Sabado");
                          |           breack;
                          |         case 7:
                          |           document.write("Domingo");
                          |           breack;
                          |         default:
                          |           document.write("Día no valido");
                          |       }
                          |     &lt;/script&gt;
                          |   &lt;/body&gt;
                          | &lt;/html&gt;
          .row(titulo="Estructura switch")
            .col-12
              p Se puede observar que a diferencia al condicional #[b #[i if]], se usa la palabra reservada #[b #[i switch]], el cual cumple una función similar, seguido de la variable que se va a evaluar, la evaluación consiste en validar si su valor corresponde a alguno de los cases definidos en el interior de la estructura.  Por último se tiene el caso default, que cumpliría una función similar al else, el cual es que, si no se aplica ninguno de los casos definidos en el bloque de control, se ejecuta ese bloque por defecto. Es recomendado tener en cuenta que los cases no son bloques independientes, por lo cual para salir de la opción utilizan la palabra reservada #[b #[i break]], si esta palabra no es usada saltara a la siguiente instrucción de los cases definidos sin realizar la validación.
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                span Estructura switch
                .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal3")
                .row
                  .col-auto
                    .row
                      .col-auto.bg-c15.py-2.px-3.mb-4
                        p.mb-0 #[b Estructura switch]
                      pre
                        code.language-html
                          | &lt;! DOCTYPE html&gt;
                          | &lt;html&gt;
                          |   &lt;head&gt;
                          |   &lt;/head&gt;
                          |   &lt;body&gt;
                          |     &lt;script type="text/JavaScript"&gt;
                          |       var diaSemana;
                          |       diaSemana = prompt("Ingrese día de la semana 1-7:", "");
                          |       switch (mes) {
                          |         case 1:
                          |           document.write("Lunes");
                          |           breack;
                          |         case 2:
                          |           document.write("Martes");
                          |           breack;
                          |         case 3:
                          |           document.write("Miercoles");
                          |           breack;
                          |         case 4:
                          |           document.write("Jueves");
                          |           breack;
                          |         case 5:
                          |           document.write("Viernes");
                          |           breack;
                          |         case 6:
                          |           document.write("Sabado");
                          |           breack;
                          |         case 7:
                          |           document.write("Domingo");
                          |           breack;
                          |         default:
                          |           document.write("Día no valido");
                          |       }
                          |     &lt;/script&gt;
                          |   &lt;/body&gt;
                          | &lt;/html&gt;
          .row(titulo="Clase")
            .col-12
              p Fueron incluidas en 2015, con la finalidad de mejorar la sintaxis basada en la herencia orientada a prototipos, pero no representa una mejora en la misma, solo de manera estructura y la facilidad para realizar herencias.
              p La forma para definir una clase en JavaScript es por medio de las estructuras especializadas similares a los de otros lenguajes y es la estructura class, ver figura Modo estricto de clase en JavaScript
              a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                span Modo estricto de clase en JavaScript
                .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal4")
                .row
                  .col-auto
                    .row
                      .col-auto.bg-c15.py-2.px-3.mb-4
                        p.mb-0 #[b Modo estricto de clase en JavaScript]
                      pre
                        code.language-html
                          | &lt;! DOCTYPE html&gt;
                          | &lt;html&gt;
                          |   &lt;head&gt;
                          |   &lt;/head&gt;
                          |   &lt;body&gt;
                          |     &lt;script type="text/JavaScript"&gt;
                          |       class Rectangulo {
                          |         constructor (alto, ancho) {
                          |           this.alto = alto;
                          |           this.ancho = ancho;
                          |         }
                          |         //Getter
                          |         get area() {
                          |           return this.calcArea();
                          |         }
                          |         //Método
                          |         calcArea() {
                          |           return this.alto * this.ancho;
                          |         }
                          |       }
                          |       const cuadrado = new Rectangulo(10,10);
                          |       console.log(cuadrado.area); //100
                          |     &lt;/script&gt;
                          |   &lt;/body&gt;
                          | &lt;/html&gt;
          .row(titulo="Clase")
            .col-12
              p La estructura definida en la anterior figura denota el modo estricto, el cual permite mejora el rendimiento al momento de renderizarse, contiene un constructor, dos atributos, alto y ancho, y dos métodos. 
              p Una particularidad de POO y de las clases es la herencia, y con este tipo de estructuras es posible que, desde JavaScript, se pueda definir clases que hereden la abstracción de clases padres, de la misma manera podemos observar otra característica de este paradigma y es la sobrecarga de herencia. 
              p Para obtener una herencia, se hace uso de la palabra reservada extends, tal como A extends B, denotando de esta manera que la clase A hereda o es una clase hija de la clase B.
              a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                span Modo estricto de clase en JavaScript
                .indicador--click(v-if="mostrarIndicador")
              ModalA(:abrir-modal.sync="modal5")
                .row
                  .col-auto
                    .row
                      .col-auto.bg-c15.py-2.px-3.mb-4
                        p.mb-0 #[b Modo estricto de clase en JavaScript]
                      pre
                        code.language-html
                          | &lt;! DOCTYPE html&gt;
                          | &lt;html&gt;
                          |   &lt;head&gt;
                          |   &lt;/head&gt;
                          |   &lt;body&gt;
                          |     &lt;script type="text/JavaScript"&gt;
                          |       class Rectangulo {
                          |         constructor (alto, ancho) {
                          |           this.alto = alto;
                          |           this.ancho = ancho;
                          |         }
                          |         //Getter
                          |         get area() {
                          |           return this.calcArea();
                          |         }
                          |         //Método
                          |         calcArea() {
                          |           return this.alto * this.ancho;
                          |         }
                          |       }
                          |       const cuadrado = new Rectangulo(10,10);
                          |       console.log(cuadrado.area); //100
                          |     &lt;/script&gt;
                          |   &lt;/body&gt;
                          | &lt;/html&gt;
    p Por otro lado, la sobreescritura consiste en reescribir un método, por ejemplo, haciendo la abstracción de los seres vivos, hacemos ruido, los perros ladran, los pájaros cantan, los humanos hablan, etc., si tenemos un método en la clase A tal como hacerRuido, y en la clase B un método igual hacerRuido, esto genera una sobreescritura, prevaleciendo el método de la clase más especializada, es decir, la última clase definida.
    p.mb-5 Para aclarar los puntos dichos previamente analizar y ver la figura 15.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 15]. Herencia y sobreescritura
    .row.mb-5
      .col-12.bg-c2
        .p-4
          .row.justify-content-center
            .col-lg-auto
              pre
                code.language-html
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       class Animal {
                  |         constructor (nombre) {
                  |           this.nombre = nombre;
                  |         }
                  |         hablar() {
                  |           console.log(this.nombre + ' hace mucho ruido.');
                  |         }
                  |       }
                  |       class Perro extends Animal {
                  |         hablar() {
                  |           console.log(this.nombre + ' ladra.');
                  |         }
                  |       }
                  |       var animalito = new Perro("Pepito");
                  |       var perrito = new Perro("Chicky");
                  |       consol.log(animalito.hablar()); //Pepito hace mucho ruido.
                  |       consol.log(perrito.hablar()); //Chicky ladra.
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
              p #[b Nota]. SENA (2022)
    p.mb-5 De acuerdo con los temas que se han visto hasta el momento se puede analizar que hay varias formas de poder establecer estructuras para generar instancias de objetos, hasta el momento esta es la más nueva, pero a su vez es la más similar a lenguajes altamente tipados.
    .row.bg-c5
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white Observa aspectos desde la estructura switch.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    Separador
    #t_2_2
    .titulo-segundo.color-acento-botones
      h2 2.2. Intervalos y retardos
    p.mb-5 Los intervalos y retardos son bloques de código definidos por el lenguaje para pausar una ejecución o para repetir una instrucción en x cantidad de tiempo, tener en cuenta lo siguiente:

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
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
  },
}
</script>

<style lang="sass"></style>
