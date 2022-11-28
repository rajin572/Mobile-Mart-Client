import React, { useState } from "react";
import BookProduct from "../../Products/BookProduct";
import AdvertiseItemCard from "./AdvertiseItemCard";

const AdvertiseItems = () => {
  const [productDetails, setProductDetails] = useState(null);
  return (
    <div className="my-32">
      <h2 className=" text-4xl lg:text-5xl font-bold text-center">Advertise Items</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
        <AdvertiseItemCard></AdvertiseItemCard>
        {/* main item */}
        {/* main item */}
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
