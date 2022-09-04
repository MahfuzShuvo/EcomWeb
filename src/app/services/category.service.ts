import { Category } from './../models/category';
import { HttpHelper } from './../common/http/httpHelper';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	getAllCategory() {
		const url = "api/Category/GetAllCategory";
		return this.httpHelper.getHelper(url);
	}

	saveCategory(categoryObj: Category) {
		const url = "api/Category/save";
		return this.httpHelper.postHelper(url, categoryObj);
	}
}
