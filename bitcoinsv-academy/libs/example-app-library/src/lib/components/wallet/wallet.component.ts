import { Component, OnInit } from '@angular/core';
import { Wallet } from './wallet.model';
import {
  PrivKey,
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

    mnemonic: string;
    testPrivKey: PrivKey;
    testAddress: string;

  constructor() {
     const wallet = new Wallet("sport you scene actress crystal effort cotton garbage harsh salt way state");

     this.mnemonic = wallet.getMnemonic();
     this.testPrivKey = wallet.getTestPrivKey();
     this.testAddress = wallet.getTestAddress();

  }




  ngOnInit(): void {
  }

}
