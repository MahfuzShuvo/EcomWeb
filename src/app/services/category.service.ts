import { Category } from './../models/category';
import { HttpHelper } from './../common/http/httpHelper';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	lstCategory: Category[] = [];
	totalCategory: number = 0;

	constructor(
		private httpHelper: HttpHelper
	) { }

	getCategory() {
		return this.lstCategory;
	}

	setCategory(category: any) {
		this.lstCategory = category;
		this.totalCategory = this.lstCategory.length;
	}



	getAllCategory() {
		const url = "api/Category/GetAllCategory";
		return this.httpHelper.getHelper(url);
	}

	saveCategory(categoryObj: Category) {
		const url = "api/Category/save";
		return this.httpHelper.postHelper(url, categoryObj);
	}

	deleteCategory(category: Category) {
		const url = "api/Category/delete";
		return this.httpHelper.postHelper(url, category);
	}
}
