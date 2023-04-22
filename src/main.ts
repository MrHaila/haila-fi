import { createApp } from 'vue'

import '@/styles/styles.css'
import '@/styles/fira_code.css'
import LandingPage from './LandingPage.vue'

import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(LandingPage)

app.use(MasonryWall)

app.mount('#app')
