import React from "react";

const ProductCard = ({ product, setProductDetails }) => {
  const { name, image } = product;
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img className="rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          You can see all the product of this category by clicking All Products
          button
        </p>
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
