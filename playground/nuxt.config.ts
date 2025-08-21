import module from '..'

export default defineNuxtConfig({
  compatibilityDate: '2025-08-18',
  modules: [module],
  remeda: {
    prefix: 'R',
    prefixSkip: ['string'],
    upperAfterPrefix: true,
    exclude: ['map'],
    alias: [
      ['toCamelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['toKebabCase', 'stringToKebab'], // => stringToKebab
    ]
  }
})
