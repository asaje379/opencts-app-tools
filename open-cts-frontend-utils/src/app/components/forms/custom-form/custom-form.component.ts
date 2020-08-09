import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  @Input() model: any;
  textInputs: any[] = [];
  textNumbers: any[] = [];
  textPasswords: any[] = [];
  textAreas: any[] = [];
  textDates: any[] = [];
  textEmails: any[] = [];
  textFiles: any[] = [];
  textSelects: any[] = [];

  formValue: any = {};

  constructor() { }

  ngOnInit(): void {
    for (let attr in this.model) {
      switch (this.model[attr].type) {
        case 'text':
          this.textInputs.unshift(this.model[attr]);
          break;

        case 'number':
          this.textNumbers.unshift(this.model[attr]);
          break;

        case 'textarea':
          this.textAreas.unshift(this.model[attr]);
          break;

        case 'date':
          this.textDates.unshift(this.model[attr]);
          break;

        case 'email':
          this.textEmails.unshift(this.model[attr]);
          break;

        case 'file':
          this.textFiles.unshift(this.model[attr]);
          break;

        case 'password':
          this.textPasswords.unshift(this.model[attr]);
          break;

        case 'select':
          this.textSelects.unshift(this.model[attr]);
          break;
      }
    }

    console.log(this.textSelects)
  }

  setValue(value, object) {
    if (!value.invalid) {
      this.formValue[object.name] = value[object.name];
      this.formValue.invalid = false;
    } else {
      this.formValue.invalid = true;
    }
    console.log(this.formValue);
  }

}
