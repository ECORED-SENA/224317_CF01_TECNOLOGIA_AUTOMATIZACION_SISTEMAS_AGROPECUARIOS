<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") Los sistemas agropecuarios automatizados producen datos de manera continua. Sensores que miden la humedad del suelo, controladores de riego, básculas conectadas, collares de actividad en el ganado, imágenes captadas por drones y plataformas que reúnen la información de muchas fincas generan registros a toda hora. Estos datos solo se convierten en conocimiento útil cuando se preparan, procesan, verifican y mejoran de manera sistemática. La sistematización de datos agropecuarios integra, por ello, conceptos de fuentes de información, bases de datos, estadística, analítica, aprendizaje automático y gestión de la información, orientados a decisiones productivas más acertadas y sostenibles (Wolfert et al., 2017).
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-2.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Comprender estos conceptos es decisivo para quien participa en la automatización del campo. Reconocer los tipos de fuentes y de datos, diseñar requisitos y criterios de calidad, proteger la información conforme a la normativa colombiana, elegir métodos estadísticos y modelos adecuados, preparar los datos con rigor, interpretar métricas de desempeño y comunicar los resultados con claridad son capacidades que evitan decisiones equivocadas y pérdidas de información. A ello se suma la sostenibilidad digital, que exige soluciones ajustadas a la conectividad, los recursos y las capacidades de las zonas rurales.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/intro/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Los contenidos siguen el recorrido de la sistematización. Primero se estudian las fuentes y tipos de datos, las bases de datos y el big data, la ingeniería de requisitos, la calidad y la seguridad de la información. Luego se abordan la estadística y los modelos matemáticos, la preparación de datos, las herramientas de analítica, la representación gráfica de datos y el machine learning básico. Finalmente se tratan la ciencia de datos y la verificación de resultados, la documentación técnica y los informes con enfoque de mejora continua, la sostenibilidad digital y la gestión de contingencias, con ejemplos resueltos y diagramas para el estudio autónomo.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
