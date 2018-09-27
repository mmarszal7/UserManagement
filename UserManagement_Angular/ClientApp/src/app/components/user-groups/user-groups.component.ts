import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UsersService } from '../../shared/services/users.service';
import { GroupsService } from '../../shared/services/groups.service';
import { Group } from '../../shared/models/group';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html'
})
export class UserGroupsComponent {

    users: User[];

    groups: Group[];

    form: FormGroup = new FormGroup({
        userID: new FormControl('', [Validators.required]),
        groupID: new FormControl('', [Validators.required]),
    });

    constructor(usersService: UsersService, groupsService: GroupsService) {
        usersService.getUsers().subscribe(u => this.users = u);
        groupsService.getGroups().subscribe(g => this.groups = g);
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.value.userID);
            console.log(this.form.value.groupID);
        }
    }
}
