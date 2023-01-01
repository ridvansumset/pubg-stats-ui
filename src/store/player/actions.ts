import { ActionContext } from 'vuex';
import type { RootState } from '../index';
import { PlayerState } from './state';
import { APIService } from '../../services';
import type { PlayerData } from '../../models'

export default {
  async fetchPlayerByName({ state, commit, dispatch }: ActionContext<PlayerState, RootState>) {
    try {
      commit('setIsLoading', true);
      commit('setPlayer', {});
      commit('match/setMatches', [], { root: true });

      const res = await APIService.getPlayerByName(state.params.name);
      const data: PlayerData = JSON.parse(res.data);

      dispatch('common/updateQueryTimestamps', data.queryTimestamps, { root: true });
      commit('setPlayer', data.player);
    } catch (err) {
      throw err;
    } finally {
      commit('setIsLoading', false);
    }
  },
}
