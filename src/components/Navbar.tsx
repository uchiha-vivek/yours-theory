"use client"
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-gray-800">Yours Theory </div>

        
        <div className="lg:hidden">
          <button
            className="text-2xl text-gray-800"
            onClick={toggleMobileMenu}
            aria-label="menu"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <AiOutlineMenu />}
          </button>
        </div>

        
        <div className="hidden lg:flex items-center space-x-4">
          <Link href='/write' > Write </Link> 
          <button className="text-sm font-medium text-gray-800">Login</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            Join Free
          </button>
          <div
            className="cursor-pointer text-xl text-gray-800"
            onClick={togglePopup}
            aria-label="popup"
            role="button"
          >
            <FaUserAlt />
          </div>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <button className="text-sm font-medium text-gray-800">Login</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
              Join Free
            </button>
            <div
              className="cursor-pointer text-xl text-gray-800"
              onClick={togglePopup}
              aria-label="popup"
              role="button"
            >
              <FaUserAlt />
            </div>
          </div>
        </div>
      )}

      
      {isPopupOpen && (
        <div className="absolute top-16 right-4 w-60 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800">Author Info</h3>
          <p className="text-sm text-gray-600">Name: John Doe</p>
          <p className="text-sm text-gray-600">Subscription: Free Tier</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
