<template>
  <div>
    <div class="body-container">
      <!-- HEADER -->
      <div class="header" :style="customBanner">
        <!-- NAVBAR -->
        <b-navbar toggleable="md" type="dark" variant="faded">
          <b-container>
            <b-navbar-brand :href="localePath('/')">{{ $t('menu.website_name') }}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto" flex="false">
                <b-nav-item :href="localePath('/')">{{ $t('menu.home') }}</b-nav-item>
                <!--<b-nav-item href="/excursions/list">{{ $t('menu.excursions') }}</b-nav-item>-->
                <b-nav-item :href="localePath('/about')">{{ $t('menu.about') }}</b-nav-item>
                <b-nav-item :href="localePath('/contact')">{{ $t('menu.contact') }}</b-nav-item>
                <b-nav-item v-if="$i18n.locale === 'fr'" :href="switchLocalePath('de')">DE</b-nav-item>
                <b-nav-item v-if="$i18n.locale === 'de'" :href="switchLocalePath('fr')">FR</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>

        <!-- HEADER CONTENT -->
        <b-container class="text-center" style="min-height: 400px; padding-top: 120px; color: white;">
          <div style="background-color: rgba(0, 0, 0, 0.25); padding: 20px 10px; border-radius: 10px;">
            <h1>{{ $t('layout.title') }}</h1>
            <p>{{ $t('layout.intro') }}</p>

            <!--<b-button href="/excursions/list" variant="success">{{ $t('layout.btn_excursions') }}</b-button>-->
          </div>
        </b-container>
      </div>

      <nuxt />
    </div>

    <!-- FOOTER -->
    <div class="footer-container">
      <b-container class="text-center">
        <small>Copyright &copy; {{ $t('footer.copyright_brand') }} <span id="year">2020</span> Cartes: swisstopo</small>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customBanner: {}
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to, from)

      if (/^\/excursions\/\d+$/.test(to.path)) {
        // custom banner
        // console.log(to.params.excursionId)
        this.customBanner = {
          'background-image': `url(/docs/excursion-${to.params.excursionId}/cover.jpg)`
        }
      } else {
        // default banner
        /* this.customBanner = {
          'background-image': `url(/img/background.jpg)`
        } */
      }
    }
  },
  mounted() {
    document.getElementById('year').innerHTML = new Date().getFullYear()
  }
}
</script>

<style></style>
