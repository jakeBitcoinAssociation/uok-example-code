import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UTXOModel } from '../../../../example-app-library/src/lib/components/wallet/utxo.model';
import { TransactionModel } from '../../../../example-app-library/src/lib/components/wallet/transaction.model';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsonchainApiService {

    address = "";
    transactions: UTXOModel[] = [];

    constructor(private http: HttpClient) {}


  fetchUTXOs(address: string) {
      return this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + address + '/unspent'
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
          return responseData;
      }));
  }

  fetchTransactions(txHashes: any[]) {

      const txAddresses: any[] = [];
      txHashes.forEach( txHash => {
          txAddresses.push(this.http.get('https://api.whatsonchain.com/v1/bsv/test/tx/hash/' + <string>txHash));
      });

      return forkJoin(txAddresses)
      .pipe(map(responseData => {
          const txHashArray: TransactionModel[] = [];
          Object.values(responseData).forEach(value => {
              txHashArray.push(<any>value);
          })
          return txHashArray;
      }));

  }

  fetchBalance(address: string){
      return this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + address + '/balance'
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
