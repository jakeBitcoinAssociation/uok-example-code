import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KeysAddressesComponent } from './components/keys-addresses/keys-addresses.component';
import { MaterialModule } from '@bitcoinsv-academy/material';
import { PrivateKeyWifComponent } from './components/keys-addresses/private-key-wif/private-key-wif.component';
import { AddressFromStringComponent } from './components/keys-addresses/address-from-string/address-from-string.component';

export const lecture6LibraryRoutes: Route[] = [
    { path: '', redirectTo: 'keys-addresses', pathMatch: 'full' },
    { path: 'keys-addresses', component: KeysAddressesComponent },
];

@NgModule({
  imports: [CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule
  ],
  declarations: [
    KeysAddressesComponent,
    PrivateKeyWifComponent,
    AddressFromStringComponent
  ],
})
export class Lecture6LibraryModule {}
