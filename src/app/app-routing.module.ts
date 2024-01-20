import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
{path:'footer',component:FooterComponent},
{path:'navbar',component:NavbarComponent},
{path:'customers-list',component:CustomersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
