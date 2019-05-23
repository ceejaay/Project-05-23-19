const Player = require('./player.js')

class Dealer extends Player {
  constructor() {
    super()

  }

  showCards() {
    // returns an array that has only one card
    return [this.hand[0], "X"]
  }

  highAce() {
    let hand = this.hand
    for(let i = 0; hand.length; i++) {
      if(hand[i][value] === "A" && this.handValue < 21 ){
        return true
      }
    }
    return false
  }



}


module.exports = Dealer
