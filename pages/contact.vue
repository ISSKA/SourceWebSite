<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ $t('contact.title') }}
      </h1>
      <div>
        <b-alert :show="showAlertTime" dismissible variant="success" @dismissed="showAlertTime = 0">
          Votre message a bien été envoyée, nous vous en remercions !
        </b-alert>

        <b-form @submit="onSubmit">
          <b-form-group id="input-group-2" :label="$t('contact.name') + ' :'" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="..."></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" :label="$t('contact.email') + ' :'" label-for="input-1">
            <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="..."></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" :label="$t('contact.content') + ' :'" label-for="input-3">
            <b-form-textarea id="input-3" v-model="form.content" required placeholder="..." rows="6"></b-form-textarea>
          </b-form-group>

          <input id="input-check" v-model="form.check" type="text" name="check" />

          <b-button type="submit" variant="primary">{{ $t('contact.send') }}</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        content: '',
        check: ''
      },
      showAlertTime: 0
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      // alert(JSON.stringify(this.form))

      this.$axios
        .post('https://www.randosources.ch/mail.php', querystring.stringify(this.form))
        .then((res) => {
          // console.log(res.data)

          if (res.status === 200 && res.data === 'ok') {
            this.showAlertTime = 5
            this.resetForm()
          } else {
            // eslint-disable-next-line no-console
            console.log('send mail error:', res)
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('send mail error:', err)
        })
    },
    resetForm() {
      this.form.email = ''
      this.form.name = ''
      this.form.content = ''
    }
  }
}
</script>

<style>
#input-check {
  display: none;
}
</style>
