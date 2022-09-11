import { ComponentFactoryResolver, Injectable, ViewContainerRef, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalComponent } from './modal.component';

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	private rootViewContainer: ViewContainerRef | undefined;
    public formSubmissionValue: any;
    formValueChanged: EventEmitter<any> = new EventEmitter();

    constructor ( 
        private factoryResolver: ComponentFactoryResolver 
    ) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef: any) {
        this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent(modalTitle: string, modalText: string, formField: []) {
        
        const factory = this.factoryResolver.resolveComponentFactory(ModalComponent);
        const component = factory.create(this.rootViewContainer!.parentInjector);
		
        component.instance.modalTitle = modalTitle;
        component.instance.modalText = modalText;
        component.instance.fields = formField;

        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));

        // subscribe formValue
        // component.instance.formValue.subscribe((res) => this.setFormValue(res))
        this.rootViewContainer!.insert(component.hostView);
    }

    removeDynamicComponent(component: any) {
        component.destroy();
    }

    set formValue(value: any) {
        this.formSubmissionValue = value;
        this.formValueChanged.emit(value);
    }

    get formValue() {
        return this.formSubmissionValue;
    }
}
