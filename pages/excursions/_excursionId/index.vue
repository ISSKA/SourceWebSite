<template>
  <div class="container">
    <!-- Breadcrumb -->
    <small>
      <nuxt-link :to="localePath('/')">{{ $t('extra.excursions_label') }}</nuxt-link>
      /
      {{ excursion.title }}
    </small>

    <h1 class="title" style="margin-bottom: 0px;">{{ excursion.title }}</h1>
    <h2 class="subtitle">{{ excursion.subtitle }}</h2>

    <div class="row" style="margin-bottom: 40px;">
      <div class="col-md-6">
        <!-- {{ $t('excursion.infos.level') }} : {{ excursion.summary.difficulty }}
      <br />
      {{ $t('excursion.infos.duration') }} : {{ excursion.summary.duration }}
      <br />
      <a :href="`/docs/excursion-${$route.params.excursionId}/${excursion.summary.download_file}`" target="_blank">{{
        $t('excursion.education_sheet_link')
      }}</a>
      <br />
      {{ $t('excursion.cff.text') }} : <a :href="excursion.cff.link_begin" target="_blank">{{ $t('excursion.cff.link_begin') }}</a>
      <br />
      -->

        <p v-for="(description, index) in excursion.description" :key="'desc-' + index" v-html="description"   style="text-align: justify;"></p>

        <a :href="`/docs/excursion-${$route.params.excursionId}/${excursion.summary.download_file}`" target="_blank" class="btn btn-primary" role="button">
          {{
          $t('excursion.education_sheet_link')
          }}
        </a>
      </div>
      <div class="col-md-6 text-center map-situation">
        <img :src="`/docs/excursion-${$route.params.excursionId}/map_situation.jpg`" width="70%" />
      </div>
    </div>

    <!-- ITINERAIRE -->
    <template v-for="content in excursion.route">
      <h2 class="title-section">{{ content.title }}</h2>

      <dl class="row info-card" style="border: 1px solid gray; padding: 10px; padding-top: 15px; border-radius: 10px; background-color: #e5f8ff; text-align: left;">
        <dt class="col-sm-2" v-if="content.details.type && content.details.type != ''">{{ $t('excursion.infos.type') }}</dt>
        <dd class="col-sm-10" v-if="content.details.type && content.details.type != ''">{{ content.details.type }}</dd>
        <dt class="col-sm-2">{{ $t('excursion.infos.start') }}</dt>
        <dd class="col-sm-4">
          {{ content.details.start }} (<a :href="excursion.cff.link_begin" target="_blank">{{ $t('excursion.cff.text') }}</a>)
        </dd>
        <dt class="col-sm-2">{{ $t('excursion.infos.end') }}</dt>
        <dd class="col-sm-4">
          {{ content.details.end }} (<a :href="excursion.cff.link_end" target="_blank">{{ $t('excursion.cff.text') }}</a>)
        </dd>
        <dt class="col-sm-2">{{ $t('excursion.infos.distance') }}</dt>
        <dd class="col-sm-4">{{ content.details.distance }}</dd>
        <dt class="col-sm-2">{{ $t('excursion.infos.delta_height') }}</dt>
        <dd class="col-sm-4">{{ content.details.delta_height }}</dd>
        <dt class="col-sm-2">{{ $t('excursion.infos.duration') }}</dt>
        <dd class="col-sm-4">{{ content.details.duration }}</dd>
        <dt class="col-sm-2" v-if="content.details.restauration && content.details.restauration != ''">{{ $t('excursion.infos.restaurant') }}</dt>
        <dd class="col-sm-4" v-if="content.details.restauration && content.details.restauration != ''">{{content.details.restauration }}</dd>
        <dt class="col-sm-2" v-if="content.details.hebergement && content.details.hebergement != ''">{{ $t('excursion.infos.hebergement') }}</dt>
        <dd class="col-sm-4" v-if="content.details.hebergement && content.details.hebergement != ''">{{ content.details.hebergement }}</dd>
      </dl>

      <h3>{{$t('excursion.route.title')}}</h3>
      <p v-for="(content, index) in content.description" :key="'details-' + index" v-html="content"   style="text-align: justify;">

      </p>
    </template>

    <!--<div>
    <b-table :items="items" class="col-md-5" stacked style="background-color: lightgray;"></b-table>
  </div>-->
    <!--<div class="full-width" style="max-height: 720px; overflow: hiden; background-color: #eee; padding-top: 0px; margin-top: 40px;">-->
    <div class="full-width excursion-path-map" style="max-height: 700px; overflow: hidden; overflow-x: scroll; padding-top: 0px; margin-top: 40px;">
      <!--<figure style="position: absolute; right: 0; left: 0; overflow-y: hidden; max-height: 600px;">
    <img :src="`/docs/excursion-${$route.params.excursionId}/map.jpg`" style="width: 100%;" usemap="#workmap" />
    <figcaption style="position: absolute; bottom: 0; background-color: rgba(255, 255, 255, 0.8); padding: 2px 8px;">
      {{ $t('excursion.route.legend') }}
    </figcaption>
  </figure>-->

      <img v-if="$i18n.locale==='fr'" :src="`/docs/excursion-${$route.params.excursionId}/map.jpg`" style="max-height: 700px; width: 100%;" usemap="#workmap" />
      <img v-if="$i18n.locale==='de'" :src="`/docs/excursion-${$route.params.excursionId}/map_de.jpg`" style="max-height: 700px; width: 100%;" usemap="#workmap" />

      <!-- https://www.image-map.net -->
      <map name="workmap">
        <template v-for="content in excursion.extras.filter((item) => item.onTheRoad)">
          <template v-for="position in content">

            <area :key="content.index"
                  shape="circle"
                  :coords="`${content.position.x}, ${content.position.y}, 35`"
                  alt="Computer"
                  href="#"
                  @click.prevent="interactivePoint(content.index)" />
            <area v-if="content.position2"
                  :key="content.index"
                  shape="circle"
                  :coords="`${content.position2.x}, ${content.position2.y}, 35`"
                  alt="Computer"
                  href="#"
                  @click.prevent="interactivePoint(content.index)" />
          </template>
        </template>


      </map>

      <!--<div class="text-center" style="margin-top: 20px;">
    <b-button
      v-for="(content, index) in excursion.point_of_interest"
      :id="'modal-interest-' + index"
      :key="index"
      pill
      variant="dark"
      style="margin-right: 15px; margin-left: 15px; font-weight: 600; color: yellow;"
      size="lg"
      @click="interactivePoint(index)"
      >{{ String.fromCharCode(index + 65) }}</b-button
    >

    <div style="margin-top: 10px; font-style: italic; color: #666;">{{ $t('excursion.route.legend') }}</div>
  </div>-->
    </div>

    <div v-if="excursion.link_swissmobile" class="text-center">
      <a :href="excursion.link_swissmobile" target="_blank">{{ $t('excursion.link_swissmobile') }}</a><br />
      <a v-if="excursion.link_geoadmin" :href="excursion.link_geoadmin" target="_blank">{{ $t('excursion.link_geoadmin') }}</a>
    </div>

    <!-- POINTS D INTERET -->
    <!--<h3 class="title-section">
    Points d’intérêt
  </h3>

  <b-card-group deck>
    <div class="row" style="margin-top: 40px; margin-bottom: 40px;">
      <div v-for="(content, index) in excursion.point_of_interest" :key="index" class="col-6" style="margin-bottom: 40px;">
        <b-card
          :title="content.title"
          overlay
          img-src="https://picsum.photos/900/250/?image=10"
          img-height="200px"
          img-alt="Card Image"
          text-variant="white"
          sub-title="xxx"
        >
          <b-card-text>{{ content.description }}</b-card-text>
        </b-card>
      </div>
    </div>
  </b-card-group>-->
    <!--<b-list-group>
    <b-list-group-item
      v-for="(content, index) in excursion.point_of_interest"
      :key="index"
      href="#"
      class="flex-column align-items-start"
      :class="{ active: activeInterestPoint === index }"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ content.title }}</h5>
        <!- -<small>3 days ago</small>- ->
      </div>
      <p class="mb-1">{{ content.description }}</p>
      <!- -<small>Donec id elit non mi porta.</small>- ->
    </b-list-group-item>
  </b-list-group>-->
    <!--<b-tabs content-class="mt-3" align="center">
    <b-tab v-for="(content, index) in excursion.point_of_interest" :key="index" :title="letters[index]">
      <h5>{{ content.title }}</h5>
      <p>{{ content.description }}</p>
    </b-tab>
  </b-tabs>-->
    <!-- POINT OF INTEREST -->
    <h3 v-if="excursion.extras.filter((item) => item.onTheRoad).length > 0"class="title-section" style="margin-top: 40px;">
      {{ $t('excursion.point_of_interest') }}
    </h3>

    <b-card-group deck>
      <div class="row" style="margin-top: 20px; margin-bottom: 40px; text-align: left;">
        <image-link-card v-for="content in excursion.extras.filter((item) => item.onTheRoad)" :key="content.index" :content="content" :letter="true" />
        
      </div>
      
    </b-card-group>

    <!-- EXTRAS -->
      <h3 v-if="excursion.extras.filter((item) => !item.onTheRoad).length > 0" class="title-section">
        {{ $t('excursion.extras') }}
      </h3>

      <b-card-group deck>
        <div class="row" style="margin-top: 20px; margin-bottom: 40px; text-align: left;">
          <image-link-card v-for="content in excursion.extras.filter((item) => !item.onTheRoad)" :key="content.index" :content="content" />
        </div>
      </b-card-group>

    <!-- TO SEE IN THE REGION -->
    <!--<div v-if="excursion.in_the_region.length > 0" class="full-width" style="background-color: #eee;">
    <b-container>
      <h2 style="margin-bottom: 30px;">{{ $t('excursion.to_see_in_the_region') }}</h2>
      <div v-for="(content, index) in excursion.in_the_region" :key="index">
        <h4>{{ content.title }}</h4>
        <p>{{ content.description }}</p>
      </div>
      <!- -<b-button variant="primary" href="#">More Info</b-button>- ->
    </b-container>
  </div>-->
    <!-- PREV / NEXT EXCURSION LINKS -->
    <!--<navigation :current-excursion="parseInt($route.params.excursionId, 10)" style="margin-top: 50px; margin-bottom: 50px;" />-->
    <!-- REFERENCES -->
    <!--<div v-if="excursion.more.length > 0" style="padding-top: 20px; padding-bottom: 10px; margin-bottom: -40px;">
    <p style="margin-bottom: 2px;">{{ $t('excursion.more') }} :</p>
    <ul>
      <li v-for="(content, index) in excursion.more" :key="index">
        {{ content.text }}
        <a v-if="content.link" :href="content.link.url" target="_blank">{{ content.link.name }}</a>
      </li>
    </ul>
  </div>-->
    <!--<div v-if="excursion.more.length > 0" class="full-width" style="background-color: #eee; padding-bottom: 20px; margin-bottom: -30px;">
      <b-container>
        <p style="margin-bottom: 2px;">{{ $t('excursion.more') }} :</p>
        <ul>
          <li v-for="(content, index) in excursion.more" :key="index">
            {{ content.text }}
            <a v-if="content.link" :href="content.link.url" target="_blank">{{ content.link.name }}</a>
          </li>
        </ul>
      </b-container>
    </div>-->

    <!--
  <div class="map-source-position">
    <b-embed
      type="iframe"
      aspect="4by3"
      src="https://map.geo.admin.ch/embed.html?lang=fr&topic=ech&bgLayer=ch.swisstopo.swissimage&zoom=12&catalogNodes=532,614&E=2604063.20&N=1196879.81&layers_visibility=false,false,false,false&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege&layers_timestamp=18641231,,,"
      allowfullscreen
    ></b-embed>
  </div>
  -->
    <!-- Interest modal -->
    <!--<b-modal
    v-for="(content, index) in excursion.point_of_interest"
    :id="'modal-interest-' + index"
    :key="index"
    size="lg"
    _centered
    :title="content.title"
    ok-only
  >
    {{ content.description }}
  </b-modal>-->
  </div>
</template>

<script>
import ImageMap from 'image-map'

import excursionData from '~/assets/script.js'

// import Navigation from '~/components/ExcursionNavigation.vue'
import ImageLinkCard from '~/components/ImageLinkCard.vue'

export default {
  components: {
    // Navigation,
    ImageLinkCard
  },
  validate({ params }) {
    // Doit être un nombre
    return /^\d+$/.test(params.excursionId) && params.excursionId > 0 && params.excursionId <= excursionData.getExcursionsCount()
  },
  data() {
    // console.log(this.$route.params.excursionId, typeof this.$route.params.excursionId)

    if(this.$i18n.locale === "de") {
      return {
        excursion: excursionData.getExcursion_de(this.$route.params.excursionId),
        activeInterestPoint: null
        // letters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
      }
    }
    else {
      return {
        excursion: excursionData.getExcursion(this.$route.params.excursionId),
        activeInterestPoint: null
    }
    }
  },
  mounted() {
    setTimeout(() => {
      ImageMap('img[usemap]')
    }, 1000)
  },
  methods: {
    interactivePoint(index) {
      // window.alert('pressé :' + index)
      // this.activeInterestPoint = index

      // this.$bvModal.show('modal-interest-' + index)

      this.$router.push(this.localePath(`/excursions/${this.$route.params.excursionId}/extras/${index}`))
    }
  },
  head() {
    return { title: this.$t('default_head_title') + ' - ' + this.excursion.title }
  }
}
</script>

<style>
/*
.map-source-position {
  max-width: 800px;
}
*/
.full-width {
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  position: relative;
  padding-top: 40px;
}
</style>
