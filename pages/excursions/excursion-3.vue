<template>
  <div class="container">
    <div>
      <h1 class="title">
        Excursion 3
      </h1>
      <div class="links">
        <nuxt-link to="/excursions/list" class="button--green">
          Index
        </nuxt-link>
      </div>
    </div>

    <navigation :current-excursion="3" />
  </div>
</template>

<script>
import Navigation from '~/components/ExcursionNavigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style></style>
