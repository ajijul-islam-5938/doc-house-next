import { Spinner } from '@nextui-org/react';
import React from 'react';

const loading = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
             <Spinner label="Loading..." color="success" labelColor="success" size='lg'/>
        </div>
    );
};

export default loading;