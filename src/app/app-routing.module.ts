import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateFormComponent} from './customer-create-form/customer-create-form.component';
import {CustomerEditFormComponent} from './customer-edit-form/customer-edit-form.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'blog/:id',
    component: BlogDetailComponent
  }, {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  }, {
    path: 'customers',
    component: CustomerComponent
  }, {
    path: 'customers/create',
    component: CustomerCreateFormComponent
  }, {
    path: 'customer/:id/edit',
    component: CustomerEditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
