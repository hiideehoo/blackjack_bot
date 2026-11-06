export class Shoe {
    constructor(decks) {
        this.decks = decks;
        this.shoe = newShoe(decks);

        function newShoe(multiplier) {
            let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
            let shoe = [];
            for (let i = 0; i < multiplier; i++) {
                shoe = shoe.concat(deck);
            }

            return shoe
                .map((val) => ({ val, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ val }) => val);
        }
    }
}