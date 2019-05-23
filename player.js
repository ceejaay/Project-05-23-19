

class Player {
  constructor(name) {
   this.score = 0
   this.hand = []
   this.handValue = 0
   this.turn = false
   this.name = name
  }


  hold() {
    this.turn = false

  }

  calculateHandValue() {
    // calculate value in hand
  }


}


// const p = new Player("Chad")
// console.log(p)
module.exports = Player



