import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';


const routes: Routes =[

{path:'HomePage',component:AppComponent},
{path:'**',component:AppComponent},
{path:'/',component:AppComponent},
{path:'footer',component:FooterComponent},
{path:'navbar',component:NavbarComponent},
{path:'customers-list',component:CustomersListComponent},
{path:'add-contact',component:AddContactComponent},
{path:'add-customer',component:AddCustomerComponent},
{path:'customer-details/:id',component:CustomerDetailsComponent},
{path:'customer-update/:id',component:CustomerUpdateComponent},
{path:'delete-customer/:id',component:DeleteCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
