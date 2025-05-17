import { VersusHistory } from './versushistory';
import { SeasonHistory } from './seasonhistory';

export interface Team {
  id: string;
  logo: string;
  name: string;
  team: string;
  seasons: number;
  record: string;
  winPercentage: number;
  leagueRating: number;
  trophies: string;
  seasonHistory: SeasonHistory[];
  versusHistory: VersusHistory;
}

export interface TeamProps {
  team: Team;
}
