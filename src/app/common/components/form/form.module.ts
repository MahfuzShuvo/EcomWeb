import { FileComponent } from './fields/file/file.component';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [
		FormComponent,
		FieldBuilderComponent,
		TextboxComponent,
		DropdownComponent,
		CheckboxComponent,
		RadioComponent,
		FileComponent
	],
	exports:[ FormComponent ]
})
export class FormBuilderModule { }
