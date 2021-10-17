import { Component } from '@angular/core';
import { Address, Bn, KeyPair, PrivKey, TxBuilder, TxOut, Random } from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lecture5';
  hex = Random.getRandomBuffer(32).toString('hex');

}


