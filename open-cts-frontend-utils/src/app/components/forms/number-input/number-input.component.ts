import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

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
  @Input() step: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value) {
    const min = Number(this.min);
    const max = Number(this.max);

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
    if (Number(this.value) < min) {
      if (!this.errors.includes(`Valeur minimale de ${min} requis`)) { 
        this.errors.push(`Valeur minimale de ${min} requis`); 
      }
    } else {
      this.removeError(`Valeur minimale de ${min} requis`);
    }

    // Handling maxLength
    if (Number(this.value) > max) {
      if (!this.errors.includes(`Valeur maximale de ${max} requis`)) { 
        this.errors.push(`Valeur maximale de ${max} requis`); 
      }
    } else {
      this.removeError(`Valeur maximale de ${max} requis`);
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
