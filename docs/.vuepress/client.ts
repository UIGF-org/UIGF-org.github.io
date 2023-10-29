import { defineClientConfig } from '@vuepress/client'
import RelativeProject from './components/RelativeProject.vue'
import RelativeProjectPanel from './components/RelativeProjectPanel.vue'

export default defineClientConfig({
  enhance(ctx) {
    const comps = {
      RelativeProject,
      RelativeProjectPanel
    }

    for (const name in comps) {
      if (Object.prototype.hasOwnProperty.call(comps, name)) {
        ctx.app.component(name, comps[name])
      }
    }
  },
})