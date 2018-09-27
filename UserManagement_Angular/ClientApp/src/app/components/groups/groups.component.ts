import { Component } from '@angular/core';
import { Group } from '../../shared/models/group';
import { Router } from '@angular/router';
import { GroupsService } from '../../shared/services/groups.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-groups-component',
    templateUrl: './groups.component.html'
})
export class GroupsComponent {

    groups: Group[];

    columns = [
        { title: 'Name', name: 'name' },
    ];

    constructor(private dataService: GroupsService, private router: Router) {
        dataService.getGroups().subscribe(g => this.groups = g);
    }

    onClick(group: Group) {
        this.router.navigateByUrl(`/groups/${group.id}`);
    }

    onSave(group: Group) {
        this.dataService.createGroup(group).subscribe(u => {
            this.router.navigateByUrl('/groups');
        });
    }
}
