import React from "react";

const AdvertiseItemCard = ({ add, setAddDetails }) => {
  const {
    name,
    image,
    condition,
    resalePrice,
  } = add;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-lg sm:h-[220px] md:h-[200px] lg:h-[180px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-slate-800">{name}</h2>
        <p>Condition : {condition}</p>
        <p className=" text-xl">Price: <span className="font-bold">{resalePrice}$</span></p>
        <div className="card-actions w-full">
          <label
            htmlFor="booking-modal"
            className="btn btn-outline w-full"
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
