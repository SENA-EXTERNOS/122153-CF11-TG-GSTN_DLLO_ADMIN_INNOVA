<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
   
    .row
      .col-md-10
        .titulo-sexto.color-primario.mb-3
          h5 Gestión del desarrollo administrativo e innovación
          p.mt-3 Síntesis: Modelos matemáticos y estadísticos aplicados en #[i big data ]
      .col-md-1.d-flex.flex-row-reverse
            figure
              img(src="@/assets/curso/temas/logoSena.png", alt="alt")          

    p.mb-5 El siguiente mapa conceptual integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
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
