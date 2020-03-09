import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCoolComponent } from './components/random-cool/random-cool.component';
import { SomeNeatNumberListComponent } from './components/random-cool/some-neat-number-list/some-neat-number-list.component';
import { ReallyAwesomeFormComponent } from './components/really-awesome-form/really-awesome-form.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        RandomCoolComponent,
        SomeNeatNumberListComponent,
        ReallyAwesomeFormComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
