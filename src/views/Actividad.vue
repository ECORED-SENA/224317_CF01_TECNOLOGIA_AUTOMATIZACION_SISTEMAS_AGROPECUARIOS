<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                        
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistematización y analítica de datos agropecuarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar su comprensión de las fuentes, organización, calidad, análisis, protección y gestión de datos agropecuarios.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es una fuente primaria de información agropecuaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un boletín estadístico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La lectura directa de un pluviómetro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un informe gremial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una base consolidada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué información constituye un metadato de una medición?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El precio de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La marca del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La unidad y hora de captura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El rendimiento proyectado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué formato se utiliza para intercambiar mensajes de sensores IoT?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'MP4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GeoTIFF.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'JPG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'JSON.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un ejemplo de dato no estructurado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fotografía de un cultivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tabla de pesajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro tabular de riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hoja de inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Para qué sirve una clave primaria en una base de datos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ordenar las tablas por fecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar de forma única un registro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los duplicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cifrar los archivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de base de datos es adecuado para mediciones continuas fechadas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De grafos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De series de tiempo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clave-valor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué característica del <i>big data</i> alude a la rapidez de generación de datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Veracidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Velocidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la finalidad de definir requisitos de información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precisar necesidades y condiciones del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar la validación de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar documentar procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar controles de acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué criterio de calidad evalúa si faltan registros o campos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exactitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Completitud.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actualidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Unicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué medida protege la confidencialidad de registros productivos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compartir contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicar datos personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar permisos de acceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar copias de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué describe la estadística descriptiva?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Predice siempre valores exactos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye la recolección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la variabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resume los datos observados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué indicador permite evaluar la producción por unidad de superficie?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rendimiento por hectárea.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de sensores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frecuencia de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué acción corresponde a la limpieza de datos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear usuarios nuevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar registros duplicados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Instalar estaciones climáticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar etiquetas gráficas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Para qué se utiliza un libro de códigos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar fotografías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Documentar variables y categorías.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar el análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué herramienta se menciona para visualizar datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlador de riego.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Báscula mecánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pluviómetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Power BI.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
           
            '¿Qué recurso se asocia con la arquitectura de <i>big data</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hadoop.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'GeoTIFF.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'JPG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formulario impreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de aprendizaje utiliza ejemplos con respuestas conocidas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No supervisado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Supervisado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Por agrupamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sin datos de entrenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Para qué se reserva un conjunto de prueba al evaluar un modelo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar las etiquetas originales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Duplicar los registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar su desempeño con datos separados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar el entrenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué ciclo orienta la mejora continua de los procesos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CSV.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SQL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'JSON.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PHVA.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué práctica facilita la recuperación ante una contingencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener respaldos de información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar registros históricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir claves de acceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir planes de recuperación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
