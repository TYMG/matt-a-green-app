import { User } from '../../user/models/user.model';
import { Queen } from '../../queens/models/queen.model';

export interface Team {
    id: number;
    teamOwner: User;
    teamName: string;
    teamImage: any;
    activeQueens: Queen[];
    benchQueens: Queen[];
    totalPoints: number;
}