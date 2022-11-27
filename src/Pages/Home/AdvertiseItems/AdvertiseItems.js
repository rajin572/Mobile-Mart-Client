import React from "react";

const AdvertiseItems = () => {
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
              <button className="btn btn-primary">Buy Now</button>
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
              <button className="btn btn-outline w-full">Book Now</button>
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
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdvertiseItems;
