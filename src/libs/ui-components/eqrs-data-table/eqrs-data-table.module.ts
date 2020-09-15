import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDatatableComponent } from './dynamic-datatable/dynamic-datatable.component';
import { DynamicColumnComponent } from './dynamic-column/dynamic-column.component';
import { TemplateLoaderComponent } from './template-loader/template-loader.component';
import { DynamicTemplateDirective } from './dynamic-template.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
      FormsModule,
      CommonModule
    ],
  declarations: [
      DynamicDatatableComponent, 
      DynamicColumnComponent, 
      TemplateLoaderComponent,
      DynamicTemplateDirective, 
      PaginationComponent
    ],
  exports: [
      DynamicDatatableComponent,
      DynamicColumnComponent,
      TemplateLoaderComponent, 
      DynamicTemplateDirective, 
      PaginationComponent
    ]
}
)
export class EqrsDatatableModule {}