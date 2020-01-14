<template>
  <div v-if="itemsCount > 1" class="row justify-content-between">
    <div class="col-5">
      <nuxt-link v-if="prev.show" :to="prev.link" class="next-page-link">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters style="height: 148px; max-height: 148px; overflow: hidden;">
            <b-col md="4">
              <b-card-img :src="prev.img" class="rounded-0" style="height: 100%; width: 100%; object-fit: cover;"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="prev.title">
                <b-card-text>
                  {{ prev.sumary }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </nuxt-link>
    </div>
    <div class="col-2">
      <nuxt-link :to="`/excursions/${currentExcursion}`" class="next-page-link">
        <b-card no-body class="overflow-hidden text-center" style="max-width: 540px; height: 148px;">
          <b-card-body title="Excursion">
            <b-card-text>Retour à l'excursion</b-card-text>
          </b-card-body>
        </b-card>
      </nuxt-link>
    </div>
    <div class="col-5">
      <nuxt-link v-if="next.show" :to="next.link" class="next-page-link">
        <b-card no-body class="overflow-hidden text-right" style="max-width: 540px;">
          <b-row no-gutters style="height: 148px; max-height: 148px; overflow: hidden;">
            <b-col md="8">
              <b-card-body :title="next.title">
                <b-card-text>
                  {{ next.sumary }}
                </b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="4">
              <b-card-img :src="next.img" class="rounded-0" style="height: 100%; width: 100%; object-fit: cover;"></b-card-img>
            </b-col>
          </b-row>
        </b-card>
      </nuxt-link>
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

    const prev = excursionData.getExtra(this.currentExcursion, prevIndex)
    const next = excursionData.getExtra(this.currentExcursion, nextIndex)

    return {
      prev: {
        show: EXTRAS_COUNT > 2 || currentExtra === 2,
        title: prev.title, // `Extra ${prevIndex} - ${prev.title}`,
        sumary: prev.sumary,
        link: `/excursions/${this.currentExcursion}/extras/${prevIndex}`,
        img: prev.cover ? `/docs/excursion-${this.currentExcursion}/extra-${prevIndex}/${prev.cover}` : 'https://picsum.photos/400/400/?image=11'
      },
      next: {
        show: EXTRAS_COUNT > 2 || currentExtra === 1,
        title: next.title, // `Extra ${nextIndex} - ${next.title}`,
        sumary: next.sumary,
        link: `/excursions/${this.currentExcursion}/extras/${nextIndex}`,
        img: next.cover ? `/docs/excursion-${this.currentExcursion}/extra-${nextIndex}/${next.cover}` : 'https://picsum.photos/400/400/?image=10'
      },
      itemsCount: EXTRAS_COUNT
    }
  }
}
</script>

<style></style>
