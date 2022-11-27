import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Categories = () => {

  const {data: categories = []} = useQuery({
    queryKey: ['categories'],
    queryFn: async() =>{
        const res = await fetch('http://localhost:5000/categories');
        const data = await res.json();
        return data;
    }
});
    return (
    <div className=" my-32">
        <h2 className=" text-4xl lg:text-5xl font-bold text-center">Categories {categories}</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">  
        </div>
    </div>
    );
};

export default Categories;