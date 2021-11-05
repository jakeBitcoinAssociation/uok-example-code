import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authRoutes, AuthModule } from '@bitcoinsv-academy/auth';
import {
    lecture6LibraryRoutes,
    Lecture6LibraryModule
} from '@bitcoinsv-academy/lecture6-library';
import { LayoutModule } from '@bitcoinsv-academy/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        [
        { path: '', redirectTo: 'lecture6', pathMatch: 'full' },
        { path: 'lecture6', children: lecture6LibraryRoutes },
        { path: 'auth', children: authRoutes },
        ],
        { initialNavigation: 'enabled' }),
    AuthModule,
    LayoutModule,
    Lecture6LibraryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
