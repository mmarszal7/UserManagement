import { Component } from '@angular/core';
import { Group } from '../../shared/models/group';
import { WebApiService } from '../../shared/services/web-api.service';

@Component({
    selector: 'app-groups-component',
    templateUrl: './groups.component.html'
})
export class GroupsComponent {

    groups: Group[];

    columns = [
        { title: 'Name', name: 'name' },
    ];

    constructor(dataService: WebApiService) {
        dataService.getGroups().subscribe(g => this.groups = g);
    }
}
