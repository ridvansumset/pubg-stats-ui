import { state } from './state';
import type { PlayerState } from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export type {
  PlayerState,
}

export const player = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
