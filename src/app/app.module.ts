import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseModule } from './base-module/base-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
