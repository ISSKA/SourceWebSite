<template>
  <div class="col-6" style="margin-bottom: 40px;">
    <nuxt-link :to="`/excursions/${this.$route.params.excursionId}/extras/${index}`" class="next-page-link">
      <b-card
        :title="content.title"
        :sub-title="''"
        :img-alt="content.title"
        img-src="https://picsum.photos/900/250/?image=14"
        overlay
        img-height="200px"
        text-variant="white"
        sub-title-text-variant="white"
      >
        <b-card-text>
          {{ content.sumary }}
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
