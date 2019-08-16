import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueWaypoint from 'vue-waypoint'
import Mapbox from 'mapbox-gl-vue';

Vue.use(VueWaypoint)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: {Mapbox},
  render: h => h(App),
})
