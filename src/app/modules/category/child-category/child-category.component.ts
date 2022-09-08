import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-child-category',
	templateUrl: './child-category.component.html'
})

export class ChildCategoryComponent implements OnInit {

	@Input() category: any;

	constructor() { }

	ngOnInit() {
	}

}
