import { ActionContext } from 'vuex'
import type { RootState } from '../index';
import { BrowserStorageService as BSS } from '../../services';

export interface CommonState {
  // requestCount is the request count in the last 60 seconds
  requestCount: number;
  // queryTimestamps is the object whose keys are the timestamps of the requests
  // and values are the count of those requests
  queryTimestamps: { [key: number]: number; };
}

export const common = {
  namespaced: true,
  state: () => ({
    requestCount: BSS.getRequestCount(),
    queryTimestamps: BSS.getQueryTimestamps(),
  } as CommonState),
  actions: {
    deleteQueryTimestamps({ state, dispatch, commit }: ActionContext<CommonState, RootState>, payload: number) {
      const queryTs = { ...state.queryTimestamps };
      delete queryTs[payload];

      commit('setQueryTimestamps', queryTs);
      BSS.setQueryTimestamps(queryTs);
      dispatch('updateRequestCount');
    },
    updateQueryTimestamps({ state, dispatch, commit }: ActionContext<CommonState, RootState>, payload: number[]) {
      const queryTs = { ...state.queryTimestamps };

      for (let i = 0; i < payload.length; i++) {
        const ts = payload[i];
        queryTs[ts] = queryTs[ts] ? queryTs[ts] + 1 : 1;
      }

      commit('setQueryTimestamps', queryTs);
      BSS.setQueryTimestamps(queryTs);
      dispatch('updateRequestCount');
    },
    updateRequestCount({ state, commit }: ActionContext<CommonState, RootState>) {
      const count = Object.values(state.queryTimestamps).reduce((acc: number, val: number) => acc + val, 0);
      commit('setRequestCount', count);
      BSS.setRequestCount(count);
    },
  },
  mutations: {
    setQueryTimestamps(state: CommonState, payload: { [key: number]: number; }) {
      state.queryTimestamps = payload;
    },
    setRequestCount(state: CommonState, payload: number) {
      state.requestCount = payload;
    },
  },
  getters: {
    getQueryTimestamps: (state: CommonState) => {
      return state.queryTimestamps;
    },
    getRequestsEnabled: (state: CommonState) => {
      // MAX_REQUESTS_PER_MINUTE = 10
      return !(state.requestCount >= 10);
    },
  },
}
