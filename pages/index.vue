<template>
  <div>
    <b-container style="margin-top: 40px;">
      <div class="text-left">
        <p v-for="(description, index) in $t('home.text')" :key="index">{{ description }}</p>
      </div>

      <img src="/img/swiss_map.jpg" style="width: 100%;" usemap="#swissmap" />

      <!-- https://www.image-map.net -->
      <map name="swissmap">
        <area
          v-for="(excursion, index) in excursions"
          :key="index"
          shape="circle"
          :coords="`${excursion.source.position.x}, ${excursion.source.position.y}, ${excursion.source.position.r}`"
          alt="Computer"
          href="#"
          @click.prevent="interactivePoint(index + 1)"
        />
      </map>

      <!-- excursion selection -->
      <h2 style="margin-bottom: 30px; margin-top: 30px;" class="text-center title-section">
        {{ $t('home.excursions_list') }}
      </h2>

      <div class="excursions-card-list">
        <b-card-group columns style="margin-bottom: 20px;">
          <b-card
            v-for="(excursion, index) in excursions"
            :key="index"
            :title="excursion.title"
            :img-src="`/docs/excursion-${index + 1}/cover.jpg`"
            img-alt="Image"
            img-height="130px"
            overlay
            img-top
            tag="article"
            text-variant="white"
            sub-title-text-variant="white"
            class="img-card"
          >
            <b-card-text>


              <!-- this is a hack to have the full card clickable without visible button -->
              <nuxt-link :to="localePath(`/excursions/${index + 1}`)" class="stretched-link"></nuxt-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import ImageMap from 'image-map'

import excursionData from '~/assets/script.js'

export default {
  layout: 'landing',
  data() {
    return {
      excursions: []
    }
  },
  mounted() {
    this.excursions = excursionData.getExcursions()

    setTimeout(() => {
      ImageMap('img[usemap]')
    }, 1000)
  },
  methods: {
    interactivePoint(index) {
      // window.alert('pressé :' + index)
      // this.activeInterestPoint = index

      // this.$bvModal.show('modal-interest-' + index)

      this.$router.push(this.localePath(`/excursions/${index}`))
    }
  },
  head() {
    return { title: this.$t('default_head_title') }
  }
}
</script>

<style>
.img-card img {
  /* height: 150px; */
  width: 100%;
  object-fit: cover;
}
.img-card .card-body {

  padding: 0;
}
  .card-title {
    padding: 1.25rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: rgba(255, 255,255, 0.6);
    color: black;
  }
</style>
