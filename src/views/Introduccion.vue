<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/introduccion.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[span.text-bold Apreciado aprendiz, bienvenido a este componente formativo] donde se estudiarán conceptos como big data, domótica, bases de datos, los cuales son muy conocidos hoy en día. Se pretende formalizar el lenguaje apropiando estos conceptos, mostrando las aplicaciones y la relativa importancia que tienen, y cómo van de la mano con conceptos tradicionales de la matemática y la estadística, para llegar a analizar con herramientas ofimáticas, grandes cantidades de información que serán valiosas en la toma asertiva de decisiones. 
      

    .col-sm-8.mb-3
      p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
     .video
       iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       figcaption Video: Leyenda del video  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
