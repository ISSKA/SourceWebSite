<template>
  <div>
    <!-- HEADER -->
    <div class="header">
      <!-- NAVBAR -->
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-container>
          <b-navbar-brand href="/">Sources de Suisse</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" flex="false">
              <b-nav-item href="/excursions/list">Liste des excursions</b-nav-item>
              <b-nav-item href="/about">A propos</b-nav-item>
              <b-nav-item href="/contact">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

      <!-- HEADER CONTENT -->
      <b-container class="text-center" style="min-height: 150px; padding-top: 25px; color: white;">
        <h1>Cover default</h1>
        <p>Un petit texte de description !</p>
      </b-container>
    </div>

    <nuxt />

    <!-- FOOTER -->
    <div style="height: 50px; background-color: gray; padding-top: 10px; color: white; margin-top: 40px;">
      <b-container class="text-center">
        <small>Copyright &copy; Your Website <span id="year">2019</span></small>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.header {
  background-image: url(/img/background.jpg);
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
}

/* Next/Previous page link for excursions and extras */
.next-page-link,
.next-page-link:hover {
  color: inherit;
  text-decoration: none;
}
</style>
