<template>
  <div v-if="itemsCount > 1" class="row justify-content-between">
    <div class="col-md-3 col-6">
      <nuxt-link v-if="prev.show" :to="prev.link" class="btn btn-link">&lt; {{ $t('extra.prev_text') }}</nuxt-link>
    </div>
    <div class="col-md-6 text-center extra-navigation-btn-back">
      <nuxt-link :to="localePath(`/excursions/${currentExcursion}`)" class="btn btn-link">{{ $t('extra.return_text') }}</nuxt-link>
    </div>
    <div class="col-md-3 col-6 text-right">
      <nuxt-link v-if="next.show" :to="next.link" class="btn btn-link">{{ $t('extra.next_text') }} &gt; </nuxt-link>
    </div>
  </div>
</template>

<script>
import excursionData from '~/assets/script.js'

const EXCURSIONS_COUNT = excursionData.getExcursionsCount()

export default {
  props: {
    currentExcursion: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 1 && value <= EXCURSIONS_COUNT
      }
    },
    currentExtra: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 1 && value <= 15 /* excursionData.getExtrasCount(this.currentExcursion) // it is not possible to access an other prop */
      }
    }
  },
  data() {
    // console.log(this.currentExcursion, typeof this.currentExcursion)
    // console.log(this.currentExtra, typeof this.currentExtra)

    const EXTRAS_COUNT = excursionData.getExtrasCount(this.currentExcursion)
    // console.log(totalExtras, typeof totalExtras)

    // Ensure to cast currentExtra to Number (when passed from $route.params)
    const currentExtra = parseInt(this.currentExtra)

    const prevIndex = currentExtra > 1 ? currentExtra - 1 : EXTRAS_COUNT
    const nextIndex = currentExtra < EXTRAS_COUNT ? currentExtra + 1 : 1
    // console.log(prevIndex, nextIndex)

    return {
      prev: {
        show: EXTRAS_COUNT > 2 || currentExtra === 2,
        link: this.localePath(`/excursions/${this.currentExcursion}/extras/${prevIndex}`)
      },
      next: {
        show: EXTRAS_COUNT > 2 || currentExtra === 1,
        link: this.localePath(`/excursions/${this.currentExcursion}/extras/${nextIndex}`)
      },
      itemsCount: EXTRAS_COUNT
    }
  }
}
</script>

<style></style>
