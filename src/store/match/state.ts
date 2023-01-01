import type { Match, MatchParams } from '../../models'

export type MatchState = {
  isLoading: boolean;
  matches: Match[];
  params: MatchParams;
}

export const state = () => ({
  isLoading: true,
  matches: [],
  params: { id: '' },
} as MatchState);
