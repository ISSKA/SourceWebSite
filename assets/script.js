'use strict'

/*
import excursion1 from '../locales/fr/excursion-1.js'
import excursion2 from '../locales/fr/excursion-2.js'
*/

// Dynamically load excursions content
const EXCURSIONS_NUMBER = 18
const excursions = []

for (let idx = 1; idx <= EXCURSIONS_NUMBER; idx++) {
  excursions.push(require(`../locales/fr/excursion-${idx}.js`).default)

  // We add an "index" property to all extras to better manage them in views..
  excursions[idx - 1].extras.forEach((extra, index) => {
    extra.index = index + 1
  })
}

/*
// this does not works because node is not available in the client..

// Dynamically load excursions content
const excursions = []

fs.readdirSync('locales/fr')
  .filter((file) => /^excursion-\d+.js$/.test(file))
  .forEach((file) => {
    console.log(file)
    excursions.push(require(`../locales/fr/${file}`))
  })
*/

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
