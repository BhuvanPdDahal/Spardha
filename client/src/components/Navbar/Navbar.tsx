import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../images/logos/main-logo.png';
import { State } from '../../interfaces/store';

const Navbar: React.FC = () => {
    const location = useLocation();
    const hide = location.pathname.includes('/login') || location.pathname.includes('/signup') || location.pathname.includes('/play');
    const { user } = useSelector((state: State) => state.auth);

    if (hide) return <></>

    return (
        <nav className='bg-dark pl-2 pr-4 py-2 flex items-center justify-between border-b border-solid border-darkgrey'>
            <div>
                <img className='h-50px' src={Logo} alt="" />
            </div>
            {user ? (
                <div className='flex items-center gap-3'>
                    <p>Bhuvan Dahal</p>
                    <Link to='/login' className='px-4 py-2 border border-solid border-grey rounded-md transition-bodercolor duration-300 hover:border-normal hover:text-darkgrey'>Log out</Link>
                </div>
            ) : (
                <>
                    <ul className='flex gap-6'>
                        <li className='transition-color duration-300 hover:text-darkgrey'>
                            <Link to='/'>Leader quotes</Link>
                        </li>
                        <li className='transition-color duration-300 hover:text-darkgrey'>
                            <Link to="/">Our features</Link>
                        </li>
                        <li className='transition-color duration-300 hover:text-darkgrey'>
                            <Link to="/">Social benefits</Link>
                        </li>
                        <li className='transition-color duration-300 hover:text-darkgrey'>
                            <Link to="/">Core package</Link>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3'>
                        <Link to='/login' className='px-4 py-2 border border-solid border-grey rounded-md transition-bodercolor duration-300 hover:border-normal hover:text-darkgrey'>Log in</Link>
                        <Link to='/signup' className='px-4 py-2 bg-secondarydark rounded-md transition-bg duration-300 hover:bg-secondary'>Take a tour</Link>
                    </div>
                </>
            )}
        </nav>
    )
};

export default Navbar;