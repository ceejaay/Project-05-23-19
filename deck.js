// card format => {value: "A", suit: "suit"}

class Deck {
  constructor(numberOfDecks){
    this.numberOfDecks = numberOfDecks
    this.deck = []
  }

  generateDeck() {
    let suit = ["Heart", "Club", "Spade", "Diamond"]
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8 , 9, 10, "J", "Q", "K"]
    for(let i = 0; i< suit.length; i++) {
      for (let k = 0; k < numbers.length; k ++) {
        this.deck.push({value: numbers[k], suit: suit[i]})
      }

    }



  }

  shuffle() {
    // needs randomizer algorithm
    // randomize deck

  }

  dealCards(players) {
    for(let i = 0; i< players.length; i++) {
      players[i].discardCards()
      // kludgy also, player and dealer get two cards in a row. Not good.
      players[i].hand.push(this.deck.pop())
      players[i].hand.push(this.deck.pop())
    }
  }


  dealOneCard(player) {
    player.hand.push(this.deck.pop())
  }

}

module.exports = Deck
