const NextI18Next = require('next-i18next').default
const LANGUAGES = require('./languages')
const path = require('path');
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

module.exports = new NextI18Next({
  defaultLanguage: LANGUAGES.VIETNAMESE.key,
  otherLanguages: [LANGUAGES.ENGLISH.key],
  shallowRender: true,
  localeSubpaths: {
    [LANGUAGES.VIETNAMESE.key]: LANGUAGES.VIETNAMESE.key,
    [LANGUAGES.ENGLISH.key]: LANGUAGES.ENGLISH.key,
  }
})
