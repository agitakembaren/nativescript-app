import Vue from 'nativescript-vue'
import App from './components/App'
import router from './router'
import VueDevtools from 'nativescript-vue-devtools'

Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);

Vue.prototype.$router = router

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
