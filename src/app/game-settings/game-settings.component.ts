import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class GameSettingsComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;
  numOfBots = [1, 2, 3, 4, 5];


  constructor(private fb: FormBuilder, private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      'numOfBots': new FormControl(null, Validators.required),
      'startingAmount': new FormControl(null, Validators.required),
      'smallBlind': new FormControl(null, Validators.required),
      'bigBlind': new FormControl(null, Validators.required)
    });
  }

  onSubmit(form) {
    this.gameService.confirmGameSettings(
      form.controls.numOfBots.value,
      form.controls.startingAmount.value,
      form.controls.smallBlind.value,
      form.controls.bigBlind.value
    );

    this.router.navigate(['game-floor']);

    // needs to somehow pass form values to player-mats
      // to determine visible number of players
    // probably via service, where values of form are passed and are read upon ngoninit
    // in game-floor component
  }

}
