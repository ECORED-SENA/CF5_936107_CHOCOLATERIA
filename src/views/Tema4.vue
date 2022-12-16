<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 4
      h1 Equipos de conchado, templado, moldeado y envasado

    .BGIMG01.p-md-5.p-4
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p Estas últimas fases son las más importantes del proceso de transformación de cacao y de ellas depende la calidad del producto final, en cada fase se realiza un proceso determinante para la obtención del producto final. Se debe tener en cuenta:
          .BG05.p-4
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | En el proceso de conchado se eliminan los sabores ácidos y se mejora su textura (suavidad y cremosidad).
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | En el templado se estabilizan los cristales de manteca de cacao mediante el sometimiento del chocolate a unas temperaturas definidas.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | En el moldeado se vierte la masa líquida en los moldes y se vibran (movimiento) para eliminar el aire que pudo quedar en los chocolates.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | Y por último, en el envasado se procede a empaquetar o envasar el producto para su distribución.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img01.png") 

      p A continuación, repasemos y veamos un poco más sobre estas fases:

      .row.justify-content-center.mb-4
        AcordionA(tipo="b" clase-tarjeta="BGR07")
          .row.justify-content-around(titulo="Conchado")
            .col-lg-7.order-lg-1.order-2
              p Durante este proceso se agita y amasa la pasta de cacao con potentes agitadores mecánicos, con objeto de obtener las propiedades necesarias. 
              p En esta fase se producen las reacciones de caramelización, evaporándose la humedad y eliminando los ácidos volátiles que queden en el chocolate excluyendo así los sabores indeseados y obteniendo una emulsión perfecta. 
              p.mb-0 La maquinaria utilizada en este proceso es la vista previamente, el refinador conchador o solo una máquina de conchado.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img02.jpg")
          .row.justify-content-around(titulo="Templado")
            .col-lg-7.order-lg-1.order-2
              p Con el templado se obtiene la adecuada cristalización de la manteca de cacao. En este se hace reducción de la temperatura del chocolate, garantizando la cristalización de una cantidad mínima (el 1%) de manteca en cristales del tipo estable, mientras que los cristales del tipo inestable están listos para ser moldeados. 
              p.mb-0 Después se vuelve a calentar sin sobrepasar los 35 ºC, para volver a darle fluidez, evitando que se funda la grasa cristalizada. En este momento el chocolate está a punto para ser moldeado. La maquinaria utilizada es la máquina de atemperado o de templado de chocolate.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img03.jpg")
          .row.justify-content-around(titulo="Moldeado")
            .col-lg-7.order-lg-1.order-2
              p Es en esta fase de la producción, donde se vierte la masa líquida de cacao en moldes, estos son introducidos a baja temperatura donde el chocolate se endurece adquiriendo la forma definitiva con la que será vendido una vez envasado. 
              p.mb-0 Al enfriarse la masa, cristalizan los cristales del tipo grasa y obtenemos las tabletas sólidas las cuales caen en el transportador.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img04.jpg")
          .row.justify-content-around(titulo="Envasado")
            .col-lg-7.order-lg-1.order-2
              p Por último, en su última fase el producto es empacado o envasado para su disposición o distribución final.
              p.mb-0 Para esta fase se maneja una máquina de envasado o empaquetado.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema4/img05.jpg")

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Cuidado básico en las fases finales
    
    .row.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-1.col-2
        img(src="@/assets/curso/temas/img01.svg")
      .col
        p Tengamos en cuenta, los cuidados básicos a tener presente en estas últimas fases del proceso de producción del chocolate.
        p.mb-0 Recapitulando, tenemos que el atemperado o templado es una fase de formulación del chocolate que se aplica, con la finalidad de alinear los cristales de la manteca de cacao de la pasta de chocolate. 

    p La temperatura recomendada para el atemperado de los diferentes tipos de chocolate es la siguiente:

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-10.mb-xl-0.mb-4
        .BGR01B.p-3
          figure.mb-4
            img(src="@/assets/curso/tema4/img06.png")
          .h4.text-center.text-acento-contenido Negro amargo
          p Fundir el chocolate a 45-50°C. 
          p Atemperar con raspa 2/3 del chocolate sobre plancha de mármol hasta una temperatura de 27-28°C. 
          p.mb-0 El chocolate enfriado se mezcla luego enérgicamente con el chocolate caliente restante para obtener una temperatura final de trabajo 30-32°C.
      .col-lg-3.col-md-6.col-10.mb-xl-0.mb-4
        .BGR01B.p-3
          figure.mb-4
            img(src="@/assets/curso/tema4/img07.png")
          .h4.text-center.text-acento-contenido Negro extra amargo
          p Fundir el chocolate a 45-50°C. 
          p Atemperar con raspa 2/3 del chocolate sobre plancha de mármol hasta una temperatura de 27-28°C.
          p.mb-0 El chocolate enfriado se mezcla luego enérgicamente con el chocolate caliente restante para obtener una temperatura final de trabajo 30-32°C.
      .col-lg-3.col-md-6.col-10.mb-xl-0.mb-4
        .BGR01B.p-3
          figure.mb-4
            img(src="@/assets/curso/tema4/img08.png")
          .h4.text-center.text-acento-contenido Con leche
          p Fundir el chocolate a 42-45°C. 
          p Atemperar con raspa 2/3 del chocolate sobre plancha de mármol hasta una temperatura de 26-27°C con una raspa. 
          p.mb-0 El chocolate enfriado se mezcla luego enérgicamente con el chocolate caliente restante para obtener una temperatura final de trabajo 29-30°C.
      .col-lg-3.col-md-6.col-10
        .BGR01B.p-3
          figure.mb-4
            img(src="@/assets/curso/tema4/img09.png")
          .h4.text-center.text-acento-contenido Blanco
          p Fundir el chocolate a 40-42°C. 
          p Atemperar con raspa 2/3 del chocolate sobre plancha de mármol hasta una temperatura de 25-26°C.
          p.mb-0 El chocolate enfriado se mezcla luego enérgicamente con el chocolate caliente restante para obtener una temperatura final de trabajo 28-29°C

    p En el proceso de conchado se reduce la humedad y a la vez se mezclan los componentes de la masa, con esto se busca el sabor característico del chocolate, todo eso se realiza en la máquina correspondiente, teniendo en cuenta las recomendaciones y parámetros de los fabricantes. El tiempo depende de la calidad que se desea, recordemos que se hace por medio de agitación mecánica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img10.png") 
      .col-lg-7(data-aos="fade-left")
        p Después, la masa pasa por el molino refinador donde como su nombre lo indica, se refina, esto se obtiene moliendo la masa hasta que no presente ninguna partícula que genere una sensación áspera o granosa. 
        p Luego en el moldeado se manejan diferentes tamaños, estos dependen de cómo se desea el producto. 
        p Ya, por último, el producto es retirado del molde y empacado de acuerdo con la presentación que se desea, logrando obtener un chocolate con mayor brillo, mejor textura y superficie lisa.
        p.mb-0 Debemos tener en cuenta los cuidados y recomendaciones vistos hasta el momento, así como los manuales de operación de los diferentes equipos.

    .BGIMG11.px-md-5.px-4
      separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Manuales de operación
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img11.png") 
        .col-lg-8(data-aos="fade-left")
          p Recordemos que estas fases finales, son las más importantes en la producción del chocolate, de ellas depende la calidad del producto final, estas se realizan mediante un proceso mecánico y lo que se busca en dichos procesos es lo siguiente:
          .BG01.p-4.mb-4
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | Reducir el agua y ácidos orgánicos como el acético de la masa.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | A las partículas no grasas de la masa, humectarlas con grasa.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | Alcanzar una grasa continua.
              li
                <i class="fas fa-cookie" style="color:#8D756C"></i>
                | Y obtener el sabor que se desea.
          p Respecto a los manuales de operación, es de suma importancia tenerlos en cuenta. 
          p.mb-0 Estos son los protocolos que se deben de implementar durante el uso de la maquinaria en estas fases de producción. 

      p Para finalizar, repasemos la siguiente información, así como los manuales donde se nos indicarán características, acciones o particularidades para tener en cuenta en caso determinado:

      .BGIMG12.p-md-5.p-4.mb-4
        .row.justify-content-center.mb-5
          .col-lg-8.order-lg-1.order-2
            p En el colchado se eliminan los sabores ácidos, se mejora su textura (suavidad y cremosidad), dependiendo de la formulación y tipos de chocolate este proceso lleva de 3 horas a 3 días, con una temperatura determinada y controlada, se realiza por medio de una conchadora que gracias a su velocidad de rotación cumple lo citado anteriormente, en este caso el manual de operación radica en garantizar las horas del proceso y el uso adecuado de la máquina, garantizando que no se detenga por falta de energía. 
            p En el atemperado se estabilizan los cristales de manteca de cacao mediante el sometimiento del chocolate a unas temperaturas definidas como ya vimos, en este proceso lo que se debe de garantizar es la temperatura con la que se realiza y el tiempo que se debe de dejar la masa en esta fase. 
            p En el moldeado se vierte la masa líquida en los moldes y se vibran (movimiento) para eliminar el aire que pudo quedar en los chocolates, garantizar estas acciones serían en este caso el protocolo de cumplimiento de su manual de operación. 
            p.mb-0 Por lo cual siempre debemos valernos de los mismos para garantizar no solo el buen funcionamiento de la maquinaria a utilizar, sino también a su vez garantizar la calidad final de nuestro producto.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema4/img12.png")

</template>

<script>
export default {
  name: 'Tema4',
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
