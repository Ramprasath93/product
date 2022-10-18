import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

isAddProduct:boolean=false;
isInspected:boolean=false;
isUpdate:boolean=false;


 

  constructor(private http:HttpClient) { }

  apiUrl="http://localhost:5400"

// Create the Value

postRegister(value:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/user`,value)
}

postLogin(value:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/login`,value)
}

// Post the product

postProduct(value:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/product`,value)
}

getProduct():Observable<any>{
  return this.http.get(`${this.apiUrl}/getproduct`)
}

// Delete the product

delProduct(idproduct:number):Observable<any>{

  let gId=idproduct;
  return this.http.delete(`${this.apiUrl}/delproduct/${gId}`)
}

updateProduct(value:any,idproduct:number):Observable<any>{

  let gId=idproduct;

  return this.http.put(`${this.apiUrl}/editproduct/${gId}`,value)

}

getSingleProduct(idproduct:number):Observable<any>{
  let gId=idproduct;

  return this.http.get(`${this.apiUrl}/getviewproduct/${gId}`)

}


// Status Updation


statusPostProduct(value:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/postproduct`,value)
}

// publish get the data from backend

getPublish():Observable<any>{
  return this.http.get(`${this.apiUrl}/publishproduct`)
}

//Publish the data from frontend to backend

postPublish(value:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/delivereditems`,value)
}

// Delivery section only published data

getDelivery():Observable<any>{
  return this.http.get(`${this.apiUrl}/deliverproduct`)
}



}
