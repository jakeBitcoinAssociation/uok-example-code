import { Component } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
  Base58,
  Base58Check
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent {

    string = "I am string";
    base58: string;
    base58Check: string;


  constructor() {

      this.base58 = Base58.fromBuffer(Buffer.from(this.string)).toString();
      this.base58Check = Base58Check.fromBuffer(Buffer.from(this.string)).toString();
  }

}
