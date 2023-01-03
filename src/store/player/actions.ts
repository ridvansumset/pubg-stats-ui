import { ActionContext } from 'vuex';
import type { RootState } from '../index';
import { PlayerState } from './state';
import { APIService } from '../../services';

export default {
  async fetchPlayerByName({ state, commit, dispatch }: ActionContext<PlayerState, RootState>) {
    try {
      commit('setIsLoading', true);
      commit('setPlayer', {});
      commit('match/setMatches', [], { root: true });

      const { queryTimestamps, player } = await APIService.getPlayerByName(state.params.name);

      dispatch('common/updateQueryTimestamps', queryTimestamps, { root: true });
      commit('setPlayer', player);
    } catch (err) {
      throw err;
    } finally {
      commit('setIsLoading', false);
    }
  },
}
