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

      <div class="text-left">
        <p v-for="(description, index) in $t('home.text')" :key="index">{{ description }}</p>
      </div>

      <div style="margin: auto; margin-top: 40px;">
        <div id="map" class="map">
          <a id="excursion-tooltip" href="#"></a>
        </div>
      </div>

      <hr style="width: 40%; margin: auto; margin-bottom: 20px;" />

      <!-- excursion selection -->
      <h2 style="margin-bottom: 30px;">
        {{ $t('home.excursions_selection') }}
      </h2>

      <div>
        <b-card-group deck style="margin-bottom: 20px;">
          <b-card
            v-for="(excursion, index) in selectedExcursion"
            :key="index"
            :title="excursion.title"
            :img-src="`/docs/excursion-${excursion._index}/cover.jpg`"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              {{ excursion.subtitle }}

              <!-- this is a hack to have the full card clickable without visible button -->
              <nuxt-link :to="`/excursions/${excursion._index}`" class="stretched-link"></nuxt-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>

      <b-button href="/excursions/list" variant="outline-secondary">{{ $t('home.display_all_excursions') }} ...</b-button>
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
        resolution: 400,

        // Define a coordinate CH1903+ (EPSG:2056) for the center of the view
        center: [2660000, 1185000]

        // Ignored if resolution is set
        /* maxZoom: 19,
        zoom: 8.5,
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

    // -----------------------
    // CREATE THE SOURCE LAYER

    // https://embed.plnkr.co/plunk/hhEAWk
    // https://openlayers.org/en/latest/examples/icon.html

    /* const style1 = [
      new window.ol.style.Style({
        image: new window.ol.style.Icon({
          scale: 0.7,
          rotateWithView: false,
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          opacity: 1,
          src: '//raw.githubusercontent.com/jonataswalker/map-utils/master/images/marker.png'
        }),
        zIndex: 5
      })
      / * new window.ol.style.Style({
        image: new window.ol.style.Circle({
          radius: 5,
          fill: new window.ol.style.Fill({
            color: 'rgba(255,255,255,1)'
          }),
          stroke: new window.ol.style.Stroke({
            color: 'rgba(0,0,0,1)'
          })
        })
      }) * /
    ] */

    const fill = new window.ol.style.Fill({
      color: 'red'
    })
    const stroke = new window.ol.style.Stroke({
      color: 'white',
      width: 2
    })
    const defaultStyle = [
      new window.ol.style.Style({
        image: new window.ol.style.Circle({
          fill,
          stroke,
          radius: 8
        })
        // zIndex: 5
      })
    ]
    const selectedStyle = [
      new window.ol.style.Style({
        image: new window.ol.style.Circle({
          fill,
          stroke,
          radius: 5
        })
        // zIndex: 5
      })
    ]

    // http://harrywood.co.uk/maps/examples/openlayers/marker-popups.view.html
    const vectorSource = new window.ol.source.Vector({
      // projection: 'EPSG:4326'
    })

    const vectorLayer = new window.ol.layer.Vector({
      source: vectorSource,
      style: defaultStyle
    })

    map.addLayer(vectorLayer)

    // const point = new window.ol.geom.Point(window.ol.proj.transform([23.64153733909891, 10.729983344428305], 'EPSG:4326', 'EPSG:3857') /*, 5000 */)
    /* const point = new window.ol.geom.Point([2600000, 1200000])
    const feature = new window.ol.Feature({ geometry: point, name: 'Point 1' })

    // feature.setStyle(style1)
    vectorSource.addFeatures([feature]) */

    const sources = []

    excursionData.getExcursions().forEach((excursion, index) => {
      sources.push(
        new window.ol.Feature({
          geometry: new window.ol.geom.Point(excursion.source.coordinates),
          name: excursion.source.name,
          url: '/excursions/' + (index + 1)
        })
      )
    })

    vectorSource.addFeatures(sources)

    const overlay = new window.ol.Overlay({
      element: document.getElementById('excursion-tooltip'),
      positioning: 'bottom-left'
    })
    // overlay.setMap(map)
    map.addOverlay(overlay)

    const select = new window.ol.interaction.Select({
      style: selectedStyle
    })
    select.on('select', function(e) {
      // console.log('select', e, e.target, e.selected)

      if (e.selected && e.selected.length > 0) {
        // console.log('name:', e.selected[0].get('name'))
        const feature = e.selected[0]

        // console.log('coord:', feature.getGeometry().getCoordinates())

        // https://github.com/openlayers/openlayers/issues/3626
        /* e.mapBrowserEvent.coordinate */
        overlay.setPosition(feature.getGeometry().getCoordinates())
        overlay.getElement().innerHTML = feature.get('name')
        overlay.getElement().href = feature.get('url')

        overlay.getElement().style.display = feature ? '' : 'none'
        document.body.style.cursor = feature ? 'pointer' : ''
      } else {
        overlay.getElement().style.display = 'none'
        document.body.style.cursor = ''
      }

      /* const feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
        overlay.setPosition(e.coordinate)
        overlay.getElement().innerHTML = feature.get('name')
        return feature
      })
      overlay.getElement().style.display = feature ? '' : 'none'
      document.body.style.cursor = feature ? 'pointer' : '' */
    })

    map.addInteraction(select)

    /* const vectorLayer = new window.ol.layer.Vector({
      // VectorLayer({
      source: new window.ol.source.Vector()
    })
    const vectorSource = vectorLayer.getSource()

    map.on('click', function(evt) {
      console.log(window.ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'))
      addMarker(evt.coordinate)
    })

    function addMarker(coordinates) {
      console.log(coordinates)
      const marker = new window.ol.Feature(new window.ol.geom.Point(coordinates))
      const zIndex = 1
      marker.setStyle(
        new window.ol.style.Style({
          image: new window.ol.style.Icon({
            anchor: [0.5, 36],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 1,
            src: 'mapIcons/pinother.png',
            zIndex
          }),
          zIndex
        })
      )
      vectorSource.addFeature(marker)
    } */

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

#excursion-tooltip {
  /* max-width: 100px; */
  background-color: #eee;
  color: #333;
  opacity: 0.9;
  font-size: 10pt;
  font-weight: 600;
  font-family: sans-serif;
  margin: 3px;
  border: 2px solid white;
  /* border-radius: 10px 10px 10px 0; */
  border-radius: 5px;
  padding: 2px 5px 1px 5px;
  text-decoration: none;
}

/* button {
  cursor: pointer;
} */

.card img {
  height: 180px;
  width: 100%;
  object-fit: cover;
}
</style>
