import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { WebApiService } from './shared/services/web-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UsersComponent,
    GroupsComponent,
    UserGroupsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
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
