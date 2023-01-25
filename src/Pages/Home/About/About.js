import React from 'react';
import aboutImg from '../../../images/phone.jpg'

const About = () => {
    return (
        <div className=' bg-black text-white'>
        <div className="hero mt-6">
            <div className="hero-content flex-col justify-between lg:flex-row">
                <img src={aboutImg} className="rounded-lg lg:w-1/2 h-[300px]" alt='' />
                <div>
                    <h1 className="text-3xl font-bold">Why Mobile Mart?</h1>
                    <p className="py-6">On Mobile Mart, you buy and sell directly with other users. No middleman means you get the best price and most</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;