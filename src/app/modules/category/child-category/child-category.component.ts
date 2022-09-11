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

	public fields: any = [
        {
            type: 'text',
            name: 'name',
            label: 'Category',
            value: '',
            required: true,
        },
        {
            type: 'dropdown',
            name: 'parentId',
            label: 'Parent Category',
            value: '0',
            required: false,
            options: this.getDropdownList()
        },
        {
            type: 'radio',
            name: 'status',
            label: 'Status',
            value: true,
            required: false,
            options: [
                { key: true, label: 'Active' },
                { key: false, label: 'Inactive' }
            ]
        }
    ];

	constructor(
		private categoryService: CategoryService,
		private messageHelper: MessageHelper,
		private headerService: HeaderService,
		private modalService: ModalService,
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() {
	}

	deleteCategory(category: Category) {
		
		this.categoryService.deleteCategory(category).subscribe(response => {
			if (response.responseCode == ResponseStatus.success) {
				console.log('Delete response: ', this.category);

				if (category.hasChild) {
					var child = this.categoryService.lstCategory.filter(c => c.parentId == category.categoryId);

					child.forEach(c => {
						const idx = this.categoryService.lstCategory.findIndex(x => x.categoryId == c.categoryId);
						if (idx > -1) {
							this.categoryService.lstCategory.splice(idx, 1);
							this.categoryService.totalCategory--;
						}
					})
				}
				const index = this.categoryService.lstCategory.findIndex(x => x.categoryId == category.categoryId);
				if (index > -1) {
					this.categoryService.lstCategory.splice(index, 1);
					this.categoryService.totalCategory--;
				}

				this.messageHelper.showMessage(response.responseCode, response.message)
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message)
			}
		})
	}

	editCategory(category: Category) {
		this.fields[0].value = category.name;
		this.fields[1].value = category.parentId;
		this.fields[2].value = category.status;

		// Promise.resolve().then(() => this.headerService.setFields(this.fields));

		this.modalService.setRootViewContainerRef(this.viewContainerRef);
		this.modalService.addDynamicComponent('Edit Category', '', this.fields);
	}

	getDropdownList(){
		var dropdownOption: { key: number; label: string; }[] = [];
		this.categoryService.lstCategory.forEach(c => {
			dropdownOption.push({ key: c.categoryId, label: c.name });
		});
		return dropdownOption;
	}

}
