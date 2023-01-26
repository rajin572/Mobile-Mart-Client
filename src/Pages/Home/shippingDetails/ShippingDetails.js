import React from "react";
import { FaReply, FaShuttleVan } from "react-icons/fa";
import { MdOutlineLocalPolice } from "react-icons/md";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const ShippingDetails = () => {
  return (
    <div className="py-5 bg-zinc-700 text-white">
      <div className="w-[90%] lg:w-4/5 mx-auto gap-5 grid grid-cols-1 md:grid-cols-4">
        <div className="flex md:justify-center items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <FaShuttleVan className=" text-white text-4xl" />
          </div>
          <p className="pl-2">
            Free Shipping{" "}
            <p className=" text-gray-300">Free delivery over $100</p>
          </p>
        </div>
        <div className="flex md:justify-center items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <FaReply className=" text-white text-4xl" />
          </div>

          <p className="pl-2">
            Free Returns <p className=" text-gray-300">Hassle free returns</p>
          </p>
        </div>
        <div className="flex md:justify-center items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <MdOutlineLocalPolice className=" text-white text-4xl" />
          </div>

          <p className="pl-2">
            Secure Shopping{" "}
            <p className=" text-gray-300">Best security features </p>
          </p>
        </div>
        <div className="flex md:justify-center items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <AiOutlineCodeSandbox className=" text-white text-4xl" />
          </div>

          <p className="pl-2">
            Unlimited Blocks{" "}
            <p className=" text-gray-300">Any content, any page</p>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
