import { Component, OnInit, Input } from '@angular/core';
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

}
