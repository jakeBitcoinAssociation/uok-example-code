import { Component } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
  Base58,
  Base58Check
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-keys-addresses',
  templateUrl: './keys-addresses.component.html',
  styleUrls: ['./keys-addresses.component.scss']
})
export class KeysAddressesComponent {

    privKey = PrivKey.fromRandom();



  constructor() {
      this.privKey = PrivKey.fromRandom();
  }


}
