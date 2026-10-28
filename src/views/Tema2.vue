<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Bases de datos y <i>big data</i>
      p(data-aos="fade-left") Cuando el volumen de registros crece y varias personas o equipos necesitan consultarlos al mismo tiempo, las hojas de cálculo resultan insuficientes. Las bases de datos ofrecen una forma organizada, segura y eficiente de almacenar grandes cantidades de datos relacionados, garantizar su consistencia y recuperarlos rápidamente mediante consultas. En los sistemas agropecuarios automatizados son el lugar donde se guardan las lecturas de los sensores, los registros de producción, los inventarios y los datos de trazabilidad.      
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Conceptos, clasificación y características de las bases de datos
      p(data-aos="fade-left") Una base de datos es una colección organizada de datos relacionados entre sí, almacenada de forma que pueda ser consultada, actualizada y administrada de manera eficiente. El programa que permite crearla, mantenerla y consultarla se denomina sistema gestor de bases de datos (SGBD), y algunos ejemplos de libre uso son PostgreSQL, MySQL, MariaDB y SQLite (Silberschatz et al., 2020). Los términos básicos para comprender su funcionamiento se presentan a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12") 
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Tabla
                            p.text-start Agrupa los datos de un mismo tipo de objeto, como animales, lotes o sensores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Registro o fila
                            p.text-start Describe un elemento concreto, por ejemplo, un animal específico del hato.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Campo o columna
                            p.text-start Describe un atributo de los registros, como la raza o la fecha de nacimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Clave primaria
                            p.text-start Es el campo que identifica de manera única cada registro, como el número de identificación del animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Clave foránea
                            p.text-start Es un campo que remite a la clave primaria de otra tabla y permite relacionarlas, como el identificador del animal dentro de la tabla de ordeños.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t2/img1.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      p(data-aos="fade-left") Las bases de datos se clasifican principalmente según el modelo con el que organizan la información. Las <b>relacionales</b> almacenan los datos en tablas vinculadas mediante claves y se consultan con el lenguaje SQL. Las <b>no relacionales</b>, también llamadas NoSQL, abandonan la estructura de tablas rígidas para responder a necesidades de flexibilidad, volumen o velocidad. Los principales tipos y su uso en procesos agropecuarios se presentan a continuación:
      //- Inicio Tabla}
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-12.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Clasificación de las bases de datos y su aplicación agropecuaria
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Tipo
                        th(style="width: 25%") Organización
                        th(style="width: 30%") Fortaleza
                        th(style="width: 30%") Uso agropecuario típico
                    tbody
                      tr
                        td Relacional
                        td Tablas relacionadas por claves.
                        td Integridad y consultas complejas con SQL.
                        td Inventarios, trazabilidad, costos de producción.
                      tr
                        td Documental
                        td Documentos con estructura flexible.
                        td Adaptación a datos variados.
                        td Mensajes de sensores de distintos fabricantes.
                      tr
                        td Clave-valor
                        td Pares de identificador y valor.
                        td Lecturas muy rápidas.
                        td Estado actual de cada actuador de riego.
                      tr
                        td Columnar
                        td Datos agrupados por columnas.
                        td Análisis de grandes volúmenes.
                        td Históricos de producción regional.
                      tr
                        td Grafos
                        td Nodos y relaciones.
                        td Análisis de redes y conexiones.
                        td Relaciones entre fincas, acopios y compradores.
                      tr
                        td Series de tiempo
                        td Valores indexados por fecha y hora.
                        td Almacenamiento eficiente de mediciones continuas.
                        td Temperatura y humedad cada minuto en un galpón.
                //- FinTabla
            p(data-aos="fade-left") Una base de datos bien diseñada presenta características que la diferencian de un simple conjunto de archivos, las cuales se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Integridad
                p Asegura que los datos cumplan reglas definidas, por ejemplo, que no pueda registrarse un pesaje para un animal inexistente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consistencia
                p Garantiza que un mismo dato no tenga valores contradictorios en distintos lugares de la base de datos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reducción de la redundancia
                p Evita repetir innecesariamente la misma información, lo que ahorra espacio y previene errores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concurrencia
                p Permite que varios usuarios trabajen al mismo tiempo sin dañar los datos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguridad
                p Controla quién puede consultar o modificar cada parte de la información.
      //- Fin Slideshow
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Modelos de datos y técnicas de consulta
      p(data-aos="fade-left") Un modelo de datos es una representación de cómo se organizan los datos y cómo se relacionan entre sí. El diseño de una base de datos avanza por tres niveles de modelado, que se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 1. Modelo conceptual
                      p Describe, en lenguaje cercano al usuario, los objetos del proceso y sus relaciones, sin detalles técnicos.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta03_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta03_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Paso 2. Modelo lógico
                      p Traduce esa descripción al modelo del SGBD elegido, por ejemplo, tablas con sus campos y claves.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Paso 3. Modelo físico
                      p Define cómo se almacenan realmente los datos, con los tipos de datos exactos, los índices y la ubicación.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta03_3.png', alt='').img125
            //- Fin Linea de tiempo
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La herramienta más usada en el nivel conceptual es el modelo entidad-relación, que representa <b>entidades</b> (objetos de interés, como LOTE o CULTIVO), <b>atributos</b> (características de cada entidad, como área o variedad) y <b>relaciones</b> (vínculos entre entidades, como “un lote tiene muchas siembras”). La <b>cardinalidad</b> indica cuántos elementos de una entidad se relacionan con otra, ya sea uno a uno, uno a muchos o muchos a muchos. Este modelo facilita la conversación entre productores, técnicos y desarrolladores antes de construir el sistema.
      p.mb-5(data-aos="fade-left") Una consulta es una solicitud de datos a la base de datos, formulada para obtener exactamente la información que se necesita. En las bases de datos relacionales las consultas se escriben en SQL (lenguaje de consulta estructurado), un lenguaje normalizado internacionalmente y compatible, con pequeñas variaciones, con la mayoría de los SGBD. Sus instrucciones básicas se asemejan a frases en inglés y se presentan a continuación:
      //- Inicio Tabla
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-10.col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Instrucciones básicas de consulta SQL
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 25%") Instrucción
                        th(style="width: 35%") Función
                        th(style="width: 40%") Ejemplo
                    tbody
                      tr
                        td SELECT … FROM
                        td Elegir campos de una tabla.
                        td SELECT id_vaca, litros FROM ordenos
                      tr
                        td WHERE
                        td Filtrar registros por una condición.
                        td … WHERE litros &lt; 8
                      tr
                        td ORDER BY
                        td Ordenar los resultados.
                        td … ORDER BY litros DESC
                      tr
                        td GROUP BY
                        td Agrupar y resumir.
                        td SELECT id_vaca, AVG(litros) FROM ordenos GROUP BY id_vaca
                      tr
                        td JOIN
                        td Combinar tablas relacionadas.
                        td … FROM ordenos JOIN animales ON ordenos.id_vaca = animales.id
            //- FinTabla
            p(data-aos="fade-left") En las bases de datos no relacionales las consultas se hacen con lenguajes o funciones propias de cada sistema, pero conservan la misma lógica de seleccionar, filtrar, agrupar y combinar.
            Separador
            //- Inicio Tema2.3
            .row
              #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.3 Sistemas de bases de datos en el sector agropecuario
            p(data-aos="fade-left") Las bases de datos rara vez se usan de forma aislada. Forman parte de sistemas de información que las combinan con interfaces de captura, reportes y conexiones con equipos. Los sistemas más frecuentes en el sector agropecuario se presentan a continuación:
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
                          img(src='@/assets/curso/temas/t2/tarjeta04_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Software de gestión de fincas
                            p Integra inventarios, labores, costos y producción de la unidad productiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 SCADA e historiadores de proceso
                            p Los sistemas de supervisión, control y adquisición de datos almacenan las variables de plantas de beneficio, invernaderos y sistemas de riego.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Plataformas de internet de las cosas
                            p Reciben en la nube los datos que envían los sensores instalados en campo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sistemas de trazabilidad
                            p Siguen el recorrido de un producto o un animal a lo largo de la cadena, desde la finca hasta el consumidor.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t2/img3.png', style="width: 500px", data-aos="zoom-in").m-auto
                //- Fin Carrusel
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 <i>Big data</i>: concepto, características y utilidad
      p(data-aos="fade-left") El <i>big data</i>, o datos masivos, designa conjuntos de datos tan grandes, variados o rápidos que no pueden capturarse, almacenarse ni analizarse de manera eficiente con las herramientas convencionales, y que requieren tecnologías distribuidas y métodos analíticos específicos. El concepto no se limita al tamaño, pues incluye también la velocidad con que llegan los datos, la diversidad de sus formatos y la capacidad de extraer conocimiento útil de ellos. Sus características suelen describirse mediante las llamadas “V”, que se presentan a continuación:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-6.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 2.
            span Las V del <i>big data</i>
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img5.svg', alt='Infografía circular sobre las cinco características del big data: volumen, velocidad, variedad, veracidad y valor, representadas mediante iconos relacionados con el almacenamiento, procesamiento, calidad y aprovechamiento de datos. ', style="width: 800px;")
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img6.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Volumen")
                p.mb-4 Gran cantidad de datos, que puede medirse en terabytes o más.
              .row(titulo="Velocidad")
                p.mb-4 Rapidez con que los datos se generan y deben procesarse, a veces en tiempo real.
              .row(titulo="Variedad")
                p.mb-4 Diversidad de tipos y formatos, desde tablas hasta imágenes y textos.
              .row(titulo="Veracidad")
                p.mb-4 Calidad y confiabilidad de los datos que se reúnen.
              .row(titulo="Valor")
                p.mb-4 Utilidad que se puede obtener de los datos para la toma de decisiones.
      //- Fin Accordion 1
      p(data-aos="fade-left") La utilidad del <i>big data</i> radica en su capacidad de revelar patrones, relaciones y tendencias que no son evidentes en conjuntos de datos pequeños. Al reunir información de muchas fuentes y periodos es posible avanzar por cuatro niveles de analítica, que se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Analítica descriptiva
                p Describe lo que ocurre en el proceso. Por ejemplo, cuál fue la producción de leche por vaca en el último mes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Analítica diagnóstica
                p Explica por qué ocurre. Por ejemplo, si la caída de producción coincide con días de alta temperatura.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Analítica predictiva
                p Anticipa lo que podría ocurrir. Por ejemplo, cuánta leche se espera en las próximas semanas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Analítica prescriptiva
                p Recomienda acciones. Por ejemplo, ajustar la ventilación o la ración para sostener la producción.
      //- Fin Slideshow
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Aplicación del <i>big data</i> en procesos agropecuarios y agroindustriales
      p(data-aos="fade-left") Las aplicaciones del <i>big data</i> en el sector son amplias y varían según el tipo de producción (Wolfert et al., 2017). Las principales se presentan a continuación:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Producción agrícola")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_1.png')
              .col-md-6.mb-4.mb-md-0
                h4 Producción agrícola
                p Apoya la agricultura de precisión, el pronóstico de rendimientos, la detección temprana de plagas y enfermedades y la programación del riego.
          .py-3.py-md-4(titulo="Producción pecuaria")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_2.png')
              .col-md-6.mb-4.mb-md-0
                h4 Producción pecuaria
                p Facilita el monitoreo individual de animales, la detección de celo o enfermedad a partir de patrones de actividad y la optimización de la alimentación.
          .py-3.py-md-4(titulo="Agroindustria")
            .row.align-items-center
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta06_3.png')
              .col-md-6.mb-4.mb-md-0
                h4 Agroindustria
                p Contribuye a controlar la calidad de los procesos, planear la producción según la demanda y asegurar la trazabilidad desde la finca hasta el consumidor.
      //- Cierres Pestanas horizontales
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-4.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-3.fw-bold Ejemplo resuelto. ¿Cuándo se trata de <i>big data</i>?
          p.mb-0 Una finca con cinco sensores que registran cada hora produce unas 120 lecturas diarias, que caben sin problema en una hoja de cálculo y no constituyen <i>big data</i>. En cambio, una cooperativa con 800 fincas, cada una con veinte sensores que reportan cada minuto, genera más de 23 millones de lecturas al día, además de imágenes y registros de producción. En este segundo caso, el volumen, la velocidad y la variedad justifican tecnologías de <i>big data</i>.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img7.png', alt='', style="object-fit: cover;")
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-xl-8.col-md-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3.
            span Del dato masivo al valor en el proceso agropecuario
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t2/img8.svg', alt='Diagrama circular del ciclo de aprovechamiento de datos agropecuarios, organizado en cinco etapas: generar, capturar, almacenar, analizar y decidir, conectadas mediante flechas que representan un proceso continuo.', style="width: 800px;")
      p(data-aos="fade-left") Esta figura presenta el recorrido que siguen los datos masivos desde su generación hasta convertirse en decisiones que vuelven a generar nuevos datos.
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
