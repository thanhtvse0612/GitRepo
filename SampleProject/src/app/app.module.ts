import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentFourComponent } from './component-four/component-four.component';
import { ComponentFiveComponent } from './component-five/component-five.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentFourComponent,
    ComponentFiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
