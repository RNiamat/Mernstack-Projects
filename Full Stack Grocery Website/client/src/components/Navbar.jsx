import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import profileIcon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.svg";
import { assets } from "../assets/assets";  

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowUserLogin, cartCount, searchQuery,setSearchQuery } = useContext(AppContext);

  useEffect(() => {
    if(searchQuery.length >0){
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-black-500">FreshCart</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>All Products</Link>

        {/* Search bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
          onChange={(e)=> setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
        </div>

        {/* Cart + Profile in one flex row */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
           <img className="w-5 h-5" src={cart_icon} alt="" />
            <button className="absolute -top-2 -right-3 text-xs text-black bg-yellow-500 w-[18px] h-[18px] rounded-full">
              {cartCount()}
            </button>
          </div>

          {user ? (
            <div className="relative group">
              {/* Profile Icon */}
              <img
                src={profileIcon}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />

              {/* Dropdown */}
              <ul
                className="hidden group-hover:block absolute top- right-0 bg-white shadow-md rounded-md 
               border border-gray-200 py-2 w-30 z-40 text-sm"
              >
                <li onClick={() => {navigate("/my-orders");}} className="p-1.5 cursor-pointer hover:bg-gray-100">My Orders</li>
                <li onClick={()=> setUser(null)} className="p-1.5 cursor-pointer hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          ) : (
            <button onClick= {()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-yellow-500 hover:bg-black hover:text-white transition text-black rounded-full">
              Login
            </button>
          )}

        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>All Products</Link>
        {user ? (
            <div className="relative group">
              {/* Profile Icon */}
              <img
                src={profileIcon}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />

              {/* Dropdown */}
              <ul
                className="hidden group-hover:block absolute top-12 right-0 bg-white shadow-md rounded-md 
               border border-gray-200 py-2 w-30 z-40 text-sm"
              >
                <li onClick={() => {navigate("/my-orders");}} className="p-1.5 cursor-pointer hover:bg-gray-100">My Orders</li>
                <li onClick={()=> setUser(null)} className="p-1.5 cursor-pointer hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          ) : (
            <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
              Login
            </button>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
