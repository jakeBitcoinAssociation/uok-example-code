import { Component, OnInit } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  PubKey,
  TxBuilder,
  TxOut,
  Random,
  Base58,
  Base58Check,
  Hash
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-address-from-string',
  templateUrl: './address-from-string.component.html',
  styleUrls: ['./address-from-string.component.scss']
})
export class AddressFromStringComponent implements OnInit {

    privKey: PrivKey;
    wif: string;
    address: string;

    inputString = 'See the address from this string';

    onUserInput() {
        this.address = this.addressFromString(this.inputString);
    }

  constructor() {

      //Create a private key from random
      this.privKey = PrivKey.fromRandom();

      this.wif = this.privKey.toWif();

      //Generate Address from string
      this.address = this.addressFromString(this.inputString);
  }

  addressFromString(input_string: string): string {

      const privKey = this.privKeyFromString(input_string);

      const pubKey = PubKey.fromPrivKey(privKey);

      return Address.fromPubKey(pubKey).toString();

  }

  privKeyFromString(input_string: string): PrivKey {

      const h = Hash.sha256(Buffer.from(input_string));

      const bn = Bn.fromBuffer(h);

      return PrivKey.fromBn(bn);
  }

  ngOnInit(): void {
  }

}
