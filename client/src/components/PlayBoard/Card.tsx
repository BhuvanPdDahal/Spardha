import React, { useState } from 'react';

import PokerBackImg from '../../images/poker/pocker-back.png';
import ClubImg from '../../images/poker/clubs.png';
import SpadeImg from '../../images/poker/spades.png';
import HeartImg from '../../images/poker/hearts.png';
import DiamondImg from '../../images/poker/diamonds.png';

const Card: React.FC = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div onClick={toggleShow} className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm cursor-pointer shadow-card overflow-hidden'>
            {show ? (
                <>
                    <h5 className='text-dark w-full font-bold px-1'>5</h5>
                    <img className='h-20px' src={HeartImg} alt="" />
                    <h5 className='text-dark w-full font-bold text-right px-1'>5</h5>
                </>
            ) : (
                <img className='h-full w-full object-cover' src={PokerBackImg} alt="" />
            )}
        </div>
    )
};

export default Card;