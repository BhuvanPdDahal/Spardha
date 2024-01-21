export interface CardProp {
    value: number;
    suit: number;
    initialShow: boolean;
    localCard: boolean;
    totalLocalCards: number | null;
    setTotalLocalCards: React.Dispatch<React.SetStateAction<number>> | null;
    setLocalPlayedCard: React.Dispatch<React.SetStateAction<PokerCard | null>> | null;
    setLocalPlayedCards: React.Dispatch<React.SetStateAction<PokerCard[]>> | null;
}

export interface PokerCard {
    value: number;
    suit: number;
}

export interface BoardProp {
    remoteCards: PokerCard[];
    localPlayedCards: PokerCard[];
    remotePlayedCard: PokerCard | null;
    localPlayedCard: PokerCard | null;
}

export interface HandleReceiveCardPara {
    card: PokerCard;
    totalCards: number;
}

export interface TableProp {
    remoteCards: PokerCard[];
    localPlayedCards: PokerCard[];
    setShowTable: React.Dispatch<React.SetStateAction<boolean>>;
}