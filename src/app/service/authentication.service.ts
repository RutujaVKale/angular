import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



//we will call our apis here...the code which we want to share between components is written in service 


export class AuthenticationService {

  constructor(private http: HttpClient) { }
 

  //creating method to call api
  public doRegistration(username,password){
    return this.http.get("http://localhost:8080/login/"+username+"/"+password);
    //return true;
  }
}
