import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
      }

    const menuItems = <React.Fragment>
        <li className='btn btn-ghost'><Link to="/">Home</Link></li>
        <li className='btn btn-ghost'><Link to="/blog">Blog</Link></li>
        {user?.uid ?
            <>
                <li className='btn btn-ghost'><Link to="/dashboard">Dashboard</Link></li>
                <li className='btn btn-ghost'><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li className='btn btn-ghost'><Link to="/login">Login</Link></li>}
    </React.Fragment>

    return (
<div className="navbar bg-zinc-900 text-white flex justify-between px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 text-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">Mobile Mart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;