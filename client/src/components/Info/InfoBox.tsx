import React, { useState } from 'react';

import TrophyImg from '../../images/assets/trophy.png';
import SadFaceImg from '../../images/assets/sad-face.png';

const InfoBox: React.FC = () => {
    const [won, setWon] = useState(true);

    return (
        <div className='fixed inset-0 h-screen w-screen flex items-center justify-center bg-dim'>
            <div className='bg-dark max-w-md w-full flex flex-col gap-4 items-center rounded-xl p-6 shadow-card'>
                <img className='h-100px' src={won ? TrophyImg : SadFaceImg} alt="" />
                <div className='text-center'>
                    <h2>{won ? 'CONGRATULATIONS!' : 'SORRY!'}</h2>
                    <p>You {won ? 'won' : 'lost'} the match</p>
                </div>
                <button className='w-full py-2 text-dark bg-secondary rounded-md hover:bg-darkgrey'>Okay</button>
            </div>
        </div>
    )
};

export default InfoBox;