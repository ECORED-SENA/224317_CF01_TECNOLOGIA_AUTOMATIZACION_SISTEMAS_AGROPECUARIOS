<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fuentes de información y tipos de datos agropecuarios
      p(data-aos="fade-left") La automatización de los sistemas agropecuarios genera y consume datos de manera permanente. Sensores de humedad en invernaderos, medidores de leche en el ordeño mecánico, estaciones meteorológicas en fincas cafeteras o básculas conectadas en plantas de beneficio producen registros que, bien organizados, permiten decidir mejor sobre riego, alimentación, sanidad o logística. Antes de sistematizarlos es necesario conocer de dónde provienen, qué características tienen, en qué formatos se presentan y qué tipo de datos son, porque de ello depende la confiabilidad de cualquier análisis posterior.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Fuentes de información agropecuaria: concepto y tipos
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-3.p-4 Una fuente de información agropecuaria es cualquier origen del cual se obtienen datos sobre la producción agrícola, pecuaria, acuícola, forestal o agroindustrial y sobre las condiciones que la rodean. Puede ser un dispositivo, como un sensor o un controlador lógico programable, un documento, como un registro de campo o una factura de insumos, una persona, como un productor entrevistado, o una entidad, como un instituto que publica estadísticas oficiales. Lo que define a la fuente es su capacidad de aportar datos que describen hechos del proceso productivo.
          p Las fuentes se clasifican según su ubicación respecto a la unidad productiva, su cercanía con el hecho registrado y la forma en que se captura el dato. Los criterios de clasificación se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-xl-10.col-md-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span  Clasificación de las fuentes de información agropecuaria
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Criterio
                        th(style="width: 15%") Tipo
                        th(style="width: 30%") Descripción
                        th(style="width: 35%") Ejemplos
                    tbody
                      tr
                        td Ubicación
                        td Interna
                        td Se genera dentro de la unidad productiva.
                        td Sensores de un invernadero, registros de ordeño, software de gestión de la finca.
                      tr
                        td Ubicación
                        td Externa
                        td La produce una entidad o persona ajena a la unidad productiva.
                        td Estadísticas de Agronet, pronósticos del IDEAM, precios mayoristas.
                      tr
                        td Cercanía al hecho
                        td Primaria
                        td Registra el dato en el momento y lugar en que ocurre.
                        td Lectura de un pluviómetro, pesaje de un animal, encuesta a un productor.
                      tr
                        td Cercanía al hecho
                        td Secundaria
                        td Procesa o resume datos primarios.
                        td Boletines estadísticos, informes gremiales, bases de datos consolidadas.
                      tr
                        td Forma de captura
                        td Automática
                        td El dato lo genera un equipo sin intervención humana.
                        td Estación meteorológica, controlador de riego, lector de chapeta electrónica.
                      tr
                        td Forma de captura
                        td Manual
                        td El dato lo registra una persona.
                        td Planilla de labores, formulario de monitoreo de plagas.
            //- FinTabla
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 <b>Idea clave</b>
            br
            br
            | Un dato aislado dice poco. Su valor aparece cuando se conoce su fuente, el momento en que se tomó, la unidad de medida y las condiciones de captura. Esta información sobre el dato, llamada metadato, acompaña a la fuente desde el inicio del proceso de sistematización.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Características, rangos y formatos de los datos
      p(data-aos="fade-left") Los datos que provienen de las fuentes agropecuarias presentan características propias del sector, que se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Variabilidad temporal
                p Muchas variables cambian con la hora del día, la estación o la etapa del ciclo productivo, como la temperatura de un galpón o la producción diaria de leche. Por eso cada dato debe registrarse con su fecha y hora.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Dependencia espacial
                p La humedad del suelo, la fertilidad o la incidencia de una plaga varían de un lote a otro, e incluso dentro de un mismo lote. Por eso conviene asociar el dato al lote o a las coordenadas donde se tomó.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Heterogeneidad
                p En un mismo proceso se combinan mediciones numéricas, anotaciones escritas, imágenes y coordenadas geográficas, que deben integrarse sin perder su significado.
      //- Fin Slideshow
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img3.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 Cada variable tiene además un <b>rango</b> de valores posibles, es decir, un intervalo dentro del cual se espera que se ubique el dato. Conocer los rangos permite detectar errores de captura desde el principio. Una humedad relativa del 140 % o un pH de suelo de 15 no son valores posibles y revelan una falla del sensor o un error de digitación. Además del rango físico conviene conocer el rango esperado para el proceso, que es más estrecho y sirve para identificar situaciones que requieren atención, como una temperatura corporal elevada en un bovino.
          p El <b>formato</b> es la forma en que los datos se almacenan y se intercambian. Los formatos más comunes en los procesos agropecuarios automatizados, con un ejemplo de uso y las herramientas gratuitas que permiten abrirlos, se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-xl-10.col-md-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span  Formatos frecuentes de datos agropecuarios
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Formato
                        th(style="width: 20%") Tipo
                        th(style="width: 30%") Ejemplo de uso
                        th(style="width: 30%") Herramientas gratuitas
                    tbody
                      tr
                        td CSV / TXT
                        td Texto plano tabular
                        td Exportación de un registrador de temperatura.
                        td LibreOffice Calc, hojas de cálculo en línea, Python.
                      tr
                        td XLSX / ODS
                        td Hoja de cálculo
                        td Registro de pesajes de un lote de novillos.
                        td LibreOffice Calc, hojas de cálculo en línea.
                      tr
                        td JSON / XML
                        td Intercambio estructurado
                        td Mensajes de sensores de una plataforma de internet de las cosas.
                        td Editores de texto, Python, navegadores web.
                      tr
                        td Shapefile / GeoJSON
                        td Vectorial geográfico
                        td Polígonos de los lotes de una finca.
                        td QGIS.
                      tr
                        td GeoTIFF
                        td Ráster geográfico
                        td Imagen satelital o de dron de un cultivo.
                        td QGIS.
                      tr
                        td JPG / PNG / MP4
                        td Multimedia
                        td Fotografías de síntomas de una enfermedad.
                        td Visores de imágenes, herramientas de etiquetado.
            //- FinTabla
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3.fw-bold Para reflexionar
          p.mb-0 Conviene pensar en un sistema productivo conocido, por ejemplo, una granja avícola o un cultivo de aguacate, e identificar tres fuentes internas y dos externas de datos, indicando para cada una su tipo de captura y el formato en que probablemente se obtendrían. Este ejercicio ayuda a reconocer la diversidad de fuentes que alimentan la sistematización.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t1/img4.png', alt='', style="object-fit: cover;")
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-6.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span Elementos para describir una fuente de información agropecuaria
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t1/img5.svg', alt='Diagrama que organiza los elementos de caracterización de una fuente de información agropecuaria en cuatro categorías: tipo de fuente, características de los datos, rangos de valores y formatos de almacenamiento. ', style="width: 800px;")
      p(data-aos="fade-left") Esta figura sintetiza los aspectos que permiten caracterizar una fuente de información antes de sistematizar sus datos.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Datos estructurados, semiestructurados y no estructurados
      p(data-aos="fade-left") Según su organización, los datos se clasifican en estructurados, semiestructurados y no estructurados. Cada tipo se describe a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Datos estructurados")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Datos estructurados
                  p Se organizan en un esquema definido de filas y columnas, donde cada columna es un atributo con un tipo de dato conocido (número, texto o fecha) y cada fila es un registro. Se pueden ordenar, filtrar, sumar y relacionar con facilidad, y son la base de las hojas de cálculo y de las bases de datos relacionales (Silberschatz et al., 2020). Ejemplo, el registro de pesajes de una granja porcícola.
            .py-3.py-md-4(titulo="Datos semiestructurados")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
                .col-md-6
                  h4 Datos semiestructurados
                  p No se ajustan a una tabla rígida, pero incluyen etiquetas que describen su contenido y organizan sus elementos. Los formatos JSON y XML son los más comunes. Ejemplo, el mensaje que una estación meteorológica envía a la nube con el identificador del equipo, la hora y una lista de lecturas, sin que todas las estaciones envíen exactamente los mismos campos.
            .py-3.py-md-4(titulo="Datos no estructurados")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
                .col-md-6
                  h4 Datos no estructurados
                  p No siguen un esquema predefinido. Incluyen imágenes, videos, audios, documentos de texto libre y mensajes. Contienen información valiosa, pero antes de analizarlos es necesario extraer de ellos características que puedan organizarse. Ejemplo, el número de frutos presentes en una fotografía tomada con dron.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La organización de cada tipo determina dónde se almacena habitualmente y qué tan fácil resulta analizarlo, como se compara a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-xl-10.col-md-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span  Comparación de los tipos de datos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Aspecto
                        th(style="width: 25%") Estructurados
                        th(style="width: 25%") Semiestructurados
                        th(style="width: 25%") No estructurados
                    tbody
                      tr
                        td Organización
                        td Esquema fijo de filas y columnas.
                        td Etiquetas que describen los elementos.
                        td Sin esquema predefinido.
                      tr
                        td Almacenamiento habitual
                        td Hojas de cálculo, bases de datos relacionales.
                        td Bases de datos documentales, archivos JSON o XML.
                        td Repositorios de archivos, lagos de datos.
                      tr
                        td Facilidad de análisis
                        td Alta, porque se consultan y resumen directamente.
                        td Media, porque requieren interpretación previa.
                        td Baja, porque requieren extraer características.
            //- FinTabla
</template>

<script>
export default {
  name: 'Tema1',
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
