import { Team } from './leaderboardteam';

export interface SeasonHistory {
  year: number;
  record: string;
  pointsFor: number;
  wins: number;
  pointsAgainst: number;
  rank: string;
}

export interface SeasonHistoryTableProps {
  team: Team;
  seasons: SeasonHistory[];
}

export interface TeamWinChartProps {
  seasons: SeasonHistory[];
}

export interface PointsComparisonChartProps {
  seasons: SeasonHistory[];
}
