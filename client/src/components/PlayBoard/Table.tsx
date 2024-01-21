import React from 'react';
import { FastForwardCircle, X } from '@phosphor-icons/react';

import QuestionMarkImg from '../../images/assets/question-mark.png';
import { suits } from '../../data/board';
import { TableProp } from '../../interfaces/playboard';

const Table: React.FC<TableProp> = ({ setShowTable }: TableProp) => {
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
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{1}</h5>
                        <img className='h-20px' src={suits[2]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{1}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{1}</h5>
                        <img className='h-20px' src={suits[2]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{1}</h5>
                    </div>
                    <div>Draw</div>
                </div>
                <div className='grid grid-cols-table place-items-center px-4 py-3 border-b border-solid border-darkgrey'>
                    <div>2</div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{notShown ? '' : '1'}</h5>
                        <img className='h-20px' src={QuestionMarkImg} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{notShown ? '' : '1'}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{1}</h5>
                        <img className='h-20px' src={suits[2]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{1}</h5>
                    </div>
                    <div>Draw</div>
                </div>
                <div className='grid grid-cols-table place-items-center px-4 py-3'>
                    <div>3</div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{1}</h5>
                        <img className='h-20px' src={suits[2]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{1}</h5>
                    </div>
                    <div className='h-70px w-50px flex flex-col items-center justify-between bg-lightgrey rounded-sm shadow-card overflow-hidden'>
                        <h5 className='text-dark w-full font-semibold font-serif px-1'>{1}</h5>
                        <img className='h-20px' src={suits[2]} alt="" />
                        <h5 className='text-dark w-full font-semibold font-serif px-1 rotate-180'>{1}</h5>
                    </div>
                    <div>?</div>
                </div>
            </div>
        </div>
    )
}

export default Table;