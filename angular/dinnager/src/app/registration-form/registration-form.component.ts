import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registration:FormGroup = new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.minLength(8)]),
    "password":new FormControl("",[Validators.required,Validators.minLength(8)])
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  submit():void{ alert("submit");
    this.router.navigate(['/main']);
   
  }

}
