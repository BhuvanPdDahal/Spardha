import { User } from '@phosphor-icons/react';

import React from 'react';
import Card from './Card';
import Board from './Board';

const PlayBoard: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between gap-2 bg-dark p-4'>
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