import React from 'react';
import { Sun, Bell } from '@phosphor-icons/react';

import Logo from '../../images/logos/main-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className='bg-dark pl-2 pr-4 py-2 flex items-center justify-between border-b border-solid border-darkgrey'>
            <div>
                <img className='h-50px' src={Logo} alt="" />
            </div>
            <ul className='flex gap-6'>
                <li className='transition-color duration-300 hover:text-darkgrey'>
                    <a href="">Leader quotes</a>
                </li>
                <li className='transition-color duration-300 hover:text-darkgrey'>
                    <a href="">Our features</a>
                </li>
                <li className='transition-color duration-300 hover:text-darkgrey'>
                    <a href="">Social benefits</a>
                </li>
                <li className='transition-color duration-300 hover:text-darkgrey'>
                    <a href="">Core package</a>
                </li>
            </ul>
            <div className='flex items-center gap-3'>
                {/* <Sun size={20} color='lightgrey' />
                <Bell size={20} color='lightgrey' /> */}
                <button className='px-4 py-2 border border-solid border-grey rounded-md transition-bodercolor duration-300 hover:border-normal hover:text-darkgrey'>Log in</button>
                <button className='px-4 py-2 bg-secondarydark rounded-md transition-bg duration-300 hover:bg-secondary'>Take a tour</button>
            </div>
        </nav>
    )
};

export default Navbar;