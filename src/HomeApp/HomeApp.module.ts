import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeAppRoutingModule } from './HomeApp-routing.module';
import { HomeComponent } from './HomeApp.Homecomponent';
import { MasterPagecomponent } from './HomeApp.MasterPagecomponent';

@NgModule({
  declarations: [
    MasterPagecomponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeAppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPagecomponent]
})
export class HomeAppModule { }
