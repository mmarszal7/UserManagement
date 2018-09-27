import { Component } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from '../../../shared/services/groups.service';

@Component({
    selector: 'app-group-profile',
    templateUrl: './group-profile.component.html',
})
export class GroupProfileComponent {

    group: Group;

    constructor(private dataService: GroupsService, private route: ActivatedRoute, private router: Router) {
        const id = this.route.snapshot.params['id'];
        this.dataService.getGroup(id).subscribe(g => {
            this.group = g;
        });
    }

    deleteGroup() {
        if (confirm('Are you sure you want to delete this group?')) {
            this.dataService.deleteGroup(this.group).subscribe(u => {
                this.router.navigateByUrl('/groups');
            });
        }
    }

    onSave(group: Group) {
        this.dataService.updateGroup(group).subscribe(u => {
            this.router.navigateByUrl('/groups');
        });
    }
}
