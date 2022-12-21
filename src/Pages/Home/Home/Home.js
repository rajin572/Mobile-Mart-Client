import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import About from '../About/About';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    const [loading, isLoading] = useState(true)
    const {data: advertise = []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-mart-server-iota.vercel.app/advertise');
            const data = await res.json();
            isLoading(false)
            return data;
        }
    });
    return (
        <div>
            <Banner></Banner>
            {
                loading ? <div class="flex items-center justify-center mt-10">
                <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 border-black rounded-full" role="status">
                </div>
              </div> :
                <>
                {
                    advertise.length > 0 && <AdvertiseItems advertise={advertise}></AdvertiseItems> 
                }
                </>
            }
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;