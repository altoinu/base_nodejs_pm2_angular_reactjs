import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCoolComponent } from './components/random-cool.component';
import { SomeNeatNumberList } from './components/some-neat-number-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomCoolComponent,
    SomeNeatNumberList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
