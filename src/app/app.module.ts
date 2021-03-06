import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { Routes } from '@angular/router';

const routes:Routes = [
{ path:'contactmanager',loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},
{path:'**',redirectTo:'contactmanager'}
]


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
