import { DataService } from './../../../../services/data.service';
import { MessageHelper } from './../../../message/messageHelper';
import { ResponseStatus } from './../../../enums/appEnums';
import { Category } from './../../../../models/category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
	selector: 'app-category-save',
	templateUrl: './category-save.component.html',
	styleUrls: ['./category-save.component.scss']
})
export class CategorySaveComponent implements OnInit {

	@Input() modalTitle: string = '';
	@Input() modalText: string = '';
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
	objCategory: Category = new Category();

	constructor(
		private categoryService: CategoryService,
		public dataService: DataService,
		private messageHelper: MessageHelper
	) { }

	ngOnInit() {
	}

	close(event: any) {
		this.closeModal.emit(event);
	}

	onSubmit(event: any) {
		console.log("Form data: ", this.objCategory);

		this.categoryService.saveCategory(this.objCategory).subscribe(response => {
			if (response.responseCode == ResponseStatus.success) {
				const index = this.dataService.lstCategory.findIndex(x => x.categoryId == response.responseObject.categoryId);
				if (index > -1) {
					this.dataService.lstCategory.splice(index, 1, response.responseObject);
				} else {
					this.dataService.lstCategory.push(response.responseObject)
					this.dataService.totalCategory++;
				}
				this.messageHelper.showMessage(response.responseCode, response.message);
				this.close(event);
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message);
			}
		})
	}
}
