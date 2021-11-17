import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UTXOModel } from '../../../../example-app-library/src/lib/components/wallet/utxo.model';
import { Transaction } from '../../../../example-app-library/src/lib/components/wallet/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsonchainApiService {

    address = "";
    transactions: UTXOModel[] = [];

    constructor(private http: HttpClient) {}


  fetchUTXOs() {
      return this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + this.address + '/unspent'
      )
     .pipe(map(responseData => {
          const UTXOArray: UTXOModel[] = [];
          Object.values(responseData).forEach(value => {
              UTXOArray.push(value);
          })
          return UTXOArray;
      }));
  }

  fetchTransaction(txHash: string) {
      return this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/tx/hash/' + txHash
      )
      .pipe(map(responseData => {
          const transaction: Transaction = new Transaction();
                Object.assign(transaction, responseData);
          return transaction;
      }));
  }

  fetchBalance(){
      return this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + this.address + '/balance'
      )
     .pipe(map(responseData => {
          const balanceArray: number[] = [];
          Object.values(responseData).forEach(value => {
                balanceArray.push(value);
            })
          return balanceArray;
      }));
  }

  /*postTransaction() {
      this.http.post(
          'https://api.whatsonchain.com/v1/bsv/test/tx/raw'
      )
  }*/
}
