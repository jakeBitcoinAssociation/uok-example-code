import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { BigNumbersComponent } from './features/big-numbers/big-numbers.component';

@NgModule({
  declarations: [AppComponent, BigNumbersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BigNumbersComponent
  ],
})
export class AppModule {}
