import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenoterrorComponent } from './pagenoterror/pagenoterror.component';
import { HomeComponent } from './home/home.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AllstudentComponent } from './allstudent/allstudent.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';

const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[authenticationGuard], children:[
    {path:'home', component:HomeComponent},
    {path:'createstudent', component:CreatestudentComponent,canDeactivate:[notifyGuard]},
    {path:'allstudent', component: AllstudentComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenoterrorComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
