import { Component, OnInit, Input } from '@angular/core';
import { TransactionModel } from '../transaction.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bitcoinsv-academy-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions: TransactionModel[];

  columnDef: string[];

  constructor() {
      this.transactions = [];
      this.columnDef = [
                'txid',
                'size',
                'version',
                'locktime',
                'confirmations',
                'time',
                'blocktime'
      ]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
