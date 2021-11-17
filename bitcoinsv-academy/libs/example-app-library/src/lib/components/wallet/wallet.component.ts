import { Component, OnInit } from '@angular/core';
import { Wallet } from './wallet.model';
import { WhatsonchainApiService } from '../../../../../whatsonchain-api/src/lib/services/whatsonchain-api.service';
import { HttpClient } from '@angular/common/http';
import { UTXOModel } from './utxo.model';
import { Transaction } from './transaction.model';
import {
  PrivKey,
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

    defaultMnemonic = "sport you scene actress crystal effort cotton garbage harsh salt way state";

    mnemonic = "";
    testPrivKey: PrivKey = new PrivKey();
    testAddress = "";
    balance = 0;
    UTXOs: UTXOModel[] = []
    transactions: Transaction[] = [];
    private wallet: Wallet = new Wallet();

  constructor(private http: HttpClient, private whatsonchainApi: WhatsonchainApiService) {
      this.generateDefaultWallet();

      console.log(this.transactions);
  }

  ngOnInit(): void {
  }


  generateDefaultWallet() {
      this.wallet = new Wallet(this.defaultMnemonic);

     this.mnemonic = this.wallet.getMnemonic();
     this.testPrivKey = this.wallet.getTestPrivKey();
     this.testAddress = this.wallet.getTestAddress();
     this.whatsonchainApi.address = this.wallet.getTestAddress();

      this.fetchBalance();
      this.fetchUTXOs();

  }

  generateNewWallet() {
     this.wallet = new Wallet();

     this.mnemonic = this.wallet.getMnemonic();
     this.testPrivKey = this.wallet.getTestPrivKey();
     this.testAddress = this.wallet.getTestAddress();
     this.whatsonchainApi.address = this.wallet.getTestAddress();

      this.fetchBalance();
      this.fetchUTXOs();
  }

  buildWalletFromMnemonic() {
      this.wallet = new Wallet(this.mnemonic);
      this.transactions = [];

     this.testPrivKey = this.wallet.getTestPrivKey();
     this.testAddress = this.wallet.getTestAddress();
     this.whatsonchainApi.address = this.wallet.getTestAddress();

      this.fetchBalance();
      this.fetchUTXOs();

      console.log(this.transactions);
  }


  fetchBalance() {
      this.whatsonchainApi.fetchBalance()
      .subscribe( balance => {
          this.balance = balance[0];
      });
  }

  fetchUTXOs() {
      this.whatsonchainApi.fetchUTXOs()
      .subscribe( UTXOs => {
          this.UTXOs = UTXOs;
          Object.values(this.UTXOs).forEach(utxo => {
              this.fetchTransaction(utxo.tx_hash);
          })
      });
  }

  fetchTransaction(txHash: string) {
      this.whatsonchainApi.fetchTransaction(txHash)
      .subscribe( transaction => {
          this.transactions.push(transaction);
          console.log(transaction);
      });
  }



}
