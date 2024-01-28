import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { Contact } from 'src/app/models/contacts.model';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/sevices/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit{



  customerId: string='00000000-0000-0000-0000-000000000000'; 
  customerDetails!: Customer; 
  newContact!:Contact; 
  newAddress!:Address; 

  constructor(private route: ActivatedRoute,private router:Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      this.loadCustomerDetails();
    });
  }

  loadCustomerDetails(): void {
    this.customerService.getCustomerDetails(this.customerId);
      }
    
  

  updateCustomer(): void {
    // Add logic to update customer details, contacts, and addresses
    this.customerService.updateCustomer(this.customerId, this.customerDetails).subscribe(
      () => {
        console.log('Customer updated successfully');
        this.router.navigate(['/HomePage']);
      },
      error => {
        console.error('Error updating customer:', error);
      }
    );
  }

  addContact(): void {
    // Add logic to add a new contact to the customer
    this.customerDetails.contact.push(this.newContact);
    this.newContact; 
  }

  addAddress(): void {
    this.customerDetails.address.push(this.newAddress);
    this.newAddress; 
    this.router.navigate(['/HomePage']);

  }
}


