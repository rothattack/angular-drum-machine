import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { MachineComponent } from './machine/machine.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    MachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
