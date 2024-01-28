import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  v: any
  constructor(private router: ActivatedRoute){
       router.params.subscribe(c=>{
this.v = c;
     });
     console.log(this.v, "v")
  }

}
