import { Component } from '@angular/core';
import { WebApiService } from '../shared/services/web-api.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html'
})
export class UserGroupsComponent {

    users: User[];

    constructor(dataService: WebApiService) {
        dataService.getUsers().subscribe(u => this.users = u);
    }
}
