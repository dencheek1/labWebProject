import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  password:string = "";
  passwordRepeat:string = "";

  registration:FormGroup = new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.email,Validators.minLength(8)]),
    "password":new FormControl("",[Validators.required,Validators.minLength(8),]),
    "passwordRepeat":new FormControl("",[Validators.required,Validators.minLength(8)])
  },{validators:identityRevealedValidator});

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  submit():void{ alert("submit");
    this.router.navigate(['/stats']);
   
  }



}
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass = control.get('password');
  const passD = control.get('alterEgo');

  return pass && passD && pass.value === passD.value ? { identityRevealed: true } : null;
};