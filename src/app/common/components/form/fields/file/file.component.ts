import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

	@Input() field: any = {};
	@Input() form!: FormGroup;
	isHovering: boolean = false;
	
	get isValid() { 
		return this.form?.controls[this.field.name].valid; 
	}

	get isDirty() { 
		return this.form?.controls[this.field.name].dirty; 
	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChange() {
		console.log(this.field.value);
		// this.field.value.
	}

	toggleHover(event: any) {
		debugger
	}
}
