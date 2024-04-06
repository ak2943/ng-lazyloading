import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomeApp.Homecomponent';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'student', loadChildren: () => import('../StudentApp/StudentApp.module').then(m =>m.StudentAppModule)},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeAppRoutingModule { }
