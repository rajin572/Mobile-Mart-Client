import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyProductsRow = ({products}) => {
    const {image, name, resalePrice, time} = products
    const [disable, setDisable] = useState(false)
    const handleupload = (value) =>{
        fetch('https://mobile-mart-server-iota.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            if(data.acknowledged){
                setDisable(!disable)
                toast.success('Advertise Added Successfully.')
            }
            else{
                toast.error("You Have Already Add This Product on Advisetise")
            }
        })
        console.log(value);
    }

    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Price: {resalePrice}$</div>
            </div>
          </div>
        </td>
        <td>
          {time}
        </td>
        <td>
        <button onClick={() => handleupload(products)} className="btn btn-primary" disabled={disable}>Advertise</button>
        </td>
        <th>
          <button className="btn btn-outline">Delete</button>
        </th>
      </tr>
    );
};

export default MyProductsRow;