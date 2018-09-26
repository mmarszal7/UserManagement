import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {

    user: User;

    constructor(private dataService: UsersService, private route: ActivatedRoute) {
        const id = this.route.snapshot.params['id'];
        this.dataService.getUser(id).subscribe(u => this.user = u);
    }
}
