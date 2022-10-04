import { Category } from './../../../models/category';
import { CategorySaveComponent } from './category-save/category-save.component';
import { ComponentFactoryResolver, Inject, Injectable, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private rootViewContainer!: ViewContainerRef;

    constructor(
        private factoryResolver: ComponentFactoryResolver,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    // open category save modal
    categorySaveDynamicComponent(modalTitle: string, data: Category) {

        const factory = this.factoryResolver.resolveComponentFactory(CategorySaveComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);

        component.instance.modalTitle = modalTitle;
        // component.instance.modalText = modalText;
        component.instance.objCategory = data;

        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));
        // this.rootViewContainer!.insert(component.hostView);
        component.hostView.detectChanges();
        const { nativeElement } = component.location;
        this.document.body.appendChild(nativeElement)
    }

    // open brand save modal 
    brandSaveDynamicComponent(modalTitle: string, modalText: string) {

        const factory = this.factoryResolver.resolveComponentFactory(CategorySaveComponent);
        const component = factory.create(this.rootViewContainer!.parentInjector);

        component.instance.modalTitle = modalTitle;
        component.instance.modalText = modalText;

        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));
        this.rootViewContainer!.insert(component.hostView);
    }

    removeDynamicComponent(component: any) {
        component.hostView.detectChanges();
        const { nativeElement } = component.location;
        this.document.body.removeChild(nativeElement)
        component.destroy();
    }

}
