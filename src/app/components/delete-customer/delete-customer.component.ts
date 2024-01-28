import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/sevices/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

 private id: string='00000000-0000-0000-0000-000000000000';
  v: any;
  constructor(private router: ActivatedRoute, private customerService: CustomerService,private route:Router){
       router.params.subscribe(c=>{
        this.v = c;
     });
     console.log(this.v, "v")
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.deleteCustomer();
    });

  }
  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.id).subscribe(
      () => {
         this.route.navigate(['/HomePage']);
        console.log('Customer deleted successfully');
      },
      error => {
        console.error('Error deleting customer:', error);
      }
    );
  }
}
