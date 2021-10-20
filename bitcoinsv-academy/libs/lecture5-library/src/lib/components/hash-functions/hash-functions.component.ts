import { Component } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
  Hash,
} from '@ts-bitcoin/core';

@Component({
  selector: 'bitcoinsv-academy-hash-functions',
  templateUrl: './hash-functions.component.html',
  styleUrls: ['./hash-functions.component.scss']
})
export class HashFunctionsComponent {

    // Generate a SHA256 hash

    sha256 = Hash.sha256(Buffer.from('BSV is the high entropy information highway'));

    // Generate a RIPEMD160 hash
    ripemd160 = Hash.ripemd160(Buffer.from('BSV is the high entropy information highway'));

    // Generate a HASH256 hash
    hash256 = Hash.sha256Sha256(Buffer.from('BSV is the high entropy information highway'));
    hash256Test = Hash.sha256(this.sha256);

    // Generate a HASH160 hash
    hash160 = Hash.sha256Ripemd160(Buffer.from('BSV is the high entropy information highway'));
    hash160Test = Hash.ripemd160(this.ripemd160);



}
