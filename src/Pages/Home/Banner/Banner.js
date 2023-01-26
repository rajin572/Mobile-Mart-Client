import React from "react";
import bannerImg from "../../../images/4861083.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero mt-6">
        <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="rounded-lg lg:w-1/2 h-[400px] md:h-[500px]"
            alt=""
          />
          <div className="mb-20 lg:mb-0">
            <h1 className="text-5xl font-bold">Mobile Mart</h1>
            <p className="py-6">
              Sell your mobile phone for cash! Get the most cash for your phone
              or tablet. And buy the excellent condition mobiles in cheap price{" "}
            </p>
            <button className="btn btn-outline">Getting Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
