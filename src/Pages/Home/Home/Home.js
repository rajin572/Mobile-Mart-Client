import React from 'react';
import About from '../About/About';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;