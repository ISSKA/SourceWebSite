<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ $t('about.title') }}
      </h1>
      <div>
        <p v-for="(description, index) in $t('about.description')" :key="index">{{ description }}</p>

        <!-- CONTRIBUTEURS -->
        <h2 style="margin-top: 40px; margin-bottom: 30px;" class="title-section">{{ $t('about.contributors') }}</h2>

        <div class="row text-center">
          <div class="col-md-6">
            <a href="https://www.sl-fp.ch" target="_blank"><img src="/img/logo_sl.svg" height="80" style="margin-bottom: 20px;"/></a>
            <br />
            {{ $t('about.fp.name') }}
            <br />
            <a href="https://www.sl-fp.ch" target="_blank">www.sl-fp.ch</a>
          </div>
          <div class="col-md-6">
            <a href="https://www.isska.ch" target="_blank"><img src="/img/logo_isska.jpg" height="80" style="margin-bottom: 20px;"/></a>
            <br />
            {{ $t('about.isska.name') }}
            <br />
            <a href="https://www.isska.ch" target="_blank">www.isska.ch</a>
          </div>
        </div>
        <div class="row text-center" style="margin-top: 60px;">
          <div class="col-md-6">
            <a href="https://www.loro.ch" target="_blank"><img src="/img/logo_lr.jpg" height="80" style="margin-bottom: 20px;"/></a>
            <br />
            {{ $t('about.lr.name') }}
            <br />
            <a href="https://www.loro.ch" target="_blank">www.loro.ch</a>
          </div>
          <div class="col-md-6">
            <a href="https://www.bafu.admin.ch" target="_blank"><img src="/img/logo_ofev.jpg" height="80" style="margin-bottom: 20px;"/></a>
            <br />
            {{ $t('about.ofev.name') }}
            <br />
            <a href="https://www.bafu.admin.ch" target="_blank">www.bafu.admin.ch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('default_head_title') + ' - ' + this.$t('about.title') }
  }
}
</script>

<style></style>
