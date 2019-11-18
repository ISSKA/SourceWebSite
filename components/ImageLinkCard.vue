<template>
  <div class="col-6" style="margin-bottom: 40px;">
    <nuxt-link :to="'/excursions/1/extra-' + content.index" class="next-page-link">
      <b-card :title="content.title" :sub-title="content.subTitle" :img-src="content.img" overlay img-height="200px" img-alt="Card Image" text-variant="white">
        <b-card-text>
          xxx
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
