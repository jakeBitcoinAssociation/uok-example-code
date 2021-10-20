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

    sha256 = Hash.sha256(Random.getRandomBuffer(32));

    // Generate a RIPEMD160 hash
    ripemd160 = Hash.ripemd160(Random.getRandomBuffer(32));

    // Generate a HASH256 hash
    hash256 = Hash.sha256Sha256(Random.getRandomBuffer(32));

    // Generate a HASH160 hash
    hash160 = Hash.sha256Ripemd160(Random.getRandomBuffer(32));



}
