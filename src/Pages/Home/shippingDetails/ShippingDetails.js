import React from "react";
import { FaReply, FaShuttleVan } from "react-icons/fa";
import { MdOutlineLocalPolice } from "react-icons/md";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const ShippingDetails = () => {
  return (
    <div className="py-5 bg-gray-900 text-white">
      <div className="lg:w-4/5 mx-auto gap-5 grid grid-cols-2 md:grid-cols-4">
        <div className="flex justify-center gap-2 items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <FaShuttleVan className=" text-[#E96631] text-4xl" />
          </div>
          <p>Free Shipping <p className=" text-slate-400">Free delivery over $100</p></p>
        </div>
        <div className="flex justify-center gap-2  items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <FaReply className=" text-[#E96631] text-4xl" />
          </div>

          <p>Free Returns <p className=" text-slate-400">Hassle free returns</p></p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <AiOutlineCodeSandbox className=" text-[#E96631] text-4xl" />
          </div>

          <p>Secure Shopping <p className=" text-slate-400">Best security features </p></p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div className="p-2 rounded-full border-2 border-[#234D97]">
            <MdOutlineLocalPolice className=" text-[#E96631] text-4xl" />
          </div>

          <p>Unlimited Blocks <p className=" text-slate-400">Any content, any page</p> </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
