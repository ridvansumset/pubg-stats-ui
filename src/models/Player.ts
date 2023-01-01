import { BaseData } from './BaseData';

export type Player = {
  id: string;
  name: string;
  matchIds: string[];
}

export type PlayerParams = {
  id?: string;
  name: string;
}

export interface PlayerData extends BaseData {
  player: Player;
}
