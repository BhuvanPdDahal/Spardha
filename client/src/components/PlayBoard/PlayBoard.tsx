import React, { useState } from 'react';
import { User } from '@phosphor-icons/react';

import Card from './Card';
import Board from './Board';
import InfoBox from '../Info/InfoBox';

const PlayBoard: React.FC = () => {
    const [gameOver, setGameOver] = useState(false);
    return (
        <div className='min-h-screen flex flex-col justify-between gap-4 bg-dark p-4'>
            {gameOver && (
                <InfoBox />
            )}
            <div className='flex items-center justify-end gap-4'>
                <ul className='flex gap-3'>
                    <Card />
                    <Card />
                    <Card />
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
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </div>
    )
};

export default PlayBoard;