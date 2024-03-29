import React from 'react';

import LoadingImg from '../../images/assets/loading.gif';

const Loader: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 py-5 bg-lightgrey'>
            <img className='h-60px' src={LoadingImg} alt="..." />
        </div>
    )
};

export default Loader;