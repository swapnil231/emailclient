import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signInForm=new FormGroup({
    username:new FormControl('',)
  })

}
