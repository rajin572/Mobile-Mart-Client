import React from 'react';

const AdvertiseItemCard = ({add, setAddDetails}) => {
    const { name, image, condition, description, location, number, orginalPrice, resalePrice, sellerName, time, yearOfPurchase, yearOfUse} = add;
    return (
        <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img className="rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-slate-800">{name}</h2>
          <p className="text-2xl text-slate-600">{description}</p>
            <p>Year Of Use : {yearOfUse}</p>
            <p>Year Of Purchase : {yearOfPurchase}</p>
            <p>Seller Name : {sellerName}</p>
            <p>Phone num: {number}</p>
            <p>Location: {location}</p>
            <p>Condition : {condition}</p>
          <div className=" flex justify-center align-baseline text-center">
            <p className=" text-5xl text-slate-600"><del>{orginalPrice}$</del></p>
            <p className=" text-5xl">{resalePrice}$</p>        
          </div>
          <p>Post on: {time}</p>
          
          <div className="card-actions w-full">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary w-full text-white"
              onClick={() => setAddDetails(add)}
            >
              Book Product
            </label>
          </div>
        </div>
      </div>
    );
};

export default AdvertiseItemCard;