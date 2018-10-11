import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

    currentUserID = new BehaviorSubject<number>(0);

    constructor() { }

    setCurrentUser(userID: number): void {
        this.currentUserID.next(userID);
    }
}
