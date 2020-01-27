<template>
  <div class="col-6" style="margin-bottom: 40px;">
    <nuxt-link :to="`/excursions/${this.$route.params.excursionId}/extras/${content.index}`" class="next-page-link">
      <b-card
        :title="title()"
        :sub-title="''"
        :img-alt="content.title"
        :img-src="`/docs/excursion-${this.$route.params.excursionId}/extra-${content.index}/${content.cover}`"
        overlay
        img-height="200px"
        text-variant="white"
        sub-title-text-variant="white"
        class="img-link-card"
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
    letter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    title() {
      if (this.letter) {
        return String.fromCharCode(this.content.index + 64) + '. ' + this.content.title
      }

      return this.content.title
    }
  }
}
</script>

<style>
.img-link-card img {
  object-fit: cover;
  min-width: 200px;
}
.img-link-card .card-body {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
