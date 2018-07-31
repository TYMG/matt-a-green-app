//To use:   import * as models from ".components/model/index";

export interface User {
    id : number;
    userName : string;
    userImage : any;
    email: string;
}

export interface Team {
    id: number;
    teamOwner: User;
    teamName: string;
    teamImage: any;
    activeQueens: Queen[];
    benchQueens: Queen[];
    totalPoints: number;
}

export interface League{
    id: number;
    name: string;
    numberOfTeams: number;
    teams: Team[];
    weeklyResults: string
}

export interface Queen {
    id: number;
    name: string;
    image: any;
    dateOfBirth: any;
    cityOfOrigin: string;
    yearsInDrag: number;
    totalPoints: number;
    maxiChallengeWins: number;
    miniChallengeWins: number;
    bottomTwoApperances: number;
    lipsyncsWon: number
}

export interface WeeklyResult {
    weekNumber: number;
    episodeName: string;
    maxiChallengeWinner: Queen;
    miniChallengeWinner: Queen;
    bottomTwoQueens: Queen[];
    queenEliminated: Queen;
}

