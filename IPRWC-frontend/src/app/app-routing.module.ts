import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginpageComponent} from "./loginpage/loginpage.component";
import {RegisterpageComponent} from "./registerpage/registerpage.component";

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
