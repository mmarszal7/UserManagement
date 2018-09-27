import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {

    @Input() user: User;

    @Output() save = new EventEmitter<User>();

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    constructor() { }

    ngOnInit(): void {
        if (this.user) {
            this.form.patchValue({ name: this.user.name, email: this.user.email });
        }
    }

    submit() {
        if (this.form.valid) {
            this.save.emit(this.formToUser());
        }
    }

    formToUser(): User {
        return {
            ...this.user,
            name: this.form.value.name as string,
            email: this.form.value.email as string,
        };
    }
}
