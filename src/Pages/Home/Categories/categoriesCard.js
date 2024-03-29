import React from "react";
import { Link } from "react-router-dom";

const categoriesCard = ({ category }) => {
  const { category_id, name, image } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-lg w-full h-[200px] sm:h-[220px] md:h-[200px] lg:h-[180px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          You can see all the product of this category by clicking All Products
          button
        </p>
        <div className="card-actions w-full">
          <Link className="w-full" to={`/categories/${category_id}`}>
            <button className="btn btn-outline w-full">All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default categoriesCard;
