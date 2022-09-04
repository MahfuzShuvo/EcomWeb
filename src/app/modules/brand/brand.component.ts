import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-brand',
	templateUrl: './brand.component.html',
	styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

	public fields: any = [
        {
            type: 'text',
            name: 'brandName',
            label: 'Brand',
            value: '',
            required: true,
        },
        {
            type: 'text',
            name: 'brandDesc',
            label: 'Description',
			multiline: true,
			placeholder: 'Enter brand description',
            value: ''
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

        {
            type: 'file',
            name: 'brandLogo',
            label: 'logo',
            required: false,
            onUpload: this.onUpload.bind(this)
        },
        {
            type: 'radio',
            name: 'status',
            label: 'Status',
            value: 'in',
            required: true,
            options: [
                { key: '1', label: 'Active' },
                { key: '0', label: 'Inactive' }
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
		private headerService: HeaderService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Brand'));
		Promise.resolve().then(() => this.headerService.setFields(this.fields));
	}

	onUpload(e: any)
	{

	}
}
