import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
    public title = new BehaviorSubject('Title');
    public formField = new BehaviorSubject<any>([])
    
    constructor() { }

    setTitle(title: string) {
        this.title.next(title);
    }
    setFields(formField: []) {
        this.formField.next(formField)
    }
}