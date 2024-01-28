import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { Address } from '../../models/address.model';
import { Contact } from '../../models/contacts.model';
import { CustomerService } from 'src/app/sevices/customer.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {

  customerForm!: FormGroup;
  fullName:string='';
  numId:number=0;
  address:Address[]=[];
  contact:Contact[]=[];
  constructor(private router: ActivatedRoute,private customerService:CustomerService,private fb: FormBuilder){}
  ngOnInit(): void
  {
    this.initForm();

  }
  initForm(): void 
  {
    this.customerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      numId: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      address: this.fb.array([
        this.fb.group({
          city: ['', Validators.required],
          street: ['', Validators.required]})
        ]),
        
      contact: this.fb.array([
        this.fb.group({
          fullName: ['', Validators.required],
          officeNumber: ['', Validators.pattern('[0-9]*')],
          email: ['', [Validators.email]]

    })])
  }) ;
  }
 
  
    // get address():from {
    //   return this.customerForm.get('address') as FormArray;
    // }
  
    // get contact() {
    //   return this.customerForm.get('contact') as FormArray;
    // }
  
    addAddress(): void {
      const addressesArray = this.customerForm.get('address') as FormArray;
      addressesArray.push(this.fb.group({city:[],street:[]}));
    }
  
    removeAddress(index: number): void {
      const addressesArray = this.customerForm.get('address') as FormArray;
      addressesArray.removeAt(index);
    }
  
    addContact(): void {
      const contactsArray = this.customerForm.get('contact') as FormArray;
      contactsArray.push(this.fb.group({fullName:[],officeNumber:[0],email:['']}));
    }
  
    removeContact(index: number): void {
      const contactsArray = this.customerForm.get('contact') as FormArray;
      contactsArray.removeAt(index);
    }
  
    onSubmit(): void {
      if (this.customerForm.valid)
      {
        const formData = this.customerForm.value;
        console.log(formData);
      }
    }

  addCustomer(): void
   {
      const newCustomer: Customer =
       {
        fullName: this.fullName,
        numId : this.numId,
        address:this.address,
        contact:this.contact,

      };
      this.customerService.addCustomer(newCustomer);
    } 
  }

