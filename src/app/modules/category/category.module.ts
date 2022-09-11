import { CategoryService } from './../../services/category.service';
import { ChildCategoryComponent } from './child-category/child-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared.module';
import { ParentCategoryComponent } from './parent-category/parent-category.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    CategoryComponent,
    ParentCategoryComponent,
    ChildCategoryComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
