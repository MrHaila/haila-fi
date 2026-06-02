import { ViteSSG } from 'vite-ssg/single-page'

import '@/styles/fira_code.css'
import '@/styles/styles.css'
import { MasonryWall } from '@yeger/vue-masonry-wall'

import LandingPage from './LandingPage.vue'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const createApp = ViteSSG(LandingPage, ({ app }) => {
  app.component('MasonryWall', MasonryWall)
})
