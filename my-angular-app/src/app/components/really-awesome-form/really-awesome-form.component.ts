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
  textValue = '';

  constructor(private formBuilder: FormBuilder) {

    // https://angular.io/start/start-forms
    // https://angular.io/api/forms/FormBuilder
    this.awesomeForm = formBuilder.group({
      // name to match formControlName
      textString: ''
    });

  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

  onInputChange(data) {

    console.log('input change');

    this.textValue = data;

  }

  onNgModelChange(data) {

    console.log('ngModelChange change');

    this.textValue = data;

  }

  onFormSubmit(data) {

    console.log('onFormSubmit:', data);

  }

}
