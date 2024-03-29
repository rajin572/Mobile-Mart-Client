import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li className="font-bold rounded lg:mx-2 btn-ghost">
        <Link to="/">Home</Link>
      </li>
      <li className=" font-bold rounded lg:mx-2 btn-ghost">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="font-bold rounded lg:mx-2 btn-ghost">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="font-bold rounded lg:mx-2 btn-ghost">
            <button onClick={handleLogOut}>Sign out</button>
          </li>
        </>
      ) : (
        <li className="font-bold rounded lg:mx-2 btn-ghost">
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-white text-zinc-900 flex justify-between px-5 border-2 border-b-stone-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-zinc-900 rounded-box"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-2xl font-bold">
          Mobile Mart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
