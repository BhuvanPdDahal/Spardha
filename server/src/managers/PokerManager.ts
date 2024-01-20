import { Card } from "../interfaces/managers";
import { allCards } from "../data/poker";

export default class PokerManager {
    private availableCards: Card[];

    constructor() {
        this.availableCards = allCards;
    }

    pickCardsForTwoPlayers(limit: number) {
        if(limit > 26) return { player1Cards: [], player2Cards: [] };

        let player1Cards: Card[] = [];
        let player2Cards: Card[] = [];

        for(let i = 0; i < limit; ++i) {
            for(let j = 0; j < 2; ++j) {
                let randomIndex = Math.floor(Math.random() * this.availableCards.length);
                if(j == 0) {
                    player1Cards.push(this.availableCards[randomIndex]);
                } else {
                    player2Cards.push(this.availableCards[randomIndex]);
                }
                this.availableCards.splice(randomIndex, 1);
            }
        }

        return { player1Cards, player2Cards };
    }
}