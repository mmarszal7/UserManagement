import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html'
})
export class UserGroupsComponent {

    users: User[];

    constructor(dataService: UsersService) {
        dataService.getUsers().subscribe(u => this.users = u);
    }
}
