import { state } from './state';
import type { MatchState } from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export type {
  MatchState,
}

export const match = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
