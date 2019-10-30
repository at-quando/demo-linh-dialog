import Vue from 'vue'
import App from './App.vue'
import GlobalComponents from './components/GlobalComponent'

Vue.use(GlobalComponents)

Vue.config.productionTip = false

new Vue({
  data: {
    currentDialog: '',
    toggleDialog: false
  },
  methods: {
    openDialog(comp) {
      this.toggleDialog = true;
      this.currentDialog = comp;
    }
  },
  render: h => h(App),
}).$mount('#app')
