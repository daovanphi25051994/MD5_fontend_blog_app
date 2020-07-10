import { Component, OnInit } from '@angular/core';
import {IPost} from '../IPost';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {CustomerService} from '../customer.service';
import {ICustomer} from '../icustomer';

@Component({
  selector: 'app-customer-edit-form',
  templateUrl: './customer-edit-form.component.html',
  styleUrls: ['./customer-edit-form.component.scss']
})
export class CustomerEditFormComponent implements OnInit {

  customer: ICustomer;
  customerForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.customerForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(
      next => {
        this.customer = next;
        this.customerForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.customerForm.valid) {
      const { value } = this.customerForm;
      const data = {
        ...this.customer,
        ...value
      };
      this.customerService.updateCustomer(data).subscribe(
        next => {
          this.router.navigate(['/customer']);
        },
        error => console.log(error)
      );
    }
  }


}
