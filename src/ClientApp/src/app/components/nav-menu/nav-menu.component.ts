import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

    isExpanded = false;

    users: User[];

    currentUserID: number;

    constructor(private usersService: UsersService, private authService: AuthService) {
        this.usersService.getUsers().subscribe(u => this.users = u);
        this.authService.currentUserID.subscribe(u => this.currentUserID = u);
    }

    onChange(userID: number): void {
        this.authService.setCurrentUser(userID);
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
