'use client';

import React, { useState, useEffect } from 'react';

const CartPage = () => {


  return (
    <div className="container mx-auto my-16 px-4 py-10 bg-white shadow-2xl rounded-xl border border-gray-100 animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 pb-4 text-center border-b-4 border-cyan-600 tracking-tight">Your Shopping Cart</h1>

      {0 === 0 ? (
        //  {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-3xl text-gray-600 mb-6">Your cart is currently empty.</p>
          <a href="/product"> {/* Using <a> instead of Link */}
            <button className="bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75">
              Continue Shopping
            </button>
          </a>
        </div>
      ) : (
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-cyan-600 mr-2 text-4xl">●</span> Cart Items
            </h2>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-md mr-6 flex-shrink-0"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/CCCCCC/333333?text=No+Image"; }}
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-lg text-gray-700 mb-2">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        {/* Inline SVG for Minus */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <span className="text-lg font-medium text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        {/* Inline SVG for Plus */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <p className="text-lg font-bold text-gray-900 ml-4">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-6 p-2 rounded-full text-red-600 hover:bg-red-100 transition-colors duration-200"
                    aria-label="Remove item"
                  >
                    {/* Inline SVG for X (Remove) */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 h-fit"> {/* h-fit to prevent stretching */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-cyan-600 mr-2 text-4xl">●</span> Order Summary
            </h2>
            <div className="space-y-4 text-lg text-gray-700 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span>Shipping:</span>
                <span className="font-semibold">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4 text-xl font-bold text-gray-900">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-cyan-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
