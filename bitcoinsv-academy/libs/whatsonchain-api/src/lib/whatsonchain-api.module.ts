import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WhatsonchainApiComponent } from './whatsonchain-api/whatsonchain-api.component';
import { MaterialModule } from '@bitcoinsv-academy/material';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule
  ],
  declarations: [
      WhatsonchainApiComponent
  ],
  exports: [
      WhatsonchainApiComponent
  ]

})
export class WhatsonchainApiModule {}
