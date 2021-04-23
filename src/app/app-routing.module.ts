import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';
import { ClickitComponent } from './clickit/clickit.component';


const routes: Routes = [
 {
   path:"register", component:RegisterComponent
 },
 {
   path:"login", component:TrialComponent
 },
 {
   path:"**", component:ClickitComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

