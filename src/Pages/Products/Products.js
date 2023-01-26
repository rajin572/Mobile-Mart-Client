import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookProduct from "./BookProduct";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productDetails, setProductDetails] = useState(null);
  const data = useLoaderData();
  return (
    <div className="my-10">
      <h2 className="text-center text-5xl">Products</h2>
      <div className=" w-full sm:w-[90%] mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setProductDetails={setProductDetails}
          ></ProductCard>
        ))}
      </div>
      {productDetails && (
        <BookProduct
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        ></BookProduct>
      )}
    </div>
  );
};

export default Products;
