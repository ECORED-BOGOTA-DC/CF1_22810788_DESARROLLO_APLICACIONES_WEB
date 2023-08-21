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

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
