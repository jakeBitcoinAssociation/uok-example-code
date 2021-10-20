import { Component, } from '@angular/core';
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
  selector: 'bitcoinsv-academy-sign-magnitude',
  templateUrl: './sign-magnitude.component.html',
  styleUrls: ['./sign-magnitude.component.scss']
})
export class SignMagnitudeComponent {

    negBigInt:Bn;
    posBigInt:Bn;

    constructor() {

        const hex = Random.getRandomBuffer(32);
        this.negBigInt = Bn.fromBuffer(hex);
        this.posBigInt = Bn.fromBuffer(hex);

        this.negBigInt = this.negBigInt.mul( new Bn(-1));


    }

}
