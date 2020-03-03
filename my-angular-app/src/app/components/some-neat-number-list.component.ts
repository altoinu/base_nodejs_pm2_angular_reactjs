import {
	Component,
	OnInit,
	Input,
	AfterContentInit
} from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
	selector: 'some-neat-number-list',
	templateUrl: 'some-neat-number-list.component.html'
	//styleUrls: ''
})
export class SomeNeatNumberList implements OnInit, AfterContentInit {

	@Input() numbers: object[];

	constructor() {

	}

	ngOnInit() {

	}

	ngAfterContentInit() {

	}

}