import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-group',
    templateUrl: './edit-group.component.html',
    styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

    @Input() group: Group;

    @Output() save = new EventEmitter<Group>();

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

    constructor() { }

    ngOnInit(): void {
        if (this.group) {
            this.form.patchValue({ name: this.group.name });
        }
    }

    submit() {
        if (this.form.valid) {
            this.save.emit(this.formToUser());
        }
    }

    formToUser(): Group {
        return {
            ...this.group,
            name: this.form.value.name as string,
        };
    }
}
