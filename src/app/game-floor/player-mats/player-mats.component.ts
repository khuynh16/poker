import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-player-mats',
  templateUrl: './player-mats.component.html',
  styleUrls: ['./player-mats.component.css']
})
export class PlayerMatsComponent implements OnInit {

  @Input() gameStart: boolean;

  suits = ['C', 'D', 'H', 'S'];
  values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  deckOfCards = {};
  tempDeckOfCards;
  card: string;
  count = 0;
  numCardsInDeck = 52;
  playerHand = {
    p1c1: '', p1c2: '',
    p2c1: '', p2c2: '',
    p3c1: '', p3c2: '',
    p4c1: '', p4c2: '',
    p5c1: '', p5c2: '',
    p6c1: '', p6c2: '',
  };

  viewBots = {
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    bot5: false
  }

  viewDealer = {
    player: false,
    bot1: false,
    bot2: false,
    bot3: false,
    bot4: false,
    bot5: false
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // assigns object properties to determine if bot is visible (depends on number of
    // bots user wants to play against))
    this.viewBots = this.gameService.displayBots(this.viewBots);

    // set up the deck
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.card = this.values[j] + '' + this.suits[i];
        this.deckOfCards[this.count++] = this.card;
      }
    }

    // use a copied deck of the original and not the original deck itself
    this.tempDeckOfCards = this.deckOfCards;

    // poker cards are dealt already at game floor screen, just not displayed until
    // start game button is clicked
    this.dealCards(6);
  }

  /*
    Gives out two cards per player (removing from playing deck).
    @return computation of new playing deck and players' unique hands
  */
  dealCards(numOfPlayers) {
    let randNum: number;
    let firstCard;
    let secondCard;

    for (let i = 0; i < numOfPlayers; i++) {
      // determine first card for player's hand
      randNum = this.getRandomNumber(this.numCardsInDeck);  
      // assign first card
      firstCard = this.getCard(randNum);
      // remove card from deck (counter and the actual deck)
      this.numCardsInDeck--;
      this.tempDeckOfCards = this.removeCardFromDeck(firstCard, this.tempDeckOfCards);
    
      // determine second card for player's hand
      randNum = this.getRandomNumber(this.numCardsInDeck);
      // assign second card
      secondCard = this.getCard(randNum);
      // remove card from deck (counter and the actual deck)
      this.numCardsInDeck--;
      this.tempDeckOfCards = this.removeCardFromDeck(secondCard, this.tempDeckOfCards);
      
      // assign the two poker cards in player hand in respective playerHand objects
      this.playerHand['p' + (i + 1) + 'c1'] = firstCard;
      this.playerHand['p' + (i + 1) + 'c2'] = secondCard;
    }
  }

  /*
    Removes a card from a given deck in play.
    @return newDeck an object of all avaiable cards.
  */
  removeCardFromDeck(card, deck) {
    // an array of all values that doesn't include the card to remove
    let filtered = Object.values(deck)
      .filter(value => value !== card);
    
    // new object that reassigns the above array into an object, with indexes
    // starting from 0
    let newDeck = Object.assign({}, filtered);

    return newDeck;
  }

  /*
    Retreieves a random card from the current deck in play.
    @return this.tempDeckOfCards[card] a value-suit card (e.g. 4S - the four of spades)
  */
  getCard(randomNumber) {
    this.count = 0;
    for (let card in this.tempDeckOfCards) {
      if (this.count === randomNumber) {
        return this.tempDeckOfCards[card];
      }
      this.count++;
    }
  }

  /*
    Calculates a random number (used to get random card from deck).
    @return random number between 0 and (number of cards in deck - 1)
      (Note: a random number for a 52 card deck would be from 0 to 51)
  */
  getRandomNumber(numCardsInDeck) {
    let min, max;
    
    min = Math.ceil(0);
    max = Math.floor(numCardsInDeck - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  determineDealer() {
    
  }

  /*
    Displays players' randomly given cards when game starts.
    @return display styling to reveal cards ('block') or to keep hidden ('none')
  */
  displayCards() {
    if (this.gameStart === true) {
      return 'block';
    }
    else {
      return 'none';
    }
  }
}