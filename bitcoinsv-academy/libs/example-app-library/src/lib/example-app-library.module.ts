import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WalletComponent } from './components/wallet/wallet.component';
import { MaterialModule } from '@bitcoinsv-academy/material';
import { FormsModule } from '@angular/forms';
import { WhatsonchainApiModule } from '@bitcoinsv-academy/whatsonchain-api';

export const exampleAppLibraryRoutes: Route[] = [
    { path: '', redirectTo: 'wallet', pathMatch: 'full' },
    { path: 'wallet', component: WalletComponent},
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      WhatsonchainApiModule
  ],
  declarations: [
    WalletComponent
  ],
})
export class ExampleAppLibraryModule {}
