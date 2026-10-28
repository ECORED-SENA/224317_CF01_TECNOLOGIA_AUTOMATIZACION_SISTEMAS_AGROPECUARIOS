<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Preparación de datos: consultas, limpieza, normalización y codificación
      p(data-aos="fade-left") Los datos que llegan de las fuentes agropecuarias rara vez están listos para el análisis. Suelen presentar valores faltantes por fallas de conexión, registros duplicados, unidades mezcladas, errores de digitación o lecturas imposibles producidas por sensores descalibrados. Además, su organización original no siempre coincide con la que exige el análisis. Las consultas, la limpieza y la transformación son las operaciones que permiten obtener, depurar y reorganizar los datos para que reflejen fielmente el proceso productivo.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Consultas, manipulación y calidad del dato
      p(data-aos="fade-left") A continuación, se presenta un pódcast sobre las principales operaciones de consulta y manipulación de datos, destacando su importancia para organizar, transformar y analizar información en los sistemas de producción agropecuaria.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#000") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Consultas y manipulación de datos agropecuarios
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t5/img1.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Técnicas de limpieza y transformación
      p(data-aos="fade-left") La <b>limpieza de datos</b> es el proceso de detectar y corregir o eliminar errores, inconsistencias y valores que no representan adecuadamente la realidad. Su alcance incluye la revisión de valores faltantes, duplicados, atípicos, errores de formato, unidades inconsistentes y valores fuera de rango. La limpieza no busca “maquillar” los datos, sino hacerlos fieles al proceso, y cada decisión debe documentarse para que otras personas puedan entender y reproducir el tratamiento. Los problemas más comunes y las técnicas que suelen aplicarse se presentan a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 10.
                  span Tipos de problemas en los datos y técnicas de limpieza
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Problema
                        th(style="width: 35%") Causa probable
                        th(style="width: 40%") Técnica de limpieza
                    tbody
                      tr
                        td Valores faltantes
                        td Falla de sensor, pérdida de conexión, registro olvidado.
                        td Eliminar el registro, imputar con media, mediana o valor anterior, o marcar como faltante.
                      tr
                        td Duplicados
                        td Reenvío de mensajes, doble digitación.
                        td Identificar por clave y fecha, y conservar un único registro.
                      tr
                        td Valores atípicos
                        td Error de medición o evento real extremo.
                        td Detectar con rangos o estadísticos y verificar antes de corregir o excluir.
                      tr
                        td Fuera de rango
                        td Sensor descalibrado, error de digitación.
                        td Aplicar reglas de rango válido y marcar para revisión.
                      tr
                        td Formato inconsistente
                        td Fechas y decimales con distintos formatos.
                        td Estandarizar a un único formato.
                      tr
                        td Unidades mezcladas
                        td Registros en kg y en libras, o en °C y °F.
                        td Convertir todo a una unidad común.
            //- FinTabla
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img2.png', alt='', style="max-width: 5000px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-3.p-4 Los <b>valores atípicos</b> merecen especial cuidado. Una producción de leche excepcionalmente baja puede ser un error de digitación, pero también la primera señal de una mastitis, y eliminarla de forma automática ocultaría información valiosa. La regla práctica es verificar la causa antes de decidir. Si se confirma un error, se corrige o se excluye; si corresponde a un evento real, se conserva y se documenta.
          p La <b>transformación de datos</b> modifica la forma, la escala o la estructura de los datos para adaptarlos al análisis. Los métodos más usados se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Agregación")
                p.mb-4 Resume datos de alta frecuencia en periodos mayores, como convertir lecturas por minuto en promedios horarios.
              .row(titulo="Derivación")
                p.mb-4 Crea nuevas variables a partir de las existentes, como calcular la ganancia diaria de peso a partir de dos pesajes.
              .row(titulo="Discretización")
                p.mb-4 Convierte variables continuas en categorías, como clasificar la humedad del suelo en seca, adecuada o saturada.
              .row(titulo="Conversión de tipos y formatos")
                p.mb-4 Cambia el tipo o la presentación del dato, como extraer el mes o el día de la semana de una fecha.
      //- Fin Accordion 1
      p(data-aos="fade-left") Las herramientas de limpieza y transformación van desde las más accesibles hasta las especializadas, como se presenta a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Hojas de cálculo
                p Ofrecen filtros, validación de datos, eliminación de duplicados, buscar y reemplazar y tablas dinámicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 OpenRefine
                p Herramienta de uso libre que facilita la detección de inconsistencias en textos y categorías.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Python y R
                p Python, con la biblioteca pandas, y R, con el conjunto de paquetes tidyverse, permiten automatizar el tratamiento y repetirlo cada vez que llegan datos nuevos, lo que resulta esencial en sistemas automatizados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cuadernos en la nube
                p Plataformas gratuitas como Google Colab permiten usar Python sin instalar programas en el computador.
      //- Fin Slideshow
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Datos cualitativos y cuantitativos, codificación y libro de códigos
      p(data-aos="fade-left") Para preparar los datos conviene distinguir los <b>datos cualitativos</b>, que describen cualidades o categorías, como la variedad sembrada, el tipo de síntoma registrado o el nombre del proveedor, de los <b>datos cuantitativos</b>, que expresan cantidades medibles o contables, como el peso, el volumen de riego o el número de frutos. Los cualitativos requieren sistemas de códigos, y los cuantitativos, unidades consistentes y, en algunos análisis, ajustes de escala.
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img4.png', alt='', style="max-width: 5000px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-5.p-4 Un <b>sistema de codificación</b> asigna a cada categoría un código único, breve y estable. Los códigos pueden ser numéricos, alfabéticos o alfanuméricos, y es recomendable que sigan una lógica comprensible, como incluir la finca y el número de lote en el código de un lote (F01-L03). También existen sistemas de codificación estandarizados, como los códigos de municipios del DANE (DIVIPOLA) o los identificadores oficiales de animales, que facilitan integrar datos entre organizaciones.
          p El <b>libro de códigos</b> es el documento que describe cada variable, sus códigos válidos y su significado. Es el complemento indispensable de cualquier base de datos, porque garantiza que todas las personas registren e interpreten los datos de la misma manera. Un ejemplo de su contenido se presenta a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 11.
                  span Ejemplo de libro de códigos para un registro de monitoreo sanitario en café
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Variable
                        th(style="width: 30%") Descripción
                        th(style="width: 15%") Tipo
                        th(style="width: 20%") Códigos o unidad
                        th(style="width: 15%") Valores faltantes
                    tbody
                      tr
                        td id_lote
                        td Código del lote monitoreado
                        td Texto
                        td F01-L01 a F01-L12
                        td No se admiten
                      tr
                        td problema
                        td Problema sanitario registrado
                        td Cualitativa nominal
                        td 1 = broca, 2 = roya, 3 = minador, 9 = otro
                        td 0 = sin registro
                      tr
                        td severidad
                        td Grado de afectación
                        td Cualitativa ordinal
                        td 1 = baja, 2 = media, 3 = alta
                        td 0 = sin registro
                      tr
                        td plantas_afectadas
                        td Plantas con síntomas en la muestra
                        td Cuantitativa discreta
                        td Número de plantas (0 a 30)
                        td Celda vacía y nota en el campo de comentarios
            //- FinTabla
            Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Normalización, estandarización y control de calidad
      p(data-aos="fade-left") En las bases de datos relacionales, la <b>normalización</b> es el proceso de organizar los datos en tablas de modo que se reduzca la redundancia y se eviten anomalías al insertar, actualizar o eliminar registros. Fue propuesta a partir del modelo relacional formulado por Edgar F. Codd en 1970. Una tabla no normalizada que repite en cada registro de ordeño el nombre, la raza y la fecha de nacimiento de la vaca desperdicia espacio y, si la raza se corrige en un registro pero no en los demás, genera inconsistencias. La normalización se aplica mediante reglas llamadas <b>formas normales</b>, que se presentan a continuación:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 12.
                  span Primeras formas normales
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Forma normal
                        th(style="width: 35%") Regla principal
                        th(style="width: 40%") Aplicación
                    tbody
                      tr
                        td Primera (1FN)
                        td Cada celda contiene un único valor y no hay grupos repetidos.
                        td En lugar de una celda "vacunas: aftosa, brucelosis", se registra una fila por vacuna.
                      tr
                        td Segunda (2FN)
                        td Cumple 1FN y cada atributo depende de toda la clave primaria.
                        td La raza depende solo del animal, por lo que va en la tabla ANIMALES y no en la de ordeños.
                      tr
                        td Tercera (3FN)
                        td Cumple 2FN y ningún atributo depende de otro atributo no clave.
                        td El nombre de la finca depende del código de finca, así que va en la tabla FINCAS.
            //- FinTabla  
            p(data-aos="fade-left") En el análisis numérico, la normalización y la estandarización son transformaciones de escala, que se presentan a continuación:
      //- Inicio Acordeón
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img5.png", alt="").img400.m-auto
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Normalización mín-máx")
                p.mb-4 Convierte los valores a un rango entre 0 y 1 restando el mínimo y dividiendo entre el rango, es decir, (valor − mínimo) ÷ (máximo − mínimo).
              .row(titulo="Estandarización o puntuación z")
                p.mb-4 Resta la media y divide entre la desviación estándar, de modo que la variable queda con media cero y desviación uno.
              .row(titulo="Cuándo aplicarlas")
                p.mb-4 Cuando se combinan variables con escalas muy distintas, como la temperatura en grados y la precipitación en milímetros, en algoritmos que calculan distancias, como el agrupamiento K-means.
      //- Fin Acordeón
      p.mb-5(data-aos="fade-left") La <b>validación de patrones</b> verifica que los datos cumplan formatos esperados, como que un código de lote siga la estructura F00-L00, que una fecha sea válida o que un correo tenga el formato correcto. Se implementa con reglas de validación en formularios, hojas de cálculo o bases de datos, y con expresiones regulares en herramientas de programación. El <b>control de calidad</b> combina estas reglas con revisiones periódicas de consistencia, duplicados y rangos.
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-8.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6.
            span Proceso de preparación de datos agropecuarios
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img6.svg', alt='Diagrama secuencial de preparación de datos agropecuarios que incluye consultas, limpieza, transformación y organización de registros para obtener datos adecuados para el análisis. ', style="width: 800px;")
      p(data-aos="fade-left") Esta figura presenta la secuencia de consulta, limpieza y transformación que convierte datos crudos en datos listos para el análisis.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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

