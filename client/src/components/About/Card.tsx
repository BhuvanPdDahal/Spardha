import React from 'react';

import { CardProp } from '../../interfaces/about';

const Card: React.FC<CardProp> = ({ title, para }: CardProp) => {
    return (
        <li className='bg-lightdark rounded-lg text-center max-w-sm px-4 pt-3 pb-4'>
            <h3 className='font-medium mb-2'>{title}</h3>
            <p className='text-grey'>{para}</p>
        </li>
    )
};

export default Card;