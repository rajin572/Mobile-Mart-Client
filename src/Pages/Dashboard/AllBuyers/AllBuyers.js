import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const url = 'http://localhost:5000/users?role=buyer';
  
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });
    console.log(users);
    return (
        <div>
            All buyers
        </div>
    );
};

export default AllBuyers;