import { Group } from './group';
import { UserGroups } from './user-groups';

export class User {
    id: number;
    name: string;
    email: string;
    creationDate: Date;
    userGroups: UserGroups[];
}
