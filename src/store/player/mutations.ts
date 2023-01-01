import { PlayerState } from './state';
import type { Player, PlayerParams } from '../../models';

export default {
  setIsLoading(state: PlayerState, payload: boolean) {
    state.isLoading = payload;
  },
  setPlayer(state: PlayerState, payload: Player) {
    state.player = payload;
  },
  setParams(state: PlayerState, payload: PlayerParams) {
    state.params = payload;
  },
}
