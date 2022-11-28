import React, { useState } from "react";
import BookProduct from "../../Products/BookProduct";

const AdvertiseItems = () => {
  const [productDetails, setProductDetails] = useState(null);
  return (
    <div className="my-32">
      <h2 className=" text-4xl lg:text-5xl font-bold text-center">Advertise Items</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">



        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full text-white"
            onClick={() => setProductDetails('product')}
          >
            Book Product
          </label>
            </div>
          </div>
        </div>

        {/* main item */}
        <div className="card bg-base-100 shadow-2xl">
          <figure>
            <img className="rounded-lg" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions w-full">
            <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full text-white"
            onClick={() => setProductDetails('product')}
          >
            Book Product
          </label>
            </div>
          </div>
        </div>
        {/* main item */}

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full text-white"
            onClick={() => setProductDetails('product')}
          >
            Book Product
          </label>
            </div>
          </div>
        </div>

        
      </div>
      {
                productDetails &&
                <BookProduct
                productDetails={productDetails}
                setProductDetails={setProductDetails}
                ></BookProduct>
            }
    </div>
  );
};

export default AdvertiseItems;
