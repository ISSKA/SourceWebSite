<template>
  <div class="container">
    <div>
      <small>{{ $t('extra.excursion_label') }} {{ $route.params.excursionId }} - {{ $t('extra.extra_label') }} {{ $route.params.extraId }}</small>
      <h1 class="title">{{ extra.title }}</h1>
      <div>
        <p v-for="(content, index) in extra.description" :key="index">
          {{ content }}
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

      <!-- IMAGES CAROUSEL -->
      <!--<div style="margin-bottom: 30px;">
        <b-carousel
          id="carousel-fade"
          :interval="4000"
          style="text-shadow: 0px 0px 2px #000; background-color: #eee; height: 500px;"
          fade
          controls
          indicators
          _img-width="1024px"
          _img-height="480px"
          img-center
        >
          <b-carousel-slide
            v-for="(image, index) in extra.images"
            :key="index"
            :img-src="`/docs/excursion-${$route.params.excursionId}/extra-${$route.params.extraId}/${image.name}`"
            :caption="image.legend"
            _img-height="480"
            _img-width="480"
            style="max-height: 500px; width: auto;"
          ></b-carousel-slide>
        </b-carousel>
      </div>-->

      <v-gallery :images="images" :index="imgIdx" @close="imgIdx = null"></v-gallery>
      <b-row style="margin-bottom: 60px;">
        <b-col
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          :style="{ backgroundImage: 'url(' + image.href + ')' }"
          class="image"
          style="height: 300px; background-size: cover; background-repeat: no-repeat;"
          @click="imgIdx = imageIndex"
        ></b-col>
      </b-row>

      <!--<b-row>
        <b-col v-for="(image, imageIndex) in images" :key="imageIndex">
          <b-img :src="image" thumbnail fluid alt="Image 1"></b-img>
        </b-col>
      </b-row>-->

      <!--<div>
        <b-img
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          :src="image"
          @click="imgIdx = imageIndex"
          class="image"
          thumbnail
          style="max-height: 500px; max-width: 500px;"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>-->

      <!-- LINKS -->
      <navigation :current-excursion="parseInt($route.params.excursionId, 10)" :current-extra="parseInt($route.params.extraId, 10)" />
    </div>
  </div>
</template>

<script>
import excursionData from '~/assets/script.js'

import Navigation from '~/components/ExtraNavigation.vue'

export default {
  components: {
    Navigation
  },
  validate({ params }) {
    // Doit être un nombre
    return (
      /^\d+$/.test(params.excursionId) &&
      params.excursionId > 0 &&
      params.excursionId <= 12 && // todo: change this dynamically
      /^\d+$/.test(params.extraId) &&
      params.extraId > 0 &&
      params.extraId <= 6 // todo: change this dynamically
    )
  },
  data() {
    return {
      extra: excursionData.getExtra(this.$route.params.excursionId, this.$route.params.extraId),
      images: [],
      imgIdx: null
      // slide: 0,
      // sliding: null
    }
  },
  created() {
    this.extra.images.forEach((image) => {
      this.images.push({
        // title: '',
        description: image.legend,
        href: `/docs/excursion-${this.$route.params.excursionId}/extra-${this.$route.params.extraId}/${image.name}`
      })
    })
  },
  methods: {
    /* onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    } */
  }
}
</script>

<style>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

/* imporove the gallery design */
#blueimp-gallery .prev,
#blueimp-gallery .next,
#blueimp-gallery .close {
  color: white !important;
}
#blueimp-gallery .description {
  top: auto;
  bottom: 30px;
}
</style>
