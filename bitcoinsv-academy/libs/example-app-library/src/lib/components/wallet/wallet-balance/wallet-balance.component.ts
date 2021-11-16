import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss']
})
export class WalletBalanceComponent implements OnInit {

    @Input('walletBalance') balance = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
