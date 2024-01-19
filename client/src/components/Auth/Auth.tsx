import React, { useState } from 'react';

import Logo from '../../images/logos/main-logo.png';

const Auth: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const toggleIsLogin = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className='bg-dark min-h-screen flex items-center justify-center px-3 py-4'>
            <form className='bg-lightdark max-w-lg w-full px-8 py-4 rounded-xl shadow-lg'>
                <img className='h-50px mx-auto mb-3' src={Logo} alt="" />
                <div className='h-1px flex items-center justify-center bg-darkgrey mb-6'>
                    <h1 className='px-3 bg-lightdark'>{isLogin ? 'Log in' : 'Sign up'} to Spardha</h1>
                </div>
                {!isLogin && (
                    <div className='mb-4'>
                        <label htmlFor="email">Full Name</label>
                        <input onChange={(e) => setFullName(e.target.value)} className='w-full border border-solid border-darkgrey rounded-md outline-none bg-lighterdark px-3 py-2' type="text" placeholder='Enter your full name' id='email' value={fullName} />
                    </div>
                )}
                <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='w-full border border-solid border-darkgrey rounded-md outline-none bg-lighterdark px-3 py-2' type="text" placeholder='Enter your email' id='email' value={email} />
                </div>
                <div className='mb-8'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='w-full border border-solid border-darkgrey rounded-md outline-none bg-lighterdark px-3 py-2' type="password" placeholder='Enter your password' id='password' value={password} />
                </div>
                <button className='w-full py-2 rounded-md font-medium bg-secondarydark transition-bg duration-300 hover:bg-secondary' type='submit'>{isLogin ? 'LOGIN' : 'SIGNUP'}</button>
                <p className='text-center mt-3 mb-2'>{isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={toggleIsLogin} className='text-secondarydark cursor-pointer transition-color duration-300 hover:text-secondary'>{isLogin ? 'Sign up' : 'Log in'}</span></p>
            </form>
        </div>
    )
};

export default Auth;