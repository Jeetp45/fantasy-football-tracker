export interface Team {
  id: number;
  logo: string;
  name: string;
  record: string;
  winPercentage: number;
  leagueRating: number;
  trophies: string;
}

export interface TeamProps {
  team: Team;
}
