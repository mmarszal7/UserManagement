import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {

    user: User;

    constructor(private dataService: UsersService, private route: ActivatedRoute, private router: Router) {
        const id = this.route.snapshot.params['id'];
        this.dataService.getUser(id).subscribe(u => {
            this.user = u;
        });
    }

    deleteUser() {
        if (confirm('Are you sure you want to delete this user?')) {
            this.dataService.deleteUser(this.user).subscribe(u => {
                this.router.navigateByUrl('/users');
            });
        }
    }

    onSave(user: User) {
        this.dataService.updateUser(user).subscribe(u => {
            this.router.navigateByUrl('/users');
        });
    }
}
