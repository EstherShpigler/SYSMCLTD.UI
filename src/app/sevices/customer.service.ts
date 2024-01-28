import { Customer } from '../models/customer.model';
import { BehaviorSubject, Observable, tap} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
BaseApiUrl:string="https://localhost:7175";
private customerSubject=new BehaviorSubject<Customer[]>([])  

  constructor(private http:HttpClient) { 
  this.loadCustomers();
  }

  loadCustomers():Observable<Customer[]>{
  return this.http.get<Customer[]>(this.BaseApiUrl+'/api/Customer')
  .pipe(
    tap(customers => this.customerSubject.next(customers))
  )
  }
 

  getAllCustomers(): BehaviorSubject<Customer[]> 
    { 
      return this.customerSubject;
     } 

    
  getCustomerDetails(id: string): Customer |undefined 
      {
       const customer = this.customerSubject.value.
       find((c) => c.id === id);
       return customer ; 
      }

  addCustomer(newCustomer: Customer): void {
        this.http.post('', newCustomer)
          .pipe(
            tap(() => this.loadCustomers()) 
          )
          .subscribe();
      }
    
  deleteCustomer(id: string): Observable<any> {
    const url = `${this.BaseApiUrl}/api/Customer${id}`;
    return this.http.delete(url);
  }
  updateCustomer(id: string, customerDetails: any): Observable<any> {
    const url = `${this.BaseApiUrl}/api/Customer${id}`;
    return this.http.put(url, customerDetails);
  }
}




 

