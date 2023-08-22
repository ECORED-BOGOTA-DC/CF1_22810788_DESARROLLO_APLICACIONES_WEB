<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El JavaScript es un lenguaje de programación muy utilizado en aplicaciones móviles, al igual que para el desarrollo de páginas web interactivas, pues permite añadirle múltiples funciones; este lenguaje abarca diferentes tipos de software lo que lo ha convertido en el lenguaje de programación más popular, por lo que se hace necesario conocer todo su funcionamiento, características, herramientas, entre otros. Por lo anterior el presente componente formativo abordo todas las temáticas necesarias para conocer a profundidad sobre este lenguaje en conjunto con otras tecnologías con la finalidad de desarrollar diversas aplicaciones necesarias para el mercado. Lo visto en el componente se esquematiza en el siguiente mapa conceptual:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
