import React from 'react';

const AdvertiseItemCard = () => {
    return (
        <div className="card bg-base-100 shadow-2xl">
          <figure>
            <img className="rounded-lg" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions w-full">
            {/* <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full text-white"
            onClick={() => setProductDetails('product')}
          >
            Book Product
          </label> */}
            </div>
          </div>
        </div>
    );
};

export default AdvertiseItemCard;