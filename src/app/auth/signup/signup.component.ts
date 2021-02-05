import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.signupForm =  this.formBuilder.group({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'reenterPassword': new FormControl(null, Validators.required),
      'displayName': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }

}
