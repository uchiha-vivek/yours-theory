"use client"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div>
          <div className="text-2xl font-bold mb-4">Yours Theory</div>
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm hover:text-gray-400">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm text-gray-800 rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
