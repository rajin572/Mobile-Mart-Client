import React from "react";

const ProductCard = ({ product, setProductDetails }) => {
  const { name, image, condition, description, resalePrice} = product;
  console.log(product);
  return (
    <div className="card bg-base-100 shadow-2xl mb-20">
      <figure className="phone-image">
        <img className="rounded-lg h-[200px] sm:h-[220px] md:h-[200px] lg:h-[180px]" src={image} alt="phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-slate-900">{name}</h2>
        <p className="text-xl text-slate-600">{description}</p>
          <p>Condition : <span className="font-bold">{condition}</span></p>
          <p className=" text-xl">Price: <span className="font-bold">{resalePrice}$</span></p>                
        <div className="card-actions w-full">
          <label
            htmlFor="booking-modal"
            className="btn btn-outline w-full text-black"
            onClick={() => setProductDetails(product)}
          >
            Book Product
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
