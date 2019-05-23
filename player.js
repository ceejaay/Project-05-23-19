

class Player {
  constructor(name) {
   this.score = 0
   this.hand = []
   this.handValue = 0
   this.turn = false
   this.name = name
  }

  calculateHandValue() {
    // card format {value: "A", suit: "Heart"} or {value: 2, suit: "Heart"}
   let cards = ["K", "Q", "J"]

    for(let i = 0; i< this.hand.length; i++) {
      if(this.hand[i].value === "A" && this.handValue < 21) {
        this.handValue += 11
      } else if (cards.include(this.hand[i].value)) {
        this.handValue += 10
      } else {
        this.handValue += this.hand[i].value
      }
    }
  }

  discardCards() {
    this.hand = [];
  }


}


module.exports = Player



