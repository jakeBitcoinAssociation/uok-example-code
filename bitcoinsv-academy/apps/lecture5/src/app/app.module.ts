import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BigNumbersComponent } from './features/big-numbers/big-numbers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authRoutes, AuthModule } from '@bitcoinsv-academy/auth';


@NgModule({
  declarations: [AppComponent, BigNumbersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'auth', children: authRoutes}], { initialNavigation: 'enabledBlocking' }),
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BigNumbersComponent
  ],
})
export class AppModule {}
