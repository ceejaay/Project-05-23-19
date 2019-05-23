// dom code
const BlackJackGame = require('./blackJackGame.js')
// Wow, this is not DRY
 const hitButton = document.querySelector('.hitButton')
 const holdButton = document.querySelector('.holdButton')
const playerCards= document.querySelector('.playerCards')
const dealerCards = document.querySelector('.dealerCards')
 const playerScore = document.querySelector('.playerScore')
 const dealerScore = document.querySelector('.dealerScore')
 const playerName = document.querySelector('.playerName')

const message = document.querySelector('.message');






const mainGame = new BlackJackGame(1, 10)
const player = new Player("Chad")
const dealer = new Dealer()
const deck = new Deck(1)
mainGame.playOrder = [player, dealer]
deck.generateDeck()
deck.shuffle()
deck.dealCards(mainGame.playOrder)

  while (player.score < mainGame.playToScore || dealer.score < mainGame.playToScore) {
    // one problem. This does not account for the player and dealer having the same value. Which means the player would lose

    if(mainGame.checkWinOnDeal(player, dealer)) {
      dealer.discardCards()
      player.discardCards()
      deck.dealCards(mainGame.playOrder)
    } else {
      player.turn = true
    }

    while(player.turn) {
      hitButton.addEvenListener('click', (e) => {
        deck.dealOneCard(player)
          // should change the dom here to show cards
          if(mainGame.has21(player) ) {
            message.innerHTML = "Player wins"
            player.score += 1
            player.turn = false
            dealer.turn = false
            dealer.discardCards()
            player.discardCards()
            deck.dealCards(mainGame.playOrder)

          } else if (mainGame.busted(player)) {
            message.innerHTML = "Player loses"
            dealer.score += 1
            player.turn = false
            dealer.turn = false
            dealer.discardCards()
            player.discardCards()
            deck.dealCards(mainGame.playOrder)
          }
      })

      holdButton.addEvenListener('click', (e) => {
        player.hold()
        dealer.turn = true
      })



    }

    while(dealer.turn) {
      dealer.calulateHandValue()

        if (dealer.handValue < 17) {
          deck.dealOneCard(dealer)
          // should change the dom here to show cards
            if (mainGame.has21(dealer)) {
              message.innerHTML = "Dealer wins"
              dealer.score += 1
              player.turn = false
              dealer.turn = false
              deck.dealCards(mainGame.playOrder)
          // should change the dom here to show cards
            } else if (mainGame.busted(dealer)) {
              message.innerHTML = "Dealer loses"
              player.score += 1
              player.turn = false
              dealer.turn = false
              deck.dealCards(mainGame.playOrder)
          // should change the dom here to show cards
            }
        }

        if (dealer.handValue < player.handValue) {
          // should change the dom here to show cards
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

        if (dealer.highAce && dealer.handValue < 18) {
            deck.dealOneCard(dealer)
          // should change the dom here to show cards
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








// dom code
