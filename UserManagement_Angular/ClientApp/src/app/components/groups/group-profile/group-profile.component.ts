import { Component } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../../shared/services/groups.service';

@Component({
    selector: 'app-group-profile',
    templateUrl: './group-profile.component.html',
})
export class GroupProfileComponent {

    group: Group;

    constructor(private dataService: GroupsService, private route: ActivatedRoute) {
        const id = this.route.snapshot.params['id'];
        this.dataService.getGroup(id).subscribe(g => this.group = g);
    }

    editName() {
        console.log(this.group.name);
    }
}
