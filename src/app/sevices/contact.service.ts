import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
BaseApiUrl:string="https://localhost:7175";

  constructor(private http:HttpClient) { }
}
