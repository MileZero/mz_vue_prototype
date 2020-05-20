export default {
  namespaced: true,
  state: {
    selectedHub: {},
  },
  getters: {
    selectedHub(state) {
      return state.selectedHub;
    },
  },
  mutations: {
    setHub(state, hub) {
      state.selectedHub = hub;
    },
  },
  actions: {
  },
};
