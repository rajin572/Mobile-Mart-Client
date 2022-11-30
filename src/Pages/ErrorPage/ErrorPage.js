import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../../src/images/error-404.png'

const ErrorPage = () => {
    return (
        <div className=' text-center'>
            <img src={errorImage} alt="" className=' w-full md:w-4/5 lg:w-4/5 mx-auto'/>
            <p className=' text-4xl font-bold'><Link to='/' className=' text-sky-400'>Click here</Link> to visit our home page and enjoy</p>
        </div>
    );
};

export default ErrorPage;