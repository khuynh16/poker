# Poker

This application will allow the user to play poker against computer bots and to keep record of statistics.

## General Notes:

* will utilize the MEAN stack (e.g. MongoDB, Express.js, Angular, Node.js)

## Current thinking of what application will be 

* log in system / backend to database
	* database
	*	user sign in / password
	*	user stats
		*	total game wins / losses / hands won / number of forfeits
*	game settings before starting a game:
	*	how to determine winner (# of rounds played or until last one standing)
*	landing page
	*	log in / sign up / enter as guest
*	when client is passed the login / sign up page, what should they see:
	*	the user profile
		*	the name of the user
		*	picture / emoji 
	*	the main buttons 
		*	single player
			*	set rules (# of bots, bot difficulty, win state (either # of rounds or until someone has all coins)
		*	multi-player
			*	(to implement after single player is implemented, we’ll see…)
