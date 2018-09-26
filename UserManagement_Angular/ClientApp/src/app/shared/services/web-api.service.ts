import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/group';

@Injectable()
export class WebApiService {

    url: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl;
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url + 'api/Users').pipe(
            tap(users => console.log(users))
        );
    }

    getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.url + 'api/Groups').pipe(
            tap(groups => console.log(groups))
        );
    }
}
