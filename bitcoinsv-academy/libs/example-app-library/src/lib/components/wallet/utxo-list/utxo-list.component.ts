import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { UTXOModel } from '../utxo.model';

@Component({
  selector: 'bitcoinsv-academy-utxo-list',
  templateUrl: './utxo-list.component.html',
  styleUrls: ['./utxo-list.component.scss']
})
export class UtxoListComponent implements OnInit {

    @Input() UTXOs: UTXOModel[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChange(changes: SimpleChanges) {
    if(changes.transactions) {
        this.UTXOs = changes.UTXOs.currentValue;
    }
  }

}
