import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Lecture5LibraryComponent } from './components/big-numbers/big-numbers.component';
import { MaterialModule } from '@bitcoinsv-academy/material';
import { NumberFormatsComponent } from './components/number-formats/number-formats.component';
import { PointsAndEllipticCurvesComponent } from './components/points-and-elliptic-curves/points-and-elliptic-curves.component';
import { HashFunctionsComponent } from './components/hash-functions/hash-functions.component';
import { BigLittleEndianComponent } from './components/number-formats/big-little-endian/big-little-endian.component';
import { SignMagnitudeComponent } from './components/number-formats/sign-magnitude/sign-magnitude.component';
import { TwosComplimentComponent } from './components/number-formats/twos-compliment/twos-compliment.component';
import { FixedPointComponent } from './components/number-formats/fixed-point/fixed-point.component';
import { FloatingPointComponent } from './components/number-formats/floating-point/floating-point.component';
import { StringComponent } from './components/number-formats/string/string.component';
import { VarintComponent } from './components/number-formats/varint/varint.component';

export const bigNumbersRoutes: Route[] = [
    { path: '', redirectTo: 'big-numbers', pathMatch: 'full' },
    { path: 'number-formats', component: NumberFormatsComponent },
    { path: 'big-numbers', component: Lecture5LibraryComponent },
    { path: 'points-and-elliptic-curves', component: PointsAndEllipticCurvesComponent },
    { path: 'hash-functions', component: HashFunctionsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [
      Lecture5LibraryComponent,
      NumberFormatsComponent,
      PointsAndEllipticCurvesComponent,
      HashFunctionsComponent,
      BigLittleEndianComponent,
      SignMagnitudeComponent,
      TwosComplimentComponent,
      FixedPointComponent,
      FloatingPointComponent,
      StringComponent,
      VarintComponent,
  ],
})
export class Lecture5LibraryModule {}
