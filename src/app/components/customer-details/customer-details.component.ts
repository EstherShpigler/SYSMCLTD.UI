import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../sevices/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { Contact } from 'src/app/models/contacts.model';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

id:string='00000000-0000-0000-0000-000000000000';
customerDetails!:Customer;


  constructor(private router: ActivatedRoute,private customerService:CustomerService){
  
  
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['customerDetails.id']; 
      this.loadCustomerDetails();
    });

 
  }
    loadCustomerDetails(): void {
      this.customerService.getCustomerDetails(this.id);
     }
      
    
}

    

