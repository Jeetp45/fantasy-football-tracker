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
  seasonHistory: {
    year: number;
    record: string;
    pointsFor: number;
    wins: number;
    pointsAgainst: number;
    rank: string;
  }[];
}

export interface TeamProps {
  team: Team;
}
