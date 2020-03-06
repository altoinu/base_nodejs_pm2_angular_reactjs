import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCoolComponent } from './components/random-cool.component';
import { SomeNeatNumberList } from './components/some-neat-number-list.component';
import { About } from './components/about.component';

@NgModule({
    declarations: [
        AppComponent,
        RandomCoolComponent,
        SomeNeatNumberList,
        About
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
