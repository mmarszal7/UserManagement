import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

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
}
