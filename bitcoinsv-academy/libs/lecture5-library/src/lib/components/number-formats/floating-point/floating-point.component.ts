import { Component } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-floating-point',
  templateUrl: './floating-point.component.html',
  styleUrls: ['./floating-point.component.scss']
})
export class FloatingPointComponent {

    allTheSatoshisFloat: number;
    halfTheSatoshisFloat: number;

  constructor() {

      this.allTheSatoshisFloat = 2.1/100000000000000;
      this.halfTheSatoshisFloat = this.allTheSatoshisFloat*2.0
  }


}
