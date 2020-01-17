<template>
  <div>
    <div class="body-container">
      <!-- HEADER -->
      <div class="header">
        <!-- NAVBAR -->
        <b-navbar toggleable="md" type="dark" variant="faded">
          <b-container>
            <b-navbar-brand href="/">{{ $t('menu.website_name') }}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto" flex="false">
                <b-nav-item href="/">{{ $t('menu.home') }}</b-nav-item>
                <!--<b-nav-item href="/excursions/list">{{ $t('menu.excursions') }}</b-nav-item>-->
                <b-nav-item href="/about">{{ $t('menu.about') }}</b-nav-item>
                <b-nav-item href="/contact">{{ $t('menu.contact') }}</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>

        <!-- HEADER CONTENT -->
        <b-container class="text-center" style="min-height: 150px; padding-top: 40px; color: white; background-color: rgba(0, 0, 0, 0.2);">
          <h1>{{ $t('layout.title') }}</h1>
          <!--<p>Un petit texte de description !</p>-->
        </b-container>
      </div>

      <nuxt />
    </div>

    <!-- FOOTER -->
    <div class="footer-container">
      <b-container class="text-center">
        <small>Copyright &copy; {{ $t('footer.copyright_brand') }} <span id="year">2020</span></small>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('year').innerHTML = new Date().getFullYear()
  }
}
</script>

<style></style>
