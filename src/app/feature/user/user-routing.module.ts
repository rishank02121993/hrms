import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/home', // Redirects the empty path to '/user/home'
    pathMatch: 'full' // Ensures the empty path is matched exactly
  },
  { 
    path: '', component: UserComponent,
    children : [{path: 'home', component: UserhomeComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
