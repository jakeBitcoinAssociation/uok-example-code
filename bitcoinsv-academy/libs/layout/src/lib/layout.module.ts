import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@bitcoinsv-academy/material';
import { RouterModule } from '@angular/router';
import { Lecture5LayoutComponent } from './containers/lecture5-layout/lecture5-layout.component';
import { Lecture6LayoutComponent } from './containers/lecture6-layout/lecture6-layout.component';
import { ExampleAppLayoutComponent } from './containers/example-app-layout/example-app-layout.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent, Lecture5LayoutComponent, Lecture6LayoutComponent, ExampleAppLayoutComponent],
  exports: [LayoutComponent,Lecture5LayoutComponent,Lecture6LayoutComponent,ExampleAppLayoutComponent]
})
export class LayoutModule {

}
