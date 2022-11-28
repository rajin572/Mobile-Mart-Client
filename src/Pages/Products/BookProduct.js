import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookProduct = ({productDetails, setProductDetails}) => {
    const {user} = useContext(AuthContext)
    const { name, resalePrice } = productDetails;



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const meeting_Location = form.meeting_Location.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            Product_name: name,
            Product_price: resalePrice,
            user_name: user?.displayName,
            user_email: user?.email,
            phone,
            meeting_Location
        }



        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{ 
            if(data.acknowledged){
                setProductDetails(null);
                toast.success('Booking Product Successfully!')
            }
            else{
                toast.error("You Have Already Booked This Product")
            }
        })
        
    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">User name</span></label>
                        <input name="user_name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">User Email</span></label>
                        <input name="user_email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" disabled value={name} className="input w-full input-bordered " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input type="text" disabled value={resalePrice} className="input w-full input-bordered " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Meeting Location</span></label>
                        <input name="meeting_Location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                    </div>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default BookProduct;