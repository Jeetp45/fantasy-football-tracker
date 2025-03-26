export interface Team {
  id: number;
  logo: string;
  name: string;
  seasons: number;
  record: string;
  winPercentage: number;
  leagueRating: number;
  trophies: string;
}

export interface TeamProps {
  team: Team;
}
