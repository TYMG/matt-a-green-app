export interface Team {
    id: number;
    teamOwner: User;
    teamName: string;
    teamImage: any;
    activeQueens: Queen[];
    benchQueens: Queen[];
    totalPoints: number;
}