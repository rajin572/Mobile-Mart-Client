import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import UseCheckRole from '../CustomHook/UseCheckRole/UseCheckRole';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [role] = UseCheckRole(user?.email)
    console.log(role);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border-r-2 border-slate-900">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            role === 'buyer' && (
                                <li><Link to="/dashboard/myorders">My orders</Link></li>
                            )
                        }
                        {
                            role === 'saler' && (
                                <li><Link to="/dashboard/addproduct">Add A product</Link></li>
                            )
                        }
                        {
                            role === 'saler' && (
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            )
                        }
                        {
                            role === 'admin' && (
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            )
                        }
                        {
                            role === 'admin' && (
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;