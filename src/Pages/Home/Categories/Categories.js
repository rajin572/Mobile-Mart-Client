import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  const [loading, isLoading] = useState(true)
  const {data: categories = []} = useQuery({
    queryKey: ['categories'],
    queryFn: async() =>{
        const res = await fetch('https://mobile-mart-server-iota.vercel.app/categories');
        const data = await res.json();
        isLoading(false)
        return data;
    }
});
    return (
    <div className=" my-32">
      {
                        loading ? <div class="flex items-center justify-center mt-10">
                        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 border-black rounded-full" role="status">
                        </div>
                      </div> : <div>
                      <h2 className=" text-4xl lg:text-5xl font-bold text-center mb-20">Categories</h2>
        <div className="grid gap-10 w-[90%] lg:w-4/5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10"> 
        {
          categories.map(category => <CategoriesCard key={category.category_id} category={category}></CategoriesCard>)
        } 
        </div>
                      </div>
      }
    </div>
    );
};

export default Categories;