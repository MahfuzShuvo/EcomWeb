import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	lstCategory: Category[] = [];
	totalCategory: number = 0;

	constructor() { }

	getCategory() {
		return this.lstCategory;
	}

	setCategory(category: any) {
		this.lstCategory = category;
		this.totalCategory = this.lstCategory.length;
	}

}
