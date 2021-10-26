import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
