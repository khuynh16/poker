import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class GameSettingsComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;
  numOfBots = [1, 2, 3, 4, 5];


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      'numOfBots': new FormControl(null, Validators.required)
    });
  }

  onSubmit(form) {
    this.router.navigate(['game-floor']);
  }

}
