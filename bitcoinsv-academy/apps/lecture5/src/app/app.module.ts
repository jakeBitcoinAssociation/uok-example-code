import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authRoutes, AuthModule } from '@bitcoinsv-academy/auth';
import {
  bigNumbersRoutes,
  Lecture5LibraryModule,
} from '@bitcoinsv-academy/lecture5-library';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'big-numbers' },
        { path: 'lecture5', children: bigNumbersRoutes },
        { path: 'auth', children: authRoutes },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule,
    Lecture5LibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
