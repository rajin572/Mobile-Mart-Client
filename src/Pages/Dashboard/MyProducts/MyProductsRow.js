import React from 'react';

const MyProductsRow = ({products}) => {
    console.log(products);
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={'i'} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>
        <button className="btn btn-primary">Advertise</button>
        </td>
        <th>
          <button className="btn btn-outline">Delete</button>
        </th>
      </tr>
    );
};

export default MyProductsRow;