<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de toma de decisiones

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El siguiente aspecto, se refiere a la toma de decisiones. A cada momento se están tomando decisiones; algunas veces automáticas, sin ningún tipo de consulta o ayuda de herramientas o expertos; otras veces se toman decisiones planeadas, verificando qué pasa si, creando escenarios con altas probabilidades de éxito, o qué pasa si las probabilidades son bajas; otro aspecto es el de manipular variables, creando simulaciones sobre situaciones, buscando puntos críticos y sobre estos puntos tomar decisiones óptimas.
            p.mt-5 El ser y el quehacer cotidiano demandan gran cantidad de decisiones, desde las más sencillas hasta las más complejas y sofisticadas, todas igual de importantes, porque decidir bien, puede ser un arte o una capacidad esencial.
            
    .cajon.color-primario.tarjeta-verde.p-4
      .fila.justificar-contenido-entre.alinear-elementos-centro                  
        p Según estudios, a diario se toman más 1.000 decisiones y una cuarta parte se relaciona con los alimentos que ingerimos; estas decisiones no se detectan, porque generalmente se hacen inconscientemente; la decisión no se toma desde criterios mentales analizados, sino desde criterios de supervivencia, emotividad o simplemente por reacciones orgánicas, como la sensación de “hambre”, que casi de inmediato se satisface, sin pensar en el cómo, el porqué, el cuánto o el cuándo. 

    p.mt-5.mb-5 Siempre existen alternativas de opciones para decidir a nivel organizacional. La organización debe “reaccionar” tomando decisiones en todo momento, en finanzas, en recursos humanos (RRHH), en mercadeo, en producción, Seguridad y Salud en el Trabajo (SST); en fin, todas las áreas corporativas son objeto de toma de decisiones. Ahora bien, la diferencia radica básicamente, en que corporativamente, las tomas de decisiones deben ser planeadas, documentadas, analizadas y, finalmente, accionadas, utilizando herramientas desarrolladas específicamente para lograr bajar el grado de incertidumbre; es bien importante ejecutar las acciones de mejora que resulten de las evaluaciones y esa es una excelente decisión.
    p.mt-5.mb-5 Los tipos de decisión van muy ligados al tipo de empresa, así como a la magnitud de su ejercicio o de la cantidad de empleados. A continuación, se presentan las más comunes y transversales.

    .row.justify-content-center.mt-3 
      .col.md-3.mt-5
          figure
            img(src="@/assets/curso/temas/tema2/img2.png", alt="alt") 
      .col-md-9
          TabsA.color-acento-contenido.mt-5
            .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Decisiones de<br> dirección")
              .row.justify-content-center
                p Este tipo de decisiones son las que se realizan en las reuniones directivas, asambleas de dirección, juntas de socios, donde, desde la dirección, se planean normas y políticas a seguir a nivel macro. Estas decisiones generalmente afectan a mediano y largo plazo, el direccionamiento general de la organización.
            .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Decisiones<br> estratégicas")
              .row.justify-content-center
                p Las decisiones estratégicas se encargan de preparar el futuro de la empresa, es decir, son las decisiones que se toman para obtener resultados a mediano y largo plazo. Estas decisiones las toma la dirección o la gerencia de la empresa, dentro de escenarios que pueden entrañar diferentes grados de riesgo. Son direcciones estratégicas, por ejemplo, la planificación financiera, las políticas de retribución y salir al mercado internacional.
            .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Decisiones<br> individuales")
              .row.justify-content-center
                p Básicamente, es la autonomía que tiene todo empleado (administrativo u operativo) de tomar decisiones de acuerdo con su rol y conocimiento; estas decisiones también tienen consecuencias en el engranaje total de la empresa, dependiendo de la responsabilidad y grado que tenga en la organización.
            .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Decisiones<br> operativas")
              .row.justify-content-center
                p Son aquellas que se toman para realizar la gestión diaria de la empresa. Estas decisiones pueden tomarlas los trabajadores de forma individual, o los departamentos correspondientes. Son ejemplo de decisiones operativas: la adaptación de la normativa de protección de datos, la selección de proveedores y el control de cobros y pagos.
            .tarjeta.tarjeta-verde.color-contenido.p-4(class="small-text" titulo="Decisiones rutinarias<br> o programadas")
              .row.justify-content-center
                p Estas decisiones son de rutina, programadas, planeadas, incluso sus variantes pueden ser planteadas con anticipación; se toman de forma individual o grupal y forman parte del flujo de procesos.
            .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Decisiones de<br> riesgo")
              .row.justify-content-center
                p Las decisiones de riesgo son excepcionales, puesto que se toman solo en situaciones críticas o de riesgo para la empresa. Una mala decisión en este tipo de escenario, puede significar consecuencias graves para la empresa.

    p.mt-5.mb-5 Lo invitamos a ver el siguiente video, donde conoceremos, a través de un ejemplo, la importancia de la toma de decisiones:

    figure
     .video
       iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
         
            

    .row.justify-content-md-center.mt-5
        .col-md-10
          .tarjeta.contenido-tarjeta-descargas.p-3.mt-5
            .row.justify-content-md-center
              .col-md-1.mt-3
                  img(src="@/assets/curso/temas/tema2/img3.png")
              .col-md-8
                  h3.mt-3 Herramientas, modelos e instrumentos para la toma de decisiones
                  p.text-small Ahora, exploremos en el siguiente documento, las diferentes herramientas, modelos o instrumentos que nos pueden servir para la toma de decisiones. 
              .col-lg-1.mt-4
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Herramientas_modelos_instrumentos_toma_decisiones.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  
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
