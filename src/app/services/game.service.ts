import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentNumOfBots: number;

  constructor(private router: Router) { }

  confirmGameSettings(numOfBots, startingAmount, smallBlind, bigBlind) {
    console.log('Current game settings:');
    console.log('number of bots: ' + numOfBots);
    console.log('starting amount: ' + startingAmount);
    console.log('small blind: ' + smallBlind);
    console.log('big blind: ' + bigBlind);

    this.currentNumOfBots = numOfBots;

    this.router.navigate(['game-floor']);
  }

  displayBots(viewBotsObject) {
    /*
      if 1 bot selected: only bot 3 (the top front) is visible
      if 2 bots selected: bot 2 (top left) and bot 4 (top right) should be visible
      if 3 bots selected: bot 2 (top left), bot 3 (top), and bot 4 (top right) should be visible
      if 4 bots selected: bot 1 and 2 (left side) and and bot 4 and 5 (righ side) should be visible
      if 5 bots selected: all bots (1 to 5) should be visible
    */
  
    switch(this.currentNumOfBots) {
      case 1: {
        viewBotsObject.bot3 = true;
        break;
      }
      case 2: {
        viewBotsObject.bot2 = true;
        viewBotsObject.bot4 = true;
        break;
      }
      case 3: {
        viewBotsObject.bot2 = true;
        viewBotsObject.bot3 = true;
        viewBotsObject.bot4 = true;
        break;
      }
      case 4: {
        viewBotsObject.bot1 = true;
        viewBotsObject.bot2 = true;
        viewBotsObject.bot4 = true;
        viewBotsObject.bot5 = true;
        break;
      }
      case 5: {
        viewBotsObject.bot1 = true;
        viewBotsObject.bot2 = true;
        viewBotsObject.bot3 = true;
        viewBotsObject.bot4 = true;
        viewBotsObject.bot5 = true;
        break;
      }
    }

    return viewBotsObject;
  }
}
