import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WalletComponent } from './components/wallet/wallet.component';

export const exampleAppLibraryRoutes: Route[] = [
    { path: '', redirectTo: 'wallet', pathMatch: 'full' },
    { path: 'wallet', component: WalletComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    WalletComponent
  ],
})
export class ExampleAppLibraryModule {}
