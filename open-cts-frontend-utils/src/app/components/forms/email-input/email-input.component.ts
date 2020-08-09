import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  /*
   * Available props
   *    id, name, label, required, placeholder
   */

  @Input() id: string = 'email';
  @Input() name: string = 'email';
  value = '';
  @Output() getValue = new EventEmitter<{}>();
  @Input() label: string = 'Adresse email';
  @Input() required: boolean = false;
  errors: string[] = [];
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value) {

    // Handling required
    if (this.required) {

      // Handling Empty field
      if (this.value === '') {
        this.errors.push('Ce champs est obligatoire')
      } else {
        this.removeError('Ce champs est obligatoire');
      }
    } 

    // Handling pattern
    if (!this.value.match(new RegExp('.+@.+\..{2,8}'))) {
      this.removeError('Format de l\'email invalide');
      this.errors.push('Format de l\'email invalide');
    } else {
      this.removeError('Format de l\'email invalide');
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
