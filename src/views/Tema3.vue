<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[i Big data]
      
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 El siguiente aspecto a estudiar, es un término que se encuentra presente en la vida cotidiana de todos; viene en cada dispositivo que tenga alguna conexión a Internet, un teléfono, un televisor, una nevera, una cámara de video, la domótica de la casa, una máquina que regule el caudal de agua de un río, todos ellos, enviando información 24–7 los 365 días al año, sin descanso, generando espacios y cantidades de información que manualmente sería imposible de gestionar. El concepto <i>Big data</i> precisamente, hace referencia a la acumulación de grandes cantidades de datos, así como su análisis por medio de máquinas y equipos de cómputo, con el fin de generar o perfilar patrones de comportamiento de información.
            .cajon.color-primario.tarjeta-verde.p-4
              .fila.justificar-contenido-entre.alinear-elementos-centro                  
                p En <i>Big data</i>, probablemente lo más importante antes que la velocidad de flujo de datos y la capacidad de almacenamiento, es conocer el tipo de datos que se pueden hallar, en términos de estructurados, semiestructurados y no estructurados.

    p.mt-5.mb-5 Ampliemos la información sobre cada uno de ellos: 


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Datos estructurados ")
        .col-sm-2.mb-3
          figure
            img(src="@/assets/curso/temas/tema3/img2.png", alt="alt")  
        .col-md-8        
          p Son los datos con los que se pueden construir bases de datos, generando campos y registros, los cuales son veraces; se pueden relacionar y articular con otras bases de datos de diferentes fuentes y son datos cuantitativos.
          p La fecha de nacimiento, el número de la tarjeta de crédito o débito, la información de la cuenta de #[i trading], la dirección de la vivienda, el GPS (Sistema de Posicionamiento Global), son tipos de datos estructurados.
          p Este tipo de datos se dividen en dos categorías:
            ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Datos estructurados generados por una máquina: en estos datos no existe ningún tipo de manipulación humana; los mensajes y datos son enviados y recibidos por máquinas.
                  li 
                    i.lista-ul__vineta
                    | Datos estructurados generados por humanos: aquí debe haber interacción del humano en algún aspecto del proceso con la máquina.
      div(titulo="Datos semiestructurados")
        .row
          .col-sm-2.mb-3
            figure
              img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")  
          .col-md-8        
            p Se llaman semiestructurados porque en estos datos se presentan unas partes estructuradas y otras no.
            p Estos datos fluyen sin estar en una base de datos que relacionen proveedores con clientes u otro interesado, pero están soportados en formatos de texto de diferentes fuentes y su estructura u organización obedece a un orden semántico.             
            p El código HTML (Lenguaje de Marcas de Hipertexto), es un ejemplo de datos semiestructurados, debido a que no hay límite en la cantidad de datos, pero los jerarquiza semánticamente.
      div(titulo="Datos no estructurados")
        .row
          .col-sm-2.mb-3
            figure
              img(src="@/assets/curso/temas/tema3/img4.png", alt="alt")  
          .col-md-8        
            p El símil más cercano de datos no estructurados, son los datos de tipo cualitativo, los cuales no se pueden analizar con herramientas matemáticas convencionales, porque carecen de un modelo lógico estructurado que permita hacer el análisis cuantitativamente, relacionando datos entre bases de datos de igual, o diferentes orígenes. 
            |No es una tarea fácil encontrar la información escondida dentro de los datos no estructurados. Requiere de análisis avanzado y un alto nivel de experiencia técnica, para realmente marcar la diferencia. Este puede ser un cambio costoso para muchas empresas.
            p.mt-3 El dilema actual, es que en los datos no estructurados encontramos la información más valiosa de los clientes o prospectos, información suministrada por hábitos que no se entregarían a un cajero o a una encuesta, información privilegiada que se obtiene de redes sociales con “likes” o que pertenecen a una red social muy particular; fotos o videos subidos en ciertos lugares “exóticos” por ejemplo, comprendiendo más del complejo comportamiento o intención del cliente moderno. Esta importancia nombrada, radica en las acciones de predicción que las organizaciones pueden hacer a los clientes, partiendo del conocimiento profundo de sus hábitos, incluso a clientes desde sus segmentos bien específicos, casi que, individualizando a un cliente en particular, para llegar a las características propias de alguien en especial.

    .row.justify-content-center
      .col-md-10
        .cajon.color-primario.tarjeta-verde.p-4
          .fila.justificar-contenido-entre.alinear-elementos-centro                  
            p No todas las compañías optarán por la misma metodología con respecto al desarrollo y la creación de sus capacidades con tecnologías <i>Big data</i>. Sin embargo, en todos los sectores existe la posibilidad de recurrir a estas nuevas tecnologías y analíticas para mejorar la toma de decisiones y el rendimiento, tanto a nivel interno como en el mercado.

    p.mt-5.mb-5 En definitiva, el <i>Big data</i> es una combinación de siete características, con las cuales las empresas pueden obtener una ventaja posicional frente a sus competidores, contribuyendo hacia el éxito asegurado. 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--white")
        .row(titulo="Volumen de datos")
          .col-md-1.mb-5
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
            p El principal factor del concepto <i>Big data</i>, se refiere a la cantidad de datos que se generan en diferentes tipos de emisores o dispositivos y de diferentes tipos de datos (estructurados, no estructurados o semi estructurados), esperando ser procesados y analizados. Esta cantidad aumenta exponencialmente en todo momento, cada minuto que ingresa una nueva organización al mundo digital.

        .row(titulo="Velocidad de los datos")
          .col-md-1.mb-5
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
              p Los datos se deslizan por grandes autopistas de información en diferentes rutas, buscando llegar rápidamente a sus receptores; entonces se hace importante su monitorización, control y análisis, con el fin de conocer qué información traen y extractar rápidamente la importancia de esta, para tomar acciones, como puede ser, por ejemplo, la información de fraude en alguna organización.

        .row(titulo="Variedad de los datos")
          .col-md-1.mb-5
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
              p Las formas, las fuentes, los tipos, el comportamiento y cómo se registran los datos, hace que sean estructurados; por ende, fáciles de relacionar y seguir, como también sin formato o no estructurados ambos, en todo caso, siendo útiles como elemento de información para los fines y necesidades particulares de la organización.

        .row(titulo="Veracidad de los datos")
          .col-md-1.mb-5
                figure
                  img(src='@/assets/curso/temas/tema3/img8.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
                p Conocer la providencia y origen de los datos, así como su validez, hace que cobren importancia y relevancia, basados en el tiempo, para validar este origen.

        .row(titulo="Viabilidad de los datos")
          .col-md-1.mb-5
                figure
                  img(src='@/assets/curso/temas/tema3/img9.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
                p Una organización que procura depurar sus procesos y mantener la efectividad, en alto grado, es una organización exitosa, pero parte de esa organización y de ese éxito se inicia con la depuración de la información, la clasificación de los datos, segmentarlos y un uso eficaz de estos, en las tomas de decisiones.

        .row(titulo="Visualización de los datos")
          .col-md-1.mb-5
                figure
                  img(src='@/assets/curso/temas/tema3/img10.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
                p Hay un dicho popular que dice: “todo entra por los ojos”; en este caso, la depuración, selección, clasificación, jerarquización y análisis de los datos no lo son todo, su presentación es de suma importancia, los datos se deben presentar de una manera sencilla, clara y concisa, lo más transparentes posible, habiendo encontrado patrones evidentes y ocultos, mostrándolos con todas sus relaciones. Existen aplicaciones y herramientas que hacen que la presentación de los datos sea más completa, estética y elocuente.
                
        .row(titulo="Valor de los datos")
          .col-md-1.mb-5
                figure
                  img(src='@/assets/curso/temas/tema3/img11.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
                p La axiología es la ciencia que estudia el valor de las cosas; sin querer entrar en detalles filosóficos, en la gestión de los datos podríamos deducir que el dato por sí solo no tiene valor alguno (teoría subjetivista del valor), pero de la buena depuración, transformación y análisis del dato, al brindar parámetros de decisión, se le otorga valor y es entonces que adquiere la riqueza que fundamenta las decisiones exitosas. Igualmente, existen herramientas poderosas, capaces de extraer de los datos (generalmente no estructurados) información valiosa, en términos de estrategia para las organizaciones.

              
    .row.justify.content-center.my-5
      ul.lista-ul
        li
          i.fas.fa-square
          b.h3 Métodos, técnicas y análisis de manejo de datos masivos

    p.mt-5.mb-5 Estudiado el contexto de las herramientas y técnicas tradicionales de análisis de datos aprenderemos, entonces, sobre las herramientas que actualmente se utilizan para el análisis de datos masivos (<i>Big data</i>).
    
    .tarjeta-pagada 
      .col-md.tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')
        .tarjeta.color-primera-tarjeta.p-3
          h2.text-center.mt-5 Aprendizaje automático
          p.text-center Las máquinas aprenden a comprender patrones de comportamiento, desde los más sencillos hasta los más complejos, utilizando algoritmos igualmente complicados; desde esa perspectiva, adquieren conocimientos que utilizarán en acciones posteriores, mejorando procesos (#[i machine learning]), al ir expandiendo su “memoria interna” con conocimientos, y aumentando fundamentalmente su desempeño, autonomía y automaticidad (inteligencia artificial).
      .col-md.tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')
        .tarjeta.color-secundario.p-3
          h2.text-center.mt-5 Redes de neuronas
          p.text-center Como su nombre lo dice, partiendo del aprendizaje automático las máquinas, a través de algoritmos, aprenden a crear redes de conocimiento e información, aprendiendo patrones nuevos cada vez; una interacción similar al funcionamiento de las neuronas humanas, que lo hacen por redes, y son patrones no lineales, siendo así más rápidas y eficaces.
      .col-md.tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')
        .col-md.tarjeta.color-tercera-tarjeta.p-3
          h2.text-center.mt-5 Aprendizaje reglas de asociación
          p.text-center Tiene un cierto parecido con la regresión, buscando la correlación de variables; en este caso, los algoritmos buscan relaciones entre las bases de datos, encontrando en estas relaciones puntos fuertes a la hora de tomar decisiones.
      .col-md.tarjeta-avatar
        img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')
        .col-md.tarjeta.color-cuarta-tarjeta.p-3
          h2.text-center.mt-5 Análisis de series temporales
          p.text-center Esta técnica es conocida desde la década de los 70´s donde, a partir de un histórico de datos, se proyectan datos a futuro; la diferencia aquí radica en el volumen, la velocidad y las otras “V” que fundamentan las características del <i>Big data</i>, aplicando algoritmos y máquinas capaces de analizar, en términos de segundos o minutos, los datos para “entregar” respuestas que sean útiles en las decisiones organizacionales.



</template>

<script>
export default {
  name: 'Tema3',
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
