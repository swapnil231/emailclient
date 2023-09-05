import { Component } from '@angular/core';
import { FormControl,FormControlName,FormGroup, Validators } from '@angular/forms';
import { Matchpassword } from '../validators/matchpassword';
import { Uniqueusername } from '../validators/uniqueusername';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 
  signUpForm=new FormGroup({

    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z0-9]+$/)],
    [this.usernameuni.validate]),
    
    password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)])


  },{validators:[this.matchpass.validate]})

  constructor( private matchpass:Matchpassword,private usernameuni:Uniqueusername){}

}
