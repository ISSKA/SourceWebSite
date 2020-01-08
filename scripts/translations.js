'use strict'

import french from '../locales/fr/template.js'
import german from '../locales/de/template.js'

function getTranslations() {
  return {
    fr: french,
    de: german
  }
}

export default {
  getTranslations
}
