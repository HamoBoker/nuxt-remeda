import module from '..'

export default defineNuxtConfig({
  compatibilityDate: '2025-08-18',
  modules: [module],
  remeda: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: true,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isremedaDate'] // => _isremedaDate
    ]
  }
})
