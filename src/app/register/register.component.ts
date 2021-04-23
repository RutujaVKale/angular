//import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';

//import {AuthenticationService} from '../auhentication.AuthenticationService'
//import {user} from '../service/user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //creating object user1 if type user
 // user1 : user =new user("","");
   username = "";
   password = "";
   invalidLogin =false;
  message : any; // variable of  type any
  constructor(private service:AuthenticationService) { }

  ngOnInit(): void {
  }

  public registerNow(data){
    //calling api and catching response in response
   // let response = this.service.doRegistration(this.user1);
    //now we will have to GET the data for which we have obseverable which reflects any kind of change that is made. For using obseverable we have subscribe method
    //response.subscribe(data => {
     // this.message=data;
   // } )
    //data is local variable to store data
    let response = this.service.doRegistration(data.username,data.password);
    console.log(response);
    if(response){
       //this.router.navigate(['']);
       alert("valid user");
       this.invalidLogin=false;
       
    }else{
      alert("invalid user");
      this.invalidLogin=true;
    }
    console.log(this.username);
    console.log(this.password);
  }

}
