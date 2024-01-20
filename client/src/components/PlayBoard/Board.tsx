import React from 'react';

import Logo from '../../images/logos/main-logo.png';

const Board: React.FC = () => {
    return (
        <div className='bg-lightdark shadow-board h-250px w-full rounded-3xl p-4 max-w-3xl mx-auto'>
            <div className='h-full flex items-center justify-center rounded-2xl bg-lightdark'>
                <img className='h-100px' src={Logo} alt="" />
            </div>
        </div>
    )
};

export default Board;