import React, { useEffect, useState } from 'react';
import { User } from '@phosphor-icons/react';

import Card from './Card';
import Board from './Board';
import InfoBox from '../Info/InfoBox';
import { PokerCard } from '../../interfaces/playboard';
import { useSocket } from '../../context/SocketProvider';

const PlayBoard: React.FC = () => {
    const socket = useSocket();
    const [localCards, setLocalCards] = useState<PokerCard[]>([]);
    const [remoteCards, setRemoteCards] = useState<PokerCard[]>([]);
    const [gameOver, setGameOver] = useState(false);
    console.log('initial localCards: ', localCards);
    let isSet = false;
    

    const handleReceiveCards = (cards: PokerCard[]) => {
        console.log('inside handleReceiveCards', cards);
        if(isSet) return;
        console.log('Updating localCards');
        setLocalCards(cards);
        isSet = true;
    };

    useEffect(() => {
        socket?.on('receive-cards', handleReceiveCards);
        return () => {
            socket?.off('receive-cards', handleReceiveCards);
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
                    <Card
                        value={1}
                        suit={1}
                    />
                    <Card
                        value={1}
                        suit={1}
                    />
                    <Card
                        value={1}
                        suit={1}
                    />
                </ul>
                <div className='h-150px w-150px flex items-center justify-center bg-lightdark shadow-md rounded-xl'>
                    <User size={50} weight='fill' color='lightgrey' />
                </div>
            </div>
            <Board />
            <div className='flex items-center gap-4'>
                <div className='h-150px w-150px flex items-center justify-center bg-lightdark shadow-md rounded-xl'>
                    <User size={50} weight='fill' color='lightgrey' />
                </div>
                <ul className='flex gap-3'>
                    {localCards.map((card, index) => (
                        <Card
                            key={index}
                            value={card.value}
                            suit={card.suit}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default PlayBoard;