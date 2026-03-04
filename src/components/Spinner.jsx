import React from 'react';
import { DotLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <DotLoader color="#21ba3b" size={120} />
        </div>
    );
};

export default Spinner;