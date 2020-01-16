<template>
  <div>
    <b-container style="margin-top: 40px;">
      <div class="text-left">
        <p v-for="(description, index) in $t('home.text')" :key="index">{{ description }}</p>
      </div>

      <img src="/img/swiss_map.jpg" style="width: 100%;" />

      <!-- excursion table -->
      <h2 style="margin-bottom: 30px;">
        {{ $t('home.excursions_list') }}
      </h2>

      <b-table small striped :items="items" :fields="fields" selectable select-mode="single" class="align-right" @row-selected="onRowSelected"></b-table>
    </b-container>
  </div>
</template>

<script>
import excursionData from '~/assets/script.js'

export default {
  layout: 'landing',
  data() {
    const excursionsList = excursionData.getExcursions()
    excursionsList.forEach((excursion, index) => {
      excursion.idx = index + 1
    })
    // console.log(excursionsList)

    return {
      fields: [
        {
          key: 'source.name',
          label: this.$t('home.table.name'),
          sortable: true
        },
        {
          key: 'source.canton',
          label: this.$t('home.table.canton'),
          sortable: true
        }
      ],
      items: excursionsList
    }
  },
  methods: {
    onRowSelected(items) {
      // console.log(items.idx)

      this.$router.push({
        path: '/excursions/' + items[0].idx
      })
    }
  }
}
</script>

<style></style>
