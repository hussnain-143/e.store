'use client';
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart , clearCart  } from "@/store/slices/cartSlice"; 

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const cartItems = cart.items;
    const subtotal = cart.totalAmount; 
    const shippingCost = 5.00; 
    const total = subtotal + shippingCost;


  return (
    <div className="container mx-auto my-16 px-4 py-10 bg-white shadow-2xl rounded-xl border border-gray-100 animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 pb-4 text-center border-b-4 border-cyan-600 tracking-tight">Shopping Cart</h1>

      {cart.items.length === 0 ? ( // Corrected condition to check cart.items.length
        <div className="text-center py-20">
          <p className="text-3xl text-gray-600 mb-6">Cart is currently empty.</p>
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
                    src={item.img || "https://placehold.co/100x100/CCCCCC/333333?text=No+Image"} // Added fallback image
                    alt={item.name}
                    className="w-24 h-24 object-contain rounded-md mr-6 flex-shrink-0"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/CCCCCC/333333?text=No+Image"; }}
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-lg text-gray-700 mb-2">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => dispatch(removeItemFromCart(item.id))}
                        className="p-1 rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        {/* Inline SVG for Minus */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <span className="text-lg font-medium text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(addItemToCart(item))}
                        className="p-1 rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        {/* Inline SVG for Plus */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <p className="text-lg font-bold text-gray-900 ml-4">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Clear Cart Button */}
            <div className="mt-8 text-right">
                <button
                    onClick={() => dispatch(clearCart())} 
                    className="bg-red-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                    aria-label="Clear Cart"
                >
                    Clear Cart
                </button>
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