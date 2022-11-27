import React from "react";

const categoriesCard = ({category}) => {
    const {name, image} = category
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img
          className="rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>You can see all the product of this category by clicking All Products button</p>
        <div className="card-actions w-full">
          <button className="btn btn-outline w-full">All Products</button>
        </div>
      </div>
    </div>
  );
};

export default categoriesCard;
