import { MessageHelper } from './../../common/message/messageHelper';
import { ModalService } from './../../common/components/modal/modal.service';
import { Category } from './../../models/category';
import { ResponseStatus } from './../../common/enums/appEnums';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { CategoryVM } from 'src/app/models/VM/categoryVM';


@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    lstCategory: Category[] = [];
    parentCategory: CategoryVM[] = [];
    childCategory: Category[] = [];
    dropdownOption: any[] = [{ key: 0, label: 'Select --'}];
    onSubmitValue: Category = new Category();
    totalCategory: number = 0;

	public fields: any = [
        {
            type: 'text',
            name: 'name',
            label: 'Category',
            value: '',
            required: true,
        },
        // {
        //     type: 'text',
        //     name: 'lastName',
        //     label: 'Last Name',
        //     value: '',
        //     required: true,
        // },
        // {
        //     type: 'text',
        //     name: 'email',
        //     label: 'Email',
        //     value: '',
        //     required: true,
        // },

        // {
        //     type: 'file',
        //     name: 'picture',
        //     label: 'Picture',
        //     required: true,
        //     onUpload: this.onUpload.bind(this)
        // },
        {
            type: 'dropdown',
            name: 'parentId',
            label: 'Parent Category',
            value: '0',
            required: false,
            options: this.dropdownOption
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
        },
        // {
        //     type: 'checkbox',
        //     name: 'hobby',
        //     label: 'Hobby',
        //     required: true,
        //     options: [
        //         { key: 'f', label: 'Fishing' },
        //         { key: 'c', label: 'Cooking' }
        //     ]
        // }
    ];

	constructor(
		private headerService: HeaderService,
        private messageHelper: MessageHelper,
        public categoryService: CategoryService,
        modalService: ModalService
	) { 
        modalService.formValueChanged.subscribe(value => {
            if (value) {
                this.formSubmission(value)
            }
        })
    }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Category'));
		Promise.resolve().then(() => this.headerService.setFields(this.fields));
        this.getAllCategory();
	}

	onUpload(e: any) {
		console.log('Upload file: ', e);
	}
    
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(response => {
            if (response.responseCode == ResponseStatus.success) {
                this.categoryService.setCategory(response.responseObject);

                this.categoryService.lstCategory.forEach(c => {
                    this.dropdownOption.push({ key: c.categoryId, label: c.name });
                });

            }
        });
    }

    formSubmission(value: any) {
        this.onSubmitValue = value;

        this.categoryService.saveCategory(this.onSubmitValue).subscribe(response => {
            
            if (response.responseCode == ResponseStatus.success) {
                // this.lstCategory.unshift(response.responseObject);
                this.categoryService.lstCategory.unshift(response.responseObject)

                this.categoryService.totalCategory++;
                this.messageHelper.showMessage(response.responseCode, response.message);
            } else {
                this.messageHelper.showMessage(response.responseCode, response.message);
            }
        })
    }

    findParent() {
        var parent: CategoryVM[] = [];
        this.categoryService.lstCategory.forEach(c => {
            var cat = new CategoryVM();
            if (c.parentId == 0) {
                
                cat.categoryId = c.categoryId;
                cat.name = c.name;
                cat.parentId = c.parentId;
                cat.status = c.status;
                cat.hasChild = c.hasChild;

                parent.push(cat);
            }
        });

        this.formatCategoryTree(parent, this.categoryService.lstCategory);
        
        return parent;
    }

    formatCategoryTree(parentCategory: CategoryVM[], allCategory: Category[]) {
        parentCategory.forEach(p => {
            p.child = allCategory.filter(x => x.parentId == p.categoryId)

            
                if (p.child.length > 0) {
                    this.formatCategoryTree(p.child, allCategory);
                }
        })
    }

}
