import { Component } from '@angular/core';
import { WebApiService } from '../../shared/services/web-api.service';
import { User } from '../../shared/models/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent {

    users: User[];

    columns = [
        { title: 'Name', name: 'name' },
        { title: 'Email', name: 'email', },
        { title: 'Creation date', name: 'creationDate' }
    ];

    constructor(dataService: WebApiService) {
        dataService.getUsers().subscribe(u => this.users = u);
    }
}
