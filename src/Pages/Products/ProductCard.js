import React from "react";

const ProductCard = ({ product, setProductDetails }) => {
  const { name, image, condition, description, location, number, orginalPrice, resalePrice, sellerName, time, yearOfPurchase, yearOfUse} = product;
  console.log(product);
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img className="rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions w-full">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
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
