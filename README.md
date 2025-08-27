 <h1>Remeda for Nuxt</h1>
 
<p>
  <a href="https://www.npmjs.com/package/nuxt-remeda">
  <img src="https://img.shields.io/npm/v/nuxt-remeda.svg" alt="Version">
</a>
<a href="https://www.npmjs.com/package/nuxt-remeda">
  <img src="https://img.shields.io/npm/l/nuxt-remeda.svg" alt="License">
</a>
<a href="https://www.npmjs.com/package/nuxt-remeda">
  <img src="https://img.shields.io/npm/types/nuxt-remeda.svg" alt="Types">
</a>
</p>
   
## 💡 About

[Remeda](https://remedajs.com) auto-import module for [Nuxt](https://nuxtjs.org). Inspired by [nuxt-lodash](https://github.com/cipami/nuxt-lodash.git).

## 📦 Install

1. Install `nuxt-remeda` as development dependency:

```bash
npm i nuxt-remeda -D
```

```bash
pnpm add nuxt-remeda -D
```

```bash
yarn add nuxt-remeda -D
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-remeda"],
});
```

## 🚀 Example

Use any [Remeda](https://remeda.com) methods in your Nuxt application, they will be auto-imported!

```html
<script setup>
  const text = useCapitalize("it works!");
</script>

<template>
  <div>{{ text }}</div>
</template>
```

## 🔨 Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- |---------------------------------------------------------------------------------------|
| `prefix`           | `'use'` | String to prepend before each Remeda function (false to disable)                      |
| `prefixSkip`       | `'is'`  | Functions that starts with this keywords will be skipped by prefix (false to disable) |
| `upperAfterPrefix` | `true`  | If true it will automatically uppercase first letter after prefix (false to disable)  |
| `exclude`          | `[]`    | Array of Remeda functions to exclude from auto-imports                                |
| `alias`            | `[]`    | Array of array pairs to rename specific Remeda functions (prefix is still added)      |

## 💻 Example - Config

```ts
export default defineNuxtConfig({
  modules: ["nuxt-remeda"],
  remeda: {
    prefix: "R",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ['toCamelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['toKebabCase', 'stringToKebab'] // => stringToKebab
    ]
  }
});
```

## 📄 License

[MIT License](https://github.com/HamoBoker/nuxt-remeda/blob/master/LICENSE) © 2024-2025 - [Hamo Boker](https://github.com/HamoBoker)
