'use strict'
/*
import excursion1 from '../locales/fr/excursion-1.js'
import excursion2 from '../locales/fr/excursion-2.js'
*/

// Dynamically load excursions content
const EXCURSIONS_NUMBER = 19
const excursions = []
const excursions_de = []

for (let idx = 1; idx <= EXCURSIONS_NUMBER; idx++) {
  excursions.push(require(`../locales/fr/excursion-${idx}.js`).default)

  // We add an "index" property to all extras to better manage them in views..
  excursions[idx - 1].extras.forEach((extra, index) => {
    extra.index = index + 1
  })
}
for (let idx = 1; idx <= EXCURSIONS_NUMBER; idx++) {
  excursions_de.push(require(`../locales/de/excursion-${idx}.js`).default)

  // We add an "index" property to all extras to better manage them in views..
  excursions_de[idx - 1].extras.forEach((extra, index) => {
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

function getExcursion_de(excursionIndex) {
  return excursions_de[excursionIndex - 1]
}

function getExcursions_de() {
  return excursions_de
}

function getExcursions_deCount() {
  return excursions_de.length
}

function getExtra_de(excursionIndex, extraIndex) {
  return excursions_de[excursionIndex - 1].extras[extraIndex - 1]
}

function getExtras_de(excursionIndex) {
  return excursions_de[excursionIndex - 1].extras
}

function getExtras_deCount(excursionIndex) {
  return excursions_de[excursionIndex - 1].extras.length
}

export default {
  getExcursion,
  getExcursions,
  getExcursionsCount,
  getExtra,
  getExtras,
  getExtrasCount,
  getExcursion_de,
  getExcursions_de,
  getExcursions_deCount,
  getExtra_de,
  getExtras_de,
  getExtras_deCount,
}
