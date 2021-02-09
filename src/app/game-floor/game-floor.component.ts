import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-game-floor',
  templateUrl: './game-floor.component.html',
  styleUrls: ['./game-floor.component.css']
})
export class GameFloorComponent implements OnInit {
  cardsInHandDisplayed = false;

  constructor() { }

  ngOnInit(): void {
  }

  gameStart() {
    console.log('Game started.');
    this.cardsInHandDisplayed = true;
    // somehow call displayCards function in player-cards component
  }
}
