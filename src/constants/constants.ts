export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum BaseButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum LoadingMaskType {
  Solid = 'solid',
  Blur = 'blur',
}

const mapNamer: {[key: string]: string} = {
  Baltic_Main: 'Erangel', // (Remastered)
  Chimera_Main: 'Paramo',
  Desert_Main: 'Miramar',
  DihorOtok_Main: 'Vikendi',
  Erangel_Main: 'Erangel',
  Heaven_Main: 'Haven',
  Kiki_Main: 'Deston',
  Range_Main: 'Camp Jackal',
  Savage_Main: 'Sanhok',
  Summerland_Main: 'Karakin',
  Tiger_Main: 'Taego',
}
export const GetMapName = (m: string) => mapNamer[m] ? mapNamer[m] : m;

const modeNamer: {[key: string]: string} = {
  'duo': 'Duo TPP',
  'duo-fpp': 'Duo FPP',
  'solo': 'Solo TPP',
  'solo-fpp': 'Solo FPP',
  'squad': 'Squad TPP',
  'squad-fpp': 'Squad FPP',
  'conquest-duo': 'Conquest Duo TPP',
  'conquest-duo-fpp': 'Conquest Duo FPP',
  'conquest-solo': 'Conquest Solo TPP',
  'conquest-solo-fpp': 'Conquest Solo FPP',
  'conquest-squad': 'Conquest Squad TPP',
  'conquest-squad-fpp': 'Conquest Squad FPP',
  'esports-duo': 'Esports Duo TPP',
  'esports-duo-fpp': 'Esports Duo FPP',
  'esports-solo': 'Esports Solo TPP',
  'esports-solo-fpp': 'Esports Solo FPP',
  'esports-squad': 'Esports Squad TPP',
  'esports-squad-fpp': 'Esports Squad FPP',
  'normal-duo': 'Duo TPP',
  'normal-duo-fpp': 'Duo FPP',
  'normal-solo': 'Solo TPP',
  'normal-solo-fpp': 'Solo FPP',
  'normal-squad': 'Squad TPP',
  'normal-squad-fpp': 'Squad FPP',
  'war-duo': 'War Duo TPP',
  'war-duo-fpp': 'War Duo FPP',
  'war-solo': 'War Solo TPP',
  'war-solo-fpp': 'War Solo FPP',
  'war-squad': 'Squad TPP',
  'war-squad-fpp': 'War Squad FPP',
  'zombie-duo': 'Zombie Duo TPP',
  'zombie-duo-fpp':'Zombie Duo FPP',
  'zombie-solo': 'Zombie Solo TPP',
  'zombie-solo-fpp': 'Zombie Solo FPP',
  'zombie-squad': 'Zombie Squad TPP',
  'zombie-squad-fpp': 'Zombie Squad FPP',
  'lab-tpp': 'Lab TPP',
  'lab-fpp': 'Lab FPP',
  'tdm': 'Team Deathmatch',
}
export const GetModeName = (m: string) => modeNamer[m] ? modeNamer[m] : m;

const deathTyper: {[key: string]: string} = {
  alive: '-',
  byzone: 'Blue Zone',
  byplayer: 'Opponent Player',
  bycar: 'Car',
}
export const GetDeathType = (m: string) => deathTyper[m] ? deathTyper[m] : m
