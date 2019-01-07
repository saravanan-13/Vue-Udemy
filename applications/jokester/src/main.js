import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

store.commit('INIT_JOKES',[{test:'test_jokes'},{test2:'test_me'}])

new Vue({
  el:'#app',
  store,
  render:h=>h(App)
})
