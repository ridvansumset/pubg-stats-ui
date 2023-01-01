import type { Player, PlayerParams } from '../../models';

export type PlayerState = {
  isLoading: boolean;
  player: Player;
  params: PlayerParams;
}

export const state = () => ({
  isLoading: true,
  player: {},
  params: { name: 'The4nswer' },
} as PlayerState);
