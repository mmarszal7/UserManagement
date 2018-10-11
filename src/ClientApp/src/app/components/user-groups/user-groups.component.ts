import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { UsersService } from '../../shared/services/users.service';
import { GroupsService } from '../../shared/services/groups.service';
import { Group } from '../../shared/models/group';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UserGroups } from '../../shared/models/user-groups';

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

    constructor(private usersService: UsersService, groupsService: GroupsService) {
        usersService.getUsers().subscribe(u => this.users = u);
        groupsService.getGroups().subscribe(g => this.groups = g);
    }

    submit() {
        if (this.form.valid) {
            const user = { ...this.users.find(u => u.id.toString() === this.form.value.userID) };
            const group = { ...this.groups.find(g => g.id.toString() === this.form.value.groupID) };

            user.userGroups.push({ userId: user.id, groupId: group.id, group: group } as UserGroups);
            const userGroup = { groupId: this.form.value.groupID, userId: this.form.value.userID } as UserGroups;
            this.usersService.assingUserToGroup(userGroup).subscribe();
        }
    }
}
