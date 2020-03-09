import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList
} from '@angular/core';
import { SomeNeatNumberListComponent } from './some-neat-number-list/some-neat-number-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-cool',
  templateUrl: './random-cool.component.html',
  styleUrls: ['./random-cool.component.css']
})
export class RandomCoolComponent implements OnInit, OnDestroy {

  // https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding
  @Input() blah;

  // https://angular.io/guide/component-interaction#parent-listens-for-child-event
  // @Outut() randomButtonClick = new EventEmitter<{date, numClicks}}>();
  // @Output() randomButtonClick = new EventEmitter<{ date: Date, numClicks: Number }>();
  @Output() randomButtonClick = new EventEmitter<{ date: Date, numClicks: number }>();

  // https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e
  @ViewChildren('MyParagraph') paragraphElements!: QueryList<any>;
  @ViewChildren(SomeNeatNumberListComponent) numbersList!: QueryList<any>;

  date: Date = null;
  someVariable = 0;

  private timerID: number = null;

  readonly someNeatData: object[] = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
    {
      id: 3,
      name: 'three'
    }
  ];

  constructor(private route: ActivatedRoute) {

    // data passed from route
    // https://yakovfain.com/2015/11/11/angular-2-passing-data-to-routes/
    console.log('---', route);
    console.log('---', route.snapshot);

    this.date = new Date();

  }

  tick() {

    this.date = new Date();

  }

  // https://angular.io/guide/lifecycle-hooks
  ngOnInit() {

    console.log('ngOnInit');

    // @Input... need to think of better way
    this.blah = this.route.snapshot.data.blah;

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  ngOnDestroy() {

    console.log('ngOnDestroy');

    clearInterval(this.timerID);

  }

  onButtonClick(e, msg) {

    console.log(e);
    console.log('msg:', msg);
    console.log('Time is:', this.date);

    console.log(this.paragraphElements);
    this.paragraphElements.forEach(element => console.log(element));
    console.log(this.numbersList);
    this.numbersList.forEach(element => console.log(element));

    this.someVariable++;

    // Send data back up to parent via method defined by this.props
    // https://reactjs.org/docs/lifting-state-up.html
    this.randomButtonClick.emit({
      date: this.date,
      numClicks: this.someVariable
    });

  }

}
