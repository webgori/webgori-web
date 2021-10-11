import { Store } from 'vuex'

const store = () => new Store({
  state: {
    mobile: false
  },
  getters: {
    getMobile(state) {
      return state.mobile;
    }
  },
  mutations: {
    setMobile(state, payload) {
      state.mobile = payload.mobile;
    }
  }
})

export default store
