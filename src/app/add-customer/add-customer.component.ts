import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
newCustomer :Customer= {
  id:"0",
  fullName:'',
  numId:"0",
  created:new Date()
};
}
