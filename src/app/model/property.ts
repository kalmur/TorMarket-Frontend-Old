import { Ipropertybase } from "./ipropertybase";


export class Property implements Ipropertybase {
  Id: number;
  Name: string;
  Type: string;
  Price: number;
  City: string;
  Image?: string;
  SellRent: number;
  Description?: string;
  PostedOn: string;
  PostedBy: number;
}
