import readline from 'readline-sync';
import { Blackjack } from './blackjack.js';
import { Shoe } from './shoe.js';

class Game {

    play(decks) {
        let cards = new Shoe(decks);
        let player = new Blackjack(5, 0);
        let dealer = new Blackjack(5, 100);
        for (let i = 0; i < 2; i++) {
            player.hand.push(cards.shoe.shift());
            dealer.hand.push(cards.shoe.shift());
        }

        dealer.trueValue();
        player.trueValue();
        console.log(`Dealer's hand: [${dealer.hand[0]},?] \nPlayer's hand: [${player.hand}] (${player.points})`);
        if (dealer.points === 21 && player.points === 21) {
            console.log(`Dealer reveals: [${dealer.hand}] (${dealer.points})`);
            console.log("Push. Your stake is returned.")
        } else if (dealer.points === 21 && player.points !== 21) {
            console.log(`Dealer reveals: [${dealer.hand}] (${dealer.points})`);
            console.log("House wins.");
        } else if (player.points === 21 && dealer.points !== 21) {
            console.log("Blackjack! You win!");
        } else {

            let move = "";
            do {
                if (dealer.points === 21 && player.points === 21) {
                    console.log("")
                }
                move = readline.question(`Hit or stay? \n>`);
                if (move.toLowerCase().includes("hit")) {
                    player.hand.push(cards.shoe.shift());
                    player.trueValue();
                    console.log(`Dealer's hand: [${dealer.hand[0]},?] \nPlayer's hand: [${player.hand}] (True Value: ${player.points})`);
                }
                if (player.points > 21) {
                    move = "stay";
                    console.log("Bust!");
                }
            } while (!move.toLowerCase().includes("stay"));
            if (player.points <= 21) {
                console.log(`Dealer reveals: [${dealer.hand}] (${dealer.points})`);
                if (dealer.points < 17) {
                console.log(`drawing...`);
                    setTimeout(() => {
                        do {
                            dealer.hand.push(cards.shoe.shift());
                            dealer.trueValue();
                        } while (dealer.points < 17);
                        console.log(`Dealer's hand: [${dealer.hand}] (${dealer.points}) \nPlayer's hand: [${player.hand}] (${player.points})`);
                        finale();
                    }, 2500);
                } else {
                    finale();
                }
            }
        }

        function finale() {
            if (dealer.points > 21 || player.points > dealer.points) {
                console.log("You win!");
            } else if (dealer.points === player.points) {
                console.log("Push. Your stake is returned.");
            } else {
                console.log("House wins.");
            }
        }

    }
}

let game1 = new Game();
game1.play(1);