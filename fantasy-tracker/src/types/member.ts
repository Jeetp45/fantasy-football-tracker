export interface Member {
  name: string;
  team: string;
  avatar: string;
  wins: number;
}

export interface MemberCardProps {
  member: Member;
}
