<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Chocolate

    .BGIMG01.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p En el proceso productivo del cacao, el producto final y el más conocido es el chocolate, este se obtiene de una mezcla entre la masa y la manteca de cacao, tiene gran variedad de presentaciones, la más conocidas son la de tabletas, bombones y pastillas.
          p Otro producto que nace del cacao son las chocolatinas, su masa pasa por diferentes fases hasta llegar a ser empacadas en las presentaciones que conocemos, existen las blancas que son a base de leche y las negras que son endulzadas con azúcar. 
          .h5 Siguiendo con el chocolate, se afirma que su calidad se evidencia en su sabor y olor, y que esta depende del proceso de fermentación. 
          p.mb-0 Es así como a través del siguiente vídeo, veremos cuáles son los chocolates más comunes en la industria: 
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img01.png")

      figure.mb-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Aspectos nutricionales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img02.png")
      .col-lg-7(data-aos="fade-left")
        p El cultivo de cacao es de gran importancia económica, social y ambiental en nuestro país, siendo este una especie agroforestal importante en muchas regiones colombianas.
        p Su transformación agroindustrial consta de varias fases o etapas y en cada una se van generando diferentes productos o subproductos. Actualmente, su almendra es utilizada para la industria alimenticia donde la fabricación de chocolate es la más relevante; pero también es usada últimamente en la industria farmacéutica y cosmetológica.
        .BG01.p-4
          p.mb-0 Es importante resaltar que la calidad del chocolate depende directamente de las almendras de cacao utilizado en el proceso de transformación, también del proceso de secado y fermentación y de las cualidades de la mezcla que se utilizó en las etapas de procesamiento.

    p Respecto a sus aspectos nutricionales, se puede afirmar que este producto contiene grasas, carbohidratos y proteínas, tres componentes importantes para la obtención de energía del organismo, además contiene vitamina A, B, minerales, calcio, fósforo, hierro, magnesio y teobromina que ayuda en la circulación sanguínea.

    .BGIMG02.p-md-5.p-4
      p.mt-4 A continuación, se comparará la composición nutricional de los diferentes chocolates citados anteriormente:

      .row.justify-content-center.mb-4
        .col-lg-10(data-aos="zoom-in")
          .tabla-a.color-secundario
            table
              caption #[b Nota]. Fuente Instituto del Cacao y del Chocolate
              thead
                tr
                  th(style="background-color: #FCC02D;").text-center Componentes (100 gramos)
                  th(style="background-color: #FCC02D;").text-center Chocolate negro
                  th(style="background-color: #FCC02D;").text-center Chocolate con leche
                  th(style="background-color: #FCC02D;").text-center Chocolate blanco
              tbody
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Energía (kcal)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 449-534
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 511-542
                  td(style="background-color: #FFF;").text-center 529
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Proteínas (g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 4,2-7,8
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 6,1-9,2
                  td(style="background-color: #FFF6DF").text-center 8
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Hidratos de carbono (g)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 47-65
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 54,1-60
                  td(style="background-color: #FFF;").text-center 58,3
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Almidón
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 3,1
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 1,1
                  td(style="background-color: #FFF6DF").text-center -
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Azúcares (g)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 50,1-60
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 54,1-56,9
                  td(style="background-color: #FFF;").text-center 58,3
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Fibra (g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 5,9-9
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 1,8
                  td(style="background-color: #FFF6DF").text-center -
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Grasas (g)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 29-30,6
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 30-31,8
                  td(style="background-color: #FFF;").text-center 30,9
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Grasa saturada (g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 15,1-18,2
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 17,6-19,9
                  td(style="background-color: #FFF6DF").text-center 18,2
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center G. monoinsaturada (g)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 8,1-10
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 9,6-10,7
                  td(style="background-color: #FFF;").text-center 9,9
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center G. Poliinsaturada (g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 0,7-1,2
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 1,0-1,2
                  td(style="background-color: #FFF6DF").text-center 1,1
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Sodio (g)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,02-0,08
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,06-1,12
                  td(style="background-color: #FFF;").text-center 0,11
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Potasio (g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 0,4
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 0,34-0,47
                  td(style="background-color: #FFF6DF").text-center 0,35
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Calcio (mg)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 35-63
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 190-214
                  td(style="background-color: #FFF;").text-center 270
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Fósforo
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 167-287
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 199-242
                  td(style="background-color: #FFF6DF").text-center 230
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Hierro (mg)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 2,2-3,2
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,8-2,3
                  td(style="background-color: #FFF;").text-center 0,2
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Magnesio (mg)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 100-113
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 45-86
                  td(style="background-color: #FFF6DF").text-center 26
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Cinc (mg)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 1,4-2,0
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,2-0,9
                  td(style="background-color: #FFF;").text-center 0,9
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Vit. A (UI)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 3
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 150-165
                  td(style="background-color: #FFF6DF").text-center 180
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Vit. E (mg)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,25-0,3
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,4-0,6
                  td(style="background-color: #FFF;").text-center 1,14
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Vit. B1 (mg)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 0,04-0,07
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 0,05-0,1
                  td(style="background-color: #FFF6DF").text-center 0,08
                tr
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Vit. B6 (mg)
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,04-0,05
                  td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center 0,05-0,11
                  td(style="background-color: #FFF;").text-center 0,07
                tr
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Ac. fólico (micro g)
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 6-10
                  td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center 5-10
                  td(style="background-color: #FFF6DF").text-center 10

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Conservación
    
    .BGIMG03.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Se recomienda conservar el chocolate en un lugar fresco, seco, sin olores y a temperatura ambiente, lo ideal es un sitio donde su humedad no sea mayor a 60 %, sin luz y con una temperatura promedio de 16°C. 
          p Existen unas recomendaciones caseras para poder cumplir con las condiciones anteriores: 
          .BG02.p-4
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                p.mb-0 #[b La primera es envolver el chocolate] en una servilleta, esto ayudará a proteger la pieza de la humedad.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                p.mb-0 #[b La segunda es utilizar bolsas herméticas] con el fin de evitar que la pieza pierda su sabor y olor.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                p.mb-0 #[b La tercera es guardar la pieza en un frasco de cristal], esto ayuda a que no absorba olores de alimentos cercanos.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                p.mb-0 #[b Por último], es necesario envolverlo en aluminio, así evitará que pierda su contextura.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img03.png")

      p Si hablamos de forma individual, podemos decir que el chocolate blanco es el que más se ve afectado por el calor; por ende, se debe conservar en condiciones que evite que se derrita, pierda su olor o sabor característico, a nivel internacional, la venta de este producto es baja en los meses de calor por lo explicado anteriormente. 
      p En cambio, el chocolate negro es el que mejor se conserva en los hogares, ya que al tener entre sus ingredientes leche, esto ayuda a que resista más al calor.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img04.png")
        .col-lg-8(data-aos="fade-left")
          .BG02.p-4
            p.mb-0 Para disfrutar del chocolate debemos conservarlo en las mejores condiciones posibles. <span style="color:#FD7F23">#[b Nada mejor que un chocolate crujiente, con un sabor delicioso y una textura única que se funda en la boca.]</span> Merece la pena hacer un esfuerzo y conservarlo adecuadamente.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características organolépticas de productos de cacao y sucedáneos

    p Las características organolépticas más importantes en los productos derivados del cacao son, el sabor y el aroma, de hecho, al oler y probar un chocolate las personas se dan cuenta si es de calidad.
    p Los sabores característicos de este producto son:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img05.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BGR04.p-4
            .title.d-flex.align-items-center.mb-5
              span
                i.fas.fa-caret-up.fa-2x.text-secundario.me-3
                i.fas.fa-caret-down.fa-2x.text-secundario.me-3
              h4.mb-0.text-secundario 1. Ácido
            p.text-white.mb-0 Este se da por contener ácidos volátiles y no volátiles, es un sabor característico de los críticos.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img06.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BGR04.p-4
            .title.d-flex.align-items-center.mb-5
              span
                i.fas.fa-caret-up.fa-2x.text-secundario.me-3
                i.fas.fa-caret-down.fa-2x.text-secundario.me-3
              h4.mb-0.text-secundario 2. Amargo
            p.text-white.mb-0 Se da porque la almendra no completó su proceso de fermentación, el sabor es parecido al del café.
      .col-lg-4.col-8(data-aos="fade-left")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img07.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.BGR04.p-4
            .title.d-flex.align-items-center.mb-5
              span
                i.fas.fa-caret-up.fa-2x.text-secundario.me-3
                i.fas.fa-caret-down.fa-2x.text-secundario.me-3
              h4.mb-0.text-secundario 3. Astringente
            p.text-white.mb-0 Se da por falta de fermentación de la almendra, el sabor varía, primero da una sensación floral y después una sensación amarga; dulce y salado.

    p El cacao también genera otros sabores específicos, entre los más característicos se encuentran los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR01A.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img08.png")
          .h4.text-center <span style="color:#3A1C12">Cacao</span>
          p.mb-0 Es el sabor típico del fruto, se da cuando la almendra está bien fermentada y tostada.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR01A.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img09.png")
          .h4.text-center <span style="color:#3A1C12">Floral</span>
          p.mb-0 Son los que tienen la sensación a flores, el aroma también es parecido al de un perfume.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR01A.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img10.png")
          .h4.text-center <span style="color:#3A1C12">Frutal</span>
          p.mb-0 Su sabor es dulce; a nuez o frutas, el sabor es parecido a una nuez o almendra.
      .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .BGR01A.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img11.png")
          .h4.text-center <span style="color:#3A1C12">Mohoso</span>
          p.mb-0 Se da cuando se sobre fermenta, el sabor se parece a un pan viejo; verde, se da cuando el fermentado fue deficiente.
        
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-1.col-2.px-0
        img.img01(src="@/assets/curso/temas/img01.svg")
      .col-lg-9.col-10.px-0
        .BG02.p-2
          .h5.mb-0.ms-3 Respecto al olor, el chocolate varía de acuerdo con sus compuestos volátiles adquiridos en su proceso agroindustrial, su variación depende de la calidad del cacao y el cumplimiento a cabalidad de las fases productivas.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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
