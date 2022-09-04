import { ModalService } from './modal.service';
import { FormComponent } from './../form/form.component';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() fields: [] = [];
    @Input() modalTitle: string = '';
    @Input() modalText: string = '';
    @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
    // @Output() formValue: EventEmitter<any> = new EventEmitter<any>();

    public form: FormGroup;
    unsubcribe: any

    constructor(
        private modalService: ModalService
    ) {
        this.form = new FormGroup ({
            fields: new FormControl(JSON.stringify(this.fields))
        })

        this.unsubcribe = this.form.valueChanges.subscribe((update) => {
            console.log(update);
            this.fields = JSON.parse(update.fields);
        });
    }

    ngOnInit() {

    }

    formSubmit(value: any) {
        this.modalService.formValue = value;
    }

    onUpload(e: any) {
        console.log('File', e);

    }

    getFields() {
        return this.fields;
    }

    ngDistroy() {
        this.unsubcribe();
    }

    close(event: any) {
        this.closeModal.emit(event);
    }

}
