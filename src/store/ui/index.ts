import { ActionContext } from 'vuex';
import type { RootState } from '../index';

export interface UIState {
  darkMode: boolean;
}

export const ui = {
  namespaced: true,
  state: () => ({
    darkMode: true,
  } as UIState),
  actions: {
    updateDarkMode({ commit }: ActionContext<UIState, RootState>, payload: boolean) {
      commit('setDarkMode', payload);
    },
  },
  mutations: {
    setDarkMode(state: UIState, payload: boolean) {
      state.darkMode = payload;
    },
  },
  getters: {
    getDarkMode(state: UIState) {
      return state.darkMode;
    },
  },
}
