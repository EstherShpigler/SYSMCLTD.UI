import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { CustomerService } from './sevices/customer.service';
import { ContactService } from './sevices/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CustomersListComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    DeleteCustomerComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [CustomerService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
