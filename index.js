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
    player.calculateHandValue()
    if (player.handValue === 21) {
      return true
    }
    return false
  }

  busted(player) {
    player.calculateHandValue()
    if(player.handValue > 21) {
      return true
    }
    return false
  }


  checkWinOnDeal(player, dealer) {
    if(this.has21(player)) {
      if(this.has21(dealer)) {
        player.score += 1
        dealer.score += 1
        return true
      } else {
        player.score += 2
        return true
      }
    }
    return false
  }


}


const mainGame = new BlackJackGame(1, 10)
const player = new Player("Chad")
const dealer = new Dealer()
const deck = new Deck(1)
mainGame.playOrder = [player, dealer]
deck.shuffle()
deck.dealCards(mainGame.playOrder)

  while (player.score < mainGame.playToScore || dealer.score < mainGame.playToScore) {
    // player and dealer turn is false
    // have to show the cards and change the cards in the dom somewhere here
    if(mainGame.checkWinOnDeal(player, dealer)) {
      deck.dealCards(mainGame.playOrder)
    } else {
      player.turn = true
    }

    while(player.turn) {
      hitButton.addEvenListener('click', (e) => {
        deck.dealOneCard(player)
          if(mainGame.has21(player) ) {
            message.innerHTML = "Player wins"
            player.score += 1
            player.turn = false
            dealer.turn = false
            deck.dealCards(mainGame.playOrder)

          } else if (mainGame.busted(player)) {
            message.innerHTML = "Player loses"
            dealer.score += 1
            player.turn = false
            dealer.turn = false
            deck.dealCards(mainGame.playOrder)
          }
      })

      holdButton.addEvenListener('click', (e) => {
        player.turn = false
        dealer.turn = true
      })



    }

    while(dealer.turn) {
      dealer.calulateHandValue()

        if (dealer.handValue < 17) {
          deck.dealOneCard(dealer)
            if (mainGame.has21(dealer)) {
              message.innerHTML = "Dealer wins"
              dealer.score += 1
              player.turn = false
              dealer.turn = false
              deck.dealCards(mainGame.playOrder)
            } else if (mainGame.busted(dealer)) {
              message.innerHTML = "Dealer loses"
              player.score += 1
              player.turn = false
              dealer.turn = false
              deck.dealCards(mainGame.playOrder)
            }
        }

        if (dealer.handValue < player.handValue) {
            deck.dealOneCard(dealer)
              if (mainGame.has21(dealer)) {
                message.innerHTML = "Dealer wins"
                dealer.score += 1
                player.turn = false
                dealer.turn = false
                deck.dealCards(mainGame.playOrder)
              } else if (mainGame.busted(dealer)) {
                message.innerHTML = "Dealer loses"
                player.score += 1
                player.turn = false
                dealer.turn = false
                deck.dealCards(mainGame.playOrder)
              }
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
