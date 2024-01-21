export interface CardProp {
    value: number;
    suit: number;
    initialShow: boolean;
    localCard: boolean;
    setLocalPlayedCard: React.Dispatch<React.SetStateAction<PokerCard | null>> | null;
    totalLocalCards: number | null;
    setTotalLocalCards: React.Dispatch<React.SetStateAction<number>> | null;
}

export interface PokerCard {
    value: number;
    suit: number;
}

export interface BoardProp {
    remotePlayedCard: PokerCard | null;
    localPlayedCard: PokerCard | null;
}

export interface HandleReceiveCardPara {
    card: PokerCard;
    totalCards: number;
}

export interface TableProp {
    setShowTable: React.Dispatch<React.SetStateAction<boolean>>;
}