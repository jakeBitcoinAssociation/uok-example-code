import { Component } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
  VarInt
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-varint',
  templateUrl: './varint.component.html',
  styleUrls: ['./varint.component.scss']
})
export class VarintComponent {

    bigNum;
    varInt;

  constructor() {

      this.bigNum = new Bn(16899);
      this.varInt = VarInt.fromBn(this.bigNum);

  }


}
