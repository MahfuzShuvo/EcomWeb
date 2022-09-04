import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
