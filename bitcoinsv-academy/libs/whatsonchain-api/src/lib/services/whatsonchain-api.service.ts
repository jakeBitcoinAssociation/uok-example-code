import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UTXOModel } from '../../../../example-app-library/src/lib/components/wallet/utxo.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsonchainApiService {

    address = "";

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
}
