'use client'
import React, { useState, useEffect } from 'react'

const Product = ({ params }) => {
   
    const productID  = params;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(productID)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true); 
                setError(null);   

                const response = await fetch(`https://fakestoreapi.com/products/${productID}`);

                if (!response.ok) {
                   
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProduct(data); 
            } catch (err) {
                
                console.error("Failed to fetch product:", err);
                setError("Failed to load product details. Please try again later.");
            } finally {
                setLoading(false); 
            }
        };

        if (productID) { 
            fetchProduct();
        }
    }, [productID]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
                <p className="ml-4 text-xl text-gray-700">Loading product details...</p>
            </div>
        );
    }

    // Render error state if an error occurred during fetching
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-red-50 text-red-700 text-xl font-medium">
                <p>{error}</p>
            </div>
        );
    }

    if (!product || Object.keys(product).length === 0) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50 text-gray-600 text-2xl font-semibold">
                <p>Product not found.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-16 px-4 py-8 bg-white shadow-xl rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Product Image Section */}
            <div className="lg:w-1/2 flex justify-center items-center p-6 bg-gray-100 rounded-lg shadow-inner">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-96 object-contain rounded-md shadow-md"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Unavailable"; }}
                />
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2 p-6">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {product.title}
                </h1>
                <p className="text-2xl font-bold text-cyan-700 mb-6">${product.price.toFixed(2)}</p>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Category</h2>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full capitalize">
                        {product.category}
                    </span>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Rating</h2>
                    <div className="flex items-center text-gray-700">
                        <span className="text-yellow-500 text-2xl mr-1">★</span>
                        <span className="text-lg font-medium">{product.rating?.rate}</span>
                        <span className="text-gray-500 text-sm ml-1">({product.rating?.count} reviews)</span>
                    </div>
                </div>

                <button className="w-full lg:w-auto bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
