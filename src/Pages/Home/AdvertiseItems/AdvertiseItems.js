import React, { useState } from "react";
import BookProduct from "../../Products/BookProduct";
import AdvertiseItemCard from "./AdvertiseItemCard";

const AdvertiseItems = ({advertise}) => {
  console.log(advertise);
  const [addDetails, setAddDetails] = useState(null);
  return (
    <div className="my-32">
      <h2 className=" text-4xl lg:text-5xl font-bold text-center">Advertise Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 gap-10 w-[90%] lg:w-4/5 mx-auto">
        {
          advertise.map(add => <AdvertiseItemCard key={add._id} add={add} setAddDetails={setAddDetails}></AdvertiseItemCard>)
        }
      </div>
      {
                addDetails &&
                <BookProduct
                productDetails={addDetails}
                setProductDetails={setAddDetails}
                ></BookProduct>
            }
    </div>
  );
};

export default AdvertiseItems;
