import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {
customers:Customer[]=[
  {
    id:120,
    fullName:'harry'
  },
  {
    id:123,
    fullName:'barry'
  }
];
}
