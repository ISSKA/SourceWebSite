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
const EXCURSIONS_COUNT = 12
const EXTRA_COUNT = 4

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
        return value >= 1 && value <= EXTRA_COUNT
      }
    }
  },
  data() {
    // console.log(this.currentExtra, typeof this.currentExtra)

    // Ensure to cast currentExtra to Number (when passed from $route.params)
    const currentExtra = parseInt(this.currentExtra)

    const prevIndex = currentExtra > 1 ? currentExtra - 1 : EXTRA_COUNT
    const nextIndex = (currentExtra + 1) % EXTRA_COUNT

    // console.log(prevIndex, nextIndex)

    return {
      prev: {
        title: `Extra ${prevIndex}`,
        sumary: 'This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.',
        link: `/excursions/${this.currentExcursion}/extras/${prevIndex}`,
        img: 'https://picsum.photos/400/400/?image=11'
      },
      next: {
        title: `Extra ${nextIndex}`,
        sumary: 'This is a wider card with supporting text as a natural lead-in to additional content. This content is a little bit longer.',
        link: `/excursions/${this.currentExcursion}/extras/${nextIndex}`,
        img: 'https://picsum.photos/400/400/?image=10'
      }
    }
  }
}
</script>

<style></style>
