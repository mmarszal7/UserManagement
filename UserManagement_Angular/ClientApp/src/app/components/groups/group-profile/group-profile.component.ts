import { Component } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../../shared/services/groups.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-group-profile',
    templateUrl: './group-profile.component.html',
})
export class GroupProfileComponent {

    group: Group;

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    constructor(private dataService: GroupsService, private route: ActivatedRoute) {
        const id = this.route.snapshot.params['id'];
        this.dataService.getGroup(id).subscribe(g => {
            this.group = g;
            this.form.patchValue({ name: g.name });
        });
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.controls['name']);
        }
    }
}
