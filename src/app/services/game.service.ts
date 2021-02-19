import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router: Router) { }

  confirmGameSettings(numOfBots, startingAmount, smallBlind, bigBlind) {
    console.log('Current game settings:');
    console.log('number of bots: ' + numOfBots);
    console.log('starting amount: ' + startingAmount);
    console.log('small blind: ' + smallBlind);
    console.log('big blind: ' + bigBlind);

    this.router.navigate(['game-floor']);

    // when service confirms game, display only selected number of bots that user
    // selects in game settings
    // e.g. displayBots(numOfBots);
  }
}
