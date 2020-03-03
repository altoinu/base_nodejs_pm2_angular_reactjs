import { Component } from '@angular/core';
import { RandomCoolComponent } from './components/random-cool.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  blah = {
    text: 'really cool app',
    foobar: 'woot'
  };

  randomCoolComponentButtonClick: Subscription

  onActivate(activatedComponent) {

    console.log('onActivate:', activatedComponent);

    if (activatedComponent instanceof RandomCoolComponent) {

      // https://angular.io/api/core/EventEmitter#subscribe
      // https://medium.com/@sujeeshdl/angular-parent-to-child-and-child-to-parent-communication-from-router-outlet-868b39d1ca89
      // https://stackoverflow.com/questions/36494509/how-to-unsubscribe-from-eventemitter-in-angular-2
      let asdf: RandomCoolComponent = activatedComponent as RandomCoolComponent;
      this.randomCoolComponentButtonClick = asdf.onRandomButtonClick.subscribe((data) => this.buttonGotClicked(data));

    }

  }

  onDeactivate(deactivatedComponent) {

    console.log('onDeactivate:', deactivatedComponent);

    if (deactivatedComponent instanceof RandomCoolComponent) {

      let asdf: RandomCoolComponent = deactivatedComponent as RandomCoolComponent;
      this.randomCoolComponentButtonClick.unsubscribe();

    }

  }

  buttonGotClicked(obj) {

    var date = obj.date;
    var numClicks = obj.numClicks;

    console.log('buttonGotClicked on App.js:', date);

    this.blah.text = 'I got changed by App.js. Num clicked: ' + numClicks;

    alert('Date is:' + date);

  }

}
