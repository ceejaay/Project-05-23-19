
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
