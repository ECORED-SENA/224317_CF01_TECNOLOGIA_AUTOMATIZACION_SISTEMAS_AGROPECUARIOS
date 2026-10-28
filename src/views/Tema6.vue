<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Herramientas de analítica, <i>big data</i> y representación gráfica
      p(data-aos="fade-left") El procesamiento de datos agropecuarios se apoya en herramientas tecnológicas que van desde las hojas de cálculo hasta plataformas distribuidas capaces de manejar millones de registros. Elegir la herramienta adecuada depende del volumen de datos, de la frecuencia con que se actualizan, del tipo de análisis requerido y de los recursos disponibles. En modalidad de estudio autónomo y en zonas rurales, además, conviene privilegiar herramientas gratuitas y de libre uso, que permiten practicar sin inversión en licencias.
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Herramientas de analítica aplicadas al agro
      p(data-aos="fade-left") Las hojas de cálculo son la herramienta de analítica más difundida en el agro por su facilidad de uso. Más allá de las sumas y promedios, ofrecen funciones avanzadas que se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tablas dinámicas
                p Resumen grandes tablas por categorías y periodos, como la producción mensual por lote.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Búsqueda y referencia
                p Combinan datos de distintas hojas, como traer la raza de cada animal a la hoja de pesajes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Funciones condicionales y estadísticas
                p Calculan indicadores según criterios, como el promedio de producción solo de las vacas en primer parto.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta01_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Validación de datos
                p Controla lo que se registra, por ejemplo, aceptando solo valores dentro del rango posible.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta01_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Análisis de regresión y gráficos
                p Permiten explorar relaciones entre variables, como el riego aplicado y el rendimiento.
      //- Fin Slideshow
      p(data-aos="fade-left") Cuando el volumen crece o los análisis deben repetirse periódicamente, se recurre a bases de datos y a software de análisis especializado. Los lenguajes R y Python son los más utilizados en analítica de datos. R nació para la estadística y ofrece una amplia colección de paquetes para análisis y gráficos, mientras que Python es un lenguaje de propósito general con bibliotecas como pandas para manipulación de datos, NumPy para cálculo numérico, scikit-learn para aprendizaje automático y matplotlib para elaborar gráficos. La comparación de las principales herramientas se presenta a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 13.
                  span Herramientas de analítica aplicadas al agro
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Herramienta
                        th(style="width: 20%") Volumen adecuado
                        th(style="width: 20%") Aprendizaje
                        th(style="width: 40%") Uso típico en el agro
                    tbody
                      tr
                        td Hoja de cálculo
                        td Bajo a moderado
                        td Fácil
                        td Registros de finca, indicadores mensuales, prototipos.
                      tr
                        td SQL y bases de datos
                        td Moderado a alto
                        td Intermedio
                        td Consultas sobre históricos de producción y sensores.
                      tr
                        td R
                        td Moderado a alto
                        td Intermedio
                        td Análisis estadístico de ensayos y producción.
                      tr
                        td Python
                        td Moderado a muy alto
                        td Intermedio
                        td Automatización, modelos y aprendizaje automático.
                      tr
                        td Plataformas de <i>big data</i>
                        td Muy alto
                        td Avanzado
                        td Integración de datos de miles de fincas o imágenes.
            //- FinTabla
            Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Arquitectura de <i>big data</i> y Hadoop
      p(data-aos="fade-left") La arquitectura de <i>big data</i> es la organización de los componentes tecnológicos que permiten capturar, almacenar, procesar y aprovechar datos masivos. Aunque varía según el proyecto, suele organizarse en cinco capas, que se presentan a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capa de fuentes
                            p.text-center Sensores, máquinas, imágenes y sistemas de información que generan los datos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capa de ingesta
                            p.text-center Recibe los datos en lotes o en flujo continuo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capa de almacenamiento
                            p.text-center Conserva los datos de forma escalable.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capa de procesamiento
                            p.text-center Limpia, transforma y analiza los datos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Capa de consumo
                            p.text-center Presenta los resultados en tableros o reportes, o los envía a sistemas de control.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t6/img1.png', style="width: 500px", data-aos="zoom-in").m-auto
                //- Fin Carrusel
      p.p-3.bg-color-2(data-aos="fade-left") En estas arquitecturas se combinan bases de datos relacionales, para los datos estructurados que requieren integridad, con bases de datos no relacionales, que escalan con facilidad y aceptan datos variados. Así, el registro de ventas de una cooperativa puede residir en una base relacional, mientras que los mensajes de miles de sensores encajan mejor en una base de series de tiempo o documental.
      p(data-aos="fade-left") <b>Apache Hadoop</b> es un conjunto de software libre diseñado para almacenar y procesar grandes volúmenes de datos distribuyéndolos entre muchos computadores comunes que trabajan en conjunto, llamados clúster. Sus componentes y su herramienta complementaria más usada se presentan a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3            
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-1
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 HDFS
                            p.text-center Sistema de archivos distribuido que divide los archivos en bloques y los replica en varios nodos para tolerar fallas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 YARN
                            p.text-center Administra los recursos del clúster.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 MapReduce
                            p.text-center Modelo de programación que divide el procesamiento en tareas paralelas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Apache Spark
                            p.text-center Herramienta del ecosistema que procesa los datos en memoria y resulta más rápida para muchos análisis.
                    .col-lg-4.order-lg-2.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t6/img2.png', style="width: 500px", data-aos="zoom-in").m-auto
                //- Fin Carrusel
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-8.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 7.
            span Capas de una arquitectura de <i>big data</i> agropecuaria
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t6/img3.svg', alt='No encontré una figura identificada con este número en el contenido recuperado del documento. Prefiero no inventar su descripción.', style="width: 800px;")
      p(data-aos="fade-left") Esta figura presenta las capas de una arquitectura de <i>big data</i>, desde las fuentes de datos hasta el consumo de resultados.
      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 <i>Data warehouse, data lake</i> y almacenamiento en la nube
      p(data-aos="fade-left") Los datos masivos se conservan en repositorios que difieren en la forma de organizar la información, como se presenta a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="<i>Data warehouse</i> o almacén de datos")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta04_1.png', alt='')
                .col-md-6.mb-4.mb-md-0
                  h4 <i>Data warehouse</i> o almacén de datos
                  p Integra datos estructurados de distintas fuentes, ya limpios y organizados, para facilitar el análisis y los reportes. Sus datos se modelan para que las consultas sean rápidas, por ejemplo, con tablas de hechos, como las cosechas, rodeadas de tablas de dimensiones, como tiempo, lote y cultivo.
            .py-3.py-md-4(titulo="<i>Data lake</i> o lago de datos")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta04_2.png', alt='')
                .col-md-6
                  h4 <i>Data lake</i> o lago de datos
                  p Almacena datos en su forma original, sean estructurados, semiestructurados o no estructurados, y los organiza en el momento de usarlos. Es adecuado para conservar imágenes, mensajes de sensores y archivos cuyo uso futuro aún no está definido.
            .py-3.py-md-4(titulo="Sistemas en la nube")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta04_3.png', alt='')
                .col-md-6
                  h4 Sistemas en la nube
                  p Ofrecen almacenamiento y procesamiento como servicio, pagando por uso, lo que evita comprar y mantener servidores. Proveedores como AWS, Microsoft Azure o Google Cloud permiten crear lagos y almacenes de datos que crecen según la necesidad.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") En contextos rurales conviene evaluar la conectividad, los costos recurrentes y las condiciones de protección de datos del proveedor de nube, y considerar esquemas híbridos que almacenan localmente y sincronizan con la nube cuando hay conexión.
      Separador
      //- Inicio Tema6.4
      .row
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Representación gráfica de datos: Power BI, Tableau y Python
      p(data-aos="fade-left") La representación gráfica eficaz se apoya en tres principios sencillos, que se presentan a continuación:
      //- Inicio Acordeón
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img4.png", alt="").img400.m-auto
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Tener claro el mensaje")
                p.mb-4 Cada gráfico debe responder a una pregunta concreta, como “¿qué lote tuvo menor rendimiento?” o “¿cómo evolucionó la temperatura del galpón durante la noche?”.
              .row(titulo="Reducir el ruido")
                p.mb-4 Se eliminan elementos que no aportan, como fondos recargados, efectos tridimensionales o exceso de colores, para que la atención se dirija a los datos.
              .row(titulo="Respetar la escala")
                p.mb-4 Los ejes deben ser honestos y las barras empezar en cero para no exagerar diferencias.
      //- Fin Acordeón
      p(data-aos="fade-left") Cada tipo de gráfico responde a un propósito, como se presenta a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 14.
                  span Tipos de gráficos y su propósito
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Gráfico
                        th(style="width: 35%") Propósito
                        th(style="width: 40%") Ejemplo agropecuario
                    tbody
                      tr
                        td Líneas
                        td Representar la evolución en el tiempo.
                        td Temperatura del galpón durante la noche.
                      tr
                        td Barras
                        td Comparar categorías.
                        td Rendimiento por lote.
                      tr
                        td Histograma
                        td Representar la distribución de una variable.
                        td Pesos de un lote de pollos.
                      tr
                        td Dispersión
                        td Representar la relación entre dos variables.
                        td Riego aplicado y rendimiento.
                      tr
                        td Diagrama de caja
                        td Representar la dispersión y los atípicos.
                        td Producción diaria por vaca.
                      tr
                        td Mapa
                        td Representar la distribución espacial.
                        td Humedad del suelo por lote.
            //- FinTabla
            p(data-aos="fade-left") Las herramientas de representación gráfica más usadas se presentan a continuación:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t6/tarjeta05_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Power BI
              p.mb-0 Herramienta de inteligencia de negocios de Microsoft que conecta distintas fuentes de datos, crea gráficos interactivos arrastrando campos y publica tableros que se actualizan automáticamente. Power BI Desktop puede usarse sin costo para crear informes locales.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t6/tarjeta05_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Tableau
              p.mb-0 Herramienta de inteligencia de negocios con funciones similares. Tableau Public permite publicar gráficos y tableros de acceso abierto sin costo.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t6/tarjeta05_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Python
              p.mb-0 Con bibliotecas como matplotlib, seaborn o plotly crea gráficos mediante código, lo que resulta útil cuando deben generarse automáticamente o requieren mucha personalización. Su curva de aprendizaje es mayor, pero es gratuito y flexible.
      //- Fin Tarjetas
      .row(data-aos="fade-left")
        .col-lg-12.p-4.bg-color-5
          p.fw-bold Para reflexionar
          p Un tablero para una granja porcícola debería incluir pocos indicadores clave, como consumo de alimento, ganancia de peso, mortalidad y temperatura. Conviene preguntarse qué tipo de gráfico corresponde a cada indicador y qué dato debería resaltarse en color para llamar la atención del administrador.
  
</template>

<script>
export default {
  name: 'Tema6',
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
