import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/client/home/home.component';
import { AboutComponent } from './pages/client/about/about.component';
import { ProductComponent } from './pages/client/product/product.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
