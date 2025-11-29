import {addImports, createResolver, defineNuxtModule} from '@nuxt/kit'
import * as R from 'remeda'
import excludeDefaults from './exclude'

export interface ModuleOptions {
  /**
   * Prefix to be added before every remeda function
   *
   * `false` to disable uppercasing
   *
   * @defaultValue `use`
   */
  prefix: false | string;
  /**
   * Functions that starts with this keywords will be skipped by prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue 'is'
   */
  prefixSkip: string | string[] | false;
  /**
   * Array of remeda funcions to be exluded from auto-imports
   *
   * @defaultValue []
   */
  exclude: string[];
  /**
   * Iterable of string pairs to alias each function
   *
   * @defaultValue []
   */
  alias: Iterable<[string, string]>;
  /**
   * Upper case first letter after prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue true
   */
   upperAfterPrefix: boolean
}

function upperFirst(str: string) {
  return R.pipe(
    str.trim() || '',
    s => (s.length === 0 ? s : s[0]!.toUpperCase() + s.slice(1))
  );
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-remeda',
    configKey: 'remeda',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  defaults: {
    prefix: 'use',
    prefixSkip: 'is',
    exclude: [],
    alias: [],
    upperAfterPrefix: true
  },
  setup (options) {
    const { resolve } = createResolver(import.meta.url)

    const aliasMap = new Map<string, string>(options.alias)
    const excludes = [...options.exclude, ...excludeDefaults]
    const prefixSkip = options.prefixSkip ? R.isArray(options.prefixSkip) ? options.prefixSkip : [options.prefixSkip] : []

    for (const name of Object.keys(R)) {
      if (!excludes.includes(name)) {
        const alias = aliasMap.has(name) ? aliasMap.get(name)! : name
        const prefix = (!prefixSkip.some(key => alias.startsWith(key)) && options.prefix) || ''
        const as = prefix ? prefix + (options.upperAfterPrefix ? upperFirst(alias) : alias) : alias
        addImports({ name, as, from: resolve('./runtime/remeda') })
      }
    }
  }
})
