<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ $t('about.title') }}
      </h1>
      <div>
        <p v-for="(description, index) in $t('about.description')" :key="index">{{ description }}</p>

        <!-- CONTRIBUTEURS -->
        <h2 style="margin-top: 40px; margin-bottom: 30px;">{{ $t('about.contributors') }}</h2>

        <div class="row">
          <div class="col-md-6">
            <img src="/img/logo_sl.svg" height="100" style="margin-bottom: 20px;" />
            <br />
            <strong>{{ $t('about.fp.short_name') }}</strong>
            <br />
            {{ $t('about.fp.name') }}
            <br />
            <a href="https://www.sl-fp.ch">www.sl-fp.ch</a>
          </div>
          <div class="col-md-6">
            <img src="/img/logo_isska.png" height="100" style="margin-bottom: 20px;" />
            <br />
            <strong>{{ $t('about.isska.short_name') }}</strong>
            <br />
            {{ $t('about.isska.name') }}
            <br />
            <a href="https://www.isska.ch">www.isska.ch</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
