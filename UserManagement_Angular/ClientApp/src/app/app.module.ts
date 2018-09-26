import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { GroupProfileComponent } from './components/groups/group-profile/group-profile.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UsersService } from './shared/services/users.service';
import { GroupsService } from './shared/services/groups.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users/:id', component: UserProfileComponent },
    { path: 'users', component: UsersComponent },
    { path: 'groups/:id', component: GroupProfileComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'user-groups', component: UserGroupsComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        UsersComponent,
        GroupsComponent,
        UserGroupsComponent,
        CustomTableComponent,
        GroupProfileComponent,
        UserProfileComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2TableModule,
        PaginationModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        UsersService,
        GroupsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
