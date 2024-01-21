import React from 'react';
import { X } from '@phosphor-icons/react';

import QuestionMarkImg from '../../images/assets/question-mark.png';
import { values, suits } from '../../data/board';
import { TableProp } from '../../interfaces/playboard';

const Table: React.FC<TableProp> = ({
    remoteCards,
    localPlayedCards,
    setShowTable
}: TableProp) => {
    console.log('localPlayedCards: ', localPlayedCards, 'remoteCards: ', remoteCards);
    
    const notShown = true;
    return (
        <div className='fixed inset-0 z-10 bg-dark flex items-center justify-center shadow-lg'>
            <X onClick={() => setShowTable(false)} size={40} className='absolute top-5 right-5 p-2 rounded-full transition-bg duration-300 cursor-pointer hover:bg-lightdark' />
            <div className='max-w-2xl w-full bg-lightdark rounded-lg'>
                <div className='grid grid-cols-table place-items-center px-4 py-3 border-b border-solid border-darkgrey'>
                    <div>S.No.</div>
                    <div>Your Card</div>
                    <div>Opponent's Card</div>
                    <div>Winner</div>
                </div>
                <div className='grid grid-cols-table place-items-center px-4 py-3 border-b border-solid border-darkgrey'>
                    <div>1</div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{localPlayedCards[0].value === -1 ? '' : values[localPlayedCards[0].value]}</h5>
                        <img className='h-20px' src={localPlayedCards[0].suit === -1 ? QuestionMarkImg : suits[localPlayedCards[0].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{localPlayedCards[0].value === -1 ? '' : values[localPlayedCards[0].value]}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{remoteCards[0].value === -1 ? '' : values[remoteCards[0].value]}</h5>
                        <img className='h-20px' src={remoteCards[0].suit === -1 ? QuestionMarkImg : suits[remoteCards[0].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{remoteCards[0].value === -1 ? '' : values[remoteCards[0].value]}</h5>
                    </div>
                    <div>{
                        remoteCards[0].value === -1 || localPlayedCards[0].value === -1 ? '?'
                            : localPlayedCards[0].value > remoteCards[0].value ? 'You'
                                : localPlayedCards[0].value < remoteCards[0].value ? 'Opponent' : 'Draw'
                    }</div>
                </div>
                <div className='grid grid-cols-table place-items-center px-4 py-3 border-b border-solid border-darkgrey'>
                    <div>2</div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{localPlayedCards[1].value === -1 ? '' : values[localPlayedCards[1].value]}</h5>
                        <img className='h-20px' src={localPlayedCards[1].suit === -1 ? QuestionMarkImg : suits[localPlayedCards[1].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{localPlayedCards[1].value === -1 ? '' : values[localPlayedCards[1].value]}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{remoteCards[0].value === -1 ? '' : values[remoteCards[1].value]}</h5>
                        <img className='h-20px' src={remoteCards[1].suit === -1 ? QuestionMarkImg : suits[remoteCards[1].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{remoteCards[1].value === -1 ? '' : values[remoteCards[1].value]}</h5>
                    </div>
                    <div>{
                        remoteCards[1].value === -1 || localPlayedCards[1].value === -1 ? '?'
                            : localPlayedCards[1].value > remoteCards[1].value ? 'You'
                                : localPlayedCards[1].value < remoteCards[1].value ? 'Opponent' : 'Draw'
                    }</div>
                </div>
                <div className='grid grid-cols-table place-items-center px-4 py-3'>
                    <div>3</div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{localPlayedCards[2].value === -1 ? '' : values[localPlayedCards[2].value]}</h5>
                        <img className='h-20px' src={localPlayedCards[2].suit === -1 ? QuestionMarkImg : suits[localPlayedCards[2].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{localPlayedCards[2].value === -1 ? '' : values[localPlayedCards[2].value]}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{remoteCards[2].value === -1 ? '' : values[remoteCards[2].value]}</h5>
                        <img className='h-20px' src={remoteCards[2].suit === -1 ? QuestionMarkImg : suits[remoteCards[2].suit]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{remoteCards[2].value === -1 ? '' : values[remoteCards[2].value]}</h5>
                    </div>
                    <div>{
                        remoteCards[2].value === -1 || localPlayedCards[2].value === -1 ? '?'
                            : localPlayedCards[2].value > remoteCards[2].value ? 'You'
                                : localPlayedCards[2].value < remoteCards[2].value ? 'Opponent' : 'Draw'
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Table;