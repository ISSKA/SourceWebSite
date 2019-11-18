<template>
  <div class="container">
    <div>
      <h1 class="title">
        Excursion 1 - Extra 5 / L’alimentation en eau de La Chaux-de-Fonds
      </h1>
      <div>
        <p>
          La ville de La Chaux-de-Fonds est perchée à 1000 m d’altitude en pleine région karstique. Jusqu’au milieu du XIXe siècle, ses habitants se contentent
          tant bien que mal de l’eau fournie par les puits creusés et les citernes collectant l’eau des toits, mais, avec le développement de l’horlogerie, la
          ville s’agrandit rapidement. De 1850 à 1885, la population passe de 12000 à 25000 âmes et il faut absolument trouver des solutions pour leur fournir
          de l’eau potable.
        </p>
        <p>
          Différentes études sont lancées. On envisage de capter l’eau dans le Doubs ou dans le lac des Taillières, mais finalement, comme pour Neuchâtel, c’est
          l’ingénieur Guillaume Ritter qui présente le projet audacieux d’aller chercher l’eau dans les gorges de l’Areuse.
        </p>
        <p>
          Les travaux – monumentaux – sont engagés au début de 1886 et le système est inauguré... en novembre de l’année suivante! Un véritable exploit réalisé
          sans pétrole, mais avec une motivation collective aujourd’hui quasiment révolue...
        </p>
        <p>
          En 18 mois, on construit l’usine des Moyats, un aqueduc souterrain de 20 km avec refoulement de l’eau jusqu’à Jogne, 490 m plus haut que Les Moyats,
          un réservoir de 4600 m3 et plus de 20 km de conduites de distribution de l’eau dans la ville. Au premier essai, tout fonctionne parfaitement!
        </p>
      </div>

      <!--<div style="max-height: 100%;">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!- - Text slides with image - ->
          <!- -<b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/docs/excursion-1/extra-1/img-1.jpg"
          >
          </b-carousel-slide>- ->

          <!- - Slides with custom text - ->
          <b-carousel-slide img-src="/docs/excursion-1/extra-1/img-1.jpg">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!- - Slides with img slot - ->
          <!- - Note the classes .d-block and .img-fluid to prevent browser default image alignment - ->
          <b-carousel-slide>
            <template v-slot:img>
              <img class="d-block img-fluid w-100" width="1024" height="480" src="/docs/excursion-1/extra-1/img-1.jpg" alt="image slot" />
            </template>
          </b-carousel-slide>

          <!- - Slide with blank fluid image to maintain slide aspect ratio - ->
          <!- -<b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut
              lacus vel interdum.
            </p>
          </b-carousel-slide>- ->
        </b-carousel>

        <!- -<p class="mt-4">
          Slide #: {{ slide }}<br />
          Sliding: {{ sliding }}
        </p>- ->
      </div>-->

      <div stlye="height: 300px;">
        <b-carousel
          id="carousel-fade"
          :interval="4000"
          style="text-shadow: 0px 0px 2px #000; background-color: #eee"
          fade
          controls
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide caption="First slide" img-src="/docs/excursion-1/extra-1/img-1.jpg" style="height: 500px;"></b-carousel-slide>
          <b-carousel-slide caption="Second Slide" img-src="/docs/excursion-1/extra-1/img-2.jpg" style="height: 500px;"></b-carousel-slide>
        </b-carousel>
      </div>

      <!-- LINKS -->
      <div class="row justify-content-between" style="margin-top: 40px;">
        <div class="col-6">
          <nuxt-link to="/excursions/excursion-1/extra-4" class="next-page-link">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="4">
                  <b-card-img src="https://picsum.photos/400/400/?image=11" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="8">
                  <b-card-body title="Extra 4">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </nuxt-link>
        </div>
        <div class="col-6">
          <nuxt-link to="/excursions/excursion-1/extra-6" class="next-page-link">
            <b-card no-body class="overflow-hidden text-right" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="8">
                  <b-card-body title="Extra 6">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col md="4">
                  <b-card-img src="https://picsum.photos/400/400/?image=10" class="rounded-0"></b-card-img>
                </b-col>
              </b-row>
            </b-card>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style></style>
