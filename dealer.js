const Player = require('./player.js')

class Dealer extends Player {
  constructor() {
    super()

  }

  showCards() {
    // returns an array that has only one card
    let cardsShowing = []
      for(let i = 0; i< this.hand - 1; i++ ) {
        cardsShowing.push(this.hand.pop())
      }
      // push in a placeholder for face down card
      cardsShowing.push('X')
      return cardsShowing
  }

  highAce() {
    let hand = this.hand
    for(let i = 0; hand.length; i++) {
      if(hand[i].value === "A" && this.handValue < 21 ){
        return true
      }
    }
    return false
  }



}


module.exports = Dealer
