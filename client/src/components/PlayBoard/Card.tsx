import React, { useState } from 'react';
import { PaperPlane } from '@phosphor-icons/react';

import CardBackImg from '../../images/poker/card-back.png';
import { values, suits } from '../../data/board';
import { CardProp } from '../../interfaces/playboard';
import { useSocket } from '../../context/SocketProvider';

const Card: React.FC<CardProp> = ({
    value,
    suit,
    initialShow,
    localCard,
    totalLocalCards,
    setLocalPlayedCard,
    setTotalLocalCards,
    setLocalPlayedCards
}: CardProp) => {
    const socket = useSocket();
    const [show, setShow] = useState(initialShow);
    const [remove, setRemove] = useState(false);

    const toggleShow = () => {
        if(!localCard) return;
        setShow((prevShow) => !prevShow);
    };

    const sendCard = () => {
        const card = { value, suit };
        const totalCards = totalLocalCards ? totalLocalCards - 1 : 0;
        socket?.emit('send-card', {
            card, totalCards
        });
        if(setTotalLocalCards) {
            setTotalLocalCards(totalCards);
        }
        if(setLocalPlayedCard) {
            setLocalPlayedCard(card);
            setRemove(true);
        }
        if(setLocalPlayedCards) {
            console.log('hello world');
            
            setLocalPlayedCards((prevCards) => {
                prevCards[2 - totalCards] = card;
                return prevCards;
            });
        }
    };

    if(remove) return <></>

    return (
        <div className='card-wrapper relative py-5'>
            <div onClick={toggleShow} className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm cursor-pointer shadow-card overflow-hidden'>
                {show ? (
                    <>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{values[value]}</h5>
                        <img className='h-20px' src={suits[suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{values[value]}</h5>
                    </>
                ) : (
                    <img className='h-full w-full object-cover bg-secondarydark' src={CardBackImg} alt="" />
                )}
            </div>
            {localCard && (
                <PaperPlane onClick={sendCard} size={38} className='card-send bg-lightdark p-2 rounded-full mx-auto mt-1 cursor-pointer hover:bg-primarydark' />
            )}
        </div>
    )
};

export default Card;