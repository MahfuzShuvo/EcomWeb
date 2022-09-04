import { ModalComponent } from './common/components/modal/modal.component';
import { SidebarComponent } from './common/layout/sidebar/sidebar.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './common/alert/alert.service';
import { AuthGuard } from './common/auth/auth.guard';
import { AuthGuardService } from './common/auth/auth.guard.service';
import { HttpHelper } from './common/http/httpHelper';
import { MessageHelper } from './common/message/messageHelper';
import { SharedModule } from './shared.module';
import { HeaderService } from './services/header.service';
import { FormBuilderModule } from './common/components/form/form.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		ModalComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormBuilderModule,
		SharedModule.forRoot(),
		ToastrModule.forRoot()
	],
	providers: [
		AlertService,
		HttpHelper,
		MessageHelper,
		ToastrService,
		AuthGuard,
		AuthGuardService,
		HttpClient,
		HeaderService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
