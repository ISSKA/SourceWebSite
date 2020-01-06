<template>
  <div class="container">
    <div>
      <h1 class="title">{{ extra.title }}</h1>
      <small>Excursion {{ $route.params.excursionId }} - Extra {{ $route.params.extraId }}</small>
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
          <b-carousel-slide
            v-for="(image, index) in extra.images"
            :key="index"
            :img-src="`/docs/excursion-${$route.params.excursionId}/extra-${$route.params.extraId}/${image.name}`"
            :caption="image.legend"
            style="height: 500px;"
          ></b-carousel-slide>
        </b-carousel>
      </div>

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
      extra: excursionData.getExtra(this.$route.params.excursionId, this.$route.params.extraId)
      // slide: 0,
      // sliding: null
    }
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

<style></style>
