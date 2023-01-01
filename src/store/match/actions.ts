import { ActionContext } from 'vuex';
import type { RootState } from '../index';
import { MatchState } from './state';
import { APIService } from '../../services';
import type { MatchData } from '../../models';

export default {
  async fetchMatchById({ state, commit, dispatch }: ActionContext<MatchState, RootState>) {
    try {
      const res = await APIService.getMatchById(state.params);
      const data: MatchData = JSON.parse(res.data);

      dispatch('common/updateQueryTimestamps', data.queryTimestamps, { root: true });

      const matches = state.matches.slice();
      matches.push(data.match);

      commit('setMatches', matches);
    } catch (err) {
      throw err;
    }
  },
  async fetchMatchesById({ commit, dispatch, rootState }: ActionContext<MatchState, RootState>) {
    try {
      commit('setIsLoading', true);

      if (rootState.player.player) {
        // TODO: delete later
        // const sleep = (t: number) => new Promise((res) => setTimeout(res, t));
        const last5MatchIds = rootState.player.player.matchIds.slice(0, 5);

        for (let i = 0; i < last5MatchIds.length; i++) {
          // await sleep(i * 1000);
          await commit('setParams', { id: last5MatchIds[i], participantId: rootState.player.player.id });
          await dispatch('fetchMatchById');
        }
      }
    } catch (err) {
      throw err;
    } finally {
      commit('setIsLoading', false);
    }
  },
}
