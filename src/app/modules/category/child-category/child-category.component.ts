import { DataService } from './../../../services/data.service';
import { Category } from './../../../models/category';
import { MessageHelper } from './../../../common/message/messageHelper';
import { ResponseStatus } from './../../../common/enums/appEnums';
import { CategoryService } from './../../../services/category.service';
import { Component, Input, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { ModalService } from 'src/app/common/components/modal/modal.service';

@Component({
	selector: 'app-child-category',
	templateUrl: './child-category.component.html'
})

export class ChildCategoryComponent implements OnInit {

	@Input() category: any;

	constructor(
		private categoryService: CategoryService,
		private dataService: DataService,
		private messageHelper: MessageHelper,
		private modalService: ModalService,
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() {
	}

	deleteCategory(category: Category) {

		this.categoryService.deleteCategory(category).subscribe(response => {
			if (response.responseCode == ResponseStatus.success) {
				// console.log('Delete response: ', this.category);

				if (category.hasChild) {
					var child = this.dataService.lstCategory.filter(c => c.parentId == category.categoryId);

					child.forEach(c => {
						const idx = this.dataService.lstCategory.findIndex(x => x.categoryId == c.categoryId);
						if (idx > -1) {
							this.dataService.lstCategory.splice(idx, 1);
							this.dataService.totalCategory--;
						}
					})
				}
				const index = this.dataService.lstCategory.findIndex(x => x.categoryId == category.categoryId);
				if (index > -1) {
					this.dataService.lstCategory.splice(index, 1);
					this.dataService.totalCategory--;
				}

				this.messageHelper.showMessage(response.responseCode, response.message)
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message)
			}
		})
	}

	editCategory(cat: Category) {
		this.modalService.setRootViewContainerRef(this.viewContainerRef);
		this.modalService.categorySaveDynamicComponent('Edit Category', cat);
	}

}
