import {Component, OnInit} from '@angular/core';
import {IPost} from '../IPost';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {ICustomer} from '../icustomer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-create-form',
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.scss']
})
export class CustomerCreateFormComponent implements OnInit {

  customer: ICustomer;
  customerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.customerForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.customerForm.valid) {
      const {value} = this.customerForm;
      this.customerService.createCustomer(value)
        .subscribe(next => {
          this.customerForm.reset({
            id: '',
            username: '',
            password: '',
            address: '',
            phoneNumber: ''
          });
        }, error => console.log(error));
    }
  }

}
