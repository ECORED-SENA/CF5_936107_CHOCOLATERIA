<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGIMG01.p-md-5.p-p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p El chocolate es un producto que se caracteriza por su variedad de sabores, texturas, colores, envolturas y usos; la calidad de estas cualidades depende de su proceso de manipulación, transformación, envasado y almacenado; en todas ellas se debe priorizar la inocuidad del producto final, cumpliendo con esto, los consumidores podrán disfrutar de un producto acorde a sus expectativas. 
          p.mb-0 Sabiendo esto, a continuación, te invitamos a ver el siguiente video introductorio relacionado con la temática a tratar:
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/intro/img01.png")

      figure.mb-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
