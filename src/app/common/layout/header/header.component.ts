import { ModalService } from './../../components/modal/modal.service';
import { HeaderService } from './../../../services/header.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title!: string;
	fields: [] = [];

	constructor(
		private headerService: HeaderService,
		private modalService: ModalService,
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() {
		this.headerService.title.subscribe(title => {
			this.title = title;
		});
		this.headerService.formField.subscribe(formField => {
			this.fields = formField;
		});
	}

	openModal(e: any, modalTitle: string, modalText: string, formField: []) {
		e.preventDefault();
		this.modalService.setRootViewContainerRef(this.viewContainerRef);
		this.modalService.addDynamicComponent(modalTitle, modalText, formField);
	}

}
