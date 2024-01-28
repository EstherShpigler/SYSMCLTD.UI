import { Address } from "./address.model";
import { Contact } from "./contacts.model";

export interface Customer
{
  id?:string,
  fullName:string,
  numId:number,
  created?:Date,
  contact:Contact[],
  address:Address[]


}