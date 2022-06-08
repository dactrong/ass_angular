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
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      {
        path:'dashboard',
        component:DashboardComponent
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
            path: 'edit',
            component: ProductEditComponent
          }
        ]

      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
