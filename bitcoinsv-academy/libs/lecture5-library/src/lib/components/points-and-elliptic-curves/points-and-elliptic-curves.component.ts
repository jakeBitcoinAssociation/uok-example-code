import { Component, OnInit } from '@angular/core';
import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  TxBuilder,
  TxOut,
  Random,
  Point
} from '@ts-bitcoin/core';


@Component({
  selector: 'bitcoinsv-academy-points-and-elliptic-curves',
  templateUrl: './points-and-elliptic-curves.component.html',
  styleUrls: ['./points-and-elliptic-curves.component.scss']
})
export class PointsAndEllipticCurvesComponent {

    // Generate base point G
    G = Point.getG();

    // Generate random 32 byte (256bit) hex value
    phex = Random.getRandomBuffer(32);

    // Generate private key (p; i.e. p(x)) from phex
    p = Bn.fromBuffer(this.phex);

    // Generate Public key from p x G: P = pG
    P = this.G.mul(this.p);

}
