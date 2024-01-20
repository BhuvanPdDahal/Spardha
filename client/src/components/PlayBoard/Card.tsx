import React, { useState } from 'react';

import CardBackImg from '../../images/poker/card-back.png';
import { values, suits } from '../../data/board';
import { PokerCard } from '../../interfaces/playboard';

const Card: React.FC<PokerCard> = ({ value, suit }: PokerCard) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
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
    )
};

export default Card;