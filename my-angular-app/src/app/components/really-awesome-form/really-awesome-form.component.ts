import {
  Component,
  OnInit,
  AfterContentInit
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-really-awesome-form',
  templateUrl: './really-awesome-form.component.html',
  styleUrls: ['./really-awesome-form.component.css']
})
export class ReallyAwesomeFormComponent implements OnInit, AfterContentInit {

  awesomeForm;
  textValue: string = '';

  constructor(private formBuilder: FormBuilder) {

    // https://angular.io/start/start-forms
    this.awesomeForm = formBuilder.group({
      // name to match formControlName
      textString: ''
    });

  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

  onFormSubmit(data) {

    console.log('onFormSubmit:', data);

  }

}
