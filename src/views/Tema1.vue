<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de JavaScript
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.mb-5(data-aos="fade-right")
            .col-12
              p.mb-0 Para reconocer cuáles son los fundamentos de JavaScript, se parte de lo siguiente.
          figure.mb-5(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/dFhY6TOMRhY?si=p9wTqzSSTuXycwe_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          p.mb-0 Así mismo, observa los siguientes elementos que complementan lo abordado para dar inicio del componente formativo.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1. Sintaxis y variables
    p(data-aos="fade-right") JavaScript es un lenguaje no tipado orientado a prototipos, por lo cual su sintaxis es relativamente sencilla, que por lo general es funcional.
    p.mb-5(data-aos="fade-right") Para poder ejecutar algún algoritmo o funcionalidad en JavaScript será necesario utilizar un documento HTML que se renderice en el navegador tal como se especifica en la figura 1.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 1]. Documento html con script de JavaScript
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.justify-content-center
            .col-lg-6
              pre
                code.language-html
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       document.write&lpar;"hola mundo"&rpar;;
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
    p.mb-5(data-aos="fade-right") Se debe seguir las siguientes instrucciones:
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center(titulo="1")
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img1.png', style="width: 450px" ,alt='Imagen de una persona digitando código.').m-auto
          .col-lg-5
            p.mb-0 Cree un espacio de trabajo en su disco duro, es decir cree una carpeta con el siguiente nombre ‘Ejercicios web’.
        .row.justify-content-center(titulo="2")
          .col-lg-5.mb-4.mb-lg-0
            p Por cada ejercicio se recomienda crear una carpeta dentro del espacio de trabajo, para este primer código podría denominarse ‘hola_mundo’, por lo cual la estructura en su disco duro debería quedar de la siguiente manera:
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2]. Estructura de almacenamiento
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 450px" ,alt='Imagen con la estructura de las carpetas dentro del disco duro.').m-auto
        .row.justify-content-center(titulo="3")
          .col-lg-5.mb-4.mb-lg-0
            p Cree un archivo con el nombre ‘index.html’, es importante que el archivo sea de extensión html, este tipo de archivo es el que se renderiza en los navegadores web. Para esto es importante tener un IDE o un editor de código. Como recomendación puede hacer uso del editor Visual Studio Code o Sublime Text.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3]. Pantallazo de Sublime Text y código HTML
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 450px" ,alt='Imagen de un pantallazo de Sublime Text y código HTML.').m-auto
        .row.justify-content-center(titulo="4")
          .col-lg-5.mb-4.mb-lg-0
            p Para ejecutar este ejemplo, puede buscar el archivo ‘index.html’ en el explorador de archivos y dar doble clic, se procederá a ejecutarse el navegador por defecto.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4]. Archivo html desde explorador de archivos
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 350px" ,alt='Imagen de un archivo html desde explorador de archivos.').m-auto
        .row.justify-content-center(titulo="5")
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img5.png', style="width: 450px" ,alt='Imagen que muestra la ejecución de archivo html en navegador por defecto con el texto denominado: Hola mundo').m-auto
          .col-lg-5
            p Se sugiere ir realizando cada uno de los ejercicios y ejemplos expuestos, para la anterior imagen cree un archivo con la extensión .html y digite el código expuesto, posteriormente ejecute el archivo en algún navegador de su preferencia para que pueda evidenciar la funcionalidad.
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5]. Ejecución de archivo html en navegador por defecto
    .row.bg-c5.mb-5(data-aos="fade-left")
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white Además, visualiza la información que amplia de la sintaxis y variables.]
              a.boton.color-acento-botones.me-3(href="https://www.youtube.com/embed/Tk8gEEmh3Xo?si=LWW-_SMmSVBhXU7n" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Variables
    .row.align-items-center.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Son identificadores de memoria o contenedores que permiten almacenar valores, para poder hacer uso de estos en el lenguaje de JavaScript primero se deben declarar y asignar un nombre, para posteriormente hacer uso de estos
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Los identificadores hacen referencia a las constantes o variables que son requeridas para el control de un flujo. Como se mencionó previamente, JavaScript es un lenguaje no tipado, por lo cual para realizar una declaración de identificador de memoria este no estará atado a un tipo de dato en específico, tal como sucede en otro lenguaje altamente tipados como Java, C, C++, C#.]
        p.mb-0 Por el contrario, al realizar una declaración solo se establece el espacio de memoria y al realizar la asignación automáticamente ese identificador tomará la especificación del dato asignado.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img7.png', style="width: 380px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Por ejemplo, para poder crear un identificador será necesario utilizar la palabra reservada #[span.txt-c1 ‘var’] o #[span.txt-c1 ‘let’], a continuación se define el nombre del identificador, el cual no puede ser números, no debe tener caracteres especiales y podrá ser una cadena secuencial de caracteres acompañados de números al final, ver figura 6.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 6]. Declaración de identificador de memoria
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-right")
        .p-4
          .row.justify-content-center
            .col-lg-6
              pre
                code.language-javascript
                  |6  var identificador;
                  |7  var identificador2 = "value";
                  |8  var nombre1 = "Juan";
                  |9  var edad = 123;
                  |10 var casado = true;
    p.mb-5(data-aos="fade-right") Los datos de una variable pueden estar quemados en el código fuente tal como los expuestos en la figura 6, o se pueden recibir de la interacción con el usuario por medio de elementos de control de entrada, como la figura 7.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 7]. Ingreso de datos por ventanas emergentes
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-right")
        .p-4
          .row.justify-content-center
            .col-lg-6
              pre
                code.language-html
                  | &lt;! DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;script type="text/JavaScript"&gt;
                  |       Let nombre = prompt&lpar;"ingrese nombre: ", ""&rpar;;
                  |       Let edad = prompt&lpar;"ingrese edad: ", ""&rpar;;
                  |       document.write&lpar;"hola "&rpar;;
                  |       document.write&lpar;nombre&rpar;;
                  |       document.write&lpar;" , wow tienes "&rpar;;
                  |       document.write&lpar;edad + " años"&rpar;;
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
    p.mb-5(data-aos="fade-right") En JavaScript existen diferentes tipos de datos tal como se enseña a continuación:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-10.col-sm-6.col-md-5.col-lg-4.col-xl-3.col-xxl.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b String]
              p Es el tipo de dato que abarca las a cadenas de texto o cadena de caracteres. Se pueden encapsular en comillas simples o sencillas, no hay distinción en el lenguaje, dada la naturaleza del lenguaje al no ser tipado.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img1.svg')})`}")
      .col-10.col-sm-6.col-md-5.col-lg-4.col-xl-3.col-xxl.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Number]
              p Es el tipo de dato numérico y abarca cualquier número en la regla numérica, natural, entero, real. Este se expresa sin comillas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.svg')})`}")
      .col-10.col-sm-6.col-md-5.col-lg-4.col-xl-3.col-xxl.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Boolean]
              p Es el tipo de dato lógico, el cual puede albergar solo dos valores true o false, palabras que son reservadas por el lenguaje y se expresan sin comillas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.svg')})`}")
      .col-10.col-sm-6.col-md-5.col-lg-4.col-xl-3.col-xxl.mb-4.mb-xxl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Array]
              p Es el tipo de dato tipo colección, la cual puede almacenar varios datos en una misma estructura, ya sea un vector o una matriz.
              p No importa si los datos de cada posición son de diferente tipo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img4.svg')})`}")
      .col-10.col-sm-6.col-md-5.col-lg-4.col-xl-3.col-xxl
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Object]
              p Es el tipo de dato en el que cualquier cosa se puede almacenar, básicamente en JavaScript, todo es un objecto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img5.svg')})`}")
    p(data-aos="fade-right") Las variables son requeridas dado que con estas se pueden hacer los procesos de programación dinámicos, permitiendo permutar la información a la medida que se ejecutan las funcionalidades implementadas.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2. Declaraciones
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 80px" ,alt='').m-auto
      .col
        p.mb-0 En el desarrollo de software y en el aprendizaje de un lenguaje de programación hay diferentes aspectos a tener en cuenta, entre los cuales está la gramática y sintaxis, para obtener el máximo rendimiento al momento de realizar desarrollos e implementaciones.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Conceptos básicos
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Entre los conceptos básicos, se puede resaltar que JavaScript es un lenguaje que no tiene distinción entre mayúsculas y minúsculas, por lo cual, si se realiza la definición de una variable en mayúsculas o minúsculas, esto hará referencia al mismo identificador de memoria, en otras palabras y dicho de forma técnica es un lenguaje #[b #[i case-sensitive]]. También es importante recordar que se debe hacer uso de un sistema de caracteres #[b #[i Unicode]] por lo que no es correcto utilizar caracteres especiales para definir identificaciones de memoria.
        p.mb-0 Entre otras de las características básicas de JavaScript, es que al finalizar una línea de código o una sentencia no es necesario poner al final un ‘;’ pero en las reglas definidas por el lenguaje se sugiere que se agregue como una buena práctica.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width: 380px" ,alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 8]. Consideraciones básicas de JavaScript
    .row.mb-5
      .col-12.bg-c2
        .p-4
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              pre
                code.language-html
                  |1  &lt;! DOCTYPE html&gt;
                  |2  &lt;html&gt;
                  |3    &lt;head&gt;
                  |4    &lt;/head&gt;
                  |5    &lt;body&gt;
                  |6      &lt;script type="text/JavaScript"&gt;
                  |7        Let primerNombre =  "juan" ;
                  |8        primernombre = "Alex";
                  |9        Let cantidadNiños = 13;
                  |10     &lt;/script&gt;
                  |11   &lt;/body&gt;
                  |12 &lt;/html&gt;
            .col-lg-6(data-aos="fade-left")
              p.mb-0 En la figura 8, se puede observar que en la línea 7 y 8, al definir el identificador #[b #[i primerNombre]] y #[b #[i primernombre]], respectivamente, hacer referencia al mismo espacio en memoria, por lo cual, al ser un lenguaje con case-sensitive, inicialmente el identificador tendrá el valor de ‘Juan’ y luego será remplazado por ‘Alex’; ahora en la línea 9 se puede observar que la variable definida como #[b #[i cantidadNiños]], es incorrecta dado que utiliza un carácter especial perteneciente al lenguaje español que es la ‘ñ’, esta variable deberá ser renombrada de otra forma y por último se puede observar que las líneas 7, 8 y 9, que se finaliza con ‘;’ recordando que no es una norma del lenguaje, pero es una recomendación de buena práctica.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Comentarios
    p.mb-5(data-aos="fade-right") Un comentario es un bloque de código no ejecutable, destinada para dejar anotaciones útiles para el programador, que por lo general es usado para documentar variables, operaciones, funciones y se pueden aplicar en la mayoría de los elementos del programa. La sintaxis de los bloques de comentarios en JavaScript es igual que muchos lenguajes de programación.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 9]. Comentarios en JavaScript
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-right")
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
                  |       // un comentario de una línea
                  |       
                  |       /*
                  |       este es un comentario
                  |       más largo, de varias líneas
                  |       */
                  |       
                  |       /* Sin embargo, no puedes /* anidar comentarios */  SyntaxError  * /;
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
    p(data-aos="fade-right") En la figura 9, se puede observar que hay varias formas de crear comentarios, si se requiere un comentario de una sola línea solo con iniciar la sentencia con // será suficiente, pero dado el caso que se requiera que sea un párrafo o más de una línea deberá iniciarse así /* y cerrarse de la siguiente manera */. Adicional a eso recordar que no se pueden anidar comentarios.
    p.mb-0(data-aos="fade-right") Los conceptos básicos del lenguaje abarcan otros temas, los cuales se irán abarcando en el desarrollo de este componente.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-botones
      h2 1.3. Operadores y objetos
    p.mb-5(data-aos="fade-right") Los operadores en JavaScript son signos o símbolos que sirven para definir expresiones, las cuales pueden ser de asignación, lógicas, aritméticas, de comparación y referencia.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Operadores de asignación
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img8.png', style="width: 420px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Son aquellos operadores que definen un valor del operando derecho al operando izquierdo, siempre y cuando el operando izquierdo no sea un valor literal, es decir que sea un identificador de memoria, el operando de asignación más utilizado y sencillo de recordar es el igual (=), el cual permite asignar un valor a la variable definida en el lado izquierdo, ver figura 10.
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 10]. Operador de asignación (=)
        .row
          .col-12.bg-c2
            .p-4
              .row.justify-content-center
                .col-lg-auto
                  pre
                    code.language-javascript
                      | var suma = 1 + 2;
                      | var nota1 =  1;
                      | var nota2 =  4;
                      | var nota3 = nota1 + 1;
                      | var promedio = (nota1 + nota2 + nota3) / 3
    .row.bg-c5.mb-5(data-aos="fade-down")
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img9.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white También se pueden utilizar operadores de asignación compuestas tal como la siguiente tabla.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Operadores de comparación
    p.mb-5(data-aos="fade-right") Son aquellos que realizan una evaluación entre los operandos y devuelven un valor lógico, es decir, un valor de verdadero o falso, los operandos pueden ser números, cadenas, booleanos, caracteres; dado el caso que los operandos no sean del mismo tipo, el intérprete de JavaScript intentará realizar una conversión implícita para hacer la evaluación, ver figura 11.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 11]. Operador de comparación (==)
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.justify-content-center
            .col-lg-auto
              pre
                code.language-javascript
                  | var var1 = 3;
                  | var var2 = 4;
                  | var result = var1 == var2;
    p.mb-5(data-aos="fade-right") En la figura 11 se puede observar la creación de dos identificadores de memoria var1 y var2, los cuales tienen una asignación de valor respectivamente, posteriormente se crea un identificador denominado result, este almacena el valor de comparar si var1 es igual a var2, el cual es falso; por lo tanto, el valor de result es el valor de ‘false’, se puede observar así:
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones.p-4(titulo="Igual (==)")
            h4.mb-4 Operador #[span.txt-c3 Igual (==)]
            p Retorna true si los operandos tienen el mismo valor.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 4 == var1]
            .row
              .col-5.bg-c7
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 "5" == var1]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 6 == '6']
          .tarjeta.color-acento-botones.p-4(titulo="Diferente, desigual (!=)")
            h4.mb-4 Operador #[span.txt-c3 Diferente, desigual (!=)]
            p Retorna true si los operandos no presentan el mismo valor.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 != 2]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var2 != "2"]
          .tarjeta.color-acento-botones.p-4(titulo="Estrictamente igual<br>(===)")
            h4.mb-4 Operador #[span.txt-c3 Estrictamente igual (===)]
            p Retorna true si los operandos son iguales y adicionalmente son del mismo tipo.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c10
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 1 === var1]
          .tarjeta.color-acento-botones.p-4(titulo="Desigualdad estricta<br>(!==)")
            h4.mb-4 Operador #[span.txt-c3 Desigualdad estricta (!==)]
            p Retorna true si los operandos son del mismo tipo pero no presentan el mismo valor, o si son de diferente tipo.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 !== "7"]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 5 !== '5']
          .tarjeta.color-acento-botones.p-4(titulo="Mayor que (>)")
            h4.mb-4 Operador #[span.txt-c3 Mayor que (>)]
            p Retorna true si el operando izquierdo presenta un valor mayor que el operando derecho.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 > var2]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 "13" > 4]
          .tarjeta.color-acento-botones.p-4(titulo="Mayor o igual que (>=)")
            h4.mb-4 Operador #[span.txt-c3 Mayor o igual que (>=)]
            p Retorna true si el operando izquierdo presenta un valor mayor o igual que el operando derecho.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 >= var2]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 >= 6]
          .tarjeta.color-acento-botones.p-4(titulo="Menor que (<)")
            h4.mb-4 Operador #[span.txt-c3 Menor que (<)]
            p Retorna true si el operando izquierdo presenta un valor menor que el operando derecho.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 < var4]
            .row
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 "6" < 20]
          .tarjeta.color-acento-botones.p-4(titulo="Menor o igual (<=)")
            h4.mb-4 Operador #[span.txt-c3 Menor o igual (<=)]
            p Retorna true si el operando izquierdo presenta un valor menor o igual que el operando derecho.
            p #[b Uso que devuelven true]
            .row
              .col-5.bg-c6.bg-c9
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var1 <= var4]
            .row.mb-3
              .col-5.bg-c8
                .p-1
                  p.text-center.mb-0 #[b.txt-c4 var2 <= 15]
            p.mb-0 #[b Nota: (=>) no es un operador, sino la notación para funciones flecha.]
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img10.svg', style="width: 320px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Anteriormente se pudo observar los diferentes tipos de operadores de comparación, es importante recordar que estos ayudan a evaluar dos operandos, retornando con ello un valor booleano de verdadero o falso, esto es útil al construir una sentencia relacional como las que son usadas en los condicionales o algunos de los ciclos.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Operadores aritméticos
    p.mb-5(data-aos="fade-right") Son aquellos que realizan operaciones matemáticas, ya sea con valores literales o variables, entre estos operadores encontramos el (+) (-) (/) (*), ver figura 12.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 12]. Operadores aritméticos comunes
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.justify-content-center
            .col-lg-auto
              pre
                code.language-javascript
                  | var var1 = 3;
                  | var var2 = 4;
                  | var r1 = var1 + 3;  // 6
                  | var r2 = 5 - 4;     // 1
                  | var r3 = 3 * var2;  //12
                  | var r4 = var2 / 2;  // 2
                  | var r5 = 12 % 2;    // 0
    p.mb-5(data-aos="fade-right") Además, se debe observar la siguiente tabla:
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th(width="25%") Operador
            th Descripción
            th(width="25%") Uso
        tbody
          tr
            th Residuo (%)
            td Operador binario o también denominado división modular. Retorna el resto entero de dividir los dos operandos.
            td.text-center 12 % 5 devuelve 2.
          tr
            th Incremento (++)
            td Suma uno a su operando. Si se usa como operador prefijo (++x), retorna el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), retorna el valor de su operando antes de agregar uno.
            td.text-center Si x es 3, ++x establece x en 4 y retorna 4, mientras que x++ retorna 3 y, solo entonces, establece x en 4.
          tr
            th Decremento (--)
            td Resta un uno de su operando. El valor de retorno es equivalente al del operador de incremento.
            td.text-center Si x es 3, entonces --x establece x en 2 y retorna 2, mientras que x-- retorna 3 y, solo entonces, establece x en 2.
          tr
            th Negación unaria (-)
            td Retorna la negación de su operando.
            td.text-center Si x es 3, entonces -x retorna -3.
          tr
            th Positivo unario (+)
            td Busca convertir el operando en un número, si este no lo es.
            td.text-center 
              p.mb-0 +"3" retorna 3.
              p.mb-0 +true devuelve 1.
          tr
            th Operador de exponenciación (**)
            td Calcula la base a la potencia de exponente, es decir, base
              |
              sup exponente
            td.text-center 
              p.mb-0 2 ** 3 returns 8.
              p.mb-0 10 ** -1 returns 0.1.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-down")
          p.mb-0 #[b Estos operadores solo pueden ser usados en el ámbito matemático, operando valores numéricos, con identificadores de memoria del tipo numérico.]
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Operadores lógicos
    p.mb-5(data-aos="fade-right") Son aquellos operadores que se usan para establecer uniones entre valores booleanos, y generar un valor booleano. Tener en cuenta los siguientes ejemplos:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Ejemplo de operador && (y)")
        .row.justify-content-center
          .col-auto
            pre
              code.language-javascript
                | var a1 = true &amp;&amp; true;      // t &amp;&amp; t devuelve true
                | var a2 = true &amp;&amp; false;     // t &amp;&amp; f devuelve false
                | var a3 = false &amp;&amp; true;     // f &amp;&amp; t devuelve false
                | var a4 = false &amp;&amp; (3 == 4); // f &amp;&amp; f devuelve false
                | var a5 = 'Cat' &amp;&amp; 'Dog';    // t &amp;&amp; t devuelve Dog
                | var a6 = false &amp;&amp; 'Cat';    // f &amp;&amp; t devuelve false
                | var a7 = 'Cat' &amp;&amp; false;    // t &amp;&amp; f devuelve false
      .py-3.py-md-4(titulo="Ejemplo de operador || (o)")
        .row.justify-content-center
          .col-auto
            pre
              code.language-javascript
                | var o1 = true || true;      // t || t devuelve true
                | var o2 = false || true;     // f || t devuelve true
                | var o3 = true || false;     // t || f devuelve true
                | var o4 = false || (3 == 4); // f || f devuelve false
                | var o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
                | var o6 = false || 'Cat';    // f || t devuelve Cat
                | var o7 = 'Cat' || false;    // t || f devuelve Cat
      .py-3.py-md-4(titulo="Ejemplo de operador ¡ (negación)")
        .row.justify-content-center
          .col-auto
            pre
              code.language-javascript
                | var n1 = !true;      // t devuelve false
                | var n2 = !false;     // f devuelve true
                | var n3 = !'Cat';     // t devuelve false
    p.mb-5(data-aos="fade-right") Para completar la información anterior, revisar en detalle los datos que se presentan entre operador, uso y la descripción de cada uno de los que se relacionan.
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th(width="25%") Operador
            th(width="25%") Uso
            th Descripción
        tbody
          tr
            th AND Lógico (&&)
            td.text-center expresion1 && expresion2
            td Tener en cuenta que cada expresión debe retornar un valor lógico true/false. Dado el caso que las dos expresiones sean true, el operador && devolverá true, en caso contrario siempre retornara false.
          tr
            th OR lógico (||)
            td.text-center expresion1 || expresion2
            td Tener en cuenta que cada expresión debe retornar un valor lógico true/false. Dado el caso que una de las dos expresiones sean true, el operador || devolverá true, en caso contrario siempre retornara false.
          tr
            th NOT lógico (!)
            td.text-center ! expresion
            td Tener en cuenta que la expresión debe retornar un valor lógico true/false. Dado el caso que la expresión sea true, al negarse retornara el valor contrario, es decir, false; y en caso contrario ocurrirá lo mismo.
    .row.mb-4(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Objetos
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img11.svg', style="width: 80px" ,alt='').m-auto
      .col
        p JavaScript, es un lenguaje que está construido en un paradigma basado en objetos, recordando que un objeto es una estructura que permite la colección de propiedades, atributos, características o datos, estos a su vez tienen asociado un valor, es decir, una información relacionada con lo que representa.
        p.mb-0 Tener en cuenta el siguiente ejemplo:
    .row.mb-5
      .col-12.bg-c11(data-aos="fade-right")
        .p-4
          figure
            img(src='@/assets/curso/tema1/img12.svg', style="width: 1250px" ,alt='Imagen que contiene un ejemplo de objetos JavaScript, el cual tiene la siguiente información a modo de historieta: Comencemos...tenemos el objeto tipo persona, y ese objeto tiene como atributos el nombre y la edad, esos atributos deberán almacenar información tales como ‘Juan’ y 18, datos que corresponden a las propiedades definidas en el objeto. Al igual que en la mayoría de los lenguajes de programación, en JavaScript un objeto también representa la abstracción de un objeto en la vida real. Se muestra un código Declaración de un objeto. Como se puede observar en la figura Declaración de un objeto, en JavaScript se pueden definir objetos realizando la instanciación de la clase Object y a la medida que se requiera agregar propiedades a la instancia, de la misma manera se podrán añadir valores a las propiedades definidas. Este objeto también se puede definir con el identificado de objeto tal como lo podemos observar en la figura Notación de objeto. Se muestra un código Notación de un objeto.').m-auto
    p.mb-0(data-aos="fade-right") Estas son algunas de las particularidades de JavaScript para la definición de objetos en el lenguaje.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema1',
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
