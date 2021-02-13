import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game-floor',
  templateUrl: './game-floor.component.html',
  styleUrls: ['./game-floor.component.css']
})
export class GameFloorComponent implements OnInit {
  cardsInHandDisplayed = false;
  showFlop = false;

  constructor() { }

  ngOnInit(): void {
  }

  gameStart() {
    console.log('Game started.');
    this.cardsInHandDisplayed = true;

    /*
      Assign dealer:
        -on first round, randomly assign; afterwards, dealer should be moved to the right
          of previous dealer
      
      Conduct small blind calculation from person left of dealer:

      Conduct large blind calculation from person right of the small blind player

      Conduct gameplay:
        -start with player right of large blind player
        -they are given three options:  
          -call (equal to large blind amount)
          -raise (increasing the pot from the large amount)
          -fold (toss hand away and game continues with remaining players)
        -if call or raise, gameplay goes to next player on the right
        -if every player ends up calling to a certain amount, without no one re-raising,
        game goes into the flop (the first three community cards are displayed)
        -rinse and repeat, where game goes into the turn (4th card) and river (5th card)
      
    */
  }

  displayFlop() {
    this.showFlop = true;
  }
}
