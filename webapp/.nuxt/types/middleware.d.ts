import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/Users/Nathan/Documents/Web Development/web-movie-query/web-movie-query/webapp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}