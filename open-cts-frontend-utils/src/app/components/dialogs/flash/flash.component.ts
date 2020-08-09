import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {

  @Input() msg = 'This is the awesome flash';
  @Input() type = 'information';

  constructor() { }

  ngOnInit(): void {}

}
