<template>
  <div class="row justify-content-between">
    <div class="col-6">
      <nuxt-link :to="prev.link" class="next-page-link">
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
      <nuxt-link :to="next.link" class="next-page-link">
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
const ITEMS_COUNT = 12

export default {
  props: {
    currentExcursion: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 1 && value <= ITEMS_COUNT
      }
    }
  },
  data() {
    // console.log(this.currentExcursion, typeof this.currentExcursion)

    const prevIndex = this.currentExcursion > 1 ? this.currentExcursion - 1 : ITEMS_COUNT
    const nextIndex = (this.currentExcursion + 1) % ITEMS_COUNT

    // console.log(prevIndex, nextIndex)

    return {
      prev: {
        title: `Excursion ${prevIndex}`,
        sumary: 'This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.',
        link: `/excursions/excursion-${prevIndex}`,
        img: 'https://picsum.photos/400/400/?image=11'
      },
      next: {
        title: `Excursion ${nextIndex}`,
        sumary: 'This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.',
        link: `/excursions/excursion-${nextIndex}`,
        img: 'https://picsum.photos/400/400/?image=10'
      }
    }
  }
}
</script>

<style></style>
