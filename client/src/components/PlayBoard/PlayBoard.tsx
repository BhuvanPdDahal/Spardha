import React, { useEffect, useState } from 'react';
import { User } from '@phosphor-icons/react';

import Card from './Card';
import Board from './Board';
import InfoBox from '../Info/InfoBox';
import { useSocket } from '../../context/SocketProvider';
import { PokerCard, HandleReceiveCardPara } from '../../interfaces/playboard';

const PlayBoard: React.FC = () => {
    const socket = useSocket();
    const [localCards, setLocalCards] = useState<PokerCard[]>([]);
    const [remoteCards, setRemoteCards] = useState<PokerCard[]>([]);
    const [localPlayedCard, setLocalPlayedCard] = useState<PokerCard | null>(null);
    const [remotePlayedCard, setRemotePlayedCard] = useState<PokerCard | null>(null);
    const [totalLocalCards, setTotalLocalCards] = useState(3);
    const [totalRemoteCards, setTotalRemoteCards] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    console.log('initial localCards: ', localCards);
    let isSet = false;

    const handleReceiveCards = (cards: PokerCard[]) => {
        console.log('inside handleReceiveCards', cards);
        if (isSet) return;
        console.log('Updating localCards');
        setLocalCards(cards);
        isSet = true;
    };

    const handleReceiveCard = ({ card, totalCards }: HandleReceiveCardPara) => {
        if(!remotePlayedCard) {
            console.log('passed');
            setRemotePlayedCard(card);
            setTotalRemoteCards(totalCards);
        }
    };

    useEffect(() => {
        socket?.on('receive-cards', handleReceiveCards);
        socket?.on('receive-card', handleReceiveCard);
        return () => {
            socket?.off('receive-cards', handleReceiveCards);
            socket?.off('receive-card', handleReceiveCard);
        };
    }, []);

    useEffect(() => {
        console.log('Component rerendered');
    }, [localCards]);

    return (
        <div className='min-h-screen flex flex-col justify-between gap-4 bg-dark p-4'>
            {gameOver && (
                <InfoBox />
            )}
            <div className='flex items-center justify-end gap-4'>
                <ul className='flex gap-3'>
                    {[...Array(totalRemoteCards)].map((_, index) => (
                        <Card
                            key={index}
                            value={1}
                            suit={1}
                            initialShow={false}
                            localCard={false}
                            setLocalPlayedCard={null}
                            totalLocalCards={null}
                            setTotalLocalCards={null}
                        />
                    ))}
                </ul>
                <div className='h-150px w-150px flex items-center justify-center bg-lightdark shadow-md rounded-xl'>
                    <User size={50} weight='fill' color='lightgrey' />
                </div>
            </div>
            <Board
                localPlayedCard={localPlayedCard}
                remotePlayedCard={remotePlayedCard}
            />
            <div className='flex items-center gap-4'>
                <div className='h-150px w-150px flex items-center justify-center bg-lightdark shadow-md rounded-xl'>
                    <User size={50} weight='fill' color='lightgrey' />
                </div>
                <ul className='flex items-center gap-3'>
                    {[...Array(3)].map((_, index) => (
                        <Card
                            key={index}
                            value={1}
                            suit={1}
                            initialShow={false}
                            localCard={true}
                            setLocalPlayedCard={setLocalPlayedCard}
                            totalLocalCards={totalLocalCards}
                            setTotalLocalCards={setTotalLocalCards}
                        />
                    ))}
                    {/* {localCards.map((card, index) => (
                        <Card
                            key={index}
                            value={card.value}
                            suit={card.suit}
                            initialShow={false}
                            localCard={true}
                            setLocalPlayedCard={setLocalPlayedCard}
                            totalLocalCards={totalLocalCards}
                            setTotalLocalCards={setTotalLocalCards}
                        />
                    ))} */}
                </ul>
            </div>
        </div>
    )
};

export default PlayBoard;