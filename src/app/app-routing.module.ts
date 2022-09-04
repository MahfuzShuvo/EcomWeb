import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
	{ path: 'brand', loadChildren: () => import('./modules/brand/brand.module').then(m => m.BrandModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
