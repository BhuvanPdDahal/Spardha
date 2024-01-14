import React from 'react';
import { Sun, Bell } from '@phosphor-icons/react';

import Logo from '../../images/logos/main-logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className='bg-lightdark pl-2 pr-4 flex items-center justify-between border-b border-solid border-normal'>
            <div>
                <img className='h-50px' src={Logo} alt="" />
            </div>
            <div className='flex items-center gap-2'>
                <Sun size={20} color='lightgrey' />
                <Bell size={20} color='lightgrey' />
                <h1>Login</h1>
            </div>
        </nav>
    )
};

export default Navbar;