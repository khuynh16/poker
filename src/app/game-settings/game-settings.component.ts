import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class GameSettingsComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


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
