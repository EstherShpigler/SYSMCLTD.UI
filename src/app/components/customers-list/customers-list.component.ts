import { Customer } from '../../models/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../../sevices/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{
 customers:Customer[]=[];
constructor(private customerService: CustomerService,private router :Router){}

ngOnInit(): void {
 
this.customerService.getAllCustomers()
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


goToDetails(id: string|undefined){
  this.router.navigate([`/customer-details/${id}`])
  }
goToDelete(id: string| undefined){
    this.router.navigate([`/delete-customer/${id}`])
    }
updateCustomer(id: string|undefined): void {
      this.router.navigate([`/customer-update/${id}`]);
    }
}

