import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/group';
import { map } from 'rxjs/operators';

@Injectable()
export class GroupsService {

    url: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.url = baseUrl + 'api/Groups';
    }

    getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.url).pipe(
            map(groups => groups
                .map(group => group as Group)
            )
        );
    }

    getGroup(id: number): Observable<Group> {
        return this.http.get<Group>(this.url + '/' + id).pipe(
            map(group => group as Group)
        );
    }
}
