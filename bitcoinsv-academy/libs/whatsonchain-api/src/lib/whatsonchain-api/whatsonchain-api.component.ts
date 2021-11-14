import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bitcoinsv-academy-whatsonchain-api',
  templateUrl: './whatsonchain-api.component.html',
  styleUrls: ['./whatsonchain-api.component.scss']
})
export class WhatsonchainApiComponent implements OnInit {



  constructor(private http: HttpClient) {

  }



  ngOnInit(): void {
      this.fetchTransactions();
  }

  onFetchTransactions() {
      this.fetchTransactions();
  }

  private fetchTransactions() {
      this.http.get(
          'https://api.whatsonchain.com/v1/bsv/test/address/n2bogvpijvSz5Kpv8ZTajwFxj6S1YB9aPo/info'
      ).subscribe( transactions => {
          console.log(transactions);
      });
  }


}
