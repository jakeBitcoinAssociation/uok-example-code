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
  selector: 'bitcoinsv-academy-big-numbers',
  templateUrl: './big-numbers.component.html',
  styleUrls: ['./big-numbers.component.scss'],
})
export class Lecture5LibraryComponent {
  //Get random buffer and display it in hex
  hex = Random.getRandomBuffer(32);
  hex_output = this.hex.toString('hex');

  //Create a big number from random buffer and display it in hex
  bn = Bn.fromBuffer(this.hex);
  bn_output = this.bn.toString(16);

  //Add 1 to our big number
  bx = this.bn.add(new Bn(1));
  bx_output = this.bx.toString(16);
}
