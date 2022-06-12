import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import thwu viện ReactFormmodul
import {ReactiveFormsModule} from '@angular/forms'
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
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
// Đây là module cung cấp các phuwogn thức component sử dung api
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ValidateComponent } from './component/validate/validate.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CategoryFormComponent } from './pages/admin/category-form/category-form.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthListComponent } from './pages/admin/auth-list/auth-list.component';
// import  {  BrowserAnimationsModule  }  from  '@angle/platform-browser/animations' ;



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
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ProductDetailComponent,
    ValidateComponent,
    CategoryListComponent,
    CategoryFormComponent,
    AuthListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Đưa vào để Admin Product Form su dụng
    HttpClientModule,
    // BrowserAnimationsModule ,  
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
