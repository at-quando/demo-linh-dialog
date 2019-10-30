import DialogA from './dialogA.vue'
import DialogB from './dialogB.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('dialogA', DialogA)
    Vue.component('dialogB', DialogB)
  }
}

export default GlobalComponents
