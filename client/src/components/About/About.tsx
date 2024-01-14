import React from 'react';

import Card from './Card';

const About: React.FC = () => {
    return (
        <div className='bg-dark min-h-screen'>
            <div className='max-w-3xl text-center px-3 mx-auto py-5'>
                <h1 className='text-2xl font-light mb-4'>Poker is the new sport for business minds.</h1>
                <h2 className='text-lg mb-3'>Golf is yesterday's news</h2>
                <button className='px-4 py-2 text-dark bg-secondary rounded-md'>Start The Journey</button>
            </div>
            <ul className='mt-8 px-3 flex items-center justify-center gap-4'>
                <Card />
                <Card />
                <Card />
            </ul>
        </div>
    )
};

export default About;