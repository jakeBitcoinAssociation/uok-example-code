import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { KeysAddressesComponent } from './components/keys-addresses/keys-addresses.component';

export const lecture6LibraryRoutes: Route[] = [
    { path: '', redirectTo: 'keys-addresses', pathMatch: 'full' },
    { path: 'keys-addresses', component: KeysAddressesComponent },
];



@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    KeysAddressesComponent
  ],
})
export class Lecture6LibraryModule {}
