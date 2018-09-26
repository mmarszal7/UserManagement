import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';

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

    constructor(private dataService: UsersService, private router: Router) {
        dataService.getUsers().subscribe(u => this.users = u);
    }

    onClick(user: User) {
        this.router.navigateByUrl(`/users/${user.id}`);
    }
}
