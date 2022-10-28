<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica de datos

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
          .col-sm-8.mb-3
            p.mt-5 Para empezar este aprendizaje, definamos qué es la analítica de datos. Se refiere a todas las acciones que permiten recolectar, administrar, gestionar y analizar datos, con el objeto de buscar oportunidades de negocio en el mercado, así como también encontrar óptimos productivos desde el análisis de datos suministrados por: empleados, formatos, dispositivos móviles, maquinaria inteligente, entre otros; permite gestionar acciones de mejora de forma rápida y eficaz, e igualmente es muy útil en la toma de decisiones proactivas para anticipar eventos.
            .cajon.color-primario.tarjeta-verde.p-4
              .fila.justificar-contenido-entre.alinear-elementos-centro                  
                 p El análisis de datos debe ser inteligente depurando, seleccionando, segmentando la información que sea pertinente para el objeto de análisis, así como también al desechar la información que no sea útil. La rapidez en el análisis de información, también es una acción valiosa y recurrente, porque el intercambio de información llega en segundos, que pueden ser críticos para tomar decisiones asertivas y a tiempo.

    p.mt-5 En la analítica de datos, encontramos temas como modelos matemáticos y estadística descriptiva e inferencial, para llegar a las técnicas de toma de decisiones. A continuación, lo invitamos a estudiar cada uno de estos temas. 
      
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
        h2 1.1 Modelos matemáticos 
    
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-8.mb-3
            p.mt-5 Comencemos con los modelos matemáticos, los cuales son la representación simbólica en lenguaje o términos matemáticos, de cualquier evento o fenómeno físico, químico, económico, social o tecnológico. A través de ellos se pueden realizar “observaciones de comportamiento” simbólicos, repetitivos, para conocer el grado del comportamiento real o la cercanía con el modelo; igualmente, para medir, inferir, ajustar, valorar o hasta desechar una variable observada. En administración, es relevante y fundamental la utilidad de los modelos matemáticos, a través de la investigación de operaciones, la programación lineal y los modelos cuantitativos, buscando optimizar o resolver algunos fenómenos que se presentan a menudo en las organizaciones, reduciendo la incertidumbre en la toma de decisiones organizacionales.
          .col-sm-4.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")
    
      .row.justify-content-center.mt-3 
        .col-md-10.mb-3             
          .cajon.color-primario.tarjeta-verde.p-4
            .fila.justificar-contenido-entre.alinear-elementos-centro                  
              p Los modelos matemáticos son conceptos simbólicos, de carácter muy amplio o muy cerrado, lo que hace que sean bastante diversos, siendo a veces difíciles de caracterizar, parametrizar y mucho menos estandarizar, pero sí se ha logrado que cumplan con las siguientes características:

      .col-md-9
        TabsA.color-acento-contenido.mt-5
          .tarjeta.tarjeta-verde.color-contenido.p-4( titulo="Que sean equivalentes")
            .row.justify-content-center
              p Se refiere al grado de “acercamiento” de la realidad, con el modelo. Generalmente, se mide de forma porcentual, debiendo cumplir como mínimo un 75 % con respecto al original, para que el modelo sea válido. 
          .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Que sean objetivos")
            .row.justify-content-center
              p Deben encontrarse libres de vicios de: juicio, sensorial, física, social, u otra entidad que distraiga del objetivo de la observación; asimismo, deben someterse a repeticiones, ajustando los parámetros de observación y de comportamiento de la realidad, versus el modelo. Deben validarse con variables no sesgadas.                
          .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Que sean simples")
            .row.justify-content-center
              p Entre más sencillo, más compresible, calculable, y el modelo es el objetivo.
          .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Que sean sensibles")
            .row.justify-content-center
              p Los modelos no siempre son inflexibles; deben ser flexibles a cambios del comportamiento real, y van articulados con la objetividad y con la equivalencia.
          .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Que sean estables")
            .row.justify-content-center
              p Las variaciones que se presenten en la realidad, deben ser igualmente correspondientes en magnitud en el modelo; a grandes variaciones reales, grandes variaciones en el modelo y viceversa.
          .tarjeta.tarjeta-verde.color-contenido.p-4(titulo="Que sean universales")
            .row.justify-content-center
              p Se basa en que el modelo debe haber satisfecho procesos de pruebas en diferentes ambientes, que sirvan de referencia general para comportamientos reales, bajo los mismos parámetros.

      .col.md-3.mt-5
        figure
          img(src="@/assets/curso/temas/tema1/img3.png", alt="alt")      

      p.mt-5 Hay que mencionar, además, que el modelo matemático es un lenguaje que, bien leído, se interpreta como debe ser; asimismo, tiene que contener una gramática que interprete el fenómeno o evento observado y estudiado, de tal forma, que la traducción de la realidad al modelo, represente de la mejor y veraz forma posible, el fenómeno real, y así permitir que se puedan realizar simulaciones con alto grado de probabilidad de éxito, o sea, que el modelo represente, en algo, la realidad que se quiere expresar en ese lenguaje matemático, para cuantificar en datos, y volver a la realidad y corroborar lo calculado.
      p.mt-5 Los tipos de modelo se pueden clasificar por:

      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--white")
        .row(titulo="Origen de la información")
          .col-md-1.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
            ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Heurísticos: se centran en las causas, se estudian los orígenes de los fenómenos de causa natural.
                li 
                  i.lista-ul__vineta
                  | Empíricos: se realizan desde la observación, con experimentos directos. Son experimentales.

        .row(titulo="Tipo de representación")
          .col-md-1.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
            ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Cualitativo: importa el comportamiento del fenómeno, la tendencia de este o el comportamiento de algunos atributos sin importar su valor numérico.
                li 
                  i.lista-ul__vineta
                  | Cuantitativo: utiliza la matemática para determinar valores precisos del comportamiento del fenómeno y se pueden realizar operaciones y análisis complejos

        .row(titulo="Aleatoriedad")
          .col-md-1.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='alt')
          .col-md-10.mt-2.mb-4.mb-md-0
            ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Determinista: es un valor preciso sin incertidumbre, que parte de valores determinados ya conocidos.
                li 
                  i.lista-ul__vineta
                  | Estocástico: hace uso de la probabilidad, con cierta incertidumbre de éxito o fracaso.

        .row(titulo="Uso")
          .col-md-1.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='alt')

          .col-md-10.mt-2.mb-4.mb-md-0
            ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Simulación: utiliza herramientas tanto heurísticas como probabilísticas, para llegar a un resultado; los eventos se pueden medir (cuantitativo), prediciendo situaciones, partiendo de valores reales del presente.
                li 
                  i.lista-ul__vineta
                  | Control: modelos matemáticos que son útiles para verificar el desempeño de un proceso o comportamiento de una o varias variables con parámetros de entrada y salida, así como variables con máximos y/o mínimos (fronteras de control).
                li 
                  i.lista-ul__vineta
                  | Optimización: son modelos matemáticos planteados de acuerdo con una situación de una problemática específica, brindando varias posibilidades de respuesta y seleccionando, generalmente, la más conveniente en términos de costo, tiempo u otra variable representativa (el óptimo).

    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Estadística descriptiva 

    p El siguiente aspecto trata de la estadística, rama de la matemática que recoge, organiza, jerarquiza, ordena, clasifica y analiza datos e información. Solo tomaremos el concepto descriptivo de la estadística, como es el análisis de eventos, analizando datos agrupados y no agrupados. Estos datos pueden ser variables estadísticas, las cuales se dan como un parámetro que asume las características propias de una población, objeto de algún estudio.   

    p.mt-5 Estas variables pueden ser: 

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img9.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Variable cuantitativa 
              p.mb-0 Adquiere características que se pueden expresar con valores numéricos; pueden ser de tipo discreto (se expresan números enteros naturales, por ejemplo, el número de personas en un cine, la cantidad vehículos en un parqueadero) o continuas (se expresan con números decimales, como el peso, la estatura o la velocidad).
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img8.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Variable cualitativa
              p.mb-0 Toma atributos que describen cualidades y características específicas que describen una población objeto de estudio, sin utilizar parámetros numéricos; pueden ser ordinales (se refieren a un tipo de orden o secuencia, por ejemplo, alto, medio, bajo, generan algún tipo de nivel a seguir) o nominales (se refieren a atributos como el color de un objeto, la intensidad de este, o los sabores que se pueden apreciar en las comidas, no tienen jerarquías).

    p.mt-5 Cuando hablamos de estadística descriptiva es importante conocer qué son las tablas de frecuencia, los histogramas y los gráficos.
    p.mt-3 A continuación, estudiaremos cada uno de estos términos:

    TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Tabla de frecuencia")
          .row
            .col-md-6.mb-4.mb-md-0
              .row.justify-content-center
                .col-md-6
                  figura
                    img(src="@/assets/curso/temas/tema1/img10.png", alt="alt")
            .col-md-6.mt-4.mb-md-0             
              p Después de recolectar datos, la tabla de frecuencias ordena, jerarquiza y clasifica los datos recolectados (cualitativos o cuantitativos), procurando asignar las cantidades correspondientes por intervalos o categorías asignadas, para análisis e informes posteriores, de acuerdo con las necesidades requeridas. 

        .py-3.py-md-4(titulo="Histograma")
          .row
            .col-md-6.mb-4.mb-md-0
              .row.justify-content-center
                .col-md-6
                  figura
                    img(src="@/assets/curso/temas/tema1/img11.png", alt="alt")
            .col-md-6.mt-5.mb-md-0 
              p Es un gráfico de barras que representa los datos de la tabla de frecuencia; el ancho de cada barra es el intervalo (marca de clase); para el caso de datos continuos, cada evento es el ancho de barra para datos discretos. El alto de cada barra es la frecuencia (número de veces que se repite el evento).
                             
        .py-3.py-md-4(titulo="Gráfico")
          .row
            .col-md-6.mb-4.mb-md-0
              .row.justify-content-center
                .col-md-6
                  figura
                    img(src="@/assets/curso/temas/tema1/img12.png", alt="alt")
            .col-md-6.mb-4.mb-md-0 
              p La mente humana recuerda y procesa más rápido, útil y eficazmente imágenes, gráficos y formas, que las matrices, tablas, o textos largos y aburridos. Los gráficos son veraces, visuales, llenos de colores y dinámicos, lo que genera en nuestra mente mayor grado de recordación, mejorando el proceso epistemológico. Sencillez, claridad y precisión, hacen que los informes sean más fluidos, más fáciles de analizar, y recepcionar mejor una respuesta ante ellos. En un gráfico se puede condensar mucha información, haciendo que resalten las características y atributos de variables que podrían ser más difíciles de estructurar en una tabla o matriz.

    p.mt-5  Y dentro del rango de los gráficos, encontramos diferentes tipos de ellos
    p.mb-5 Conozcamos cuáles son estos tipos:

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        .row.justify-content-center
          .col-sm-6  
            figure 
              img(src='@/assets/curso/temas/tema1/img13.png', alt='alt')
              
      .tarjeta.color-secundario--borde.contenido-tarjeta.p-3(x="28%" y="40%" numero="+")  
          .row.justify-content-center 
            h4.mb-3.text-center Gráfico circular:  
            p.mb-0 es una representación curva de las frecuencias relativas de una variable cualitativa o discreta que permite, de una manera sencilla y rápida, su comparación. El círculo representa la totalidad que se quiere observar y cada porción, llamada sector, representa la proporción de cada categoría de la variable con respecto al total. 
                         
      .tarjeta.color-secundario--borde.contenido-tarjeta.p-3(x="50%" y="7%" numero="+")
          .row.justify-content-center 
            h4.mb-3.text-center Gráfico dispersión:  
            p.mb-0 es el clásico gráfico de la línea recta, donde se tiene una variable dependiente, que puede tomar cualquier valor y otra, que depende del valor de la otra. Existe una correlación entre las dos variables: directas (ambas variables van en el mismo sentido, por ejemplo, si X, aumenta, Y aumenta), o inversas (si X aumenta, Y disminuye).
                     
      .tarjeta.color-secundario--borde.contenido-tarjeta.p-3(x="72%" y="40%" numero="+")
          .row.justify-content-center 
            h4.mb-3.text-center Gráfico de líneas:  
            p.mb-0 es una representación gráfica en un eje cartesiano, de la relación que existe entre dos variables, reflejando con claridad los cambios producidos. Se suele utilizar para presentar tendencias temporales.
              
      .tarjeta.color-secundario--borde.contenido-tarjeta.p-3(x="65%" y="82%" numero="+")
          .row.justify-content-center 
            h4.mb-3.text-center Pictograma:  
            p.mb-0 es un gráfico que representa, mediante figuras o símbolos, las frecuencias de una variable cualitativa o discreta. Al igual que los gráficos de barras suelen usarse para comparar magnitudes o ver la evolución, en el tiempo, de una categoría concreta. 
              
      .tarjeta.color-secundario--borde.contenido-tarjeta.p-3(x="35%" y="82%" numero="+")      
          .row.justify-content-center 
            h4.mb-3.text-center Gráfico de barras:  
            p.mb-0 es la representación, tipo cartesiano, donde el #[i eje X] representa las categorías o atributos de la variable (cualitativa o cuantitativa); en el #[i eje Y], se representan las frecuencias (cantidad que presentan estas categorías según los intervalos en que se encuentren), y pueden ser verticales u horizontales, simples o dobles, en dos o tres ejes o dimensiones.

    p.mt-5 Desde otro punto de vista, existen distintos tipos de información que, de acuerdo con el uso que se les dé y cómo se representen, generalmente son transversales a las áreas funcionales organizacionales.
    p Uno de ellos, se refiere a las medidas o parámetros de tendencia central, que son números que se ubican buscando el centro de la distribución (concentración) de los datos de un grupo de observaciones, agrupadas o no agrupadas.

    p.mt-5.mb-5 Las medidas más utilizadas y conocidas son:  
    
      .row.justify-content-center
        .col-md-10    
          .row.justify-content-center
            .col-md-4
              .tarjeta.color-verde-contenido-tarjeta.h-tarjetas.p-3     
                .row.justify-content-center 
                  .col-md-5
                    figure 
                        img(src='@/assets/curso/temas/tema1/img14.png', alt='alt')         
                  h4.mt-5.mb-3.text-center Media aritmética  
                  p.mb-0 Conocida como promedio, es el valor que tendrían los datos, si todos ellos fueran iguales o, también, el valor que correspondería a cada uno de los datos de la distribución si su suma total se repartiera por igual.

            .col-md-4
              .tarjeta.color-verde-contenido-tarjeta.h-tarjetas.p-3     
                .row.justify-content-center 
                  .col-md-5
                    figure 
                        img(src='@/assets/curso/temas/tema1/img15.png', alt='alt')         
                  h4.mt-5.mb-3.text-center Mediana  
                  p.mb-0 Si se ordenan todos los datos, de menor a mayor, es el valor que ocupa la posición central. Si el número de datos es par, la mediana es la media aritmética de los dos centrales.

            .col-md-4
              .tarjeta.color-verde-contenido-tarjeta.h-tarjetas.p-3     
                .row.justify-content-center 
                  .col-md-5
                    figure 
                        img(src='@/assets/curso/temas/tema1/img16.png', alt='alt')         
                  h4.mt-5.mb-3.text-center Moda  
                  p.mb-0 La moda es el valor que más se repite o, lo que es lo mismo, el que tiene la mayor frecuencia.

    p.mt-5 Continuemos con las medidas de variabilidad o dispersión, las cuales se definen como las medidas estadísticas orientadas en dar a conocer qué tan lejanas o próximas se encuentran las puntuaciones de una variable, #[span.text-bol con] respecto a la media o promedio aritmético.Estas medidas, son contrarias a las de tendencia central porque, precisamente, miden la “dispersión” o distancia desde el centro de los datos. 
    p.mt-5.mb-3 Las más conocidas son:

    .row.justify-content-center
      .col-md-4
       figure 
        img(src='@/assets/curso/temas/tema1/img18.png', alt='alt')  
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris").mt-5
          .row(titulo="Desviación estándar")
            p Este parámetro mide realmente qué tan lejana se encuentra la distribución de datos, con respecto a un parámetro de medida central; aumenta conforme aumenta la dispersión. 

          div(titulo="Varianza")
            p Se conoce como varianza a la raíz cuadrada que se desprende de una desviación estándar, la cual permite que las industrias de manufactura puedan trabajar con precisión en su producción, y reduzcan su índice de errores.

    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Estadística inferencial             

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img17.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 Desde otro ángulo, tenemos la estadística inferencial, la cual está encargada de hacer deducciones a partir de muestras, que deben contener todas las características y propiedades de la población.
            |La estadística inferencial tiene sus propias herramientas y mecanismos para llevar a cabo su objetivo; para esto están los intervalos de confianza, pruebas de hipótesis, desviación estándar, la prueba de chi-cuadrado, entre otras. La regresión se considera otra de las ramas fuertes que, a nivel inferencial, brinda grandes posibilidades a la organización, dando patrones de proyecciones y pronósticos de ventas, producción y análisis de inventarios en almacén.
            |Por ende, la estadística inferencial es sumamente útil en el análisis de poblaciones y tendencias, para hacerse una idea posible de las acciones y reacciones, de cara a condiciones específicas. Esto no significa que se las pueda predecir fielmente, ni que estemos en presencia de una ciencia exacta, pero sí de una aproximación, posible, al resultado final.

    p.mt-5.mb-5 Algunos ejemplos de la aplicación de la estadística inferencial son:

    .row.justify-content-center
      .col-md-10    
        .row.justify-content-center
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            figure
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              figure
                img(src="@/assets/curso/temas/tema1/img20.png", alt="alt")
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              figure
                img(src="@/assets/curso/temas/tema1/img21.png", alt="alt")    

        .row.justify-content-center.mt-5   
          figure
            img(src="@/assets/curso/temas/tema1/img22.png", alt="alt")                                

    p.mt-5.mb-5 Es así como la población generalmente se considera, de acuerdo a unos estimados de cálculo:
    .row.justify-content-center
      .col-md-2.m-5
       figure 
        img(src='@/assets/curso/temas/tema1/img23.png', alt='alt')  
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-gris").mt-5
          .row(titulo="Población estadísticamente finita ")
            p Que tiene fin; toda población bajo un estimado convencional inferior a 100.000 se considera finita, aunque puede variar según cómo se aborde el objeto de investigación, siempre y cuando no genere sesgos o errores de estimación estadística. 

          div(titulo="Población estadísticamente infinita")
            p Se trata de aquella población que no tiene fin. Por ejemplo, el número de planetas que existen en el Universo, aunque puede que sea finito; el número es tan grande y desconocido, que estadísticamente se asume como infinito. Pero también para facilidad de cálculos, una población que requiere ser estudiada como es la estimación demográfica poblacional (grupos de personas reunidas en un lugar) de la ciudad de Bogotá (con más de 9 millones de habitantes), se puede considerar como infinita.

    p.mt-5 Asimismo, si se quiere hacer una buena investigación, la calidad de la muestra estadística es esencial. De nada sirve realizar las métricas estadísticas más complejas con los modelos más sofisticados, si la muestra estadística está sesgada, es decir, si la muestra no es representativa.
    p.mb-5 Por eso, cuando se quieren obtener datos para una muestra que sea representativa, se deben tener en cuenta aspectos como:

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img24.png", alt="alt")
            .crd_hover_txt--body
              h5.mb-3.text-center Tamaño suficientemente grande
              p.mb-0 No existe un tamaño ideal para deducir la muestra; para esto existen fórmulas matemáticas que relacionan la población con el tipo de variable (discreta o continua), la fórmula también estima si la población es finita o infinita.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img25.png", alt="alt")
            .crd_hover_txt--body
              h5.mb-3.text-center Aleatoriedad
              p.mb-0 La selección de los datos de una muestra estadística debe ser aleatoria, es decir, debe ser totalmente al azar. Si en lugar de realizarlo al azar, se realiza un proceso de selección de datos planificado, se está introduciendo un sesgo a la obtención de datos.
         
    p.mt--.mb-5 Existen diferentes tipos de muestreo según el tipo de variable, el método, o el tipo de población. 
    p.mb-5 Conozcamos cada uno de ellos:


    ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10 
              figure 
                img(src='@/assets/curso/temas/tema1/img26.png', alt='alt')
                
        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="23%" y="33%" numero="+")  
            .row.justify-content-center  
              p.mb-0 Existe igual probabilidad de estar o no en la muestra, por parte de todos los elementos o individuos.
                          
        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="67%" y="32%" numero="+")
            .row.justify-content-center   
              p.mb-0 No aleatoriedad en la selección; esta depende del método y de la subjetividad del seleccionador.
                      
        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="82%" y="58%" numero="+")
            .row.justify-content-center  
              p.mb-0 La población es elegida en función a unas características determinadas.

        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="53%" y="57%" numero="+")
            .row.justify-content-center  
              p.mb-0 En primer lugar, se seleccionan diferentes sujetos. Luego, estos sujetos colaboran para encontrar a más sujetos que tengan relación con ellos.

        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="38%" y="57%" numero="+")
            .row.justify-content-center  
              p.mb-0 En este caso, la población se enumera y se agrupa en equipos de 10 personas. Posteriormente, se selecciona a un miembro de cada equipo para elaborar la muestra.

        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="11%" y="57%" numero="+")
            .row.justify-content-center  
              p.mb-0 Es un conjunto de variables aleatorias independientes e idénticamente distribuidas; todas tienen las mismas posibilidades de ser elegidas.
                                           
        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="67%" y="91%" numero="+")
            .row.justify-content-center  
              p.mb-0 Es una muestra elegida por los propios investigadores, según su interés o cercanía.
                
        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="38%" y="95%" numero="+")      
            .row.justify-content-center 
              p.mb-0 En este caso, la población se divide en subgrupos o estratos, con base en las variables de estratificación.

        .tarjeta.color-secundario--borde.contenido-tarjeta-verde.p-3(x="10%" y="95%" numero="+")      
            .row.justify-content-center 
              p.mb-0 La población se encuentra ya agrupada previamente y de estos grupos se extraen los individuos para conformar la muestra.

 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
