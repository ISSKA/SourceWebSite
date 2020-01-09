<template>
  <div>
    <!-- -->
    <b-container class="text-center" style="margin-top: 40px;">
      <!-- <b-card-group deck>
        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <nuxt-link to="/excursions/1" class="button--green">
            Excursion 1
          </nuxt-link>
          <!- - <b-button href="#" variant="primary">Go somewhere</b-button> - ->
        </b-card>

        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <nuxt-link to="/excursions/2" class="button--green">
            Excursion 2
          </nuxt-link>
          <!- - <b-button href="#" variant="primary">Go somewhere</b-button> - ->
        </b-card>

        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="/excursions/3" variant="primary">Excursion 3</b-button>
        </b-card>
      </b-card-group>-->

      <div></div>

      <div style="margin: auto; margin-top: 40px;">
        <div id="map" class="map"></div>
      </div>

      <hr style="width: 40%; margin: auto; margin-bottom: 20px;" />

      <!-- excursion selection -->
      <h2 style="margin-bottom: 30px;">
        Sélection d'excursions
      </h2>

      <div>
        <b-card-group deck style="margin-bottom: 20px;">
          <b-card
            v-for="(excursion, index) in selectedExcursion"
            :key="index"
            :title="excursion.subtitle"
            img-src="https://picsum.photos/600/300/?image=15"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              xxx

              <!-- this is a hack to have the full card clickable without visible button -->
              <nuxt-link :to="`/excursions/${excursion._index}`" class="stretched-link"></nuxt-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>

      <b-button href="/excursions/list" variant="outline-secondary">Afficher toutes les excursions ...</b-button>
    </b-container>
  </div>
</template>

<script>
import excursionData from '~/assets/script.js'

export default {
  layout: 'landing',
  data() {
    return {
      selectedExcursion: []
    }
  },
  mounted() {
    // Create a GeoAdmin Map
    // To make this works in production, you need to register here before (if not CORS errors will appear) !
    // https://www.geo.admin.ch/fr/geo-services-proposes/geoservices/services-de-consultation-applications-cartographie-en-ligne-sig-web/interface-de-programmation-api/inscription.html
    const map = new window.ga.Map({
      // Define the div where the map is placed
      target: 'map',

      // Customize the map interactions
      // https://openlayers.org/en/latest/apidoc/module-ol_interaction.html
      interactions: window.ol.interaction.defaults({
        mouseWheelZoom: false
      }),

      // Create a view
      view: new window.ol.View({
        // Define the default resolution
        // 10 means that one pixel is 10m width and height
        // List of resolution of the WMTS layers:
        // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1
        resolution: 500,

        // Define a coordinate CH1903+ (EPSG:2056) for the center of the view
        center: [2660000, 1190000]

        // Ignored if resolution is set
        /* maxZoom: 19,
        zoom: 15,
        minZoom: 10 */
      })
    })

    // some availables background layers
    // https://api3.geo.admin.ch/api/faq/index.html#which-layers-are-available
    // ch.swisstopo.swissimage
    // ch.swisstopo.pixelkarte-farbe

    // Create a background layer
    const lyr1 = window.ga.layer.create('ch.swisstopo.pixelkarte-farbe')

    // Add the background layer in the map
    map.addLayer(lyr1)

    // Create an overlay layer
    /* const lyr2 = window.ga.layer.create('ch.swisstopo.fixpunkte-agnes')

    // Add the overlay layer in the map
    map.addLayer(lyr2)

    const lyrtest = window.ga.layer.create('ch.are.alpenkonvention')
    map.addLayer(lyrtest) */

    // ---------------------------
    // RANDOM EXCURSIONS SELECTION
    const NUMBER_OF_ITEM_TO_DISPLAY = 3

    const excursions = JSON.parse(JSON.stringify(excursionData.getExcursions()))

    for (let idx = 0; idx < excursions.length; idx++) {
      excursions[idx]._index = idx + 1
    }

    // Select 3 or excursions.length random excursions
    if (excursions.length <= NUMBER_OF_ITEM_TO_DISPLAY) {
      this.selectedExcursion = excursions
    } else {
      const selection = []
      let idx, arrayLength
      for (idx = 0, arrayLength = excursions.length; idx < NUMBER_OF_ITEM_TO_DISPLAY; idx++, arrayLength--) {
        const randomIndex = this.getRandomInt(0, arrayLength)

        const selectedItem = excursions.splice(randomIndex, 1)
        if (selectedItem && selectedItem.length === 1 && selectedItem[0]) {
          selection.push(selectedItem[0])
        } /* else {
          console.log('err')
        } */
      }

      this.selectedExcursion = selection
    }

    // console.log(this.selectedExcursion)
  },
  methods: {
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>

<style>
.map {
  height: 80%;
  /* width: 800px; */
  border: 1px solid gray;
  margin: auto;
  margin-bottom: 40px;
  background-color: lightgray;
}
/* button {
  cursor: pointer;
} */
</style>
