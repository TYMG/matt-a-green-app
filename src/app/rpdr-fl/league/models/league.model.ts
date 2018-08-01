import { Team } from '../../team/models/team.model';
import { Queen } from '../../queens/models/queen.model';

export interface League{
    id: number;
    name: string;
    numberOfTeams: number;
    teams: Team[];
    weeklyResults: string
}

export interface WeeklyResult {
    weekNumber: number;
    episodeName: string;
    maxiChallengeWinner: Queen;
    miniChallengeWinner: Queen;
    bottomTwoQueens: Queen[];
    queenEliminated: Queen;
}

