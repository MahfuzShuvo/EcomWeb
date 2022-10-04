import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-parent-category',
	templateUrl: './parent-category.component.html'
})
export class ParentCategoryComponent implements OnInit {

	@Input() categories: any;

	constructor() { }

	ngOnInit() {

	}

}
