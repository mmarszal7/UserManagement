import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { UserGroups } from '../models/user-groups';

@Injectable()
export class UsersService {

    url: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl + 'api/Users';
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url).pipe(
            map(users => users
                .map(user => user as User)
            )
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get(this.url + '/' + id).pipe(
            map(user => user as User),
        );
    }

    createUser(user: User): Observable<User> {
        return this.http.post(this.url, user).pipe(
            map(u => u as User)
        );
    }

    updateUser(user: User): Observable<User> {
        return this.http.put(this.url + '/' + user.id, user).pipe(
            map(u => user)
        );
    }

    deleteUser(user: User): Observable<User> {
        return this.http.delete(this.url + '/' + user.id).pipe(
            map(u => user)
        );
    }

    assingUserToGroup(userGroups: UserGroups): Observable<UserGroups> {
        return this.http.post(this.url + '/' + userGroups.userId, userGroups).pipe(
            map(u => userGroups)
        );
    }
}
