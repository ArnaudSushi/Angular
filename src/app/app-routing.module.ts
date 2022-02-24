import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeuserFormComponent } from './typeuser-form/typeuser-form.component';
import { TypeuserListComponent } from './typeuser-list/typeuser-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'typeusers', component: TypeuserListComponent},
  {path: 'addtypeusers', component: TypeuserFormComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
