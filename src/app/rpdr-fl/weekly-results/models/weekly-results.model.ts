import { Queen } from '../../queens/models/queen.model';

export interface WeeklyResult {
    weekNumber: number;
    episodeName: string;
    maxiChallengeWinner: Queen;
    miniChallengeWinner: Queen;
    bottomTwoQueens: Queen[];
    queenEliminated: Queen;
}

