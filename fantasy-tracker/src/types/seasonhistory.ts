import { Team } from './leaderboardteam';

export interface SeasonHistory {
  year: number;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
  rank: string;
}

export interface SeasonHistoryTableProps {
  team: Team;
  seasons: SeasonHistory[];
}
