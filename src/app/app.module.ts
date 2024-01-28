import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { ROUTES, RouterModule } from '@angular/router';
import { CustomerService } from './sevices/customer.service';
import { ContactService } from './sevices/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CustomersListComponent,
    AddCustomerComponent,
    AddContactComponent,
    CustomerDetailsComponent,
    DeleteCustomerComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormGroup,
    FormControl,
    FormArray,
    Validators,
    ReactiveFormsModule,
    RouterModule,
    NgModule
    

  ],
  providers: [CustomerService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
