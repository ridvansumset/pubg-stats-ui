import { MatchState } from './state';
import type { Match, MatchParams } from '../../models';

export default {
  setIsLoading(state: MatchState, payload: boolean) {
    state.isLoading = payload;
  },
  setMatches(state: MatchState, payload: Match[]) {
    state.matches = payload;
  },
  setParams(state: MatchState, payload: MatchParams) {
    state.params = payload;
  },
}
