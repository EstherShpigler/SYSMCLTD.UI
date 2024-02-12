import { Component } from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'SYSMCLTD.UI';
}
