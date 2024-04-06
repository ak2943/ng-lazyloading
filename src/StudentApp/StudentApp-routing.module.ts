import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Studentcomponent } from './StudentApp.Studentcomponent';

const routes: Routes = [
  {path:'Add', component:Studentcomponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAppRoutingModule { }
