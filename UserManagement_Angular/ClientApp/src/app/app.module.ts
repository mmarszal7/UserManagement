import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { WebApiService } from './shared/services/web-api.service';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { CustomTableComponent } from './components/custom-table/custom-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UsersComponent,
    GroupsComponent,
    UserGroupsComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: UsersComponent, pathMatch: 'full' },
      { path: 'groups', component: GroupsComponent },
      { path: 'user-groups', component: UserGroupsComponent },
    ])
  ],
  providers: [
      WebApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
