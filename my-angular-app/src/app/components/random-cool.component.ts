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
import { SomeNeatNumberList } from './some-neat-number-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'random-cool-component',
	templateUrl: 'random-cool.component.html'
	//styleUrls: ''
})
export class RandomCoolComponent implements OnInit, OnDestroy {

	// https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding
	@Input() blah;

	// https://angular.io/guide/component-interaction#parent-listens-for-child-event
	//@Outut() onRandomButtonClick = new EventEmitter<{date, numClicks}}>();
	//@Output() onRandomButtonClick = new EventEmitter<{ date: Date, numClicks: Number }>();
	@Output() onRandomButtonClick = new EventEmitter<{ date: Date, numClicks: Number }>();

	// https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e
	@ViewChildren('MyParagraph') paragraph_elements!: QueryList<any>;
	@ViewChildren(SomeNeatNumberList) numbersList!: QueryList<any>;

	date = null;
	timerID = null;
	someVariable = 0;

	readonly someNeatData = [
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

	constructor(route: ActivatedRoute) {

		// data passed from route
		// https://yakovfain.com/2015/11/11/angular-2-passing-data-to-routes/
		console.log('---', route);
		console.log('---', route.snapshot);
		this.blah = route.snapshot.data.blah;

		this.date = new Date();

	}

	tick() {

		this.date = new Date();

	}

	// https://angular.io/guide/lifecycle-hooks
	ngOnInit() {

		console.log('ngOnInit')

		this.timerID = setInterval(
			() => this.tick(),
			1000
		);

	}

	ngOnDestroy() {

		console.log('ngOnDestroy');

		clearInterval(this.timerID);

	}

	buttonGotClicked(e, msg) {

		console.log(e);
		console.log(msg);
		console.log('Time is:', this.date);

		console.log(this.paragraph_elements);
		this.paragraph_elements.forEach(element => console.log(element));
		console.log(this.numbersList);
		this.numbersList.forEach(element => console.log(element));

		this.someVariable++;

		// Send data back up to parent via method defined by this.props
		// https://reactjs.org/docs/lifting-state-up.html
		this.onRandomButtonClick.emit({ date: this.date, numClicks: this.someVariable });

	}

}