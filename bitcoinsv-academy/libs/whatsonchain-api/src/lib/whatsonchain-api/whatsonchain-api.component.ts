import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'bitcoinsv-academy-whatsonchain-api',
  templateUrl: './whatsonchain-api.component.html',
  styleUrls: ['./whatsonchain-api.component.scss']
})
export class WhatsonchainApiComponent implements OnInit {

    @Input() address = "";
    @Output() getAddressBalance = new EventEmitter<number>();
    balance = 0;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.fetchTransactions();
      this.fetchBalance();
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

  onFetchBalance() {
      this.fetchBalance();
  }

  private fetchBalance() {
      this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/' + this.address + '/balance'
      )
     .pipe(map(responseData => {
          const balanceArray: number[] = [];
          Object.values(responseData).forEach(value => {
                balanceArray.push(value);
            })
          return balanceArray;
      }))
      .subscribe( balance => {
          console.log(balance);
          this.balance = balance[0];
          console.log(this.balance);
      });
  }

  onGetBalance() {
      this.getAddressBalance.emit(this.balance);
  }


}
