import { DataService } from './../../services/data.service';
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
    onSubmitValue: Category = new Category();

    constructor(
        private headerService: HeaderService,
        public categoryService: CategoryService,
        private messageHelper: MessageHelper,
        public dataService: DataService
    ) { }

    ngOnInit() {
        Promise.resolve().then(() => this.headerService.setTitle('Category'));
        this.getAllCategory();
    }

    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(response => {
            if (response.responseCode == ResponseStatus.success) {
                this.dataService.setCategory(response.responseObject);
            } else {
                this.messageHelper.showMessage(response.responseCode, response.message);
            }
        });
    }

    findParent() {
        var parent: CategoryVM[] = [];
        this.dataService.lstCategory.forEach(c => {
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

        this.formatCategoryTree(parent, this.dataService.lstCategory);

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
