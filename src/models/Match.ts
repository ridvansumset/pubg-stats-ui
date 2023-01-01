import { BaseData } from './BaseData';

export type Match = {
  id: string;
  type: string;
  mapName: string;
  createdAt: string;
  gameMode: string;
  titleId: string;
  duration: string;
  participant?: Participant;
}

type Participant = {
  id: string;
  type: string;
  assists: string;
  boosts: string;
  damageDealt: string;
  deathType: string;
  headshotKills: string;
  killPlace: string;
  killStreaks: string;
  kills: string;
  longestKill: string;
  name: string;
  playerId: string;
  rideDistance: string;
  timeSurvived: string;
  walkDistance: string;
  winPlace: string;
}

export type MatchParams = {
  id: string;
  participantId?: string;
}

export interface MatchData extends BaseData {
  match: Match;
}
