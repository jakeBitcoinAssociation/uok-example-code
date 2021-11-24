import { Component, OnInit } from '@angular/core';
import { Wallet } from './wallet.model';
import { WhatsonchainApiService } from '../../../../../whatsonchain-api/src/lib/services/whatsonchain-api.service';
import { UTXOModel } from './utxo.model';
import { TransactionModel } from './transaction.model';

@Component({
  selector: 'bitcoinsv-academy-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

    defaultMnemonic = "sport you scene actress crystal effort cotton garbage harsh salt way state";

    mnemonic: string;
    testAddress: string;

    balance: number;
    UTXOs: UTXOModel[];
    transactions: any[];
    private wallet: Wallet;

  constructor(private whatsonchainApi: WhatsonchainApiService) {

      this.wallet = new Wallet();
      this.mnemonic = this.defaultMnemonic;
      this.testAddress = this.wallet.getTestAddress();
      this.balance = 0;
      this.UTXOs = [];
      this.transactions = [];
  }

  ngOnInit(): void {
      this.wallet = new Wallet(this.defaultMnemonic);
      this.rebuildWallet();
  }

  ngAfterViewInit() {
  }

  private rebuildWallet() {
      this.mnemonic = this.wallet.getMnemonic();
      this.testAddress = this.wallet.getTestAddress();
      this.whatsonchainApi.address = this.wallet.getTestAddress();
      this.fetchBalance();
      this.fetchUTXOs();
  }

  generateDefaultWallet() {
      this.wallet = new Wallet(this.defaultMnemonic);
      this.rebuildWallet();
  }

  generateNewWallet() {
     this.wallet = new Wallet();
     this.rebuildWallet();
  }

  buildWalletFromMnemonic() {
      this.wallet = new Wallet(this.mnemonic);
      this.rebuildWallet();
  }


  fetchBalance() {
      this.whatsonchainApi.fetchBalance(this.testAddress)
      .subscribe( balance => {
          this.balance = balance[0];
      });
  }

  fetchUTXOs() {
      this.whatsonchainApi.fetchUTXOs(this.testAddress)
      .subscribe( UTXOs => {
          this.UTXOs = UTXOs;
          this.fetchTransactions();
      });

  }

  fetchTransactions() {
      const txHashes: any[] = [];
      this.transactions = [];
      this.UTXOs.forEach(utxo => {
          txHashes.push(utxo.tx_hash);
      });
      this.whatsonchainApi.fetchTransactions(txHashes)
      .subscribe( transactions => {
        this.transactions = <TransactionModel[]>transactions;
      });
  }


}
