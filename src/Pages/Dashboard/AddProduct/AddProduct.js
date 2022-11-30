import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddProduct = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const orginalPrice = form.orginalPrice.value;
        const yearOfUse = form.yearOfUse.value;
        const condition = form.condition.value;
        const number = form.number.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const category_id = form.category.value;
        const addProduct = {
            name,
            description,
            image,
            location,
            resalePrice,
            orginalPrice,
            yearOfUse,
            sellerName: user?.displayName,
            seller_email: user?.email,
            condition,
            number,
            yearOfPurchase,
            category_id,
        }
        fetch('https://mobile-mart-server-iota.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data =>{ 
            if(data.acknowledged){
                navigate('/dashboard/myproducts')
                form.reset()
                toast.success('Booking Product Successfully!')
            }
        })
    }
    return (
        <div>
            <h2 className=' text-center text-4xl'>Add Product</h2>
            <div className=' w-full min-h-screen mx-auto bg-slate-100 mt-10 p-10'>
                <form onSubmit={handleAddProduct}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input name="name" type="text" placeholder="Product Name" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input name="description" type="text" placeholder="Description" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Image URl</span></label>
                        <input name="image" type="text" placeholder="Image URl" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input name="resalePrice" type="number" placeholder="Resale Price" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Orginal Price</span></label>
                        <input name="orginalPrice" type="number" placeholder="Orginal Price" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Year Of Use</span></label>
                        <input name="yearOfUse" type="text" placeholder="Year Of Use" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input name="sellerName" defaultValue={user?.displayName} readOnly type="text" placeholder="Seller Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller Email</span></label>
                        <input defaultValue={user?.email} readOnly name="seller_email" type="text" placeholder="Seller Email" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="condition"><span className="label-text">Choose a Condition:</span></label>
                        <select className="select w-full select-bordered" name="condition" id="condition">
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="bad">Bad</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Number</span></label>
                        <input name="number" type="number" placeholder="Number" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Year Of Purchase</span></label>
                        <input name="yearOfPurchase" type="text" placeholder="Year Of Purchase" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="category"><span className="label-text">Choose a Category:</span></label>
                        <select className="select w-full select-bordered" name="category" id="category">
                            <option value="1">Android</option>
                            <option value="2">Apple</option>
                            <option value="3">Java</option>
                        </select>
                    </div>
                    <button className="btn btn-primary w-full my-5">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;