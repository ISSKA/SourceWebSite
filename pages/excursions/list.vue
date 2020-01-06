<template>
  <div class="container">
    <div>
      <h1 class="title">
        Liste des excursions
      </h1>
      <!--<h2 class="subtitle">
        Détails
      </h2>
      <div class="links">
        <nuxt-link to="/" class="button--green">
          Index
        </nuxt-link>
      </div>-->

      <div>
        <b-card-group v-for="(excursionsGroup, groupIndex) in excursionsGroups" :key="groupIndex" deck style="margin-bottom: 20px;">
          <b-card
            v-for="(excursion, index) in excursionsGroup"
            :key="index"
            :title="excursion.subtitle"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
          >
            <b-card-text>
              xxx
            </b-card-text>
            <nuxt-link :to="`/excursions/${groupIndex + index + 1}`" class="button--green"> Excursion {{ groupIndex + index + 1 }} </nuxt-link>
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import excursionData from '~/assets/script.js'

export default {
  data() {
    return {
      excursionsGroups: []
    }
  },
  created() {
    const excursions = excursionData.getExcursions()

    const GROUP_BY = 3

    for (let idx = 0; idx < excursions.length; idx += GROUP_BY) {
      const group = []
      for (let idy = 0; idy < 3; idy++) {
        if (excursions.length > idx + idy) {
          group.push(excursions[idx + idy])
        }
      }
      this.excursionsGroups.push(group)
    }

    console.log(this.excursionsGroups)
  }
}
</script>

<style></style>
