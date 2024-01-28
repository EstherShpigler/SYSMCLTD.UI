import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
BaseApiUrl:string="https://localhost:7175";

  constructor(private http:HttpClient) { }
  

  GetAllCustomers():Observable<Customer[]>{
  return this.http.get<Customer[]>(this.BaseApiUrl+'/api/Customer');
  }
}
