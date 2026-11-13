export class Blackjack {
    constructor(bet, pot) {
        this.bet = bet;
        this.pot = pot;
        this.hand = [];
        this.points = 0;
    }

    trueValue() {

        this.points = 0;

        let tens = this.hand.filter((card) => typeof card === "string").filter((face) => face != "A");
        this.points += (10 * tens.length);

        let numbers = this.hand.filter((card) => typeof card === "number");
        for (let i = 0; i < numbers.length; i++) {
            this.points += numbers[i];
        }

        let aces = this.hand.filter((card) => card === "A");
        this.points += aces.length;
        if (aces.length > 0 && this.points <= 11) {
            this.points +=10
        }

        return this.points;
    }
};