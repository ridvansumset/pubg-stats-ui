import Vuex, { createLogger } from 'vuex';
import { ui, UIState } from './ui'
import { common, CommonState } from './common';
import { player, PlayerState } from './player';
import { match, MatchState } from './match'

export type RootState = {
  ui: UIState;
  common: CommonState;
  player: PlayerState;
  match: MatchState;
}

export const store = new Vuex.Store({
  state: {} as RootState,
  modules: {
    ui,
    common,
    player,
    match,
  },
  plugins: import.meta.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
