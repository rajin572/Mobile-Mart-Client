import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    return (
        <div>
            My Orders
        </div>
    );
};

export default MyOrders;