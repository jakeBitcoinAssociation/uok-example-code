import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
       FlexLayoutModule,
       MatInputModule,
       MatCardModule,
       MatButtonModule,
       MatSidenavModule,
       MatListModule,
       MatIconModule,
       MatToolbarModule,
       MatProgressSpinnerModule,
       MatMenuModule,
       MatTableModule,
       MatSelectModule,
       MatTabsModule,
       MatGridListModule
  ],
  exports: [
      FlexLayoutModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTableModule,
      MatSelectModule,
      MatTabsModule,
      MatGridListModule
  ]
})
export class MaterialModule {}
