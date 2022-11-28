import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyProductsRow from "./MyProductsRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/products?email=${user?.email}`;

  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className=" text-4xl text-center">My Products</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Publish Date</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(products => (
                <MyProductsRow 
                key={products._id}
                products={products}
                ></MyProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
