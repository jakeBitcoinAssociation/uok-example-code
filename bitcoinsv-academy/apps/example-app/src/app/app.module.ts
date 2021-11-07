import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@bitcoinsv-academy/layout';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
    exampleAppLibraryRoutes,
    ExampleAppLibraryModule } from '@bitcoinsv-academy/example-app-library';
import { authRoutes, AuthModule } from '@bitcoinsv-academy/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        [
        { path: '', redirectTo: 'example-app', pathMatch: 'full' },
        { path: 'example-app', children: exampleAppLibraryRoutes },
        { path: 'auth', children: authRoutes },
        ],
        { initialNavigation: 'enabled' }),
    AuthModule,
    LayoutModule,
    ExampleAppLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
