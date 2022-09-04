import { AppComponent } from './app.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDateFormatPipe } from './common/pipes/datefilter.pipe';
import { AlertComponent } from './common/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageHelper } from './common/message/messageHelper';
import { HttpHelper } from './common/http/httpHelper';
import { LoadingSpinnerComponent } from './common/spinner/loading-spinner.component';

@NgModule({
	declarations: [
		LoadingSpinnerComponent,
		CustomDateFormatPipe,
		AlertComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		HttpClientModule,
		RouterModule
	],
	exports: [
		ReactiveFormsModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		LoadingSpinnerComponent,
		CustomDateFormatPipe,
		AlertComponent
	],
	bootstrap: [AppComponent],
	providers: [MessageHelper],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [
				HttpHelper,
				LoadingSpinnerComponent
			],
		};
	}
}
