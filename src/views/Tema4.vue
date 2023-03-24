<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Paquetes ofimáticos aplicados al modelado de datos
      
    p.mb-5 Los datos son categorías de variables que se representan con símbolos, números o letras; contienen o transmiten información y pueden ser cuantitativos o cualitativos (concepto desde la estadística). Los datos, por sí solos, no generan valor y deben ser estructurados de alguna forma para obtener un significado informativo; es aquí donde la informática cobra relevancia e importancia porque, finalmente, es desde allí que se categorizan y analizan. 
    p.mt-5.mb-5 Los datos pueden ser:

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-verde-contenido-tarjeta.p-4
          .row.justify-content-center.mb-3
            .col-7
              figura
                img(src='@/assets/curso/temas/tema4/img1.png', alt='')
          h4.text-center Numéricos
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-verde-contenido-tarjeta.p-4
          .row.justify-content-center.mb-3
            .col-7
              figura
                img(src='@/assets/curso/temas/tema4/img2.png', alt='')
          h4.text-center De texto    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-verde-contenido-tarjeta.p-4
          .row.justify-content-center.mb-3
            .col-7
              figura
                img(src='@/assets/curso/temas/tema4/img3.png', alt='')
          h4.text-center Lógicos                 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-verde-contenido-tarjeta.p-4
          .row.justify-content-center.mb-3
            .col-7
              figura
                img(src='@/assets/curso/temas/tema4/img4.png', alt='')
          h4.text-center Estadísticos

    p.mt-5.mb-5 Tenga en cuenta que los datos son símbolos aislados, sin contexto, sin valor alguno. Cuando se estructuran, jerarquizan, analizan y visualizan en un entorno o contexto específico acorde con su fuente, se vuelven información y es, en ese momento, donde se pueden tomar decisiones.
    
    .row.justify-content-center
      .col-md-8    
        .cajon.color-acento-botones.color-cajon-naranja-calido.p-4
            p Es necesario recalcar que como característica imprescindible de los datos, es el que se encuentren bajo modelos, los cuales estructuran, de alguna manera, los datos no estructurados buscando encontrar el valor que intrínsecamente contengan los datos. Igualmente, los modelos optimizan así mismo, el poder informativo de los datos estructurados, interactúan no solo con datos en la dinámica actual con características de alta velocidad de gestión de grandes cantidades de datos, sino que además relacionan información dinámica entre bases de datos, e incluso entre diferentes tipos de modelos, una interacción total.

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-8.mb-3
            p.mt-5 Conforme la tecnología ha evolucionado y se ha incrementado el volumen de datos, las herramientas convencionales de los paquetes ofimáticos se fueron quedando cortas para el análisis “estático” de las antiguas bases de datos que cambiaban lentamente. Hoy en día, estas herramientas son más poderosas, capaces de analizar “dinámicamente” datos en tiempo real, conforme van cambiando con “delay” en segundo y no en semanas o meses como ocurría antes. 
            p Es necesario almacenar la información similar para poder consultarla en el momento preciso; antiguamente, en las organizaciones, las bases de datos eran sus archivos físicos, clasificados con diferentes metodologías para ser consultados; eran habitaciones llenas de “legajadores” de color café guardados sistemáticamente. Después llegó la era digital, y en la habitación se archivaban no solo libros físicos, sino “discos compactos”, grabados con datos en pdf, jpg, u otro formato; ahora el cuarto o estancia se ha convertido en el sitio donde se encuentra una gran computadora (servidor), que está interactuando con otras estaciones de trabajo en el mismo edificio o afuera, enviando la información a un tipo de dispositivo móvil en cualquier parte del mundo, en algún momento. Ese es el concepto de base de datos actual, es una interacción dinámica y rápida.
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema4/img5.png", alt="alt")   

    p.mt-5.mb-5 Según su variabilidad o sea, la preservación de los datos, así como también su recuperación, las bases de datos se clasifican en:

    .row.justify-content-center.mb-5           
      .col-lg-4    
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img6.png', alt='')
          .tarjeta.tarjeta-verde-claro.p-3.h-100
            h4.text-center.mt-5 Estáticas
            p.mb-0 Antiguos análisis históricos hechos por las compañías hasta hace 10 años, depositados en archivos digitales (memorias USB, discos duros), solo para consulta o lectura.
      .col-lg-4           
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img7.png' alt='AvatarTop')
          .tarjeta.tarjeta-verde-claro.p-3.h-100
            h4.text-center.mt-5 Dinámicas
            p.mb-0 A diferencia de las estáticas, están en constante cambio, entra y sale información en cuestión de segundos.


    p.mb-5 Y según su contenido (discrimina el tipo de información que se administra), las bases de datos se clasifican en:

      .row.justify-content-center
        .col-md-12
          SlyderF(columnas="col-md-4")
            .tarjeta.color-acento-contenido.p-2.h-100
              .row.justify-content-center.mb-2
                .col-md-5.mt-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img8.png' alt='AvatarTop')                  
                h4.mt-3.texto-centro Bibliográficas
                p.texto-centro Contienen diverso material de lectura (libros, revistas, etc.), ordenado a partir de información clave como son los datos del autor, editor, año de aparición, área temática o título del libro, entre muchas otras posibilidades.

            .tarjeta.color-acento-contenido.p-2.h-100
              .row.justify-content-center.mb-2
                .col-md-5.mt-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img9.png' alt='AvatarTop')                  
                h4.mt-3.texto-centro De texto completo
                p.texto-centro Se manejan con textos históricos o documentales, cuya preservación debe ser a todo nivel y se consideran fuentes primarias.

            .tarjeta.color-acento-contenido.p-2.h-100
              .row.justify-content-center.mb-2
                .col-md-5.mt-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img10.png' alt='AvatarTop')                  
                h4.mt-3.texto-centro Directorios
                p.texto-centro Listados enormes de datos personalizados o de direcciones de correo electrónico, números telefónicos, etc. 

            .tarjeta.color-acento-contenido.p-2.h-100
              .row.justify-content-center.mb-2
                .col-md-5.mt-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img11.png' alt='AvatarTop')                  
                h4.mt-3.texto-centro Especializadas
                p.texto-centro Bases de datos de información hiperespecializada o técnica, pensadas a partir de las necesidades puntuales de un público determinado que consume dicha información.
    .row.justify.content-center.mt-5
      ul.lista-ul
        li
          i.fas.fa-square
          b.h5 Sistemas de gestión de bases de datos
    p Continuemos este estudio con el sistema de gestión de bases de datos (DBMS, #[i Data Base Magnament System]), el cual es una aplicación (#[i software]) que gestiona no solo una base de datos, sino también varias bases de datos. Es una interfaz que le permite a los usuarios, interactuar con la información que le brindan sus datos, organizados en bases de datos dinámicas y flexibles.                
    p.mb5 El sistema de gestión de base de datos, a diferencia de las bases de datos, gestiona, controla, aplica principios y reglas a todas esas relaciones que pueden resultar de la interacción de las bases de datos. Ofrece cánones de seguridad, integridad de los datos y procesos rígidos de auditoría, para el buen uso y prácticas nobles en disposición, suministro y recibo de información, procurando que se cumplan las “V” del #[i Big data].
    p.mt-5.mb-5 Los sistemas de gestión de bases de datos pueden clasificarse en varios tipos:

    .row.justify-content-center
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris").mt-5
          .row(titulo="Sistema centralizado")
            p En el que todos los datos residen en una única ubicación y los usuarios pueden acceder a dicha ubicación para manipular los datos.

          div(titulo="Sistema distribuido")
            p En el que los datos residen en varios nodos.

          div(titulo="Sistema federado")
            p Capaz de suministrar datos sin duplicación de datos fuente. Esta categoría a su vez, puede dividirse en:
              ul.lista-ul
                  li 
                  i.lista-ul__vineta
                  | Una base de datos de #[span.text-bold acoplamiento libre:] requiere acceso a otras bases de datos de componentes.
                  li 
                  i.lista-ul__vineta
                  | Una base de datos de #[span.text-bold acoplamiento estrecho:] utiliza procesos independientes para trabajar en un sistema federado.
                  li 
                  i.lista-ul__vineta
                  | Los sistemas de bases de datos de #[span.text-bold cadena de bloques:] gestionan transacciones financieras y de otros tipos.
      .col-md-5.p-5
       figure 
        img(src='@/assets/curso/temas/tema4/img12.png', alt='alt')  

    p.mt-5.mb-5 Es así como el DBMS organiza los archivos de su base de datos y proporciona a los usuarios finales más acceso y control sobre sus datos. Para lograrlo, un DBMS permite a los usuarios manipular los datos en los archivos de sus bases de datos, incluyendo acciones como crear, editar y actualizar cuando sea necesario. 
    p.mb-5 Un DBMS proporciona 5 funciones principales:
    .row.justify-content-center
     .col-md-8
        figure 
            img(src='@/assets/curso/temas/tema4/img13.png', alt='alt')  

    .row.justify.content-center.mt-5
      ul.lista-ul
        li
          i.fas.fa-square
          b.h5 Herramientas tecnológicas

    p.mt-5.mb-5 Finalizamos concluyendo que, el <i>Big data</i> se ha convertido hoy en una prioridad para muchas empresas; así mismo, han surgido abundantes ofertas de administradores de aplicaciones de grandes datos, para atender esta demanda actual de obtener o estructurar información privilegiada a partir de datos (en todas sus formas, características y presentaciones).
    p.mb-5 Conozcamos las herramientas más importantes:

      .row.justify-content-center
          .col-md-12
            SlyderF(columnas="col-sm-4")
              .tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-2
                  .col-sm-2.col-lg-7.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/tema4/img14.png' alt='AvatarTop')                  
                  h4.mt-3.texto-centro Apache Hadoop
                  p.texto-centro Es una de las precursoras, utilizada por Facebook, de código abierto (gratis), predictiva y con alto nivel de seguridad.

              .tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-2
                  .col-sm-2.col-lg-7.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/tema4/img15.png' alt='AvatarTop')                  
                  h4.mt-3.texto-centro Elasticsearch
                  p.texto-centro Procesa datos en grandes cantidades, análisis en tiempo real, con ayuda de gráficos y se pueden realizar consultas complejas.

              .tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-2
                  .col-sm-2.col-lg-8.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/tema4/img16.png' alt='AvatarTop')                  
                  h4.mt-3.texto-centro Apache Storm
                  p.texto-centro Se puede usar con cualquier lenguaje de programación, proceso en tiempo real, grandes cantidades de datos.

              .tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-2
                  .col-sm-2.col-lg-8.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/tema4/img17.png' alt='AvatarTop')                  
                  h4.mt-3.texto-centro MongoDB
                  p.texto-centro Es no relacional para datos no estructurados o semiestructurados, excelente para teléfonos móviles.

              .tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-2
                  .col-sm-2.col-lg-7.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/tema4/img18.png' alt='AvatarTop')                  
                  h4.mt-3.texto-centro Apache Spark
                  p.texto-centro Es gratis, se puede conectar con varias computadoras simultáneamente, aplica #[i machine learning], muy eficaz y rápida.

      .row.justify-content-center.mt-5
        .col-md-8    
          .cajon.color-acento-botones.color-cajon-naranja-calido.p-4
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, el material complementario, entre otros.Además, lo invitamos a  resolver la actividad didáctica para reforzar los conceptos estudiados en el componente formativo. 




</template>

<script>
export default {
  name: 'Tema4',
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
