import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Contact } from '../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
BaseApiUrl:string="https://localhost:7175";
private contactSubject=new BehaviorSubject<Contact[]>([])  

  constructor(private http:HttpClient) { 
    this.loadContact();
  }


  loadContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.BaseApiUrl+'/api/Contact')
    .pipe(
      tap(contacts => this.contactSubject.next(contacts))
    )
    }

    getAllContacts(): BehaviorSubject<Contact[]> 
    { 
      return this.contactSubject;
    } 
    

}


 