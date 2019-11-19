<template>
  <div class="col-6" style="margin-bottom: 40px;">
    <nuxt-link :to="content.link" class="next-page-link">
      <b-card
        :title="content.title"
        :sub-title="content.subTitle"
        :img-src="content.img"
        :img-alt="content.title + ' ' + content.subTitle"
        overlay
        img-height="200px"
        text-variant="white"
        sub-title-text-variant="white"
      >
        <b-card-text>
          {{ content.description }}
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
    }
  }
}
</script>

<style></style>
