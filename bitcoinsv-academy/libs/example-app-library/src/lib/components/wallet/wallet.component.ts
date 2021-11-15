import { Component, OnInit } from '@angular/core';
import { Wallet } from './wallet.model';
import { WhatsonchainApiService } from '../../../../../whatsonchain-api/src/lib/services/whatsonchain-api.service';
import { HttpClient } from '@angular/common/http';
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
    balance = 0;
    private wallet: Wallet;

  constructor(private http: HttpClient, private whatsonchainApi: WhatsonchainApiService) {
     this.wallet = new Wallet("sport you scene actress crystal effort cotton garbage harsh salt way state");

     this.mnemonic = this.wallet.getMnemonic();
     this.testPrivKey = this.wallet.getTestPrivKey();
     this.testAddress = this.wallet.getTestAddress();

     this.whatsonchainApi.address = this.wallet.getTestAddress();

  }


  fetchBalance() {
      this.whatsonchainApi.fetchBalance()
      .subscribe( balance => {
          console.log(balance[0]);
          this.balance = balance[0];
      });
  }



  ngOnInit(): void {
      this.fetchBalance();
  }

}
