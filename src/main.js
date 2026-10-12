import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior, guardUnknownContent } from './router'

// vite-ssg renders every route to static HTML at build time (see ssgOptions
// in vite.config.js), then hydrates it in the browser.
// sensitive: Vercel looks files up case-sensitively, so /About-Us is a 404 there.
// The router must agree, otherwise it would hydrate the real About page over
// the server-rendered 404 page.
export const createApp = ViteSSG(App, { routes, scrollBehavior, sensitive: true }, ({ router }) => {
  router.beforeEach(guardUnknownContent)
})
