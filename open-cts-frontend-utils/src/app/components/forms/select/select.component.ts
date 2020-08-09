import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() id: string = '';
  value = '';
  @Output() getValue = new EventEmitter<{}>();
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() data: any = null;
  @Input() option: any = null;
  @Input() key: any = null;
  @Input() name: string = '';
  errors: string[] = [];

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
