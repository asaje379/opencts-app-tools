import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

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
