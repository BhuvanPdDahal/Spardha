import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import { pokerBenefits } from '../../data/about';
import Loader from '../Loader/Loader';

const About: React.FC = () => {
    return (
        <div className='bg-dark min-h-screen'>
            <div className='max-w-3xl text-center px-3 mx-auto py-5'>
                <h1 className='text-7xl leading-85px mb-5 mt-6 font-serif'>Poker is the new sport for business minds.</h1>
                <h2 className='text-2xl mb-10'>Golf is yesterday's news</h2>
                <Link to='/signup' className='px-10 py-3 font-medium text-xl bg-secondarydark transition-bg duration-300 rounded-lg hover:bg-secondary'>Take a tour</Link>
            </div>
            <h2 className='text-4xl font-serif'>Why Poker?</h2>
            <ul className='mt-8 px-3 flex items-center justify-center gap-4'>
                {/* {pokerBenefits.forEach((benefit, index) => (
                    <Card
                        key={index}
                        title={benefit.title}
                        para={benefit.para}
                    />
                ))} */}
            </ul>
            <Loader />
        </div>
    )
};

export default About;