import { Component, OnInit } from '@angular/core';
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
  selector: 'bitcoinsv-academy-twos-compliment',
  templateUrl: './twos-compliment.component.html',
  styleUrls: ['./twos-compliment.component.scss']
})
export class TwosComplimentComponent {

    posNum
    negNum

    constructor() {
        this.posNum = new Uint32Array(4);
        this.negNum = new Uint32Array(4);

        this.posNum[0] = 0xF3;
        this.negNum[0] = 0xF3;

        this.negNum[0] = this.negNum[0]*-1;

    }
}
