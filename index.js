// code
//
// const hitButton = document.querySelector('.hitButton')
// const dealButton = document.querySelector('.dealButton')
// const holdButton = document.querySelector('.holdButton')
const playerCards= document.querySelector('.playerCards')
const dealerCards = document.querySelector('.dealerCards')
// const playerScore = document.querySelector('.playerScore')
// const dealerScore = document.querySelector('.dealerScore')
// const playerName = document.querySelector('.playerName')
//
const message = document.querySelector('.message');


const Player = require('./player.js')
const Dealer = require('./dealer.js')
const Deck = require('./deck.js')

class BlackJackGame {
  constructor(numberOfPlayers, playToScore, playerNames=[]) {
    this.playToScore = playToScore
    this.numberOfPlayers = numberOfPlayers 
    this.playerNames = playerNames
    this.playOrder = []
  }


  has21(player) {
    if (player.handValue === 21) {
      return true
    }

    else {
      return false
    }
  }


}


const mainGame = new BlackJackGame(1, 10)
const player = new Player("Chad")
const dealer = new Dealer()
const deck = new Deck(1)
mainGame.playOrder = [player, dealer]
deck.shuffle()
deck.dealCards(mainGame.playOrder)
// Hit function distrbutes the cards. 
//
//



// main game loop
  while (player.score < mainGame.playToScore || dealer.score < mainGame.playToScore) {

    if (mainGame.has21(player)) {
      if (mainGame.has21(dealer)) {
        player.score += 1
        dealer.score += 1
        // show dealer card here
        message.innerHTML = "Player and Dealer get a point"
        deck.dealCards(mainGame.playOrder)
      } else if (mainGame.has21(dealer) === false) {
        player.score += 2
        // show dealer card here
        message.innerHTML = "Player wins"
        deck.dealCards(mainGame.playOrder)
      }
    }

  }

if (player.score > dealer.score) {
  message.innerHTML = "Player wins"
} else {
  message.innerHTML = "Dealer wins"
}
    // game over





// const hitButton = document.querySelector('.hitButton')
// const dealButton = document.querySelector('.dealButton')
// const holdButton = document.querySelector('.holdButton')
// const playerCards= document.querySelector('.playerCards')
// const dealerCards = document.querySelector('.dealerCards')
// const playerScore = document.querySelector('.playerScore')
// const dealerScore = document.querySelector('.dealerScore')
// const playerName = document.querySelector('.playerName')



// dom code
