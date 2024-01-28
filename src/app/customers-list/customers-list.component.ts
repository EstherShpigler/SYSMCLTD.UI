import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../sevices/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{
 customers:Customer[]=[];
constructor(private customerService: CustomerService,private router :Router){}

ngOnInit(): void {
 
this.customerService.GetAllCustomers()
.subscribe({
  next:(customers)=>
  {
    if(this.customers.length == 0)
       this.customers=customers;
  },
  error:(response)=>
  { console.log(response);}
});


}


goToDetails(id: string){
this.router.navigate([`/customer-details/${id}`])
}
}

