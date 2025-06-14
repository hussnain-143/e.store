'use client'
import {  useDispatch } from "react-redux";
import { addItemToCart } from "@/store/slices/cartSlice"; 
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BestSelling =  () => {
    const dispatch = useDispatch();

        const [bestSellingProducts, setbestSellingProducts] = useState([]);
    
        useEffect(() => {
            const fetchBestSelling = async () => {
                try {
                    const response = await  fetch("https://fakestoreapi.com/products?limit=7");
                    const data = await response.json();
                    setbestSellingProducts(data);
                } catch (error) {
                    console.error("Failed to fetch featured products:", error);
                }
            };
    
            fetchBestSelling();
        }, []);

    return (
        <div >
            <section className="container mx-auto my-16 px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    <span className="italic text-cyan-600"> Best Selling </span>Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellingProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <Link href={`/product/${product.id}`}>

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain p-4"
                                />

                            </Link>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    <Link href={`/product/${product.id}`} className="hover:text-cyan-600 transition-colors duration-200">
                                        {product.title}

                                    </Link>
                                </h3>
                                <p className="text-gray-900 font-bold text-lg">${product.price}</p>
                                <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-colors duration-200"
                                 onClick={() => dispatch(addItemToCart(product))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/product"
                        className="inline-block px-8 py-3 border border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300">
                        View All Products

                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BestSelling;
