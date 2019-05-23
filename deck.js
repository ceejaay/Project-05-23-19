// card format => {value: "A", suit: "suit"}

class Deck {
  constructor(numberOfDecks){
    this.numberOfDecks = numberOfDecks
    this.deck = []
  }

  generateDeck() {


  }

  shuffle() {
    // randomize deck

  }

  dealCards(players) {


    for(let i = 0; i< players.length; i++) {
      players[i].discardCards()
      // kludgy
      players[].hand.push(this.deck.pop())
      players[].hand.push(this.deck.pop())
    }
  }

  dealOneCard(player) {
    player.hand.push(this.deck.pop())
    // pass in player hand array
  }

}


module.exports = Deck
