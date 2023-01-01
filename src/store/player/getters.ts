import { PlayerState } from './state';

export default {
  getIsLoading: (state: PlayerState) => {
    return state.isLoading;
  },
  getPlayer: (state: PlayerState) => {
    return state.player;
  },
  getNameParam: (state: PlayerState) => {
    return state.params.name;
  },
}
