import {Component, OnInit} from '@angular/core';
import {IPost} from '../IPost';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {ICustomer} from '../icustomer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];
  customer: ICustomer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.customerService.getCustomers().subscribe(next => {
      this.customers = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  deleteCustomer(i) {
    const customer = this.customers[i];
    this.customerService.deleteCustomer(customer.id).subscribe(() => {
      this.customers = this.customers.filter(obj => obj.id !== customer.id);
    });
  }

  filter(array, fn): any {
    const result = [];
    for (const element of array){
      if (fn(element)){
        result.push(element);
      }
    }
    return result;
  }

  // tslint:disable-next-line:typedef
  // onSubmit() {
  //   if (this.postForm.valid) {
  //     const {value} = this.postForm;
  //     this.postService.createPost(value)
  //       .subscribe(next => {
  //         this.postList.unshift(next);
  //         this.postForm.reset({
  //           title: '',
  //           body: ''
  //         });
  //       }, error => console.log(error));
  //   }
  // }

  // tslint:disable-next-line:typedef
  // deleteCustomer(i) {
  //   const customer = this.customers[i];
  //   this.customerService.deletePost(post.id).subscribe(() => {
  //     this.postList = this.postList.filter(t => t.id !== post.id);
  //   });
  // }

}
