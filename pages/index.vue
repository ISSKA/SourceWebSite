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
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  mounted() {
    // Create a GeoAdmin Map
    // To make this works in production, you need to register here before (if not CORS errors will appear) !
    // https://www.geo.admin.ch/fr/geo-services-proposes/geoservices/services-de-consultation-applications-cartographie-en-ligne-sig-web/interface-de-programmation-api/inscription.html
    const map = new window.ga.Map({
      // Define the div where the map is placed
      target: 'map',

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
