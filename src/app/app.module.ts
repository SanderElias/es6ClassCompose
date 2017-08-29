import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoCompositionComponent } from './demo-composition/demo-composition.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCompositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
