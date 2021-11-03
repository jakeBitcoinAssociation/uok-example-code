import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authRoutes, AuthModule } from '@bitcoinsv-academy/auth';
import {
  bigNumbersRoutes,
  Lecture5LibraryModule,
} from '@bitcoinsv-academy/lecture5-library';
import { LayoutModule } from '@bitcoinsv-academy/layout';
import { PrivateKeyWifComponent } from './components/keys-addresses/private-key-wif/private-key-wif.component';

@NgModule({
  declarations: [AppComponent, PrivateKeyWifComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'lecture5', pathMatch: 'full' },
        { path: 'lecture5', children: bigNumbersRoutes },
        { path: 'auth', children: authRoutes },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule,
    LayoutModule,
    Lecture5LibraryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
