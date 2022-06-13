import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signIn:FormGroup = new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.minLength(8)]),
    "password":new FormControl("",[Validators.required,Validators.minLength(8)])
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
    
  }

  submit():void{
    this.router.navigate(['/main'])
  }
}
