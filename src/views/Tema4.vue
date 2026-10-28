<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Estadística y modelos matemáticos aplicados al agro
      p(data-aos="fade-left") El procesamiento de datos agropecuarios se apoya en la estadística, que ofrece los métodos para organizar, resumir e interpretar datos, y en los modelos matemáticos, que representan de forma simplificada el comportamiento de cultivos y animales. Ambos permiten convertir miles de lecturas y registros en indicadores comprensibles y en estimaciones útiles para decidir, siempre que se elijan medidas y modelos adecuados al tipo de variable y al propósito del análisis.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Estadística descriptiva e inferencial, población y muestra
      p(data-aos="fade-left") La estadística se divide en dos grandes ramas, que se presentan a continuación (James et al., 2021):
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Estadística descriptiva")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Estadística descriptiva
                p Reúne los métodos para organizar, resumir y presentar un conjunto de datos mediante tablas, gráficos y medidas numéricas, sin ir más allá de los datos recolectados.
          .py-3.py-md-4(titulo="Estadística inferencial")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-md-6
                h4 Estadística inferencial
                p Utiliza los datos de una muestra para obtener conclusiones sobre una población más amplia, acompañadas de una medida de incertidumbre, como un intervalo de confianza o una prueba de hipótesis.
      //- Cierres Pestanas horizontales
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img1.png', alt='', style="max-width: 5000px;")
        .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 La <b>población</b> es el conjunto completo de elementos sobre los que se quiere obtener información, por ejemplo, todas las plantas de un lote de café, todas las vacas de un hato o todas las fincas de un municipio. La <b>muestra</b> es un subconjunto de la población que se mide o registra efectivamente. Se trabaja con muestras cuando medir toda la población es costoso, lento o destructivo, como ocurre con los análisis de suelos o los conteos de plagas en cultivos extensos.
          p Para que las conclusiones sean válidas, la muestra debe ser representativa, es decir, reflejar las características de la población. Los métodos de muestreo habituales en el agro se presentan a continuación:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Muestreo aleatorio simple
              p.mb-0 Todos los elementos de la población tienen la misma probabilidad de ser elegidos.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Muestreo estratificado
              p.mb-0 La población se divide en grupos homogéneos, como lotes con distintos tipos de suelo, y se toma una muestra de cada uno.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t4/tarjeta02_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Error frecuente
              p.mb-0 Un monitoreo de plagas que solo revisa las plantas cercanas al camino no es representativo y puede subestimar o sobrestimar la incidencia real.
      //- Fin Tarjetas
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Variables, niveles de medición y medidas descriptivas
      p(data-aos="fade-left") Una <b>variable</b> es una característica que puede tomar distintos valores entre los elementos estudiados, como la raza de un animal, el pH del suelo o el número de frutos por planta. Las variables se clasifican en <b>cualitativas</b>, que expresan categorías o cualidades, y <b>cuantitativas</b>, que expresan cantidades numéricas. Las cuantitativas pueden ser <b>discretas</b>, cuando toman valores enteros que se cuentan, como el número de lechones por camada, o <b>continuas</b>, cuando pueden tomar cualquier valor en un intervalo, como el peso o la temperatura.
      p(data-aos="fade-left") Además de su tipo, cada variable tiene un nivel de medición que define las operaciones estadísticas que admite. Los cuatro niveles se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 7.
                  span Niveles de medición de variables agropecuarias
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Nivel
                        th(style="width: 25%") Propiedad
                        th(style="width: 30%") Ejemplo agropecuario
                        th(style="width: 25%") Operaciones válidas
                    tbody
                      tr
                        td Nominal
                        td Categorías sin orden.
                        td Raza, variedad, tipo de riego.
                        td Conteo, moda, porcentajes.
                      tr
                        td Ordinal
                        td Categorías con orden.
                        td Severidad de una enfermedad, calidad de la fruta.
                        td Además de las anteriores, mediana y percentiles.
                      tr
                        td Intervalo
                        td Diferencias medibles; cero arbitrario.
                        td Temperatura en °C, fecha.
                        td Además de las anteriores, media y desviación estándar.
                      tr
                        td Razón
                        td Cero absoluto; proporciones válidas.
                        td Peso, litros de leche, precipitación.
                        td Todas, incluidas razones y porcentajes de cambio.
            //- FinTabla
            p(data-aos="fade-left") Las medidas descriptivas resumen un conjunto de datos en pocos valores y se agrupan en dos familias, que se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Medidas de tendencia central
                p Indican el valor típico del conjunto. La <b>media</b> o promedio es la suma de los valores dividida entre el número de datos, la <b>mediana</b> es el valor central cuando los datos se ordenan y la <b>moda</b> es el valor más frecuente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Medidas de dispersión
                p Indican qué tan agrupados o dispersos están los datos. El <b>rango</b> es la diferencia entre el máximo y el mínimo, la <b>desviación estándar</b> mide la separación promedio respecto a la media y el <b>coeficiente de variación</b> expresa esa desviación como porcentaje de la media, lo que permite comparar la variabilidad de variables distintas.
      //- Fin Slideshow
      p(data-aos="fade-left") El cálculo e interpretación de estas medidas en un lote de pollos se presenta a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center
              .col-lg-9
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Registrar los datos
                      p En un galpón se pesan diez pollos a los 35 días, con pesos en kilogramos de 2,1; 2,3; 2,2; 2,4; 2,0; 2,3; 2,2; 2,5; 2,1 y 2,2.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Calcular la tendencia central
                      p La media es 22,3 ÷ 10 = 2,23 kg y la mediana, con los datos ordenados, es 2,2 kg.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Calcular la dispersión
                      p El rango es 2,5 − 2,0 = 0,5 kg y la desviación estándar muestral es de aproximadamente 0,15 kg.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_3.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Calcular el coeficiente de variación
                      p 0,15 ÷ 2,23 × 100 ≈ 6,7 %.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 5. Interpretar
                      p Un coeficiente bajo indica un lote uniforme, lo que facilita la programación del sacrificio.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta04_5.png', alt='').img125
            //- Fin Linea de tiempo
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Indicadores agropecuarios
      p(data-aos="fade-left") Un <b>indicador</b> es una medida, generalmente una razón o un porcentaje, que resume el desempeño de un proceso y permite compararlo en el tiempo o con otros procesos. Se construye a partir de variables y debe tener una definición precisa, una fórmula, una unidad, una frecuencia de cálculo y una fuente de datos. En el sector agropecuario, los indicadores permiten evaluar la productividad, la eficiencia en el uso de recursos, la sanidad y la rentabilidad. Los de uso más frecuente se presentan a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 8.
                  span Indicadores agropecuarios frecuentes
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Indicador
                        th(style="width: 35%") Fórmula
                        th(style="width: 20%") Unidad
                        th(style="width: 20%") Área
                    tbody
                      tr
                        td Rendimiento
                        td Producción cosechada ÷ área cosechada
                        td t/ha
                        td Agrícola
                      tr
                        td Eficiencia en el uso del agua
                        td Producción ÷ volumen de agua aplicado
                        td kg/m³
                        td Agrícola
                      tr
                        td Conversión alimenticia
                        td Alimento consumido ÷ ganancia de peso
                        td kg/kg
                        td Pecuaria
                      tr
                        td Mortalidad
                        td Animales muertos ÷ animales iniciales × 100
                        td %
                        td Pecuaria
                      tr
                        td Producción por vaca
                        td Litros producidos ÷ vacas en ordeño
                        td L/vaca/día
                        td Pecuaria
                      tr
                        td Rendimiento industrial
                        td Producto terminado ÷ materia prima × 100
                        td %
                        td Agroindustrial
            //- FinTabla
            Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Modelos matemáticos: concepto, tipos y características
      p(data-aos="fade-left") Un modelo matemático expresa la relación entre las variables de un sistema y distingue tres tipos de elementos, que se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Variables de entrada
                p Influyen en el sistema, como la temperatura, la edad del animal o la cantidad de alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Parámetros
                p Son valores constantes que caracterizan el sistema, como la temperatura base de un cultivo o un coeficiente propio de la raza.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Variables de salida
                p Son los resultados que se quieren estimar, como el rendimiento o el peso. Por ejemplo, un modelo de crecimiento estima el peso de un novillo a partir de su edad y su consumo de materia seca.
      //- Fin Slideshow
      p(data-aos="fade-left") Un buen modelo es <b>simplificado</b>, porque representa solo los aspectos relevantes para su propósito; <b>validado</b>, porque sus resultados se han comparado con datos reales; tiene un <b>dominio de aplicación</b> definido, es decir, condiciones bajo las cuales funciona; y es <b>interpretable</b>, en la medida en que sus resultados pueden explicarse. Todo modelo es una aproximación, por lo que su uso requiere conocer sus supuestos y su margen de error. Los modelos se clasifican según distintos criterios, que se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Según la incertidumbre")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Según la incertidumbre
                p Los <b>determinísticos</b> producen siempre el mismo resultado para unas entradas dadas, mientras que los <b>estocásticos</b> incorporan variabilidad aleatoria y expresan sus resultados en términos de probabilidad.
          .py-3.py-md-4(titulo="Según su fundamento")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_2.png')
              .col-md-6.mb-4.mb-md-0
                h4 Según su fundamento
                p Los <b>empíricos</b> se construyen a partir de relaciones identificadas en los datos, mientras que los <b>mecanísticos</b> se basan en los procesos físicos, químicos o biológicos que explican el sistema.
          .py-3.py-md-4(titulo="Según su relación con el tiempo")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_3.png')
              .col-md-6.mb-4.mb-md-0
                h4 Según su relación con el tiempo
                p Los <b>estáticos</b> describen un momento, mientras que los <b>dinámicos</b> describen cambios a lo largo del tiempo.
      //- Cierres Pestanas horizontales
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Modelos aplicados a cultivos y sistemas pecuarios
      p(data-aos="fade-left") En la producción agrícola, uno de los modelos más utilizados es el de <b>grados día de desarrollo</b>, que estima el avance fenológico de un cultivo o de una plaga a partir de la temperatura. Con estaciones meteorológicas automatizadas, su cálculo puede actualizarse a diario siguiendo los pasos que se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center
              .col-lg-9
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Obtener la temperatura media
                      p Se toma la temperatura media de cada día registrada por la estación meteorológica.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta07_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta07_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Restar la temperatura base
                      p Se resta la temperatura por debajo de la cual el organismo no se desarrolla. Si el resultado es negativo, ese día se cuenta como cero.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Acumular los valores
                      p Los valores diarios se suman desde la siembra o desde el inicio del monitoreo.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta07_3.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t4/tarjeta07_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 4. Comparar con el umbral
                      p Cuando la suma alcanza el umbral conocido se espera una etapa determinada, como la floración o la aparición de una nueva generación de insectos, y se programan las labores correspondientes.
            //- Fin Linea de tiempo
      p(data-aos="fade-left") En la producción pecuaria, los modelos se utilizan para describir el crecimiento de los animales, la producción de leche, las necesidades nutricionales y la eficiencia alimenticia. Un ejemplo clásico es el modelo de Wood para la curva de lactancia, que describe la producción diaria de leche en función de los días de lactancia mediante una ecuación con tres parámetros, relacionados con el nivel de producción inicial, la fase de ascenso hasta el pico y el descenso posterior (Wood, 1967). Ajustado con los datos del ordeño automatizado, el modelo permite estimar la producción total de la lactancia y detectar vacas que se apartan de su curva esperada. Los modelos de uso frecuente en el agro se relacionan a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 9.
                  span Modelos matemáticos en cultivos y sistemas pecuarios
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Modelo
                        th(style="width: 25%") Entradas
                        th(style="width: 25%") Salida
                        th(style="width: 30%") Utilidad
                    tbody
                      tr
                        td Grados día
                        td Temperatura diaria, temperatura base.
                        td Etapa fenológica.
                        td Programar labores y monitoreos.
                      tr
                        td Balance hídrico
                        td Lluvia, riego, evapotranspiración, suelo.
                        td Agua disponible.
                        td Decidir cuándo y cuánto regar.
                      tr
                        td Predicción de rendimiento
                        td Clima, suelo, manejo.
                        td Producción esperada.
                        td Planear cosecha y comercialización.
                      tr
                        td Curva de lactancia de Wood
                        td Días de lactancia y producción diaria.
                        td Producción esperada por día.
                        td Detectar desviaciones y proyectar la lactancia.
                      tr
                        td Crecimiento animal
                        td Edad, consumo, raza.
                        td Peso esperado.
                        td Programar ventas y ajustar raciones.
            //- FinTabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-8.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5.
            span Uso de un modelo matemático en un sistema automatizado
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img2.svg', alt='Diagrama de flujo sobre la aplicación de modelos matemáticos en sistemas agropecuarios automatizados, desde los datos de entrada y su procesamiento hasta la obtención de resultados para la toma de decisiones.', style="width: 800px;")
      p(data-aos="fade-left") Esta figura presenta cómo un modelo matemático transforma datos de entrada en información para la toma de decisiones.
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
