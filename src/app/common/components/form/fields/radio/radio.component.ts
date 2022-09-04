import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'radio',
	templateUrl: './radio.component.html',
	styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

	@Input() field: any = {};
	@Input() form!: FormGroup;

	get isValid() { 
		return this.form?.controls[this.field.name].valid; 
	}

	get isDirty() { 
		return this.form?.controls[this.field.name].dirty; 
	}

	constructor() { }

	ngOnInit() {
	}

}
