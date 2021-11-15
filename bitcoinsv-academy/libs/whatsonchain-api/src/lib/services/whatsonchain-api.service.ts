import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WhatsonchainApiService {

    balance = 0;
    address = "";

    constructor(private http: HttpClient) {
    }

    onFetchTransactions() {
        this.fetchTransactions();
    }

  private fetchTransactions() {
      this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + this.address + '/unspent'
      ).subscribe( transactions => {
          console.log(transactions);
      });
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
            this.balance = balanceArray[0];
          return balanceArray;
      }));
  }
}
