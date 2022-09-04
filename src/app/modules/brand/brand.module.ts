import { BrandRoutingModule } from './brand-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [BrandComponent]
})
export class BrandModule { }
