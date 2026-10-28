<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Ingeniería de requisitos, calidad y seguridad de la información
      p(data-aos="fade-left") Todo sistema de sistematización de datos se construye para satisfacer necesidades concretas de información. Si esas necesidades no se identifican con claridad desde el principio, el resultado puede ser un sistema que almacena muchos datos pero no responde a las preguntas importantes del proceso. La ingeniería de requisitos aporta métodos para descubrir, describir y validar lo que el sistema debe hacer, los criterios de calidad establecen las condiciones que deben cumplir los datos para ser útiles y la seguridad de la información los protege durante todo su uso.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Ingeniería de requisitos: técnicas de modelado y representación
      p(data-aos="fade-left") A continuación, se presenta un video  sobre las principales técnicas de modelado y representación de requisitos, destacando su aplicación en los sistemas de información agropecuarios.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      p(data-aos="fade-left") Los métodos de representación definen la forma en que los requisitos quedan documentados y se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Lenguaje natural estructurado
                p Utiliza plantillas con campos fijos, como código, descripción, prioridad, fuente y criterio de aceptación, para evitar ambigüedades.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Representaciones gráficas
                p Los diagramas de casos de uso o de flujo de datos complementan el texto y facilitan la comunicación con personas no especializadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Prototipos
                p Son bocetos de pantallas o reportes que permiten validar con los usuarios cómo se verá la información antes de construir el sistema.
      //- Fin Slideshow
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Criterios de calidad de datos
      p(data-aos="fade-left") La calidad de los datos es el grado en que sus características satisfacen las necesidades de uso en condiciones determinadas. La norma ISO/IEC 25012 propone un modelo de calidad de datos que incluye, entre otras, las características de exactitud, completitud, consistencia, credibilidad, actualidad, accesibilidad, confidencialidad, eficiencia, precisión, trazabilidad, comprensibilidad y disponibilidad. Los criterios más críticos para la sistematización agropecuaria, con un ejemplo de incumplimiento, se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Criterios de calidad de datos aplicados al agro
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Criterio
                        th(style="width: 35%") Significado
                        th(style="width: 40%") Ejemplo de incumplimiento
                    tbody
                      tr
                        td Exactitud
                        td El dato representa correctamente el valor real.
                        td Báscula descalibrada que suma 2 kg a cada pesaje.
                      tr
                        td Completitud
                        td Están todos los datos requeridos.
                        td Faltan registros de ordeño de los domingos.
                      tr
                        td Consistencia
                        td El dato no contradice otros datos.
                        td Un animal aparece vendido y luego vacunado.
                      tr
                        td Actualidad
                        td El dato corresponde al momento requerido.
                        td Inventario de insumos de hace tres meses.
                      tr
                        td Credibilidad
                        td El dato es considerado verdadero por los usuarios.
                        td Rendimientos estimados sin soporte de pesaje.
                      tr
                        td Precisión
                        td El dato tiene el nivel de detalle necesario.
                        td Temperatura registrada sin decimales para control de incubación.
                      tr
                        td Trazabilidad
                        td Se conoce el origen y los cambios del dato.
                        td Registro modificado sin saber quién ni cuándo.
                      tr
                        td Unicidad
                        td No existen registros duplicados del mismo hecho.
                        td El mismo pesaje aparece dos veces por un reenvío del sensor.
                      tr
                        td Validez
                        td El dato respeta el formato y el rango definidos.
                        td Una fecha registrada como 31/02 o un pH de suelo de 15.
            //- FinTabla
            p(data-aos="fade-left") Los criterios de calidad se convierten en reglas que el sistema puede verificar automáticamente, como aceptar solo valores dentro del rango posible, exigir campos obligatorios o impedir fechas futuras. Definirlas en la etapa de requisitos es mucho más económico que corregir datos defectuosos después de que se han acumulado.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Seguridad de la información y normativa de protección de datos
      p(data-aos="fade-left") La seguridad de la información es el conjunto de medidas organizativas, técnicas y legales que buscan proteger la información frente a accesos no autorizados, alteraciones, pérdidas o interrupciones. Su alcance abarca la información en cualquier forma, desde registros en papel y archivos digitales hasta mensajes transmitidos por redes y conocimientos de las personas. La norma ISO/IEC 27001 establece los requisitos de un sistema de gestión de seguridad de la información y se apoya en tres principios fundamentales, que se presentan a continuación:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Confidencialidad
              p.mb-0 Garantiza que solo las personas autorizadas accedan a la información.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Integridad
              p.mb-0 Asegura que la información sea exacta y completa, y que no se modifique sin autorización.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta02_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Disponibilidad
              p.mb-0 Garantiza que la información esté accesible cuando se necesita. En un sistema automatizado, perderla puede ser tan grave como perder la confidencialidad, porque si el controlador de riego no accede a los datos de humedad, el cultivo puede sufrir estrés hídrico.
      //- Fin Tarjetas
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img1.png', alt='', style="max-width: 450px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-4 En Colombia, la protección de datos personales está regulada principalmente por la Ley Estatutaria 1581 de 2012, que desarrolla el derecho constitucional de todas las personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos o archivos (Congreso de Colombia, 2012). La ley se aplica al tratamiento de datos personales realizado por entidades públicas y privadas y fue reglamentada parcialmente por el Decreto 1377 de 2013. La Superintendencia de Industria y Comercio es la autoridad encargada de su vigilancia y administra el Registro Nacional de Bases de Datos.
          p La ley establece principios que deben orientar todo tratamiento de datos personales, entre ellos los de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad. También define los <b>datos sensibles</b>, como los relativos a la salud, el origen étnico o las convicciones políticas o religiosas, cuyo tratamiento exige protección especial. En los procesos agropecuarios esta normativa se aplica cuando se registran datos de productores, trabajadores, proveedores o clientes, por ejemplo, en programas de asistencia técnica, cooperativas o sistemas de trazabilidad.
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Comunicación técnica: confidencialidad y trazabilidad de registros
      p(data-aos="fade-left") La comunicación técnica comprende los documentos y prácticas que permiten proteger la información y que otras personas la comprendan y la utilicen correctamente. Sus instrumentos principales se presentan a continuación:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Política de confidencialidad")
                p.mb-4 Documento que define qué información se considera reservada, quién puede acceder a ella, con qué propósito y bajo qué condiciones puede compartirse. En el tratamiento de datos personales, la política de tratamiento de la información es además una exigencia legal para los responsables de las bases de datos.
              .row(titulo="Trazabilidad de registros")
                p.mb-4 Capacidad de reconstruir la historia de un dato, es decir, quién lo creó, cuándo, desde qué dispositivo y qué modificaciones ha tenido. Se logra con metadatos como la marca de tiempo y el usuario, y con bitácoras o registros de auditoría (logs). Es a la vez un criterio de calidad y una medida de seguridad, porque permite detectar alteraciones y asignar responsabilidades.
              .row(titulo="Diccionario de datos")
                p.mb-4 Describe cada campo de una base de datos con su nombre, significado, tipo de dato, unidad, rango válido, obligatoriedad y fuente.
              .row(titulo="Otros instrumentos")
                p.mb-4 Fichas técnicas de las fuentes, manuales de captura y acuerdos de intercambio de datos entre organizaciones.
      //- Fin Accordion 1
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-8.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span Protección y comunicación de la información agropecuaria
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img3.svg', alt='Diagrama sobre la protección y comunicación de datos agropecuarios que integra aspectos de seguridad de la información, confidencialidad, trazabilidad de registros y documentación técnica.', style="width: 800px;")
      p(data-aos="fade-left") Esta figura sintetiza los componentes de la seguridad de la información y la comunicación técnica aplicados a los datos agropecuarios.
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
