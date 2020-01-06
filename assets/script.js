'use strict'

// todo: dynamic loading
import excursion1 from '../locales/fr/excursion-1.js'
import excursion2 from '../locales/fr/excursion-2.js'

const excursions = [excursion1, excursion2]

function getExcursion(excursionIndex) {
  return excursions[excursionIndex - 1]
}

function getExcursions() {
  return excursions
}

function getExcursionsCount() {
  return excursions.length
}

function getExtra(excursionIndex, extraIndex) {
  return excursions[excursionIndex - 1].extras[extraIndex - 1]
}

function getExtras(excursionIndex) {
  return excursions[excursionIndex - 1].extras
}

function getExtrasCount(excursionIndex) {
  return excursions[excursionIndex - 1].extras.length
}

export default {
  getExcursion,
  getExcursions,
  getExcursionsCount,
  getExtra,
  getExtras,
  getExtrasCount
}
