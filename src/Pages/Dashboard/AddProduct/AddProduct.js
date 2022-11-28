import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h2 className=' text-center text-4xl'>Add Product</h2>
            <div className=' w-full min-h-screen mx-auto bg-slate-100 mt-10'>
                <form className=' grid gap-5 grid-cols-2'>
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
                        <input name="sellerName" type="text" placeholder="Seller Name" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Seller Email</span></label>
                        <input name="seller_email" type="text" placeholder="Seller Email" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input name="condition" type="text" placeholder="Condition" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Number</span></label>
                        <input name="number" type="number" placeholder="Number" className="input input-bordered w-full required" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Year Of Purchase</span></label>
                        <input name="yearOfPurchase" type="text" placeholder="Year Of Purchase" className="input input-bordered w-full required" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;