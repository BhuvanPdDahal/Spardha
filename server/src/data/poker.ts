import { Card } from "../interfaces/managers";

let cards: Card[] = [];

for(let suit = 0; suit < 4; ++suit) {
    for(let value = 0; value < 13; ++value) {
        cards.push({ value, suit });
    }
}

export const allCards = cards;