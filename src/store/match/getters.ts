import { MatchState } from './state';

export default {
  getIsLoading: (state: MatchState) => {
    return state.isLoading;
  },
  getMatches: (state: MatchState) => {
    return state.matches;
  },
}
