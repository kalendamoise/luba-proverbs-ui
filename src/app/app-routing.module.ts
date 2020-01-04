import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProverbsComponent } from './proverbs/proverbs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProverbDetailComponent } from './proverb-detail/proverb-detail.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'proverbs/:category', component: ProverbsComponent },
  { path: 'proverbs', component: ProverbsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProverbDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
