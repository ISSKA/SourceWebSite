<template>
  <div v-if="itemsCount > 1" class="row justify-content-between">
    <div class="col-6">
      <nuxt-link :to="prev.link" v-if="prev.show" class="next-page-link">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img :src="prev.img" class="rounded-0"></b-card-img>
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
    <div class="col-6">
      <nuxt-link :to="next.link" v-if="next.show" class="next-page-link">
        <b-card no-body class="overflow-hidden text-right" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="8">
              <b-card-body :title="next.title">
                <b-card-text>
                  {{ prev.sumary }}
                </b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="4">
              <b-card-img :src="next.img" class="rounded-0"></b-card-img>
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
    }
  },
  data() {
    // console.log(this.currentExcursion, typeof this.currentExcursion)

    // Ensure to cast currentExcursion to Number (when passed from $route.params)
    const currentExcursion = parseInt(this.currentExcursion)

    const prevIndex = currentExcursion > 1 ? currentExcursion - 1 : EXCURSIONS_COUNT
    const nextIndex = currentExcursion < EXCURSIONS_COUNT ? currentExcursion + 1 : 1
    // console.log(prevIndex, nextIndex)

    const prev = excursionData.getExcursion(prevIndex)
    const next = excursionData.getExtras(nextIndex)

    return {
      prev: {
        show: EXCURSIONS_COUNT > 2 || currentExcursion === 2,
        title: `Excursion ${prevIndex}`,
        sumary: prev.subtitle,
        link: `/excursions/${prevIndex}`,
        img: 'https://picsum.photos/400/400/?image=11'
      },
      next: {
        show: EXCURSIONS_COUNT > 2 || currentExcursion === 1,
        title: `Excursion ${nextIndex}`,
        sumary: next.subtitle,
        link: `/excursions/${nextIndex}`,
        img: 'https://picsum.photos/400/400/?image=10'
      },
      itemsCount: EXCURSIONS_COUNT
    }
  }
}
</script>

<style></style>
