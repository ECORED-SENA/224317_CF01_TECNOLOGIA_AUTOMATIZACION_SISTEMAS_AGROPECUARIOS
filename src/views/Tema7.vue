<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 <i>Machine learning</i> básico
      p(data-aos="fade-left") El aprendizaje automático, conocido como <i>machine learning</i>, es una rama de la inteligencia artificial que permite a los computadores aprender patrones a partir de datos para hacer predicciones o tomar decisiones sin ser programados explícitamente con reglas para cada caso. En el agro se aplica a la predicción de rendimientos, la detección de enfermedades en imágenes, la identificación de celo en vacas a partir de datos de actividad y la segmentación de productores según sus características.
      Separador
      //- Inicio Tema7.1
      .row
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 Conceptos fundamentales y diferencias con la IA y la estadística
      p(data-aos="fade-left") El aprendizaje automático utiliza un vocabulario propio, cuyos conceptos fundamentales se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Modelo
                p Representación que aprende de los datos y luego se usa para estimar resultados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conjunto de datos
                p Registros con los que aprende el modelo, como los registros de varias temporadas de un cultivo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Características
                p Variables de entrada que describen cada registro, como la lluvia, la fertilización o el tipo de suelo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Etiqueta
                p Variable objetivo que se quiere predecir, como el rendimiento del lote o la presencia de una enfermedad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Entrenamiento
                p Proceso de ajustar el modelo a los datos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta01_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Predicción
                p Uso del modelo entrenado para estimar la salida de casos nuevos.
      //- Fin Slideshow
      p(data-aos="fade-left") El aprendizaje automático se relaciona con la inteligencia artificial y con la estadística, pero no es igual a ellas, como se presenta a continuación (James et al., 2021):
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta02_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inteligencia artificial
                p Es el campo amplio que busca que las máquinas realicen tareas que requieren inteligencia. Incluye enfoques basados en reglas y también el aprendizaje automático, que es uno de sus subcampos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta02_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estadística
                p Comparte muchos métodos con el aprendizaje automático, como la regresión, pero se orienta a explicar relaciones y cuantificar la incertidumbre.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t7/tarjeta02_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aprendizaje automático
                p Se orienta sobre todo a la precisión de las predicciones con datos nuevos.
      //- Fin Slideshow
      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Tipos de aprendizaje, problemas y algoritmos introductorios
      p(data-aos="fade-left") Existen tres tipos principales de aprendizaje, que se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Aprendizaje supervisado")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t7/tarjeta03_1.png', alt='')
                .col-md-6.mb-4.mb-md-0
                  h4 Aprendizaje supervisado
                  p El modelo aprende de ejemplos etiquetados, es decir, casos en los que se conoce la respuesta correcta. Resuelve problemas de <b>regresión</b>, cuando predice un valor numérico, como el rendimiento de un lote, y de <b>clasificación</b>, cuando predice una categoría, como “planta sana” o “planta enferma”.
            .py-3.py-md-4(titulo="Aprendizaje no supervisado")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t7/tarjeta03_2.png', alt='')
                .col-md-6
                  h4 Aprendizaje no supervisado
                  p El modelo busca estructuras en datos sin etiquetas. Su problema más común es el <b>agrupamiento</b> o <i>clustering</i>, que forma grupos de elementos similares, como segmentar fincas según su tamaño, su productividad y su nivel tecnológico.
            .py-3.py-md-4(titulo="Aprendizaje por refuerzo")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t7/tarjeta03_3.png', alt='')
                .col-md-6
                  h4 Aprendizaje por refuerzo
                  p Un agente aprende mediante prueba y error, recibiendo recompensas según sus acciones. Es un enfoque explorado en el control automático de invernaderos.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") Los algoritmos introductorios más usados se presentan a continuación (James et al., 2021):
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t7/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Regresión lineal")
                p.mb-4 Modela la relación entre una variable numérica de salida y una o varias variables de entrada mediante una recta o un plano. Por ejemplo, estima el peso de un animal a partir de su perímetro torácico.
              .row(titulo="Regresión logística")
                p.mb-4 A pesar de su nombre, se usa para clasificación, pues estima la probabilidad de que un caso pertenezca a una categoría. Por ejemplo, la probabilidad de que una vaca presente mastitis según la conductividad de su leche.
              .row(titulo="Árboles de decisión")
                p.mb-4 Clasifican o predicen mediante una secuencia de preguntas del tipo “¿la humedad es mayor que 85 %?”, lo que los hace fáciles de interpretar.
              .row(titulo="K-means")
                p.mb-4 Forma un número definido de grupos, asignando cada elemento al grupo cuyo centro está más cercano.
      //- Fin Accordion 1
      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 Conjuntos de datos, métricas y evaluación del modelo
      p(data-aos="fade-left") Un conjunto de datos para aprendizaje automático se organiza como una tabla en la que cada fila es un registro y cada columna una característica, más la columna de etiqueta en los problemas supervisados. Para evaluar honestamente un modelo, los datos se dividen en tres partes, que se presentan a continuación:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t7/tarjeta04_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Conjunto de entrenamiento (cerca del 70 %)
              p.mb-0 Es la parte con la que el modelo aprende.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t7/tarjeta04_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Conjunto de validación (cerca del 15 %)
              p.mb-0 Se usa para ajustar las opciones del modelo y compararlo con otras alternativas.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t7/tarjeta04_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Conjunto de prueba (cerca del 15 %)
              p.mb-0 Se reserva hasta el final para medir el desempeño con datos que el modelo no utilizó durante su entrenamiento.
      //- Fin Tarjetas
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t7/img2.png', alt='', style="max-width: 5000px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 El <b>preprocesamiento</b> prepara los datos para el algoritmo e incluye el tratamiento de faltantes y atípicos, la codificación de variables categóricas en números, la estandarización o normalización de escalas y la selección de las características más relevantes. Un preprocesamiento cuidadoso suele mejorar más el resultado que cambiar de algoritmo.
          p Las <b>métricas de evaluación</b> miden qué tan bien predice el modelo y dependen del tipo de problema, como se presenta a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Problemas de regresión")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t7/tarjeta05_1.png', alt='')
                .col-md-6.mb-4.mb-md-0
                  h4 Problemas de regresión
                  p El <b>error absoluto</b> medio indica cuánto se equivoca el modelo en promedio y el <b>coeficiente de determinación R²</b> indica qué proporción de la variabilidad explica.
            .py-3.py-md-4(titulo="Problemas de clasificación")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t7/tarjeta05_2.png', alt='')
                .col-md-6
                  h4 Problemas de clasificación
                  p La <b>exactitud</b> es la proporción de casos bien clasificados, la <b>precisión</b> es la proporción de casos predichos como positivos que realmente lo son y la <b>sensibilidad</b> es la proporción de positivos reales que el modelo detecta, especialmente importante cuando pasar por alto un caso, como un animal enfermo, es costoso.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El <b>sobreajuste</b> ocurre cuando el modelo aprende de memoria los datos de entrenamiento, incluido su ruido, y falla con datos nuevos. El <b>subajuste</b> ocurre cuando el modelo es demasiado simple para captar el patrón y falla tanto en entrenamiento como en prueba. El ciclo de trabajo consiste en entrenar el modelo, evaluarlo con los datos de validación, ajustarlo y finalmente medir su desempeño con el conjunto de prueba antes de usarlo para predecir casos reales. La interpretación de las métricas en un caso concreto se presenta a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Organizar los resultados
                      p Un modelo evalúa 100 vacas del conjunto de prueba, de las cuales 10 tienen mastitis. Detecta 8 de ellas y señala por error a 4 vacas sanas, de modo que clasifica bien a 86 vacas sanas.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t7/tarjeta06_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t7/tarjeta06_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Calcular la sensibilidad
                      p 8 ÷ 10 = 80 %.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Calcular la precisión
                      p 8 ÷ 12 = 66,7 %.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t7/tarjeta06_3.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t7/tarjeta06_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Calcular la exactitud
                      p (8 + 86) ÷ 100 = 94 %.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 5. Interpretar
                      p Aunque la exactitud parece alta, dos vacas enfermas no fueron detectadas, por lo que conviene mejorar la sensibilidad.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t7/tarjeta06_5.png', alt='').img125
            //- Fin Linea de tiempo
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-6.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 8.
            span Ciclo básico de un proyecto de <i>machine learning</i>
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t7/img3.svg', alt='Diagrama cíclico sobre el desarrollo de un modelo de aprendizaje automático que incluye preparación de datos, entrenamiento, validación, evaluación, ajustes y pruebas para obtener un desempeño adecuado.', style="width: 800px;")
      p(data-aos="fade-left") Esta figura presenta las etapas del ciclo de construcción de un modelo de aprendizaje automático, que se repiten hasta obtener un desempeño adecuado.
</template>

<script>
export default {
  name: 'Tema7',
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
