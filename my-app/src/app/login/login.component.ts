import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../services/validate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  username:String;
   email:String;
   password:String;


  constructor(private ValidateService:ValidateService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  onLogin(){
  const user={
       email:this.email,
       password:this.password

    }
  if(!this.ValidateService.validateRegister(user)){
	this.toastr.warning('Please fill in all fields', 'Major Error', {
	  timeOut: 3000
	});    
	return false;

  }

  if(!this.ValidateService.validateEmail(user.email)){
    this.toastr.warning('Please enter a valid email', 'Major Error', {
	  timeOut: 3000
	});   
    return false;
  }
  }
}
