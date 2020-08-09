import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

   /*
   * Available props
   *    id, name, label, required, placeholder, min and max
   */

  @Input() id: string = '';
  @Input() name: string = '';
  value = '';
  @Output() getValue = new EventEmitter<{}>();
  @Input() label: string = '';
  @Input() required: boolean = false;
  errors: string[] = [];
  @Input() min: any = 0;
  @Input() max: any = 255;
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value) {
    const min = parseInt(this.min);
    const max = parseInt(this.max);

    // Handling required
    if (this.required) {

      // Handling Empty field
      if (this.value === '') {
        this.errors.push('Ce champs est obligatoire')
      } else {
        this.removeError('Ce champs est obligatoire');
      }
    } 

    // Handling minLength
    if (this.value.length < min) {
      if (!this.errors.includes(`${min} caractères minimum requis`)) { 
        this.errors.push(`${min} caractères minimum requis`); 
      }
    } else {
      this.removeError(`${min} caractères minimum requis`);
    }

    // Handling maxLength
    if (this.value.length > max) {
      if (!this.errors.includes(`${max} caractères maximum requis`)) { 
        this.errors.push(`${max} caractères maximum requis`); 
      }
    } else {
      this.removeError(`${max} caractères maximum requis`);
    }

    // Handle invalid and send input
    if (this.errors.length !== 0) {
      this.getValue.emit({
        invalid: true,
        value
      });
    } else {
      let res = {};
      res[this.name] = value;
      this.getValue.emit(res);
    }
  }

  // Handling removing error from errors array
  removeError(arg) {
    if (this.errors.includes(arg)) {
      this.errors.splice(
        this.errors.findIndex(el => el == arg), 1
      );
    }
  }

}
