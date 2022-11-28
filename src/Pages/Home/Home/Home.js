import { useQuery } from '@tanstack/react-query';
import React from 'react';
import About from '../About/About';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    const {data: advertise = []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <Banner></Banner>
            {
                advertise.length > 0 &&
                <AdvertiseItems advertise={advertise}></AdvertiseItems> 
            }
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;