import { Component } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-fixed-point',
  templateUrl: './fixed-point.component.html',
  styleUrls: ['./fixed-point.component.scss']
})
export class FixedPointComponent {

    allTheSatoshis: number;
    halfTheSatoshis: number;

  constructor() {

      this.allTheSatoshis = 0x1406F40;
      this.halfTheSatoshis = this.allTheSatoshis*0.5
  }

}
