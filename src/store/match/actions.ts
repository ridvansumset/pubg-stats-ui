import { ActionContext } from 'vuex';
import type { RootState } from '../index';
import { MatchState } from './state';
import { APIService } from '../../services';

export default {
  async fetchMatchById({ state, commit, dispatch }: ActionContext<MatchState, RootState>) {
    try {
      const { queryTimestamps, match } = await APIService.getMatchById(state.params);

      dispatch('common/updateQueryTimestamps', queryTimestamps, { root: true });

      const matches = state.matches.slice();
      matches.push(match);

      commit('setMatches', matches);
    } catch (err) {
      throw err;
    }
  },
  async fetchMatchesById({ commit, dispatch, rootState }: ActionContext<MatchState, RootState>) {
    try {
      commit('setIsLoading', true);

      const last5MatchIds = rootState.player.player.matchIds.slice(0, 5);
      for (let i = 0; i < last5MatchIds.length; i++) {
        await commit('setParams', { id: last5MatchIds[i], participantId: rootState.player.player.id });
        await dispatch('fetchMatchById');
      }
    } catch (err) {
      throw err;
    } finally {
      commit('setIsLoading', false);
    }
  },
}
