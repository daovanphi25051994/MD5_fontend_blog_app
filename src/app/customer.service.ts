import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './IPost';
import {map} from 'rxjs/operators';
import {ICustomer} from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API_URL = 'http://10.30.0.42:8080/api/customers';

  constructor(private http: HttpClient) {
  }

  getCustomers(count = 10): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.API_URL).pipe(
      map(response => response.filter((customer, i) => i < count))
    );
  }
  getCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.API_URL}/${id}`);
  }
  createCustomer(customer: Partial<ICustomer>): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.API_URL, customer);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.patch<ICustomer>(`${this.API_URL}/${customer.id}`, customer);
  }
}
