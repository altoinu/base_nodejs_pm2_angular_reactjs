import {
  Component,
  OnInit,
  Input,
  AfterContentInit
} from '@angular/core';
// import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-some-neat-number-list',
  templateUrl: './some-neat-number-list.component.html',
  styleUrls: ['./some-neat-number-list.component.css']
})
export class SomeNeatNumberListComponent implements OnInit, AfterContentInit {

  @Input() someReallyInterestingData: object[];

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

}
