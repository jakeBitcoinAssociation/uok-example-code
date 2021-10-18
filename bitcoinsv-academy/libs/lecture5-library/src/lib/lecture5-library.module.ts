import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { Lecture5LibraryComponent } from './components/big-numbers/big-numbers.component';
import { MaterialModule } from '@bitcoinsv-academy/material';

export const bigNumbersRoutes: Route[] = [
  { path: 'big-numbers', component: Lecture5LibraryComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [Lecture5LibraryComponent],
})
export class Lecture5LibraryModule {}
