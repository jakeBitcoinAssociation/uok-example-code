import { Component, OnInit, Input} from '@angular/core';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'bitcoinsv-academy-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions: Transaction[] = [];


  constructor() { }


  ngOnInit(): void {
  }


}
