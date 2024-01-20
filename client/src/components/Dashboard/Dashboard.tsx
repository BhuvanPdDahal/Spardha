import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardsImg from '../../images/poker/cards.png';
import LoadingImg from '../../images/assets/loading.gif';
import SearchingImg from '../../images/assets/searching.png';
import { useSocket } from '../../context/SocketProvider';

const Dashboard: React.FC = () => {
    const socket = useSocket();
    const isLoading = false;
    const navigate = useNavigate();

    const handleClick = () => {
        socket?.emit('play-poker', {
            fullName: 'Bhuvan Dahal',
            email: 'bhuvandahal6@gmail.com'
        });
    };

    useEffect(() => {
        socket?.on('play-poker', () => {
            navigate('/play');
        });
    }, []);

    return (
        <div className='bg-dark min-h-rem px-3 py-4'>
            <header className='text-center mb-5 mt-3'>
                <h1 className='text-xl font-medium'>Spardha Dashboard</h1>
                <h2 className='text-grey'>Play games and enjoy.</h2>
            </header>
            <div className='flex justify-center py-4'>
                <div>
                    <div className='bg-lightdark h-200px w-200px p-4 rounded-lg mb-3'>
                        <img className='h-full' src={isLoading ? SearchingImg : CardsImg} alt="" />
                    </div>
                    <button onClick={handleClick} className={`w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-primarydark transition-bg duration-300 ${isLoading ? 'cursor-not-allowed' : 'hover:bg-primary'}`} disabled={isLoading}>
                        {isLoading && <img className='h-20px inline' src={LoadingImg} alt="" />}
                        {isLoading ? 'Matching Player...' : 'Play Poker'}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;