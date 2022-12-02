<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Ingredientes e insumos

    .BGIMG04.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p La calidad del producto final de los procesos productivos está relacionada a los ingredientes e insumos que se utilizan en cada fase, las cualidades nutricionales de estos permitirán obtener un producto final con los parámetros de calidad exigidos por la normatividad vigente. 
          p.mb-0 Recordemos que sin ingredientes e insumos no se podría transformar ningún producto alimenticio, además, estos son la base de cualquier proceso agroindustrial. 
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img01.png")
    
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.px-0
          img.w-50(src="@/assets/curso/temas/img02.svg")
        .col-lg-9.col-10.px-0.img02
          .h4.text-primario.mb-0 Tipos y características, elementos de la fórmula y parámetros de dosificación

      p.mb-5 La materia prima para iniciar el proceso productivo del chocolate es el cacao, en este momento este tiene un sabor amargo, una textura quebradiza y con color a chocolate; respecto a su fórmula y parámetros de calidad, deberá cumplirse con lo siguiente:     

      .row.justify-content-center
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img02.svg")
            p.mb-0 #[b Humedad en %]: Máx. 7%
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img03.svg")
            p.mb-0 #[b Impurezas en %]: Máx. 0.3%
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img04.svg")
            p.mb-0 #[b Moho interno N° granos / 100 granos]: Máx. 2 granos
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img05.svg")
            p.mb-0 #[b Dañado por insectos N° granos / 100 granos]: Máx. 2 granos

      .row.justify-content-center.mb-4
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img06.svg")
            p.mb-0 #[b Pasilla N° granos / 100 granos]: Máx. 2 granos
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img07.svg")
            p.mb-0 #[b Masa (peso) en granos / 100 granos]: Mín. 105 - 119 gramos
        .col-xl-2.col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img08.svg")
            p.mb-0 #[b Bien fermentados N° granos / 100 granos]: Mín. 65 granos
        .col-xl-2.col-lg-3.col-md-6.col-8(data-aos="flip-up")
          .BGR03A.p-3
            .row.justify-content-center.mb-4
              .col-6
                img(src="@/assets/curso/tema2/img09.svg")
            p.mb-0 #[b Pizarrosos N° granos / 100 granos]: Máx. 3 granos

    .BGIMG05.px-md-5.px-4.py-2
      p.mt-4 Una vez se compruebe de que el cacao tiene las cualidades anteriores, se inicia su respectivo proceso productivo.
      p A continuación, encontrarán el diagrama de masa, mostrando las fases más importantes con sus respectivos elementos y dosificación (se toma de base 414 Kg. de cacao para explicar el proceso a través del ejemplo) hasta completar el proceso productivo:

      .BGIMG06.p-4(data-aos="zoom-in")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Tostado
              p Después de limpiar el cacao crudo, pasando los granos por tamices para eliminar impurezas, éstos se tuestan para ayudar a desarrollar todas sus cualidades aromáticas y de sabor. El proceso de tostado se lleva a cabo automáticamente a una temperatura en torno a 130 ºC, durante 15-20 minutos. 
              p En esta fase ingresa 414 kg de cacao, además del gas propano y la energía eléctrica para poder realizar esta actividad, recordemos que la máquina que se usa es un tostador industrial, aquí la almendra pierde 10% de humedad y en peso sale 372,5 kg del cacao inicial, cabe aclarar que el estado de este ya es tostado, o sea, pierde 41,5 kg de peso.
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 500
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 414
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 372,5
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 89,97
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 74,52
            .col-lg-11
              .row.justify-content-around.align-items-center
                .col-lg-1.col-sm-2.col-3
                  img(src="@/assets/curso/temas/img01.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p La producción real del cacao como se explicó anteriormente, es de 372.5 kg por hora, la eficiencia de producción está por encima de 70 % por eso se puede afirmar que esta fase en las condiciones citadas en la tabla anterior cumple con los requisitos que se necesitan para poder transformar un producto de calidad.                     
                    .col-sm-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                        span #[b Tostado]
                        .indicador--click(v-if="mostrarIndicador")
          
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Descascarillado
              p En esta fase entran los 372,5 kg de cacao tostado, aquí hay una separación de cascarilla y almendra, de almendra queda 331 kg y el peso de la cascarilla que se pierde es de 41.5 kg, o sea, hay una pérdida en el producto de 10%, cabe resaltar que este proceso se realiza en una descascarilladora industrial y trabaja con energía eléctrica.
              p La producción real de la almendra es de 220 kg por hora, la eficiencia de producción sigue estando por encima de 70 %, indicador de que se obtendrá un producto de calidad.
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 300
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 250
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 220
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 88
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 73,33
            .col-lg-11
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                    span #[b Descascarillado]
                    .indicador--click(v-if="mostrarIndicador")

          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Molienda
              p En esta fase los granos de cacao son molidos varias veces para eliminar la cáscara y quedar suficientemente finos, la presión y la fricción producen una mezcla líquida pero espesa de textura suave que es la pasta de cacao que servirá, bien para fabricar chocolate, o para hacer cacao en polvo. 
              p En la antigüedad la molienda se realizaba en un molino de dos muelas de piedra. Esta pasta se almacena en forma de tortas semisólidas. Para la molienda se realiza en un molino industrial, en ella entra la almendra y la lecitina, recordemos que esta última sirve para reducir la viscosidad de la masa de chocolate, una vez se realiza el proceso, sale el licor de cacao; cabe recordar que para que el molino pueda realizar su función, se necesita, agua, vapor y energía eléctrica. 
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 400
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 250
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 220
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 88
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 55
            .col-lg-11
              .row.justify-content-around.align-items-center
                .col-lg-1.col-sm-2.col-3
                  img(src="@/assets/curso/temas/img01.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p La producción real de licor de cacao es de 220 kg por hora, la eficiencia de producción sigue estando por encima de 70 %, indicador de que se obtendrá un producto de calidad.
                    .col-sm-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                        span #[b Molienda]
                        .indicador--click(v-if="mostrarIndicador")
                      
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Mezclado
              p En la amasadora se mezclan y se amasan los ingredientes: pasta de cacao, manteca de cacao, azúcar y leche si queremos obtener chocolate con leche. Después de esto se obtiene una pasta homogénea, preparada para pasar otra vez por el molino. 
              p Esta fase de mezclado se realiza en una mezcladora industrial por agitación, en ella entra el licor de cacao y azúcar, una vez se realiza el proceso, sale la mezcla de chocolate; cabe recordar que para que el molino pueda realizar su función, se necesita, agua, vapor y energía eléctrica. 
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 1200
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 828
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 621
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 75
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 51,75
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad tubo atemperador
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 1800
            .col-lg-11
              .row.justify-content-around.align-items-center
                .col-lg-1.col-sm-2.col-3
                  img(src="@/assets/curso/temas/img01.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p La producción real de la mezcla es de 621 kg por hora, la eficiencia de producción sigue estando por encima de 70 %, indicador de que se obtendrá un producto de calidad.
                    .col-sm-auto
                      a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                        span #[b Mezclado]
                        .indicador--click(v-if="mostrarIndicador")

          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Dosificado
              p En esta fase entra la mezcla de chocolate y sale la mezcla en moldes, no pierde peso porque lo que se busca en esta fase es moldear el producto como se desea, se realiza en dosificadores eléctricos y por ende la energía será su fuente de uso.
              p La producción real de la mezcla es de 720 kg por hora, la eficiencia de producción sigue estando por encima de 70 %, indicador de que se obtendrá un producto de calidad.
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 900
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 855
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 720
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 84,21
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 80
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad del molde
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (g)
                    td(style="background-color: #FFF6DF;").text-center 750
            .col-lg-11
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                    span #[b Dosificado]
                    .indicador--click(v-if="mostrarIndicador")

          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Solidificado
              p En esta fase el producto ya obtiene la forma y textura deseada, se realiza de forma eléctrica, entra la mezcla del chocolate en molde y gracias al aire comprimido pueden salir las pastillas de chocolate que es producto final.
              p La producción real de la mezcla es de 495 kg por hora, la eficiencia de producción sigue estando por encima de 70%, indicador de que se obtendrá un producto de calidad.
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 720
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 500
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 495
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 99
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 68,75
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad del molde
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (g)
                    td(style="background-color: #FFF6DF;").text-center 0,75
            .col-lg-11
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                    span #[b Solidificado]
                    .indicador--click(v-if="mostrarIndicador")

          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-4
              .h4 Empacado
              p En esta fase el producto queda empacado y a la vez se termina el proceso productivo, se realiza de forma eléctrica, entran las pastillas de chocolate y salen ya en sus respectivas cajas.
              p La producción real de cajas es de 1025 kg por hora, la eficiencia de producción sigue estando por encima de 70 %, indicador de que se obtendrá un producto de calidad.
            .col-lg-5.col-8.mb-4
              table
                thead
                  tr
                    th(style="background-color: #FCC02D;" colspan=3).text-center Dosificación
                tbody
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 50%;").text-center Capacidad diseñada
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D; width: 30%;").text-center (Kg/h)
                    td(style="background-color: #FFF; width: 20%;").text-center 4700
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Capacidad real
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF6DF;").text-center 1140
                  tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Producción real de cacao
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (Kg/h)
                    td(style="background-color: #FFF;").text-center 1025
                  tr
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center Eficiencia de producción
                    td(style="background-color: #FFF6DF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF6DF;").text-center 89,91
                    tr
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center Utilización
                    td(style="background-color: #FFF; border-right: 2px solid #FCC02D").text-center (%)
                    td(style="background-color: #FFF;").text-center 22,93
            .col-lg-11
              .row
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                    span #[b Empacado]
                    .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Tostado
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img10.svg")
         
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Descascarriladora
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img11.svg")

    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Molienda
          .row.justify-content-center
            .col-lg-8
              img(src="@/assets/curso/tema2/img12.svg")

    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Mezclado
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img13.svg")

    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Dosificado
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img14.svg")

    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Solidificado
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img15.svg")

    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col
          .row.align-items-center.mb-4
            .col-lg-1.col-2.px-0
              img.w-50(src="@/assets/curso/temas/img02.svg")
            .col-lg-9.col-10.px-0.img02
              .h4.text-primario.mb-0 Empacado
          .row.justify-content-center
            .col-lg-10
              img(src="@/assets/curso/tema2/img16.svg")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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
