<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-1.col-2.px-0.img03
        img.w-75(src="@/assets/curso/temas/img01.svg")
      .col-lg-9.col-10.px-0.BGR05.p-3
        p.mb-0.ms-5 Según lo socializado en este proceso de formación donde aprendimos sobre los equipos, materias primas y demás información para la producción del chocolate, resumimos a través de esta síntesis lo que abarca este proceso:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
