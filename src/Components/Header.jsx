"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-white w-full sticky top-0 z-50 drop-shadow-md"> {/* Changed to bg-white */}
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl text-gray-800 font-bold"> {/* Changed to text-gray-800 */}
                <span className="text-cyan-600">E.</span>Store
             
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-4 text-lg font-medium text-gray-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                      className={`px-3 py-2 rounded-md transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-cyan-500 text-white"
                          : "hover:bg-cyan-100 text-gray-700" // Ensure text is visible on hover
                      }`}
                    >
                      {link.label}
                  
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons and Search for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-gray-100 border text-gray-700 border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all w-40 md:w-56" // Adjusted search input bg
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> {/* Adjusted icon color */}
            </div>
            <Link href="/cart"  className="relative p-2 hover:bg-cyan-100 rounded-full">
                <FiShoppingCart className="h-6 w-6 text-gray-700" /> {/* Adjusted icon color */}
                {/* Optional: Cart item count */}
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs text-center">3</span>
           
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none" // Adjusted button color
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col items-center space-y-2 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} 
                      className={`block w-full text-center px-4 py-2 rounded-md ${
                        pathname === link.href
                          ? "bg-cyan-500 text-white"
                          : "hover:bg-cyan-100 text-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                  
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/cart"  className="flex items-center space-x-2 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    <FiShoppingCart className="h-6 w-6" />
                    <span>My Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;