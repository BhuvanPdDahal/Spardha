import React, { useState } from 'react';

import PokerBackImg from '../../images/poker/pocker-back.png';
import { nums, types } from '../../data/board';

const Card: React.FC = () => {
    const [show, setShow] = useState(false);
    const num = Math.floor(Math.random() * 13);
    const type = Math.floor(Math.random() * 4);

    const toggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div onClick={toggleShow} className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm cursor-pointer shadow-card overflow-hidden'>
            {show ? (
                <>
                    <h5 className='text-dark w-full font-semibold px-1'>{nums[num]}</h5>
                    <img className='h-20px' src={types[type]} alt="" />
                    <h5 className='text-dark w-full font-semibold px-1 rotate-180'>{nums[num]}</h5>
                </>
            ) : (
                <img className='h-full w-full object-cover bg-secondarydark' src={PokerBackImg} alt="" />
            )}
        </div>
    )
};

export default Card;