import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCoolComponent } from './components/random-cool.component';
import { SomeNeatNumberListComponent } from './components/some-neat-number-list.component';
import { AboutComponent } from './components/about.component';

@NgModule({
    declarations: [
        AppComponent,
        RandomCoolComponent,
        SomeNeatNumberListComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
