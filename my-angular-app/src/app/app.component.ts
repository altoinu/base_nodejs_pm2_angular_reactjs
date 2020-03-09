import { Component } from '@angular/core';
import { RandomCoolComponent } from './components/random-cool/random-cool.component';
import { Subscription } from 'rxjs';
import blah from './models/blah.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {

        this.blah = blah;

    }

    blah = null;

    private randomButtonClickEvent: Subscription;

    onActivate(activatedComponent) {

        console.log('onActivate:', activatedComponent);

        if (activatedComponent instanceof RandomCoolComponent) {

            // https://angular.io/api/core/EventEmitter#subscribe
            // https://medium.com/@sujeeshdl/angular-parent-to-child-and-child-to-parent-communication-from-router-outlet-868b39d1ca89
            // https://stackoverflow.com/questions/36494509/how-to-unsubscribe-from-eventemitter-in-angular-2
            const asdf: RandomCoolComponent = activatedComponent as RandomCoolComponent;
            this.randomButtonClickEvent = asdf.randomButtonClick.subscribe((data) => {
                this.buttonGotClicked(data.date, data.numClicks);
            });

        }

    }

    onDeactivate(deactivatedComponent) {

        console.log('onDeactivate:', deactivatedComponent);

        if (deactivatedComponent instanceof RandomCoolComponent) {

            const asdf: RandomCoolComponent = deactivatedComponent as RandomCoolComponent;
            this.randomButtonClickEvent.unsubscribe();

        }

    }

    buttonGotClicked(date: Date, numClicks: number) {

        console.log('buttonGotClicked on App.js:', date);

        this.blah.text = 'I got changed by App.js. Num clicked: ' + numClicks;

        alert('Date is:' + date);

    }

}
