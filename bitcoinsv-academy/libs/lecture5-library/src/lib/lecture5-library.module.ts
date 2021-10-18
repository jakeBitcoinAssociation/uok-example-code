import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Lecture5LibraryComponent } from './components/big-numbers/big-numbers.component';
import { MaterialModule } from '@bitcoinsv-academy/material';
import { NumberFormatsComponent } from './components/number-formats/number-formats.component';
import { PointsAndEllipticCurvesComponent } from './components/points-and-elliptic-curves/points-and-elliptic-curves.component';
import { HashFunctionsComponent } from './components/hash-functions/hash-functions.component';

export const bigNumbersRoutes: Route[] = [
  { path: 'big-numbers', component: Lecture5LibraryComponent },
  { path: 'number-formats', component: NumberFormatsComponent },
  { path: 'points-and-elliptic-curves', component: PointsAndEllipticCurvesComponent },
  { path: 'hash-functions', component: HashFunctionsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [
      Lecture5LibraryComponent,
      NumberFormatsComponent,
      PointsAndEllipticCurvesComponent,
      HashFunctionsComponent
  ],
})
export class Lecture5LibraryModule {}
