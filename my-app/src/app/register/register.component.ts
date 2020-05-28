import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../services/validate.service';
import { AuthserviceService } from '../services/authservice.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerForm:any;

   username:String;
   email:String;
   password:String;

  constructor(private ValidateService:ValidateService,
  private toastr: ToastrService ,
  private auth:AuthserviceService,
  private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    const user={
       username: this.username,
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


    //register
  this.auth.registerUser(user).subscribe(data=>{
   if(data.success){
    this.toastr.success('You are now registered', 'Success', {
	  timeOut: 5000
	}); 
	this.router.navigate(['/login']);  

   }else{
   this.toastr.warning('Something went wrong!', 'Failed!', {
	  timeOut: 5000
	});
	this.router.navigate(['/register']);    

   }

  });

  }


 
}
