export const app = {
  namespaced: true,
  state: {
    drawer: null,
    mini: false,
  },
  mutations: {
    drawerUpdated(state, data) {
      state.drawer = data;
    },
    miniUpdated(state, status) {
      state.mini = status;
    },
  },
  actions: {
    updateDrawer({ commit }, data) {
      commit("drawerUpdated", data);
    },
    updateMini({ commit }, data) {
      commit("miniUpdated", data);
    },
  },
};
