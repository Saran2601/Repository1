import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/User/login/login.component';
import { SignupComponent } from './Component/User/signup/signup.component';
import { HomeComponent } from './Component/User/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

import { MatDividerModule } from '@angular/material/divider';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { ApiServiceService } from './Services/api-service.service';
import { CustomerdashboardComponent } from './Component/Customer/customerdashboard/customerdashboard.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './Component/Admin/public/add-item/add-item.component';
import { ItemActionDeleteConfirmationComponent } from './Component/Admin/public/item-action-delete-confirmation/item-action-delete-confirmation.component';
import { ItemActionsComponent } from './Component/Admin/public/item-actions/item-actions.component';
import { ItemDeleteComponent } from './Component/Admin/public/item-delete/item-delete.component';
import { ItemDetailsFormComponent } from './Component/Admin/public/item-details-form/item-details-form.component';
import { ItemInsertComponent } from './Component/Admin/public/item-insert/item-insert.component';
import { ItemListComponent } from './Component/Admin/public/item-list/item-list.component';
import { ItemListSummaryComponent } from './Component/Admin/public/item-list-summary/item-list-summary.component';
import { ItemSellComponent } from './Component/Admin/public/item-sell/item-sell.component';
import { ItemUpdateComponent } from './Component/Admin/public/item-update/item-update.component';
import { ItemsComponent } from './Component/Admin/public/items/items.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './Component/Admin/shared/navbar/navbar.component';
import { SidenavMenuItemsComponent } from './Component/Admin/shared/sidenav-menu-items/sidenav-menu-items.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CustomerdashboardComponent,
    AdminDashboardComponent,
    AddItemComponent,
    ItemActionDeleteConfirmationComponent,
    ItemActionsComponent,
    ItemDeleteComponent,
    ItemDetailsFormComponent,
    ItemInsertComponent,
    ItemListComponent,
    ItemListSummaryComponent,
    ItemSellComponent,
    ItemUpdateComponent,
    ItemsComponent,
    NavbarComponent,
    SidenavMenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    CurrencyPipe,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('335646835807-6r5om3ee32va3pcksvcdeeaccg1a8qls.apps.googleusercontent.com') // your client id
        }
      ],
      // onerror:(err: any)=>{
      //   // console.error(err);
      // }
    } as SocialAuthServiceConfig
  },ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
