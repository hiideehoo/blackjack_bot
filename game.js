const readline = import('readline-sync');
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
        trueValue();
        console.log(`Player's hand: [${player.hand}] (True Value: ${player.points}) \nDealer's hand: [${dealer.hand[0]},?]`);

        function trueValue() {

            let tens = player.hand.filter((card) => typeof card === "string").filter((face) => face != "A");
            player.points += (10 * tens.length);

            let numbers = player.hand.filter((card) => typeof card === "number");
            for (let i = 0; i < numbers.length; i++) {
                player.points += numbers[i];
            }

            let aces = player.hand.filter((card) => card === "A");
            player.points += aces.length;
            if (aces.length > 0 && player.points <= 11) {
                player.points +=10
            }

            return player.points;
        }

        if (player.points === 21) {
            console.log("Blackjack! You win!");
        }
    }
}

let game1 = new Game();
game1.play(1);