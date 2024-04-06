import { NgModule } from '@angular/core';
import { StudentAppRoutingModule } from './StudentApp-routing.module';
import { Studentcomponent } from './StudentApp.Studentcomponent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Studentcomponent,
  ],
  imports: [
    CommonModule,
    StudentAppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Studentcomponent]
})
export class StudentAppModule { }
