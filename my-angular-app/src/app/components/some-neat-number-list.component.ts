import {
    Component,
    OnInit,
    Input,
    AfterContentInit
} from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
    selector: 'app-some-neat-number-list',
    templateUrl: './some-neat-number-list.component.html'
    // styleUrls: ''
})
export class SomeNeatNumberListComponent implements OnInit, AfterContentInit {

    @Input() numbers: object[];

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterContentInit() {

    }

}
