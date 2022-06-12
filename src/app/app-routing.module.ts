import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductComponent } from './pages/client/product/product.component';
import { AboutComponent } from './pages/client/about/about.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { CategoryFormComponent } from './pages/admin/category-form/category-form.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'auth',
        children: [
          {
            path: 'signin',
            component: SigninComponent
          },
          {
            path:'signup',
            component: SignupComponent
          }
    
        ]
    
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[CanAccessAdminGuard],// đưa vào để chặn nếu không login thì ko vào admin dược

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        children: [
          {
            path: 'list',
            component: ProductListComponent

          },
          {
            path: 'create',
            component: ProductFormComponent
          },
          {
            path: 'edit/:id',
            component: ProductFormComponent
          }
        ]

      },
      {
        path: 'category',
        children: [
          {
            path: 'list',
            component: CategoryListComponent
          },
          {
            path: 'create',
            component: CategoryFormComponent
          },
          {
            path: 'edit/:id',
            component: CategoryFormComponent
          }

        ]
      }
    ]
  },
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // DDuwad vào để các router trên cso thể sử dụng
})
export class AppRoutingModule { }
