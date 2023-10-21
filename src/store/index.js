import { createStore } from 'vuex'

export default createStore({
  state: {
    estados: [
      {
        name: 'Bahia',
        description: 'Lorem Ipsun Foda',
        currentSlide: true
      },
      {
        name: 'Mato Grosso',
        description: 'Lorem Ipsun Foda',
        currentSlide: false
      },
      {
        name: 'Maranhão',
        description: 'Lorem Ipsun Foda',
        currentSlide: false
      },
      {
        name: 'Pará',
        description: 'Lorem Ipsun Foda',
        currentSlide: false
      },
      {
        name: 'Paraná',
        description: 'Lorem Ipsun Foda',
        currentSlide: false
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
