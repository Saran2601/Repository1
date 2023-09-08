import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/User/home/home.component';
import { SignupComponent } from './Component/User/signup/signup.component';
import { LoginComponent } from './Component/User/login/login.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './Component/Admin/public/add-item/add-item.component';
import { ItemsComponent } from './Component/Admin/public/items/items.component';
import { CustomerdashboardComponent } from './Component/Customer/customerdashboard/customerdashboard.component';
import { ItemListSummaryComponent } from './Component/Admin/public/item-list-summary/item-list-summary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'user/signup', component: SignupComponent },
      { path: 'user/login', component: LoginComponent }
    ]
  },
  {
    path: 'admin',
    // redirectTo: 'items',
    // pathMatch: 'full',
    component: AdminDashboardComponent,
    children: [
      { path: 'items/add', component: AddItemComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'items/summary', component: ItemListSummaryComponent }
    ]
  },
  {
    path: 'dashboard',
    // redirectTo: 'items',
    // pathMatch: 'full',
    component: CustomerdashboardComponent,
    children: [
      { path: 'items/add', component: AddItemComponent },
      { path: 'items', component: ItemsComponent },


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
