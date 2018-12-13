import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentEightComponent } from './component-eight/component-eight.component';
import { ComponentNineComponent } from './component-nine/component-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentEightComponent,
    ComponentNineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
